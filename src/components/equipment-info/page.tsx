import { EquitmentBar } from "./equitmentBar/EquipmentBar";
import styles from "./equipmentInfo.module.scss";
import { forwardRef, useState } from "react";
import {
  EQUIPMENT_DATA,
  type EquipmentCategory,
} from "../../data/equitment-info";
import { MiniButton } from "../common/miniButton/MIniButton";

export const EquipmentInfo = forwardRef<HTMLDivElement, object>((_, ref) => {
  const [selected, setSelected] = useState<EquipmentCategory>("skincare");
  const [selectedEquipment, setSelectedEquipment] = useState<number>(1);

  const currentEquipmentList = EQUIPMENT_DATA[selected];

  const currentEquipment = currentEquipmentList.find(
    (item) => item.number === selectedEquipment
  );

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.content}>
        <div className={styles.titleText}>장비 소개</div>
        <div className={styles.buttonBox}>
          <MiniButton
            text="피부"
            selected={selected === "skincare"}
            onClick={() => setSelected("skincare")}
          />
          <MiniButton
            text="근골격통증"
            selected={selected === "musculoskeletal_pain"}
            onClick={() => setSelected("musculoskeletal_pain")}
          />
        </div>

        <div className={styles.equipmentInfo}>
          <div className={styles.equipmentBoxes}>
            {currentEquipmentList.map((equipment) => (
              <EquitmentBar
                key={equipment.number}
                number={equipment.number}
                equipmentName={equipment.name}
                selected={selectedEquipment === equipment.number}
                onClick={() => setSelectedEquipment(equipment.number)}
              />
            ))}
          </div>
          {currentEquipment && (
            <img
              src={currentEquipment.image}
              alt={currentEquipment.name}
              className={styles.equipmentImage}
            />
          )}
        </div>
      </div>
    </div>
  );
});
