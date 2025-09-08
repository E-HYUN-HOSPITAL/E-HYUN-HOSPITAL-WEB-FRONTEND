import { ToolBar } from "../common/toolBar/ToolBar";
import styles from "./routeToCome.module.scss";

export const RouteToComePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.map}></div>
      <div className={styles.title}>
        <h2>Location</h2>
        <p className={styles.location}>
          경상북도 구미시 산동읍 신당1로3길, 6F 7F <br />
          <br />
          T. 054-471-2000
        </p>
        <div className={styles.operation}>
          <h3>진료 시간</h3>
          <p className={styles.operationInfo}>
            평일
            <br />
            주말 및 공휴일
            <br /> 점심시간
            <p className={styles.alert}>
              *입원환자 당일무료/외래환자 최대 2시간 지원가능
            </p>
          </p>
          <p className={styles.park}>
            <h3>주차장</h3>
            <p className={styles.parkInfo}>
              경상북도 구미시 산동읍 1426, 가람주차장
            </p>
          </p>
        </div>
      </div>
      <ToolBar />
    </div>
  );
};
