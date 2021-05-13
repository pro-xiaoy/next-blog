import { NextPage } from 'next'
import Link from 'next/link'
import axios from 'axios'
import { getDatabaseConnection } from 'lib/getDatabaseConnection'
import { Post } from 'src/entity/Post'
import { getUrlParam } from 'utils/index'
import { usePager } from 'hocks/usePager'

type Props = {
  posts: Post[];
  count: number;
  perPage: number;
  page: number;
  totalPage: number;
}
const postNew: NextPage<Props> = (props) => {
  const { posts, count, perPage, page, totalPage } = props
  console.log('totalPage+++', totalPage)
  const { pager } = usePager({ page, totalPage })

  return (
    <div>
      <h2>文章列表</h2>
      <div style={{ padding: '20px' }}>
        {posts.map(item => (
          <div key={item.id}>
            <Link key={item.id} href={`/posts/${item.id}`}>
              <a>
                {item.title}
              </a>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <h1>文章列表({count}) 每页{perPage}</h1>
        {pager}
      </div>
    </div>
  )
}
export default postNew

export const getServerSideProps = async (context) => {
  console.log('context.req.url+++', context.req.url)
  const page = parseInt(getUrlParam('page', context.req.url), 10) || 1
  const perPage = 3; // 每页展示多少

  console.log('page+++', page)
  const connection = await getDatabaseConnection()
  const [posts, count] = await connection.manager.findAndCount(Post, {
    skip: (page - 1) * perPage,
    take: perPage,
  })
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
      count: count,
      perPage,
      page,
      totalPage: Math.ceil(count / perPage)
    }
  }
}