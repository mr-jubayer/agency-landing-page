import Airbnb from "../ui/icons/Airbnb";
import Google from "../ui/icons/Google";
import MailChimp from "../ui/icons/Mailchimp";
import Mashable from "../ui/icons/Mashable";
import Microsoft from "../ui/icons/Microsoft";
import Spotify from "../ui/icons/Spotify";

const companiesArray = [
  {
    id: "c1",
    icon: <Airbnb />,
  },
  {
    id: "c2",
    icon: <Google />,
  },
  {
    id: "c3",
    icon: <Microsoft />,
  },
  {
    id: "c4",
    icon: <Spotify />,
  },
  {
    id: "c5",
    icon: <MailChimp />,
  },
  {
    id: "c6",
    icon: <Mashable />,
  },
];

function Companies() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {companiesArray.map((company) => (
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
