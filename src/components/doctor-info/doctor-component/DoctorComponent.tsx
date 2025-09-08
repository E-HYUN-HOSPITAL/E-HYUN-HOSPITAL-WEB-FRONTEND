import { DOCTOR_DATA } from '../../../data/doctor-info';
import styles from './doctorComponenet.module.scss';

type Props = {
  doctorName: keyof typeof DOCTOR_DATA;
};

export const DoctorComponent = ({ doctorName }: Props) => {
  const doctorInfo = DOCTOR_DATA[doctorName];

  if (!doctorInfo) {
    return <div>의사 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className={styles.container}>
      <img src={doctorInfo.imageUrl} alt='사람 이미지' />
      <div className={styles.infos}>
        <div className={styles.major}>{doctorInfo.major}</div>
        <div className={styles.name}>
          {doctorInfo.position} {doctorName}
        </div>
        <div className={styles.specialty}>{doctorInfo.specialty}</div>
        <div className={styles.education}>
          {doctorInfo.education.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <div className={styles.membership}>
          {doctorInfo.memberships.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
