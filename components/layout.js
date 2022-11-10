import s from './layout.module.scss';

export default function Layout({ children }) {
   return <div className={s.container}>{children}</div>;
 }