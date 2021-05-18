import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div className="Fang">
      
      <Head>
        <title>我的博客</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://at.alicdn.com/t/font_2553763_p03ez1fwze.css?spm=a313x.7781069.1998910419.78&file=font_2553763_p03ez1fwze.css"/>
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
