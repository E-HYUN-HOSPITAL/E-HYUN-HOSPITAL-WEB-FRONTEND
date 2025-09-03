import { ImageBtn } from '../imageBtn/ImageBtn';
import styles from './etcInfoBox.module.scss';

export const EtcInfoBox = () => {
  return (
    <div className={styles.container}>
      <ImageBtn
        url='public/blog_icon.svg'
        onClick={() => console.log('블로그 연결')}
      />
      <ImageBtn
        url='public/map_icon.svg'
        onClick={() => console.log('지도 연결')}
      />
      <ImageBtn
        url='public/insta_icon.svg'
        onClick={() => console.log('인스타그램 연결')}
      />
    </div>
  );
};
