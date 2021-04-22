import { getPost } from 'lib/posts'
import { NextPage } from 'next'


const pageTitle: NextPage<{posts: Posts}> = (props) => {
  const { posts } = props
  return (
    <div>
      <h3>标题: {posts.title}</h3>
      <h4>时间: {posts.date}</h4>
      <article>
        {posts.content}
      </article>
    </div>
  )
}
export default pageTitle

export async function getStaticPaths() {
  return {
    paths: [
      { params: { title: 'first' } }
    ],
    fallback: false,
  }
}

export const getStaticProps = async () => {
  const posts = await getPost('first')
  return {
    props: {
      posts: posts,
    }
  }
}