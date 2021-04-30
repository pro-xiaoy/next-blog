import { useCallback, useState } from "react"
import axios from 'axios'
import { withSession } from 'lib/withSession';

const SignUp = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  })
  const [errors, setErrors] = useState({
    username: '',
    password: '',
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
      <h2>登录</h2>
      <div>
        <form onSubmit={submitForm}>
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
        </form>
      </div>

    </div>
  )
}

export default SignUp

export const getServerSideProps = withSession(async (context) => {
  console.log('context+++++', context)
}) 