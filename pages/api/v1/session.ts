import md5 from "md5";
import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import { SignIn } from "src/model/SignIn";
import { getDatabaseConnection } from 'lib/getDatabaseConnection'
import { withSession } from 'lib/withSession'

const Session: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password } = req.body
  const connection = await getDatabaseConnection();// 第一次链接能不能用 get
  const signin = new SignIn()

  signin.username = username
  signin.password = password

  await signin.validate()
  const haserror = signin.hasErrors()

  if (haserror) {
    res.statusCode = 422
    res.write(JSON.stringify(signin.errors))
  } else {
    req.session.set('currentUser', signin.user);
    await req.session.save()
    res.statusCode = 200;
    res.write(JSON.stringify({ status: '登陆成功', code: 0 }));
  }
  res.end()
}
export default withSession(Session) 