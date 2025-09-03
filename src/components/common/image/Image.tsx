import styles from './image.module.scss';

type Props = {
  source: string;
  alt: string;
};

export const Image = ({ source, alt }: Props) => {
  return <img className={styles.image} src={source} alt={alt} />;
};
