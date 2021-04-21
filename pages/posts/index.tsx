import axios from "axios"
import { usePosts } from "hocks/usePosts"
import { useEffect, useState } from "react"
type Posts = {
  arttitle: String;
  content: String;
  date: String;
  title: String;
}

const postsIndex = () => {
  const {isLodong, posts} = usePosts()

  return (
    <div style={{ padding: '20px 40px' }}>
      <p>所有文章</p>
      {isLodong ? <div>等待响应</div> : <div>
        {posts.map(item => <div key={item.title}>{item.title}</div>)}</div>}

    </div>
  )
}
export default postsIndex