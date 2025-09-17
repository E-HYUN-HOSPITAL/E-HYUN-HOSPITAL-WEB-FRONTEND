import { CircleText } from './circleText/CircleText';
import styles from './promise.module.scss';

export const PromisePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textBox}>
        <img
          src='/promise/hospital_name.svg'
          alt='타이틀 이미지'
          className={styles.titleImg}
        />
        <div className={styles.underline}></div>
        <div className={styles.boldText}>환자분께 드리는 약속</div>
        <div className={styles.subText}>
          현대인의 건강과 아름다움을 함께 이루겠습니다.
        </div>
      </div>

      <div className={styles.circleBox}>
        <CircleText
          number='01'
          title='편안한 진료환경'
          description={`친절하고 따듯한 응대로\n편안한 진료환경을 제공합니다.`}
        />
        <CircleText
          number='02'
          title='맞춤 서비스'
          description={`초진부터 사후관리까지\n한 분 한 분 섬세히\n맞춤 서비스를 드립니다.`}
        />
        <CircleText
          number='03'
          title='진실과 신뢰'
          description={`투명하고 정확한\n진료정보 제공을 약속드립니다.`}
        />
      </div>
    </div>
  );
};
