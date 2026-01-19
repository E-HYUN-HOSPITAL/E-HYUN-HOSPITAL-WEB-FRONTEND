import { useEffect, useState } from "react";
import styles from "./mainPopup.module.scss";
import popupImg2 from "./popup2.png";
import popupImg3 from "./popup3.jpg";

interface PopupItem {
  id: number;
  src: string;
  alt: string;
}

const POPUP_DATA = [
  { id: 1, src: popupImg2, alt: "이현한방병원 이벤트" },
  { id: 2, src: popupImg3, alt: "이현한방병원 이벤트" },
];

export const MainPopup = () => {
  const [activePopups, setActivePopups] = useState<PopupItem[]>([]);

  useEffect(() => {
    const hideDate = localStorage.getItem("hidePopupDate");
    const today = new Date().toDateString();

    if (hideDate !== today) {
      setActivePopups(POPUP_DATA);
    }
  }, []);

  const handleClose = (id: number) => {
    setActivePopups((prev) => prev.filter((popup) => popup.id !== id));
  };

  const handleDoNotShowToday = (id: number) => {
    const today = new Date().toDateString();
    localStorage.setItem("hidePopupDate", today);
    handleClose(id);
  };

  if (activePopups.length === 0) return null;

  return (
    <div className={styles.overlay}>
      {activePopups.map((popup, index) => {
        const positionStyle = {
          top: `${100 + index * 40}px`,
          left: `${50 + index * 40}px`,
          zIndex: 2000 + index,
        };
        return (
          <div
            key={popup.id}
            className={styles.container}
            style={positionStyle}
          >
            <div className={styles.imageWrapper}>
              <img src={popup.src} alt={popup.alt} />
            </div>

            <div className={styles.buttonGroup}>
              <button
                onClick={() => handleDoNotShowToday(popup.id)}
                className={styles.todayBtn}
              >
                오늘 하루 보지 않기
              </button>
              <button
                onClick={() => handleClose(popup.id)}
                className={styles.closeBtn}
              >
                닫기
              </button>
            </div>
          </div>
        );
        //   <div className={styles.container}>
        //     <div className={styles.imageWrapper}>
        //       {activePopups.map((popup, index) => (
        //         <img key={popup.id} src={popup.src} alt={popup.alt} />
        //       ))}
        //     </div>
        //     <div className={styles.buttonGroup}>
        //       <button onClick={handleDoNotShowToday} className={styles.todayBtn}>
        //         오늘 하루 보지 않기
        //       </button>
        //       <button onClick={handleClose} className={styles.closeBtn}>
        //         닫기
        //       </button>
        //     </div>
        //   </div>
        // </div>
      })}
    </div>
  );
};
