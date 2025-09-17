import { useEffect, useRef, useState } from 'react';

import { DoctorInfoPage } from '../../components/doctor-info/page';
import { EquipmentInfo } from '../../components/equipment-info/page';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/common/headers/Header';
import { HospitalPicturePage } from '../../components/hospital-picture/page';
import { IntroducePage } from '../../components/introduce/page';
import { MainPageComponent } from '../../components/main/page';
import { PromisePage } from '../../components/promise/page';
import { RouteToComePage } from '../../components/route-to-come/page';
import styles from './mainpage.module.scss';

function MainPage() {
  const introduceRef = useRef(null);
  const doctorRef = useRef(null);
  const equipmentRef = useRef(null);
  const hospitalRef = useRef(null);
  const routeRef = useRef(null);

  const [activeSection, setActiveSection] = useState<string>('introduce');

  const sectionRefs = {
    introduce: introduceRef,
    doctor: doctorRef,
    equipment: equipmentRef,
    hospital: hospitalRef,
    route: routeRef,
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.5;

      const sections = Object.entries(sectionRefs);

      for (const [key, ref] of sections) {
        if (
          ref.current &&
          ref.current.offsetTop <= scrollPosition &&
          ref.current.offsetTop + ref.current.offsetHeight > scrollPosition
        ) {
          setActiveSection(key);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Header sectionRefs={sectionRefs} activeSection={activeSection} />
      <MainPageComponent />
      <IntroducePage ref={introduceRef} />
      <PromisePage />
      <DoctorInfoPage ref={doctorRef} />
      <EquipmentInfo ref={equipmentRef} />
      <HospitalPicturePage ref={hospitalRef} />
      <RouteToComePage ref={routeRef} />
      <Footer />
    </div>
  );
}

export default MainPage;
