import Link from 'next/link'
import styles from '../styles/Home.module.css'
import png from 'assets/images/1.png'
import { GetServerSideProps } from 'next'
import { getDatabaseConnection } from '../lib/getDatabaseConnection'
import { Post } from 'src/entity/Post'

export default function Home(props) {
  const { posts } = props
  return (
    <div style={{ padding: '20px' }}>
      <h1>博文文章</h1>
      {posts.map(item => (
        <div>
          <Link key={item.id} href={`/posts/${item.id}`}>
            <a>
              {item.title}
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const connection = await getDatabaseConnection()
  const posts = await connection.manager.find(Post)
  return {
    props: {
      name: 'xiaoy',
      posts: JSON.parse(JSON.stringify(posts)),
    }
  }
}