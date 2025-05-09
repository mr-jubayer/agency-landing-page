import Button from "../../ui/Button";
import BottomArrow from "../../ui/icons/BottomArrow";
import ToTopArrow from "../../ui/icons/ToTopArrow";

function AccordionItem({ faqItem }) {
  return (
    <>
      <h3 id={`accordion-flush-heading-${faqItem.id}`}>
        <Button
          className={`
                    ${
                      faqItem.isOpen
                        ? "text-gray-900 bg-white dark:bg-gray-900 dark:text-white"
                        : "text-gray-500 dark:text-gray-400"
                    } 
            flex items-center justify-between w-full py-5 font-medium text-left  border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 `}
          data-accordion-target={`#accordion-flush-body-${faqItem.id}`}
          aria-expanded="true"
          aria-controls={`accordion-flush-body-${faqItem.id}`}
        >
          <span>{faqItem.question}</span>
          {faqItem.isOpen ? <ToTopArrow /> : <BottomArrow />}
        </Button>
      </h3>
      <div
        id={`accordion-flush-body-${faqItem.id}`}
        className={!faqItem.isOpen ? "hidden" : ""}
        aria-labelledby={`accordion-flush-heading-${faqItem.id}`}
      >
        {faqItem.answer}
      </div>
    </>
  );
}

export default AccordionItem;
