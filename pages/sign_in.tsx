import { useCallback, useState } from "react"
import axios from 'axios'
import { withSession } from 'lib/withSession';
import { GetServerSideProps } from 'next'
import { useForm } from 'hocks/useForm'

const SignUp = (props) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  })
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  })

  const {form} = useForm({
    initFormData: {username: '', password: ''},
    fileds: [
      {label: '用户名', type: 'text', key: 'username',},
      {label: '密码', type: 'password', key: 'password',}
    ],
    buttons: <button type="submit">登录</button>,
    submit:  {
      request: formData => axios.post(`/api/v1/session`, formData),
      message: '登录成功'
    }    
  })

  const submitForm = useCallback((e) => {
    e.preventDefault()
    axios.post('/api/v1/session', user).then((res) => {
      alert('登录成功')
    }, error => {
      setErrors(error.response.data)
    })
  }, [user])

  return (
    <div style={{ padding: '40px' }}>
      {props.user && <>
        <p>你好{props.user.name}</p>
      </>}
      <h2>登录</h2>
      <div>
        {form}
        {/* <form onSubmit={submitForm}>
          <div>
            <label>用户名:</label>
            <input type="text" value={user.username} onChange={e => setUser({
              ...user,
              username: e.target.value
            })} />
          </div>
          {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
          <div>
            <label>密码:</label>
            <input type="text" value={user.password} onChange={e => setUser({
              ...user,
              password: e.target.value
            })} />
          </div>
          {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
          <button type="submit">登录</button>
        </form> */}
      </div>

    </div>
  )
}

export default SignUp
  
// @ts-ignore
export const getServerSideProps: GetServerSideProps = withSession(async (context) => {
  // @ts-ignore
  const user = context.req.session.get('currentUser')
  console.log('user+++', user)
  return {
    props: {
      user: JSON.parse(JSON.stringify(user || ''))
    }
  };
}) 