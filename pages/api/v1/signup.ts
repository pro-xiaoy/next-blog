import md5 from "md5";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "src/entity/User";
import { getDatabaseConnection } from 'lib/getDatabaseConnection'

const SignUp = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password, passwordConfirm } = req.body

  const connection = await getDatabaseConnection();// 第一次链接能不能用 get

  const user = new User()

  user.username = username
  user.password = password
  user.passwordConfirm = passwordConfirm

  await user.validate()
  const haserror = user.hasErrors()
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (haserror) {
    res.statusCode = 422
    res.write(JSON.stringify(user.errors))
  } else {
    await connection.manager.save(user);
    res.statusCode = 200;
    res.write(JSON.stringify(user));
  }
  res.statusCode = 200
  res.end()
}
export default SignUp