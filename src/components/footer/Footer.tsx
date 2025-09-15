import { ImageBtn } from '../common/imageBtn/ImageBtn';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconBar}>
        <img src='public/header_logo.svg' alt='로고' />
      </div>
      <div className={styles.underline}></div>
      <div className={styles.infoBox}>
        <div className={styles.nameAndIcons}>
          <div className={styles.hospitalName}>이현한방병원</div>
          <div className={styles.icons}>
            <ImageBtn
              url='public/blog_icon.svg'
              onClick={() => console.log('블로그 연결')}
            />
            <ImageBtn
              url='public/map_icon.svg'
              onClick={() => console.log('지도 연결')}
            />
            <ImageBtn
              url='public/insta_icon.svg'
              onClick={() => console.log('인스타그램 연결')}
            />
          </div>
        </div>
        <div className={styles.address}>
          경상북도 구미시 산동읍 신당1로 3길 3, 6F 7F
        </div>
        <div className={styles.otherInfo}>
          대표 : 이연진 | 사업자등록증 : 686-26-02248
        </div>
        <div className={styles.otherInfo}>T. 054-</div>
      </div>
    </div>
  );
};
