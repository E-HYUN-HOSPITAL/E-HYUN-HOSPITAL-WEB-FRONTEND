import { forwardRef } from "react";
import styles from "./nonCovered.module.scss";

export const NonCoveredPage = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className={styles.pageWrapper} ref={ref}>
      <main className={styles.container}>
        <div className={styles.headerSection}>
          <h1 className={styles.title}>비급여 항목 안내</h1>
          <p className={styles.description}>
            환자분들의 알 권리를 보장하고 진료 선택에 도움을 드리고자
            <br />
            비급여 진료 항목과 비용을 투명하게 공개합니다.
          </p>
          <span className={styles.notice}>
            ※ 본 비용은 진료 상황 및 환자의 상태에 따라 달라질 수 있습니다.
          </span>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src="/non-covered/non_covered.webp"
            alt="이현한방병원 비급여 진료비 안내 표"
            className={styles.contentImage}
          />
        </div>
      </main>
    </div>
  );
});

NonCoveredPage.displayName = "NonCoveredPage";
