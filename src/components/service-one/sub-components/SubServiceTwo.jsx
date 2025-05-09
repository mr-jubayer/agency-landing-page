import featureTwo from "../../../assets/features/feature-2.png";
import SubServiceImage from "./SubServiceImage";
import SubServiceTextContent from "./SubServiceTextContent";

const subServiceTwoTextContent = {
  title: " We invest in the world’s potential",
  description:
    " Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.",
  features: [
    " Dynamic reports and dashboards",
    "Templates for everyone",
    "Development workflow",
    "Limitless business automation",
    "Knowledge management",
  ],
  bottomDescription:
    " Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
};

function SubServiceTwo() {
  return (
    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
      <SubServiceImage url={featureTwo} alt="feature image 2" />
      <SubServiceTextContent service={subServiceTwoTextContent} />
    </div>
  );
}
export default SubServiceTwo;
