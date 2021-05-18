import { NextPage } from "next"
import Link from 'next/link'
const articleList = [
  { name: 'React-Grid-Layout(译文) 中文文档', url: 'https://juejin.cn/post/6955407177624322055' },
  { name: 'umi 改less JS stackrace', url: 'https://juejin.cn/post/6937909648561438734' },
  { name: '前端项目组图片管理', url: 'https://juejin.cn/post/6909337230200799239' },
  { name: '浅谈图片上传及压缩文件', url: 'https://juejin.cn/post/6908534056036761607' },
  { name: 'flutter 签名保存本地', url: 'https://juejin.cn/post/6901494361066848270' },

]
const Home: NextPage = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div>
            方阳阳个人主站
          </div>
          <div className="navbar-right">
            <Link href={'/'}><a>搜索</a></Link>
            <Link href={'/'}><a>首页</a></Link>
            <Link href={'/'}><a>文章</a></Link>
            <Link href={'/'}><a>联系本人</a></Link>
          </div>
        </div>
      </nav>
      <main>
        <div className="container">
          <div className="post-warp">
            <div className="intro">
              <div className="avatar">
                <img style={{ width: '390px' }} src="/logo.png" alt="" />
              </div>
              <h3> 天雨大不润无根之草，佛法宽只度有缘之人</h3>
            </div>
            <article className="posts">
              <header className="post-title">我的经历</header>
              <div className="post-content">
                <p>2017年毕业于滁州学院,先后在上海证卷交易所、东方头条担任前端工程师。 现在在南京旻投电力科学院担任高级前端。</p>
                <p><Link href="/"><a>查看详情</a></Link> </p>
              </div>
            </article>
            <article className="posts">
              <header className="post-title">我的文章</header>
              <div className="post-content">
                <ul>
                  {articleList.map(item => (
                    <li><Link href={item.url} ><a target="_blank">{item.name}</a></Link></li>
                  ))}
                </ul>
              </div>
              <p><Link href="/"><a>查看详情</a></Link> </p>
            </article>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="copyright">
          <div className="simpleintro">
            <i className="iconfont icon-banquan"></i>
            <span>2013-2021</span>
            <i className="iconfont icon-love1"></i>
            <span>方阳阳</span>
          </div>
          <div>
            <span>Powered by Hugo & LeaveIt</span>
          </div>
        </div>
      </footer>
      <style jsx>{`
        .footer {
          width: 100%;
          text-align: center;
          line-height: 2rem;
          padding-top: 2em;
          color: #a9a9b3;
        }
        .copyright {
          font-size: 14px;
        }

        .simpleintro {
          line-height: 1;
        }

        .simpleintro i {
          font-size: 14px;
        }

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

        .navbar {
          padding: 1em 0;
          width: 100%;
        }

        .navbar .container {
          max-width: 1200px;
          width: auto;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .navbar-right>a {
          padding: 0 8px;
          color: #161209;
        }

        .post-warp {
          width: auto;
          max-width: 780px;
          margin: 0 auto;
        }
      `}</style>
    </>
  )
}
export default Home