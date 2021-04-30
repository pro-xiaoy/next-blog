import { User } from "src/entity/User"
import { getDatabaseConnection } from '../../lib/getDatabaseConnection';
import md5 from 'md5'

export class SignIn {
  username: string
  password: string
  user: User

  errors = {
    username: '',
    password: ''
  }
  validate = async () => {
    if (this.username.trim() === '') {
      this.errors.username = '请填写用户名';
    }
    const connection = await getDatabaseConnection()
    const user = await connection.manager.findOne(User, { where: { username: this.username } });
    this.user = user
    if (user) {
      if (user.passwordDigest !== md5(this.password)) {
        this.errors.password = '密码与用户名不匹配';
      }
    } else {
      this.errors.username = '用户名不存在';
    }
    // const user = await connection.manager.findOne(User, { where: { username: this.username } });
    // this.user = user;
    // if (user) {
    //   if (user.passwordDigest !== md5(this.password)) {
    //     this.errors.password.push('密码与用户名不匹配');
    //   }
    // } else {
    //   this.errors.username.push('用户名不存在');
    // }
  }
  hasErrors = () => {
    return !!Object.values(this.errors).find(item => item)
  }
}
