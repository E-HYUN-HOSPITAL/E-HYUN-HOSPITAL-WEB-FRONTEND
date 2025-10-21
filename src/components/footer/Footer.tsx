import { ImageBtn } from "../common/imageBtn/ImageBtn";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconBar}>
        <img src="/header_logo.svg" alt="로고" />
      </div>
      <div className={styles.underline}></div>
      <div className={styles.infoBox}>
        <div className={styles.nameAndIcons}>
          <div className={styles.hospitalName}>이현한방병원</div>
          <div className={styles.icons}>
            <ImageBtn
              url="/blog_icon.svg"
              onClick={() => alert("블로그는 준비 중이에요!")}
            />
            <ImageBtn
              url="/map_icon.svg"
              onClick={() => window.open("https://naver.me/IFGouG2f", "_blank")}
            />
            <ImageBtn
              url="/insta_icon.svg"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/e_hyun_hospital/?utm_source=ig_web_button_share_sheet",
                  "_blank"
                )
              }
            />
          </div>
        </div>
        <div className={styles.address}>
          경상북도 구미시 산동읍 신당1로 3길 3, 6F 7F
        </div>
        <div className={styles.otherInfo}>
          대표 : 이연진 | 사업자등록증 : 686-26-02248
        </div>
        <div className={styles.otherInfo}>T. 054-471-2000</div>
      </div>
    </div>
  );
};
