import Slider from 'react-slick';
import { forwardRef } from 'react';
import styles from './hospitalPicture.module.scss';

const Images: string[] = [
  '/hospital-interior/2인실 2,3-2.png',
  '/hospital-interior/7층 (1).png',
  '/hospital-interior/7층 (2).png',
  '/hospital-interior/7층 (3).png',
  '/hospital-interior/7층 (4).png',
  '/hospital-interior/로비 (1).png',
  '/hospital-interior/로비 (2).png',
  '/hospital-interior/로비 (3).png',
  '/hospital-interior/로비 (4).png',
  '/hospital-interior/로비 (5).png',
  '/hospital-interior/물리치료실.png',
  '/hospital-interior/복도.png',
  '/hospital-interior/상담실 (1).png',
  '/hospital-interior/상담실 (2).png',
  '/hospital-interior/상담실 (3).png',
  '/hospital-interior/서비스테이블.png',
  '/hospital-interior/운동치료실.png',
  '/hospital-interior/파우더룸 (1).png',
  '/hospital-interior/파우더룸 (2).png',
  '/hospital-interior/파우더룸 (3).png',
  '/hospital-interior/파우더룸 (4).png',
  '/hospital-interior/피부치료센터 (1).png',
  '/hospital-interior/피부치료센터 (2).png',
  '/hospital-interior/피부치료센터 (3).png',
  '/hospital-interior/피부치료센터 (4).png',
  '/hospital-interior/피부치료센터 (5).png',
  '/hospital-interior/피부치료센터 (6).png',
];

export const HospitalPicturePage = forwardRef<HTMLDivElement, object>(
  (_, ref) => {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <div className={styles.container} ref={ref}>
        <div className={styles.content}>
          <div className={styles.textArea}>
            <div className={styles.titleBox}>
              <div className={styles.titleText}>E-HYUN HOSPITAL</div>
              <div className={styles.titleText}>INTERIOR</div>
            </div>
            <div className={styles.subTitle}>
              환자를 위한 편안하고 세련된 인테리어
            </div>
            <div className={styles.descBox}>
              <div className={styles.description}>
                모던한 인테리어는 병원을 방문하는 순간부터 치유의 경험을
                시작하게 합니다.
              </div>
              <div className={styles.description}>
                환자의 마음까지 보살피는 공간 디자인으로, 의료 서비스 이상의
                가치를 제공합니다.
              </div>
            </div>
          </div>
          <Slider {...settings} className={styles.slider}>
            {Images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`병원 내부 ${index + 1}`}
                  className={styles.sliderImage}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
);
