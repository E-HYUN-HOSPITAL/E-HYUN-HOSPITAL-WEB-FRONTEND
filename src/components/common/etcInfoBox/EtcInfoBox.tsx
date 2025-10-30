import { ImageBtn } from "../imageBtn/ImageBtn";
import styles from "./etcInfoBox.module.scss";

export const EtcInfoBox = () => {
  return (
    <div className={styles.container}>
      <ImageBtn
        url="/blog_icon.svg"
        onClick={() => alert("블로그는 준비 중이에요!")}
      />
      <ImageBtn
        url="/map_icon.svg"
        onClick={() => window.open("https://naver.me/5HrMQWVL", "_blank")}
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
  );
};
