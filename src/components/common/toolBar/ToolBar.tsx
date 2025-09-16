import { EtcInfoBox } from '../etcInfoBox/EtcInfoBox';
import { GoKakaoBtn } from '../goKakaoBtn/GoKakaoBtn';
import { GoTopScreenBtn } from '../goTopScreenBtn/GoTopScreenBtn';
import styles from './toolBar.module.scss';

export const ToolBar = () => {
  return (
    <div className={styles.container}>
      <GoKakaoBtn onClick={() => alert('카카오톡 상담은 준비 중이에요!')} />
      <EtcInfoBox />
      <GoTopScreenBtn />
    </div>
  );
};
