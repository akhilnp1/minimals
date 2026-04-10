import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import styles from '../home/layout.module.css';

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.root}>
      <Sidebar />
      <div className={styles.main}>
        <Topbar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
