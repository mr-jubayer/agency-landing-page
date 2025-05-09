import { faqData } from "../faqData";
import AccordionItem from "./AccrdionItem";

function Accordion() {
  return (
    <div className="max-w-screen-md mx-auto">
      <div
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        {faqData.map((faqItem) => (
          <AccordionItem key={faqItem.id} faqItem={faqItem} />
        ))}
      </div>
    </div>
  );
}
export default Accordion;
