import Cart from "../../ui/icons/Cart";
import Countries from "../../ui/icons/Countries";
import Uptime from "../../ui/icons/Uptime";
import Users from "../../ui/icons/Users";

const statistics = [
  {
    id: "s1",
    icon: <Uptime />,
    title: "99.99% uptime",
    description: "For Landwind, with zero maintenance downtime",
  },
  {
    id: "s2",
    icon: <Users />,
    title: "600M+ Users",
    description: "Trusted by over 600 milion users around the world",
  },
  {
    id: "s3",
    icon: <Countries />,
    title: "100+ countries",
    description: "Have used Landwind to create functional websites",
  },
  {
    id: "s4",
    icon: <Cart />,
    title: "5+ Million",
    description: "Transactions per day",
  },
];

function Statistics() {
  return (
    <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
      {statistics.map((statistic) => (
        <StatisticCard key={statistic.id} statistic={statistic} />
      ))}
    </div>
  );
}

export default Statistics;

function StatisticCard({ statistic }) {
  return (
    <div>
      {statistic.icon}
      <h3 className="mb-2 text-2xl font-bold dark:text-white">
        {statistic.title}
      </h3>
      <p className="font-light text-gray-500 dark:text-gray-400">
        {statistic.description}
      </p>
    </div>
  );
}
