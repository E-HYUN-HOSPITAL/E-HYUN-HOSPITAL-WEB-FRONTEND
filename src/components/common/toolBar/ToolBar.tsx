import { EtcInfoBox } from '../etcInfoBox/EtcInfoBox';
import { GoKakaoBtn } from '../goKakaoBtn/GoKakaoBtn';
import { GoTopScreenBtn } from '../goTopScreenBtn/GoTopScreenBtn';
import styles from './toolBar.module.scss';

export const ToolBar = () => {
  return (
    <div className={styles.container}>
      <GoKakaoBtn onClick={() => console.log('카카오톡 상담 연결')} />
      <EtcInfoBox />
      <GoTopScreenBtn />
      <div> dd</div>
    </div>
  );
};
