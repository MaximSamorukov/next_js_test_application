import Link from 'next/link';
import s from './index.module.scss';
import Menu from '../../components/menu';
import Head from 'next/head';

export async function getStaticProps(props) {
   console.log(props);
   return {
     props: {
      data: 'props',
     },
   };
 }

export default function MarkdownPage(props) {
   console.log(props);
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
            <div className={s.title}>The markdown page</div>
            <Link href="/">
               <p className={s.link}>
                  Back to the Main page
               </p>
            </Link>
         </main>
      </>
   )
}