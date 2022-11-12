import Link from "next/link"
import menuStyle from './menu.module.scss';

export default function Menu() {
   return (
      <div className={menuStyle.container}>
         <ul>
            <li>
               <Link href={"/markdown"}>
                  SSR static .md
               </Link>
            </li>
            <li>
               <Link href={"/fetch"}>
                  SSR static fetch
               </Link>
            </li>
            <li>
               <Link href={"/server_side_fetch"}>
                  SSR fetch
               </Link>
            </li>
            <li>
               <Link href={"/client_side_fetch"}>
                  CSR fetch
               </Link>
            </li>
         </ul>
      </div>
   )
}