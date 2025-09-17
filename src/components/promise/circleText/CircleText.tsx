import styles from './circleText.module.scss';

type Props = {
  number: string;
  title: string;
  description: string;
};

export const CircleText = ({ number, title, description }: Props) => {
  const descriptionLines = description.split('\n');

  return (
    <div className={styles.container}>
      <div className={styles.number}>{number}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.descriptionBox}>
        {descriptionLines.map((line, index) => (
          <div key={index} className={styles.description}>
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};
