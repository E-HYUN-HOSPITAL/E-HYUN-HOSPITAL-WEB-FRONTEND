import { EtcInfoBox } from "../etcInfoBox/EtcInfoBox";
import { GoKakaoBtn } from "../goKakaoBtn/GoKakaoBtn";
import { GoTopScreenBtn } from "../goTopScreenBtn/GoTopScreenBtn";
import styles from "./toolBar.module.scss";

type Props = {
  onClick?: () => void;
};

export const ToolBar = ({ onClick }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.desktopOnly}>
        <GoKakaoBtn
          onClick={
            onClick ||
            (() => window.open("https://pf.kakao.com/_hKrHn", "_blank"))
          }
        />
        <EtcInfoBox />
      </div>
      <GoTopScreenBtn />
    </div>
  );
};
