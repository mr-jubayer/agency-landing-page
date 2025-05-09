import { companiesData } from "./companiesData";

function Companies() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {companiesData.map((company) => (
            <Company key={company.id} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Companies;

function Company({ company }) {
  return (
    <a href="#" className="flex items-center lg:justify-center">
      {company.icon}
    </a>
  );
}
