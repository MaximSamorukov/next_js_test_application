import Link from 'next/link';
import s from './index.module.scss';
import Head from 'next/head';
import Menu from '../../components/menu';
import { getSortedPostsData } from '../../lib/posts';


export async function getStaticProps({ params }) {
   const data = await getSortedPostsData(params?.id);
   return {
     props: {
      data,
     },
   };
 }

 export async function getStaticPaths(props) {

   return {
      paths: [{
         params: {
            id: 'string',
         }
      }],
      fallback: true,
   };
 }

export default function PostPage({ data }, other) {
   console.log(data);
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
         <main>
            <div>Post id: {data?.id}</div>
            <Link href="/markdown">
               <p className={s.link}>
                  Back to the List page
               </p>
            </Link>
         </main>
      </>
   )
}