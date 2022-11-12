import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link';
import Menu from '../components/menu';
import ust from '../styles/utils.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test Next.js App</title>
        <meta name="description" content="Test Next.js App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Menu />
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a> Hello, friends!
        </h1>
        <Link href="/persons/person" >
          <Image src='/images/cat.jpg' alt="cat" width={300} height={380} />
        </Link>


      </main>

      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  )
}
