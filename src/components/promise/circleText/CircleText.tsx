import styles from './circleText.module.scss';

type Props = {
  number: string;
  title: string;
  description: string;
};

export const CircleText = ({ number, title, description }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.number}>{number}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
