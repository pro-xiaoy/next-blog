import Link from "next/link";

const navList = [
  { name: '搜索', href: '/search' },
  { name: '首页', href: '/' },
  { name: '文章', href: '/posts' },
  { name: '联系本人', href: '/contact' },

]

export const useHeader = (options) => {
  const { pathUrl } = options
  const headpage = (
    <nav className="navbar">
      <div className="container">
        <div>
          方阳阳个人主站
          </div>
        <div className="navbar-right">
          {navList.map(item => (
            <Link key={item.name} href={item.href}>
              <a className={pathUrl === item.href ? 'selectd' : ''}>{item.name}</a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )

  return {
    headpage
  }
}