import ServiceBenefits from "./component/ourBenefitService";
import OurHistory from "./component/ourHistory";
import OurTeams from "./component/ourTerms";
import OurAdminTeam from "./component/ourAdminTeam"
import CompanyStats from "./component/companyStats";




export default function AboutUs() {
  return (
    <>
<OurHistory/>
<OurTeams />
<ServiceBenefits />
<OurAdminTeam />
<CompanyStats />

    </>
  );
}
