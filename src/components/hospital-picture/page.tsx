import Slider from 'react-slick';
import { forwardRef } from 'react';
import styles from './hospitalPicture.module.scss';

const Images: string[] = [
  '/hospital-interior/Two-Person-Room-2-3-2.webp',
  '/hospital-interior/7th-Floor-(1).webp',
  '/hospital-interior/7th-Floor-(2).webp',
  '/hospital-interior/7th-Floor-(3).webp',
  '/hospital-interior/7th-Floor-(4).webp',
  '/hospital-interior/Lobby-(1).webp',
  '/hospital-interior/Lobby-(2).webp',
  '/hospital-interior/Lobby-(3).webp',
  '/hospital-interior/Lobby-(4).webp',
  '/hospital-interior/Lobby-(5).webp',
  '/hospital-interior/Physical-Therapy-Room.webp',
  '/hospital-interior/Hallway.webp',
  '/hospital-interior/Consultation-Room-(1).webp',
  '/hospital-interior/Consultation-Room-(2).webp',
  '/hospital-interior/Consultation-Room-(3).webp',
  '/hospital-interior/Service-Table.webp',
  '/hospital-interior/Exercise-Therapy-Room.webp',
  '/hospital-interior/Powder-Room-(1).webp',
  '/hospital-interior/Powder-Room-(2).webp',
  '/hospital-interior/Powder-Room-(3).webp',
  '/hospital-interior/Powder-Room-(4).webp',
  '/hospital-interior/Skin-Treatment-Center-(1).webp',
  '/hospital-interior/Skin-Treatment-Center-(2).webp',
  '/hospital-interior/Skin-Treatment-Center-(3).webp',
  '/hospital-interior/Skin-Treatment-Center-(4).webp',
  '/hospital-interior/Skin-Treatment-Center-(5).webp',
  '/hospital-interior/Skin-Treatment-Center-(6).webp',
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
