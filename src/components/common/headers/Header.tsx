import React from 'react';
import styles from './header.module.scss';

type Props = {
  sectionRefs: {
    introduce: React.RefObject<HTMLDivElement | null>;
    doctor: React.RefObject<HTMLDivElement | null>;
    equipment: React.RefObject<HTMLDivElement | null>;
    hospital: React.RefObject<HTMLDivElement | null>;
    route: React.RefObject<HTMLDivElement | null>;
  };
  activeSection: string;
  handleScroll: (ref: React.RefObject<HTMLDivElement | null>) => void;
};

export const Header = ({ sectionRefs, activeSection, handleScroll }: Props) => {
  return (
    <div className={styles.container}>
      <img src='/header_logo.svg' alt='메인 로고' className={styles.logo} />
      <div className={styles.tabBox}>
        <a
          href='#'
          className={`${styles.link} ${
            activeSection === 'introduce' ? styles.active : ''
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleScroll(sectionRefs.introduce);
          }}
        >
          병원 소개
        </a>
        <a
          href='#'
          className={`${styles.link} ${
            activeSection === 'doctor' ? styles.active : ''
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleScroll(sectionRefs.doctor);
          }}
        >
          의료진 소개
        </a>
        <a
          href='#'
          className={`${styles.link} ${
            activeSection === 'equipment' ? styles.active : ''
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleScroll(sectionRefs.equipment);
          }}
        >
          장비 소개
        </a>
        <a
          href='#'
          className={`${styles.link} ${
            activeSection === 'hospital' ? styles.active : ''
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleScroll(sectionRefs.hospital);
          }}
        >
          병원 사진
        </a>
        <a
          href='#'
          className={`${styles.link} ${
            activeSection === 'route' ? styles.active : ''
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleScroll(sectionRefs.route);
          }}
        >
          오시는 길
        </a>
      </div>
    </div>
  );
};
