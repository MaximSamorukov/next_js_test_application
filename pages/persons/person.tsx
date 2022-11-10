import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function Person() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>{"Person's page"}</title>
          <meta name="description" content="Person's page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Something about person!
          </h1>

          <Link href="/" className="foo">
            <p className={styles.description}>
              Back to the Main page
            </p>
          </Link>

        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </Layout>
  )
}
