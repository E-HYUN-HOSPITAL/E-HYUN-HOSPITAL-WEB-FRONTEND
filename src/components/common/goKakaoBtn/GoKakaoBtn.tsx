import styles from "./goKakaoBtn.module.scss";
import { trackKakaoClick } from "../../../lib/track";

type Props = {
  onClick?: () => void;
};

export const GoKakaoBtn = ({ onClick }: Props) => {
  return (
    <div
      className={styles.container}
      onClick={() => {
        trackKakaoClick();
        if (onClick) onClick();
        else window.open("https://pf.kakao.com/_hKrHn", "_blank");
      }}
      title="카카오톡 채널로 이동"
    >
      <img src="/kakao_icon.svg" alt="카카오 아이콘" />
    </div>
  );
};
