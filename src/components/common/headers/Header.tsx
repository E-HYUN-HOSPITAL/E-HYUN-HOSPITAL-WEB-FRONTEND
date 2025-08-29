import styles from './header.module.scss';

export const Header = () => {
  return (
    <div className={styles.container}>
      <img src='/header_logo.svg' alt='메인 로고' className={styles.logo} />
      <div className={styles.tabBox}>
        <a href='#' className={styles.link}>
          병원 소개
        </a>
        <a href='#' className={styles.link}>
          의료진 소개
        </a>
        <a href='#' className={styles.link}>
          장비 소개
        </a>
        <a href='#' className={styles.link}>
          병원 사진
        </a>
        <a href='#' className={styles.link}>
          오시는 길
        </a>
      </div>
    </div>
  );
};
