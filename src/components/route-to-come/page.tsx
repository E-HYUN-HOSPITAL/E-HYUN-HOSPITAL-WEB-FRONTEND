import { forwardRef, useEffect } from 'react';

import { ToolBar } from '../common/toolBar/ToolBar';
import styles from './routeToCome.module.scss';

export const RouteToComePage = forwardRef<HTMLDivElement, object>((_, ref) => {
  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      const container = document.getElementById('map');

      if (!container) return;

      const options = {
        center: new window.kakao.maps.LatLng(36.1554, 128.431036),
        level: 3,
      };

      const map = new window.kakao.maps.Map(container, options);

      const markerPosition = new window.kakao.maps.LatLng(36.1554, 128.431036);

      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(map);
    }
  }, []);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.content}>
        <div id='map' className={styles.map}></div>

        <div className={styles.infoContainer}>
          <h2 className={styles.title}>Location</h2>
          <p className={styles.address}>
            경상북도 구미시 산동읍 신당1로3길, 6F 7F
          </p>
          <p className={styles.tel}>T. 054-471-2000</p>

          <div className={styles.hours}>
            <h3>진료 시간</h3>
            <ul>
              <li>
                <span>평일</span>
                <span>AM 09:00 ~ PM 20:00</span>
              </li>
              <li>
                <span>주말 및 공휴일</span>
                <span>AM 09:00 ~ PM 15:00</span>
              </li>
              <li>
                <span>점심시간</span>
                <span>없음</span>
              </li>
            </ul>
          </div>

          <div className={styles.parking}>
            <h3>주차장</h3>
            <p> 경상북도 구미시 산동읍 1426, 가람주차장</p>
            <p className={styles.notice}>
              *입원환자 당일무료/외래환자 최대 2시간 지원가능
            </p>
          </div>
        </div>
      </div>
      <ToolBar />
    </div>
  );
});
