import { NextPage } from "next"
import Link from 'next/link'
const Home: NextPage = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div>
            方阳阳个人主站
          </div>
          <div className="navbar-right">
            <Link href={''}><a>搜索</a></Link>
            <Link href={''}><a>首页</a></Link>
            <Link href={''}><a>文章</a></Link>
            <Link href={''}><a>联系本人</a></Link>
          </div>
        </div>
      </nav>
      <main>
        <div className="container">
          <div className="post-warp">
            <div className="intro">
              <div className="avatar">
                <img style={{ width: '400px' }} src="/logo.png" alt="" />
              </div>
              <h3>佛说有缘人再见</h3>
            </div>
            <article className="posts">
              <header>我的经历</header>
              <p>毕业于XXXXX00</p>
              <p>查看详情</p>
            </article>
            <article className="posts">
              <header>我的文章</header>
              <p>毕业于XXXXX00</p>
              <p>查看详情</p>
            </article>
          </div>
        </div>
      </main>
      <footer>
      <i className="iconfont icon-banquan"></i>

      </footer>
      <style jsx>{`
        .navbar{
          padding: 1em 0;
          width: 100%;
        } 
        .navbar .container {
          max-width: 1200px;
          width: auto;
          margin: 0 auto;
          display: flex;
          flex-wrap:wrap;
          justify-content: space-between;
        }
        .navbar-right > a {
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