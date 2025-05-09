import PricingCard from "./PricingCard";

const pricingData = [
  {
    id: "p1",
    type: "Starter",
    description: "Best option for personal use & for your next project.",
    price: "29",
    features: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: 1 developer",
      "Premium support: 6 months",
      "Free updates: 6 months",
    ],
  },
  {
    id: "p2",
    type: "Company",
    description: "Relevant for multiple users, extended & premium support.",
    price: "99",
    features: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: 10 developer",
      "Premium support: 24 months",
      "Free updates: 24 months",
    ],
  },
  {
    id: "p3",
    type: "Enterprise",
    description:
      "Best for large scale uses and extended redistribution rights.",
    price: "499",

    features: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: 100+ developer",
      "Premium support: 36 months",
      "Free updates: 36 months",
    ],
  },
];

function PricingCards() {
  return (
    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
      {pricingData.map((item) => (
        <PricingCard key={item.id} item={item} />
      ))}
    </div>
  );
}
export default PricingCards;
