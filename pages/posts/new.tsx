import { NextPage } from 'next'
import { useForm } from 'hocks/useForm'
import { divide } from 'lodash'
import axios from 'axios'

type Context = {
  params: {
    title: String;
  }
}
const postNew: NextPage = (props) => {
  const initFormData = { title: '', content: '' }
  const fileds = [
    {label: '标题', type: 'text', key: 'title',},
    {label: '内容', type: 'textarea', key: 'content',},
  ]
  const { form } = useForm({
    initFormData,
    fileds,
    buttons: <button type="submit">提交</button>,
    submit: {
      request: formData => axios.post(`/api/v1/posts`, formData),
      message: '提交成功'
    }
  })
  return (
    <div>
      <h2>写文章</h2>
      {form}
    </div>
  )
}
export default postNew
