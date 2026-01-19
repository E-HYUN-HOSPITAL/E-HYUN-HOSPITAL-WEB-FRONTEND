import styles from "./equipmentIntro.module.scss";

import clarityImg from "/equipments/dermatology/clarity2.webp";
import oligioImg from "/equipments/dermatology/올리지오.webp";
import shurinkImg from "/equipments/dermatology/shrink_universe.webp";

export interface EquipmentItem {
  name: string;
  engName: string;
  img: string;
  tags: string[];
  desc: string;
}

interface Props {
  title?: string;
  subTitle?: string;
  data: EquipmentItem[];
}

export const EquipmentIntro = ({
  title = "PREMIUM EQUIPMENT",
  subTitle = "이현한방병원은 검증된 프리미엄 장비로 최상의 효과를 약속합니다.",
  data,
}: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subTitle}>{subTitle}</p>
      </div>

      <div className={styles.grid}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={item.img} alt={item.name} />
            </div>
            <div className={styles.textWrapper}>
              <h3 className={styles.cardTitle}>
                {item.name}{" "}
                <span className={styles.engName}>{item.engName}</span>
              </h3>
              <div className={styles.tags}>
                {item.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
