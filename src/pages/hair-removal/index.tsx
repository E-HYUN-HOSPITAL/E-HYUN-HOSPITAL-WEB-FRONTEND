import { Header } from '../../components/common/headers/Header';
import { Footer } from '../../components/footer/Footer';

const dummyRefs = {
  introduce: { current: null },
  doctor: { current: null },
  equipment: { current: null },
  hospital: { current: null },
  route: { current: null },
};

const HairRemovalPage = () => {
  return (
    <div style={{ paddingTop: '8rem' }}> 
      <Header 
        sectionRefs={dummyRefs} 
        activeSection="" 
        handleScroll={() => {}} 
      />
      
      <main style={{ minHeight: '80vh', padding: '2rem' }}>
        <h1>제모 센터</h1>
        <p>남성 제모, 여성 제모 프로그램 안내입니다.</p>
        {/* 여기에 제모 관련 상세 내용을 작성하세요 */}
      </main>

      <Footer />
    </div>
  );
};

export default HairRemovalPage;