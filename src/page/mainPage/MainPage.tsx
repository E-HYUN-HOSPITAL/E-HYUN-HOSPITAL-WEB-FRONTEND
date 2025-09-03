import { DoctorInfoPage } from '../../components/doctor-info/page';
import { EquipmentInfo } from '../../components/equipment-info/page';
import { Header } from '../../components/common/headers/Header';
import { HospitalPicturePage } from '../../components/hospital-picture/page';
import { IntroducePage } from '../../components/introduce/page';
import { MainPageComponent } from '../../components/main/page';
import { PromisePage } from '../../components/promise/page';
import { RouteToComePage } from '../../components/route-to-come/page';
import styles from './mainpage.module.scss';

function MainPage() {
  return (
    <div className={styles.container}>
      <Header />
      <MainPageComponent />
      <IntroducePage />
      <PromisePage />
      <DoctorInfoPage />
      <EquipmentInfo />
      <HospitalPicturePage />
      <RouteToComePage />
    </div>
  );
}

export default MainPage;
