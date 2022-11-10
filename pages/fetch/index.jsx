import Link from 'next/link';
import s from './index.module.scss';
import Head from 'next/head';
import Menu from '../../components/menu';

export default function FetchPage() {
   return (
      <>
         <Head>
            <title>Static Generation Page</title>
            <meta name="description" content="Static Generation Page" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <header>
            <Menu />
         </header>
         <main className={s.main}>
            <div className={s.title}>The fetch page</div>
            <Link href="/">
               <p className={s.link}>
                  Back to the Main page
               </p>
            </Link>
         </main>
      </>
   )
}