import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Accordion from "../customAccordion/Accordion";
import TabMenu from "../tabMenu/TabMenu";

const InflatedElectricity = () => {
  const tabs = [
    {
      name: "actualBreach",
      label: "Actual Breach",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="text-gray-500 font-semibold">
              When a party doesn't fulfill their duties on time.
              <li className="list-disc mt-1 text-gray-700 font-normal">
                Example: A vendor fails to deliver goods on the agreed date.
              </li>
            </li>
          </ul>
        </div>
      ),
    },
    {
      name: "materialBreach",
      label: "Material Breach",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="text-gray-500 font-semibold">
              When a party fails to deliver a significant part of what was
              promised.
              <li className="list-disc mt-1 text-gray-700 font-normal">
                Example: Buying a smartphone online and not receiving all the
                promised accessories.
              </li>
            </li>
          </ul>
        </div>
      ),
    },
    {
      name: "minorBreach",
      label: "Minor Breach",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="text-gray-500 font-semibold">
              When most of the contract is fulfilled, but a small part is left
              incomplete.
              <li className="list-disc mt-1 text-gray-700 font-normal">
                Example: An architect designs a house but misses a minor detail.
              </li>
            </li>
          </ul>
        </div>
      ),
    },
    {
      name: "anticipatoryBreach",
      label: "Anticipatory Breach",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="text-gray-500 font-semibold">
              When a party indicates they won't be able to fulfill the contract
              before the deadline.
              <li className="list-disc mt-1 text-gray-700 font-normal">
                Example: A service promised for Tuesday morning is now delayed
                by several days.
              </li>
            </li>
          </ul>
        </div>
      ),
    },
  ];
  const faqItems = [
    {
      question: "What is a breach of contract?",
      answer:
        "A breach of contract occurs when one party fails to fulfill their obligations under a contract. This can include not performing on time, not performing in accordance with the contract terms, or not performing at all..",
    },
    {
      question: "What are the types of breaches of contract?",
      answer:
        "There are four main types: actual breach, material breach, minor breach, and anticipatory breach. Each type varies in severity and the legal remedies available.",
    },
    {
      question: "What is an actual breach of contract?",
      answer:
        "An actual breach happens when one party fails to perform their contractual duties by the deadline specified in the contract.",
    },
    {
      question: "What is a material breach of contract?",
      answer:
        "A material breach is a significant failure to perform that permits the other party to either compel performance, or collect damages because the breach has severely harmed the agreement's value.",
    },
    {
      question: "What is a minor breach of contract?",
      answer:
        "A minor breach occurs when one party performs most of their obligations, but fails to perform a small part of their duties. The contract remains mostly intact and enforceable.",
    },
    {
      question: "What is an anticipatory breach of contract?",
      answer:
        "An anticipatory breach happens when one party indicates in advance that they will not be fulfilling their contractual obligations.",
    },
    {
      question: "What remedies are available for a breach of contract?",
      answer:
        "Remedies include rescission (cancelling the contract), damages (monetary compensation), specific performance (requiring the party to fulfill their duties), and injunctions (court orders preventing specific actions).",
    },
    {
      question: "How can a breach of contract be proven?",
      answer:
        "To prove a breach of contract, you must show that a valid contract existed, you performed your contractual obligations, the other party failed to fulfill their obligations, and you suffered damages as a result.",
    },
    {
      question: "Can a breach of contract be settled outside of court?",
      answer:
        "Yes, many breaches of contract are settled through negotiation, mediation, or arbitration, which can be faster and less expensive than going to court.",
    },
    {
      question: "What should I do if I am accused of breaching a contract?",
      answer:
        "If accused of a breach, review the contract terms carefully, gather evidence of your performance, and seek legal advice to understand your rights and potential defenses. Negotiation or settlement may be possible to avoid litigation.",
    },
  ];
  return (
    <>
      <Navbar />
      <section className="wrapper">
        <div className="container pt-28 xl:!pt-[10rem] lg:!pt-[10rem] md:!pt-[10rem] sm:!pt-[10rem] lg:mb-5 relative">
        
            
            <div className="flex flex-col items-center">
              <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-9 xl:!px-12 font-space-grotesk text-center">
              Types of Inflated Electricity Bills
              </h3>
              <div className="w-full max-w-4xl mx-auto text-center">   
              <TabMenu tabs={tabs} />
            </div>
          </div>
        </div>
      </section>

      <div className="lg:pt-52 xl:pt-52 sm:pt-0">
        <section className="wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600 bg-content [background-size:100%] bg-[center_center] bg-no-repeat bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(255,255,255,.6)]">
          <div
            className="container py-[1rem] md:pt-24 lg:pt-0 xl:pt-0 xl:pb-[7rem] lg:pb-[7rem] md:pb-[7rem] !relative sm:pt-0"
            style={{ zIndex: "2" }}
          >
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-11/12 xxl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                <div className="lg:mt-[-10rem] xl:!mt-[-15rem] !mb-[3rem] xl:!mb-[3rem] lg:!mb-[3rem] md:!mb-[3rem] !rounded-[0.8rem]">
                  <h3 className="text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.2] xl:text-[2rem] mb-12 lg:!px-8 xl:!px-12 !text-center font-space-grotesk">
                    Frequently Asked Questions
                  </h3>
                </div>
                <Accordion items={faqItems} />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default InflatedElectricity;
