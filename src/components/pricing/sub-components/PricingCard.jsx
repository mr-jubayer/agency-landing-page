import Button from "../../ui/Button";
import TickOutline from "../../ui/icons/TickOutline";

function PricingCard({ item }) {
  return (
    <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">{item.type}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {item.description}
      </p>
      <div className="flex items-baseline justify-center my-8">
        <span className="mr-2 text-5xl font-extrabold">${item.price} </span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>

      <ul role="list" className="mb-8 space-y-4 text-left">
        {item.features.map((feat) => (
          <Feature key={feat} feat={feat} />
        ))}
      </ul>
      <Button variant="primary">Get started</Button>
    </div>
  );
}
export default PricingCard;

function Feature({ feat }) {
  return (
    <li className="flex items-center space-x-3">
      <TickOutline />
      <span>{feat}</span>
    </li>
  );
}
