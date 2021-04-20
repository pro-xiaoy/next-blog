import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import png from 'assets/images/1.png'

console.log('png+++', png)

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome <Link href="/posts/first"> 去第一个页面</Link>
      </h1>

      <img src={png} alt=""/>

    </div>
  )
}
