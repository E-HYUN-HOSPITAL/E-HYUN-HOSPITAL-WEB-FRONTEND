import styles from "./treatment.module.scss";
import { type TreatmentCategory } from "../../data/treatment-data";

interface Props {
  data: TreatmentCategory[];
  extraNotice?: string;
}

export const TreatmentTable = ({ data, extraNotice }: Props) => {
  return (
    <div className={styles.container}>
      {data.map((category, index) => (
        <div key={index} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>{category.title}</h2>

          <div className={styles.tableWrapper}>
            <table className={styles.priceTable}>
              <thead>
                <tr>
                  <th>시술명</th>
                  {category.headers.map((header, hIndex) => (
                    <th key={hIndex}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {category.items.map((item, iIndex) => (
                  <tr key={iIndex}>
                    <td className={styles.nameCell}>
                      <div className={styles.itemName}>{item.name}</div>
                      {item.description && (
                        <div className={styles.itemDesc}>
                          {item.description}
                        </div>
                      )}
                    </td>
                    {item.prices.map((price, pIndex) => (
                      <td key={pIndex} className={styles.priceCell}>
                        {price}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      <span className={styles.notice}>※ 모든 시술 VAT 별도</span>
      {extraNotice && <span className={styles.notice}>{extraNotice}</span>}
    </div>
  );
};
