import { CalendarCheck, MapPin, Phone } from "lucide-react";
import styles from "./mobileBottomBar.module.scss";
import { CONTACT } from "../../../data/contact";
import {
  trackDirectionsClick,
  trackKakaoClick,
  trackNaverBookingClick,
  trackPhoneClick,
} from "../../../lib/track";

/** 모바일 전용 하단 고정바: 전화 · 카톡상담 · 네이버예약 · 길찾기 */
export const MobileBottomBar = () => {
  return (
    <>
      <div className={styles.spacer} aria-hidden />
      <nav className={styles.bar} aria-label="빠른 연락">
        <a
          className={styles.item}
          href={`tel:${CONTACT.phone}`}
          onClick={trackPhoneClick}
        >
          <Phone size={22} strokeWidth={1.8} />
          <span>전화</span>
        </a>
        <a
          className={`${styles.item} ${styles.kakao}`}
          href={CONTACT.kakao}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackKakaoClick}
        >
          <img src="/kakao_icon.svg" alt="" width={22} height={22} />
          <span>카톡상담</span>
        </a>
        <a
          className={`${styles.item} ${styles.primary}`}
          href={CONTACT.naverBooking}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackNaverBookingClick}
        >
          <CalendarCheck size={22} strokeWidth={1.8} />
          <span>네이버예약</span>
        </a>
        <a
          className={`${styles.item} ${styles.pink}`}
          href={CONTACT.directions}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackDirectionsClick}
        >
          <MapPin size={22} strokeWidth={1.8} />
          <span>길찾기</span>
        </a>
      </nav>
    </>
  );
};
