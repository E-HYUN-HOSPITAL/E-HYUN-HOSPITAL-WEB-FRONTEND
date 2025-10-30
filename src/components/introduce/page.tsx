import { ToolBar } from "../common/toolBar/ToolBar";
import { forwardRef } from "react";
import styles from "./introduce.module.scss";

export const IntroducePage = forwardRef<HTMLDivElement, object>((_, ref) => {
  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.intro}>
        <h3 className={styles.subtitle}>E-HYUN HOSPITAL</h3>
        <h1 className={styles.title}>이현한방병원을 소개합니다.</h1>
        <p className={styles.desc}>
          의학·한의학·피부과 이현한방병원에서는 전통 한의학과 더불어 초음파
          기술을 결합하여 몸과 피부를 균형있게 만들기 위한 전문적인 치료를
          추구합니다.
        </p>
        <p className={styles.subdesc}>
          단순한 치료를 넘어 환자 분의 개인 체질과 생활습관을 고려한 맞춤 치유를
          지향합니다. 최상의 의료서비스를 직접 경험해보세요.
        </p>
      </div>
      <div className={styles.images}>
        <div className={styles.imageCard}>
          <img
            src="/hospital-interior/Exercise-Therapy-Room.webp"
            alt="운동치료실"
          />
          <span>운동치료실</span>
        </div>
        <div className={styles.imageCard}>
          <img
            src="/hospital-interior/Physical-Therapy-Room.webp"
            alt="물리치료실"
          />
          <span>물리치료실</span>
        </div>
      </div>
      <ToolBar />
    </div>
  );
});
