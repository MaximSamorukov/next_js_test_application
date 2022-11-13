import Link from 'next/link';
import s from './index.module.scss';
import Head from 'next/head';
import Menu from '../../components/menu';
import { getSortedPostsData, getStaticPathsFn } from '../../lib/posts';

export async function getStaticProps({ params }) {

   const data = await getSortedPostsData(params?.id);
   return {
     props: {
        data,
     },
   };
}

export async function getStaticPaths(props) {
   const pathsNotRevised = await getStaticPathsFn();
   const paths = pathsNotRevised.map(({ id }) => ({ params: { id }}))

   return {
      paths,
      fallback: true,
   };
}

export default function PostPage({ data }, other) {

   return (
      <>
         <Head>
            <title>Static Generation Post Page</title>
            <meta name="description" content="Static Generation Post Page" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <header>
            <Menu />
         </header>
         <main className={s.main_post}>
            <div className={s.title}>
               <div className={s.title}>{data?.meta?.title}</div>
            </div>
            <div className={s.post}>
               <div dangerouslySetInnerHTML={{__html: data?.content}} />
            </div>
            <Link href="/markdown">
               <p className={s.link}>
                  Back to the List page
               </p>
            </Link>
         </main>
      </>
   )
}