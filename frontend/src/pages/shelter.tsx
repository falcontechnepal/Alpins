import HeroComponent from "../components/HeroComponent";
import Navbar from "../components/Navbar";
import ShelterButtonSection from "../components/shelter/ShelterButtonSection";
import ShelterCenterImage from "../components/CenterImageSection";
import ShelterSection1 from "../components/shelter/ShelterSection1";
import ShelterAvailabilityForm from "../components/shelter/ShelterAvailabilityForm";
import styles from "../styles/scss/Shelter.module.scss";
import Abouthero from "../components/Pagehero";

export default function Shelter() {
  return (
    <div>
      <div className={`${styles.shelter}`} style={{ overflow: "hidden" }}>
        {/* <HeroComponent /> */}
      </div>
      <ShelterSection1 />
      <ShelterButtonSection />
      <ShelterAvailabilityForm />
      <ShelterCenterImage />
    </div>
  );
}
