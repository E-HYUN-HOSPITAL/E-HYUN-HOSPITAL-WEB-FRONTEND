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
import { useRef } from 'react';

function MainPage() {
  const introduceRef = useRef(null);
  const doctorRef = useRef(null);
  const equipmentRef = useRef(null);
  const hospitalRef = useRef(null);
  const routeRef = useRef(null);

  const sectionRefs = {
    introduce: introduceRef,
    doctor: doctorRef,
    equipment: equipmentRef,
    hospital: hospitalRef,
    route: routeRef,
  };

  return (
    <div className={styles.container}>
      <Header sectionRefs={sectionRefs} />
      <MainPageComponent />
      <IntroducePage ref={introduceRef} />
      <PromisePage />
      <DoctorInfoPage ref={doctorRef} />
      <EquipmentInfo ref={equipmentRef} />
      <HospitalPicturePage ref={hospitalRef} />
      <RouteToComePage />
      <Footer />
    </div>
  );
}

export default MainPage;
