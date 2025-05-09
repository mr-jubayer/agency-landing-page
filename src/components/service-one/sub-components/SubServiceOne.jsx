import featureOne from "../../../assets/features/feature-1.png";
import SubServiceImage from "./SubServiceImage";
import SubServiceTextContent from "./SubServiceTextContent";

const subServiceOneTextContent = {
  title: "Work with tools you already use",
  description:
    "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.",
  features: [
    "Continuous integration and deployment",
    "Development workflow",
    "Knowledge management",
  ],
  bottomDescription:
    "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
};

function SubServiceOne() {
  return (
    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
      <SubServiceTextContent service={subServiceOneTextContent} />
      <SubServiceImage url={featureOne} alt="dashboard feature image" />
    </div>
  );
}
export default SubServiceOne;
