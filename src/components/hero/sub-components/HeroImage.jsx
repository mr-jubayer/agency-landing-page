import heroImage from "../../../assets/hero.png";

function HeroImage() {
  return (
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img src={heroImage} alt="hero image" />
    </div>
  );
}
export default HeroImage;
