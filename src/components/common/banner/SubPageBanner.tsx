import styles from "./SubPageBanner.module.scss";

interface SubPageBannerProps {
  title?: string;
  subTitle?: string;
  bgImage: string;
}

export const SubPageBanner = ({
  title,
  subTitle,
  bgImage,
}: SubPageBannerProps) => {
  return (
    <div
      className={styles.bannerWrapper}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        {subTitle && <span className={styles.subTitle}>{subTitle}</span>}
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
};
