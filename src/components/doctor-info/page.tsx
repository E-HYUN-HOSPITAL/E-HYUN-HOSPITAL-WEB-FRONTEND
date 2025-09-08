import { DOCTOR_DATA } from '../../data/doctor-info';
import { DoctorComponent } from './doctor-component/DoctorComponent';
import styles from './doctorInfo.module.scss';

export const DoctorInfoPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topBox}>
        <div className={styles.engTitle}>Meet Our Doctors</div>
        <div className={styles.koTitle}>의료진 소개</div>
        <div className={styles.hr}></div>
      </div>
      <div className={styles.doctorInfos}>
        {Object.keys(DOCTOR_DATA).map((doctorName) => (
          <DoctorComponent key={doctorName} doctorName={doctorName} />
        ))}
      </div>
      <div className={styles.comment}>
        "한 분 한 분 최선을 다해 진료하겠습니다."
      </div>
    </div>
  );
};
