
import { getPosts } from 'lib/posts'
import { NextPage } from 'next'
import Link from 'next/link'

type Props = {
  posts: Posts[]
}

const postsIndex: NextPage<Props> = (props) => {
  const { posts } = props
  return (
    <div style={{ padding: '20px 40px' }}>
      <p>所有文章</p>
      {posts.map(item => <div key={item.title}>
        <Link href={`/posts/${item.title}`}>
          <a>
            {item.title}
          </a>
        </Link>
      </div>)}
    </div>
  )
}


export const getStaticProps = async () => {
  const posts = await getPosts()
  return {
    props: {
      posts: posts,
    }
  }
}

export default postsIndex
