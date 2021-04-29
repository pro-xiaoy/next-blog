import { useCallback, useState } from "react"
import axios from 'axios'
const SignUp = () => {

  const [user, setUser] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
  })
  const [errors, setErrors] = useState({
    username: '',
    password: '',
    passwordConfirm: ''
  })

  const submitForm = useCallback((e) => {
    e.preventDefault()
    axios.post('/api/v1/signup', user).then((res) => {
      // console.log('ress+++++')
    }, error => {
      console.dir('err++++', error)
      console.log('err+r++++', error.response)
      setErrors(error.response.data)
    })
  }, [user])

  return (
    <div style={{ padding: '40px' }}>
      <h2>这是一个注册页面</h2>
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

          <div>
            <label>确定密码:</label>
            <input type="text" value={user.passwordConfirm} onChange={e => setUser({
              ...user,
              passwordConfirm: e.target.value
            })} />
          </div>
          {errors.passwordConfirm && <div style={{ color: 'red' }}>{errors.passwordConfirm}</div>}
          <button type="submit">确定</button>
        </form>
      </div>

    </div>
  )
}

export default SignUp