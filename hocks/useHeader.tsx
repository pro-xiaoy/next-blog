import Link from "next/link";

const navList = [
  { name: '搜索', href: '/search' },
  { name: '首页', href: '/' },
  { name: '文章', href: '/posts' },
  { name: '联系本人', href: '/me/contacts' },

]

export const useHeader = (options) => {
  const { pathUrl } = options
  const headpage = (
    <nav className="navbar">
      <div className="container">
        <div>
          <Link href="/">
            <a className="page_logo_text">
              XIAOY个人主站
            </a>
          </Link>

        </div>
        <div className="navbar-right">
          {navList.map(item => (
            <Link key={item.name} href={item.href}>
              <a className={pathUrl === item.href ? 'selectd' : ''}>{item.name}</a>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .page_logo_text  {
          background-image: linear-gradient(to right, red, orange, brown, green, brown, orange, red, orange, brown, green, brown, orange, red);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-background-size: 200% 100%;
          animation: bgp 8s infinite linear;
          font-family: fantasy;
        }
        @keyframes bgp {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: -100% 0;
          }
        }
        .navbar {
          padding: 1em 0;
          width: 100%;
        }
        .navbar .container {
          width: auto;
          max-width: 1200px;
          text-align: center;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .navbar-right>a {
          padding: 0 8px;
          color: #161209;
        }
        .navbar-right>a.selectd {
          font-weight: bold;
        }
      `}</style>

    </nav>
  )

  return {
    headpage
  }
}