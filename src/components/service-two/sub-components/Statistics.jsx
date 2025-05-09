import { statisticsData } from "./statisticData";

function Statistics() {
  return (
    <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
      {statisticsData.map((statistic) => (
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
