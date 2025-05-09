import { subFooterOneItems } from "./subFooterOneItems";

function SubFooterOne() {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
      {subFooterOneItems.map((item) => (
        <div key={item.id}>
          <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            {item.title}
          </h3>
          <ul className="text-gray-500 dark:text-gray-400">
            {item.links.map((link) => (
              <li key={link} className="mb-4">
                <a href="#" className=" hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
export default SubFooterOne;
