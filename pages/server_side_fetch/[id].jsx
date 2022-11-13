import Link from 'next/link';
import s from './index.module.scss';
import Head from 'next/head';
import Menu from '../../components/menu';
import { fetchPosts } from '../../lib/posts';

export async function getServerSideProps(context) {
   const { params } = context;
   const data = await fetchPosts(params?.id);

   return {
     props: {
        data,
     },
     notFound: data?.notFound,
   };
}


export default function PostPage({ data }, other) {

   return (
      <>
         <Head>
            <title>Server Side Rendering Post Page</title>
            <meta name="description" content="Server Side Rendering Post Page" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <header>
            <Menu />
         </header>
         <main className={s.main_post}>
            <div className={s.title}>
               <div className={s.title}>{data?.title}</div>
            </div>
            <div className={s.post}>
               {data?.body}
            </div>
            <Link href="/server_side_fetch">
               <p className={s.link}>
                  Back to the List page
               </p>
            </Link>
         </main>
      </>
   )
}