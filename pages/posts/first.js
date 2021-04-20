import Link from 'next/link'
import Head from 'next/head'


export default function First() {
  return (
    <div>
      {/* <Head>
        <title>第一篇文章</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <h2>first page</h2>
      <hr />
      <Link href="/"> 回到首页</Link>
    </div>
  )
}