import { NextPage } from "next"
import Link from 'next/link'

import UseHome from 'components/UseHome'

const articleList = [
  { name: 'React-Grid-Layout(译文) 中文文档', url: 'https://juejin.cn/post/6955407177624322055' },
  { name: 'umi 改less JS stackrace', url: 'https://juejin.cn/post/6937909648561438734' },
  { name: '前端项目组图片管理', url: 'https://juejin.cn/post/6909337230200799239' },
  { name: '浅谈图片上传及压缩文件', url: 'https://juejin.cn/post/6908534056036761607' },
  { name: 'flutter 签名保存本地', url: 'https://juejin.cn/post/6901494361066848270' },
]
type Props = {
  pathUrl: string;
}
const Home: NextPage<Props> = (props) => {
  const { pathUrl } = props
  console.log('pathUrl+++', pathUrl)
  const content = () => (
    <>
      <div>
        <div className="intro">
          <div className="avatar">
            <img style={{ width: '390px' }} src="/logo.png" alt="" />
          </div>
          <h3> 天雨大不润无根之草,佛法宽只度有缘之人</h3>
        </div>
        <article className="posts">
          <header className="post-title">我的经历</header>
          <div className="post-content">
            <p>2017年毕业于滁州学院, 先后在上海证卷交易所、东方头条担任前端工程师。 现在在南京旻投电力科学院担任高级前端。</p>
            <p><Link href="/me/resume"><a>查看详情</a></Link> </p>
          </div>
        </article>
        <article className="posts">
          <header className="post-title">我的文章</header>
          <div className="post-content">
            <ul>
              {articleList.map(item => (
                <li key={item.url}><Link href={item.url} ><a target="_blank">{item.name}</a></Link></li>
              ))}
            </ul>
          </div>
          <p><Link href="/"><a>查看详情</a></Link> </p>
        </article>
      </div>
      <style jsx>{`
        .posts {
          margin-bottom: 4em;
          border-bottom: 1px dashed #ddd;
        }

        .posts .post-title {
          font-size: 2em;
          line-height: 1.5em;
          font-weight: bold;
        }

        .posts .post-content {
          margin: .5em 0;
        }

        .post-content li {
          line-height: 2em;
        }

        .posts p {
          font-size: 1em;
          margin: .5em 0;
          line-height: 2em;
        }

        .avatar img {
          cursor: pointer;
          position: relative;
          transition: all .5s;
        }

        .avatar img :hover {
          transform: translateY(-0.75em);
        }

        .intro {
          text-align: center;
          transform: translateY(0);
          margin: 2em 0 5em;
        }

        .intro h3 {
          font-size: 1em;
          font-weight: 400;
          padding: 5px;
          margin: 0;
        }   
      `}</style>
    </>
  )
  return (
    <>
      <UseHome pathUrl={pathUrl}>
        {content()}
      </UseHome>
    </>

  )
}
export default Home

export async function getServerSideProps(context) {
  console.log('111++++', context.req.url)
  return {
    props: {
      pathUrl: context.req.url,
    }
  }
}