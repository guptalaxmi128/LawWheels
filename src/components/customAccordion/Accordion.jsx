// Accordion.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const AccordionItem = ({ question, answer, index, expandedIndex, toggleAccordion }) => {
  return (
    <div className="card accordion-item mb-5 !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
      <div
        className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !rounded-[0.4rem] !bg-inherit flex items-center justify-between"
        onClick={() => toggleAccordion(index)}
      >
        <button
          className="!text-[#343f52] !text-[0.9rem] hover:!text-[#605dba] before:!text-[#605dba] flex-grow text-left font-space-grotesk"
          aria-expanded={expandedIndex === index}
          aria-controls={`collapse-${index}`}
        >
          {question}
        </button>
        <FontAwesomeIcon
          icon={expandedIndex === index ? faChevronUp : faChevronDown}
          className="ml-2"
        />
      </div>
      <div
        id={`collapse-${index}`}
        className={`collapse ${expandedIndex === index ? "show" : ""}`}
        aria-labelledby={`heading-${index}`}
      >
        <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
          <p className="font-space-grotesk">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          question={item.question}
          answer={item.answer}
          expandedIndex={expandedIndex}
          toggleAccordion={toggleAccordion}
        />
      ))}
    </div>
  );
};

export default Accordion;
