import PricingCards from "./sub-components/PricingCards";
import PricingHeader from "./sub-components/PricingHeader";

function Pricing() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <PricingHeader />
        <PricingCards />
      </div>
    </section>
  );
}
export default Pricing;
