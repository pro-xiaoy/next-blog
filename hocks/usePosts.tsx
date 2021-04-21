import { useEffect, useState } from "react"
import axios from "axios"
type Posts = {
  arttitle: String;
  content: String;
  date: String;
  title: String;
}
export const usePosts = () => {
  const [isLodong, setIsloading] = useState(false)
  const [posts, setPosts] = useState<Posts[]>([])
  useEffect(() => {
    setIsloading(true)
    axios.get('/api/v1/posts').then(res => {
      setPosts(res.data)
      setIsloading(false)
    }, () => {
      setIsloading(false)
    })
  }, [])

  return {
    isLodong,
    setIsloading,
    posts,
    setPosts,
  }
}