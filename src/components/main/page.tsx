import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useRef, useState } from "react";

import { Image } from "../common/image/Image";
import Slider from "react-slick";
import { ToolBar } from "../common/toolBar/ToolBar";
import styles from "./mainPage.module.scss";

const Images: string[] = [
  "/hospital-interior/main_img1.png",
  "/hospital-interior/main_img2.png",
  "/hospital-interior/main_img3.png",
  "/hospital-interior/main_img4.png",
];

export const MainPageComponent = () => {
  const [choose, setChoose] = useState<string>("");
  const sliderRef = useRef<Slider>(null);

  useEffect(() => console.log(choose), []);

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
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className={styles.container}>
      <Slider ref={sliderRef} {...settings}>
        {Images.map((image, index) => (
          <Image key={index} source={image} alt="" />
        ))}
      </Slider>
      <div className={styles.titleBox}>
        <div className={styles.subText}>이로움을 선사하는 공간</div>
        <img
          className={styles.mainTitle}
          src="/title_text.svg"
          alt="제목 이미지"
        />
        <img
          className={styles.engSubTitle}
          src="/eng_title.svg"
          alt="영문 제목 이미지"
        />
      </div>
      <img
        src="/left_arrow.svg"
        alt="왼쪽 화살표"
        className={styles.leftBtn}
        onClick={goToPrev}
      />
      <img
        src="/right_arrow.svg"
        alt="오른쪽 화살표"
        className={styles.rightBtn}
        onClick={goToNext}
      />

      <ToolBar />
    </div>
  );
};
