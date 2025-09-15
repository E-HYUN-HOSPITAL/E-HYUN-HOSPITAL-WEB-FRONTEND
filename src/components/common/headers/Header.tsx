import styles from './header.module.scss';

type Props = {
  sectionRefs: {
    introduce: React.RefObject<HTMLDivElement>;
    doctor: React.RefObject<HTMLDivElement>;
    equipment: React.RefObject<HTMLDivElement>;
    hospital: React.RefObject<HTMLDivElement>;
    route: React.RefObject<HTMLDivElement>;
  };
};

export const Header = ({ sectionRefs }: Props) => {
  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      <img src='/header_logo.svg' alt='메인 로고' className={styles.logo} />
      <div className={styles.tabBox}>
        <a
          href='#'
          className={styles.link}
          onClick={() => handleScroll(sectionRefs.introduce)}
        >
          병원 소개
        </a>
        <a
          href='#'
          className={styles.link}
          onClick={() => handleScroll(sectionRefs.doctor)}
        >
          의료진 소개
        </a>
        <a
          href='#'
          className={styles.link}
          onClick={() => handleScroll(sectionRefs.equipment)}
        >
          장비 소개
        </a>
        <a
          href='#'
          className={styles.link}
          onClick={() => handleScroll(sectionRefs.hospital)}
        >
          병원 사진
        </a>
        <a
          href='#'
          className={styles.link}
          onClick={() => handleScroll(sectionRefs.route)}
        >
          오시는 길
        </a>
      </div>
    </div>
  );
};
