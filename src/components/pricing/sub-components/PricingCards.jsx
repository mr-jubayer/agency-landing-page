import { priceList } from "./priceList";
import PricingCard from "./PricingCard";

function PricingCards() {
  return (
    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
      {priceList.map((item) => (
        <PricingCard key={item.id} item={item} />
      ))}
    </div>
  );
}
export default PricingCards;
