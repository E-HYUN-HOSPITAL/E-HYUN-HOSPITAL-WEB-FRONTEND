import styles from './imageBtn.module.scss';

type Props = {
  url: string;
  onClick: () => void;
};

export const ImageBtn = ({ url, onClick }: Props) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <img src={url} alt='아이콘 이미지' />
    </div>
  );
};
