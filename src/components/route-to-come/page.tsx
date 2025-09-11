import { ToolBar } from "../common/toolBar/ToolBar";
import styles from "./routeToCome.module.scss";
import { useEffect } from "react";

export const RouteToComePage = () => {
  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      const container = document.getElementById("map");
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
    <div className={styles.container}>
      <div id="map" className={styles.map}></div>
      <div className={styles.title}>
        <h2>Location</h2>
        <p className={styles.location}>
          경상북도 구미시 산동읍 신당1로3길, 6F 7F <br />
          <br />
          T. 054-471-2000
        </p>
        <div className={styles.operation}>
          <h3>진료 시간</h3>
          <div className={styles.operationInfo}>
            평일
            <br />
            주말 및 공휴일
            <br /> 점심시간
            <div className={styles.alert}>
              *입원환자 당일무료/외래환자 최대 2시간 지원가능
            </div>
          </div>
          <div className={styles.park}>
            <h3>주차장</h3>
            <p className={styles.parkInfo}>
              경상북도 구미시 산동읍 1426, 가람주차장
            </p>
          </div>
        </div>
      </div>
      <ToolBar />
    </div>
  );
};
