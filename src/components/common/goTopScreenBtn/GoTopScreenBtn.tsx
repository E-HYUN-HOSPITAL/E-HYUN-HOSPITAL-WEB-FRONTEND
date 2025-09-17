import styles from './goTopScreenBtn.module.scss';

export const GoTopScreenBtn = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.container}>
      <img src='/go_top_btn.svg' alt='위로가기' onClick={handleScrollToTop} />
    </div>
  );
};
