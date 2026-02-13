import Image from "next/image";
import AutoPlay from "./components/autoPlay";
import ImpactSection from "./components/countSection";
import ServiceSection from "./components/serviceSection";
import ProvenApproach from "./components/provenApproach";
import FiveStepsToDreamHome from "./components/fiveStepsToDreamHome";
import SecuritySection from "./components/securitySection";
import ExpertiseSection from "./components/expertiseSection";
import ContactSection from "./components/contactSection";


export default function Home() {
  return (
    <>
    <AutoPlay />
    <ImpactSection />
    <ServiceSection />
    <ProvenApproach />
    <FiveStepsToDreamHome />
    <ExpertiseSection />
    <SecuritySection />
    <ContactSection />
    {/* <Footer /> */}
    </>
  );
}
