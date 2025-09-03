import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useRef, useState } from 'react'; // useRef 추가

import { Image } from '../common/image/Image';
import Slider from 'react-slick';
import styles from './mainPage.module.scss';

const Images: string[] = [
  'public/로비 (3).png',
  'public/피부치료센터 (6).png',
  'public/복도.png',
  'public/2인실 2,3-2.png',
];

export const MainPageComponent = () => {
  const [choose, setChoose] = useState<string>('');
  const sliderRef = useRef(null);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (cur: number) => {
      setChoose(Images[cur]);
    },
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className={styles.container}>
      <Slider ref={sliderRef} {...settings}>
        {Images.map((image, index) => (
          <Image key={index} source={image} alt='' />
        ))}
      </Slider>
      <div className={styles.titleBox}>
        <div className={styles.subText}>이로움을 선사하는 공간</div>
        <img
          className={styles.mainTitle}
          src='public/title_text.svg'
          alt='제목 이미지'
        />
        <img
          className={styles.engSubTitle}
          src='public/eng_title.svg'
          alt='영문 제목 이미지'
        />
      </div>
      <img
        src='public/left_arrow.svg'
        alt='왼쪽 화살표'
        className={styles.leftBtn}
        onClick={goToPrev}
      />
      <img
        src='public/right_arrow.svg'
        alt='오른쪽 화살표'
        className={styles.rightBtn}
        onClick={goToNext}
      />
    </div>
  );
};
