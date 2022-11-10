import Link from "next/link"
import menuStyle from './menu.module.scss';

export default function Menu() {
   return (
      <div className={menuStyle.container}>
         <ul>
            <li>
               <Link href={"/markdown"}>
                  Static gen from .md
               </Link>
            </li>
            <li>
               <Link href={"/fetch"}>
                  Static gen from fetch
               </Link>
            </li>
         </ul>
      </div>
   )
}