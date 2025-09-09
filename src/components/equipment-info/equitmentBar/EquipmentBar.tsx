import styles from './equipmentBar.module.scss';

type Props = {
  number: number;
  equipmentName: string;
  selected: boolean;
  onClick: () => void;
};

export const EquitmentBar = ({
  number,
  equipmentName,
  selected,
  onClick,
}: Props) => {
  return (
    <div
      className={`${styles.container} ${selected ? styles.selected : ''}`}
      onClick={onClick}
    >
      <div
        className={`${styles.textBox} ${selected ? styles.selectedText : ''}`}
      >
        <span className={styles.number}>0{number}.</span>
        <span className={styles.name}>{equipmentName}</span>
      </div>
    </div>
  );
};
