import { useEffect, useState } from "react";
import styles from "./mainPopup.module.scss";
import popupImg from "./popup.png";

export const MainPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hideDate = localStorage.getItem("hidePopupDate");
    const today = new Date().toDateString();

    if (hideDate !== today) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleDoNotShowToday = () => {
    const today = new Date().toDateString();
    localStorage.setItem("hidePopupDate", today);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img src={popupImg} alt="이현한방병원 안내" />
        </div>
        <div className={styles.buttonGroup}>
          <button onClick={handleDoNotShowToday} className={styles.todayBtn}>
            오늘 하루 보지 않기
          </button>
          <button onClick={handleClose} className={styles.closeBtn}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
