import styles from './miniButton.module.scss';

type Props = {
  text: string;
  selected: boolean;
  onClick: () => void;
};

export const MiniButton = ({ text, selected, onClick }: Props) => {
  return (
    <div
      className={`${styles.container} ${selected ? styles.selected : ''}`}
      onClick={onClick}
    >
      <div className={selected ? styles.selectedText : styles.text}>{text}</div>
    </div>
  );
};
