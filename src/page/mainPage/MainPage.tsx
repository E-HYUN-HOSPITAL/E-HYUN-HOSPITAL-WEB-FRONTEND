import { Header } from '../../components/common/headers/Header';
import styles from './mainpage.module.scss';

function MainPage() {
  return (
    <div className={styles.container}>
      <Header />
      <div>hi This is Main Page</div>
    </div>
  );
}

export default MainPage;
