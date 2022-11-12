import Link from 'next/link';
import s from './index.module.scss';
import Menu from '../../components/menu';
import Head from 'next/head';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
   const data = await getSortedPostsData();
   return {
     props: {
      data,
     },
   };
 }

export default function MarkdownPage({ data }) {
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
            <div className={s.post_container}>
               {data?.map((item) => {
                  const link = "/markdown/:id".replace(':id', item.id);
                  return (
                     <Link key={item.id} href={link}>
                        <div className={s.post_item}>
                           <div className={s.post_item_id}>{item.id}</div>
                           <div className={s.post_item_title}>{item.title}</div>
                           <div className={s.post_item_date}>{item.date}</div>
                        </div>
                     </Link>
                  );
               })}
            </div>
            <Link href="/">
               <p className={s.link}>
                  Back to the Main page
               </p>
            </Link>
         </main>
      </>
   )
}