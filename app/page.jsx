import Image from "next/image";
import AutoPlay from "./home/components/autoPlay";
import ImpactSection from "./home/components/countSection";
import ServiceSection from "./home/components/serviceSection";
import ProvenApproach from "./home/components/provenApproach";
import FiveStepsToDreamHome from "./home/components/fiveStepsToDreamHome";
import SecuritySection from "./home/components/securitySection";
import ExpertiseSection from "./home/components/expertiseSection";
import ContactSection from "./home/components/contactSection";

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
{/* <Footer />     */}
    
    </>
  );
}
