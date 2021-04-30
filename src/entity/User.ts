import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, OneToMany, BeforeInsert } from "typeorm";
import { Post } from './Post'
import { Comment } from './Comment';
import { getDatabaseConnection } from 'lib/getDatabaseConnection'
import md5 from "md5";
import _ from 'lodash'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('varchar')
  username: string;
  @Column('varchar')
  passwordDigest: string;
  @CreateDateColumn()
  createdAt: Date;
  @CreateDateColumn()
  updatedAt: Date;
  @OneToMany(type => Post, post => post.author)
  posts: Post[]
  @OneToMany(type => Comment, comment => comment.user)
  comments: Comment[]

  password: string;
  passwordConfirm: string;
  errors = {
    username: '',
    password: '',
    passwordConfirm: ''
  }

  async validate() {
    if (!this.username.trim()) {
      this.errors.username = '用户名不能为空'
    }
    if (!/[a-zA-Z0-9]/.test(this.username.trim())) {
      this.errors.username = '格式不合法请填写a-z0-9'
    }
    if (this.username.trim().length > 12) {
      this.errors.username = '用户名不宜最大长度12个字符'
    }
    if (!this.password.trim()) {
      this.errors.password = '密码不能为空'
    }
    if (this.password !== this.passwordConfirm) {
      this.errors.passwordConfirm = '密码不一致'
    }


    // const connection = await getDatabaseConnection()
    // console.log('user+++++', User)
    // const found = await connection.manager.find(User, { username: this.username })
    const found = await (await getDatabaseConnection()).manager.find(
      User, { username: this.username });
    if (found.length > 0) {
      this.errors.username = '用户名重复'
    }
  }

  hasErrors = () => {
    return !!Object.values(this.errors).find(item => item)
  }

  @BeforeInsert()
  generatePasswordDigest() {
    this.passwordDigest = md5(this.password)
  }
  toJSON() {
    return _.omit(this, ['password', 'passwordConfirmation', 'passwordDigest', 'errors']);
  }
}
