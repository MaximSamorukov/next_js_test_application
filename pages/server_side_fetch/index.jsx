import Link from 'next/link';
import s from './index.module.scss';
import Head from 'next/head';
import Menu from '../../components/menu';
import { fetchPosts } from '../../lib/posts';

export async function getServerSideProps(context) {

   const data = await fetchPosts();
   return {
      props: {
      data,
      },
      notFound: data?.notFound,
   };
 }
export default function FetchPage(props) {
   const { data } = props;
   return (
      <>
         <Head>
            <title>SSR fetch Page</title>
            <meta name="description" content="SSR fetch Page" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <header>
            <Menu />
         </header>
         <main className={s.main}>
            <div className={s.title}>The SSR fetch page</div>
            <div className={s.post_container}>
            {data?.map((item) => {
                  const link = "/server_side_fetch/:id".replace(':id', item.id);

                  return (
                     <Link key={item.id} href={link}>
                        <div className={s.post_item}>
                           <div className={s.post_item_header}>
                              <div className={s.post_item_header_id}>{item.id}</div>
                              <div className={s.post_item_header_title}>{item.title}</div>
                           </div>
                           <div className={s.post_item_body}>
                              {item.body}
                           </div>
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