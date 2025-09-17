import styles from './goKakaoBtn.module.scss';

type Props = {
  onClick: () => void;
};

export const GoKakaoBtn = ({ onClick }: Props) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <img src='/kakao_icon.svg' alt='카카오 아이콘' />
    </div>
  );
};
