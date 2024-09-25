import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Accordion from "../customAccordion/Accordion";
import TabMenu from "../tabMenu/TabMenu";

const ChequeBounce = () => {
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
      question: "What is a cheque bounce?",
      answer: "A cheque bounce occurs when a bank refuses to honor a cheque due to insufficient funds, expired validity, or other reasons.",
    },
    {
      question: "Why does a cheque bounce?",
      answer: "Common reasons include insufficient funds, expired validity, stop payment instructions, damaged cheque, signature mismatch, and amount mismatch.",
    },
    {
      question: "What is the first step after a cheque bounces?",
      answer: "Send a demand notice to the cheque issuer within 30 days of receiving the cheque return memo.",
    },
    {
      question: "How long does the issuer have to settle the payment after receiving the notice?",
      answer: "The issuer has 15 days to settle the payment.",
    },
    {
      question: "What happens if the issuer does not settle the payment within 15 days?",
      answer: "You can file a criminal complaint in court within 30 days of the 15-day period's expiry.",
    },
    {
      question: "What documents are needed to file a cheque bounce case?",
      answer: "Legal notice copy, original bounced cheque, cheque return memo, and proof of notice delivery.",
    },
    {
      question: "What are the bank charges for cheque bounce?",
      answer: "Charges vary by bank. For example, SBI charges ₹150-₹500 + GST depending on the amount and reason.",
    },
    {
      question: "What are the penalties under the Negotiable Instruments Act, 1881 for cheque bounce?",
      answer: "Offenders can face imprisonment for up to two years, a fine up to twice the cheque amount, or both.",
    },
    {
      question: "Can a court ignore delays in filing a cheque bounce case?",
      answer: "Yes, courts may ignore delays if sufficient cause is shown.",
    },
    {
      question: "Can I file a civil suit for cheque bounce?",
      answer: "Yes, you can file a civil suit for recovery of the cheque amount, including costs and lost interest.",
    },
  ];
  
  return (
    <>
      <Navbar />
      <section className="wrapper">
        <div className="container pt-20 xl:!pt-[2rem] lg:!pt-[2rem] md:!pt-[2rem] sm:!pt-[2rem] lg:mb-5 relative">
         
            <div className="flex flex-col items-center">
              <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] xl:!px-12 font-space-grotesk text-center">
              Types of Cheque Bounce
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

export default ChequeBounce;
