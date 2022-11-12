import Link from 'next/link';
import s from './index.module.scss';
import Head from 'next/head';
import Menu from '../../components/menu';
import useSWR from 'swr';

export default function FetchPage() {
   const fetcher = (...args) => fetch(...args).then(res => res.json())
   const url = 'https://jsonplaceholder.typicode.com/posts';
   const { data, error } = useSWR(url, fetcher);

   return (
      <>
         <Head>
            <title>CSR fetch Page</title>
            <meta name="description" content="CSR fetch Page" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <header>
            <Menu />
         </header>
         <main className={s.main}>
            <div className={s.title}>The CSR fetch page</div>
            <div className={s.post_container}>
            {data?.map((item) => {
                  return (
                     <div key={item.id} className={s.post_item}>
                        <div className={s.post_item_header}>
                           <div className={s.post_item_header_id}>{item.id}</div>
                           <div className={s.post_item_header_title}>{item.title}</div>
                        </div>
                        <div className={s.post_item_body}>
                           {item.body}
                        </div>
                     </div>
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