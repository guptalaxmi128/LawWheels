import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Accordion from "../customAccordion/Accordion";
import TabMenu from "../tabMenu/TabMenu";
import cyberCrime from "../../assets/images/cyber_crime.png";

const MoneyRecoverySuit = () => {
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
      question: "What is a money recovery suit?",
      answer: "A legal action to recover debt from a debtor.",
    },
    {
      question:
        "What is the limitation period for filing a money recovery suit?",
      answer: "Three years from the date when the cause of action arises.",
    },
    {
      question: "Where can I file a money recovery suit?",
      answer:
        "Based on territorial and pecuniary jurisdiction; either in District Courts or High Courts depending on the amount involved.",
    },
    {
      question: "What is territorial jurisdiction?",
      answer:
        "The geographical area over which a court has authority to hear a case.",
    },
    {
      question: "What is pecuniary jurisdiction?",
      answer: "The monetary limit up to which a court can hear cases.",
    },
    {
      question: "What legal action can be taken if someone owes me money?",
      answer:
        "Issuing a legal notice, followed by filing a case under various laws like CPC, Negotiable Instrument Act, IPC, etc.",
    },
    {
      question: "What is Order 37 of CPC?",
      answer:
        "A provision for filing a summary suit for quicker resolution based on written statements.",
    },
    {
      question: "What happens if a debtor does not respond to a legal notice?",
      answer: "You can file a case against them in the appropriate court.",
    },
    {
      question: "Can I extend the limitation period for filing a suit?",
      answer: "Yes, but it is subject to the discretion of the court.",
    },
    {
      question: "What should be included in the legal notice to the debtor?",
      answer:
        "Your personal details, details of the debt, and a demand for repayment.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="wrapper">
        <div className="container pt-20 xl:!pt-[4rem] lg:!pt-[4rem] md:!pt-[4rem] sm:!pt-[4rem] lg:mb-5 relative">
          <div className="card !bg-[#eaebea] mb-10">
            <div className="card-body xl:!p-[1.2rem] lg:!p-[2.5rem] md:!p-[2.5rem] xxl:!py-24 p-[20px] !relative">
              <div
                className="absolute hidden lg:block xl:block"
                style={{
                  top: "30%",
                  right: 0,
                  // right:-70,
                  transform: "translateY(-50%)",
                  width: "36%",
                  zIndex: "2",
                }}
              >
                <figure className="m-0 p-0">
                  <img
                    className="w-full max-w-full !h-auto"
                    src={cyberCrime}
                    // srcset="./assets/img/photos/co2@2x.png 2x"
                    alt="image"
                  />
                </figure>
              </div>

              <div className="flex flex-wrap mx-[-10px]">
                <div className="lg:w-8/12 xl:w-8/12 w-full flex-[0_0_auto] px-[15px] xl:px-[15px]">
                  <p className="text-xl font-bold font-space-grotesk">
                    Understanding Money Recovery Suits in India
                  </p>
                  <div>
                    <div className="info p-0">
                      <p className="!mb-1 text-[.9rem] !leading-[1.5] font-space-grotesk">
                        Money Recovery! Is this something that you're currently
                        concerned about? You've probably lent money to people
                        before, but things didn't work out, and they defaulted
                        on paying you back. Or perhaps you want to recover your
                        own money from other parties. If you're considering
                        filing a lawsuit for money recovery, it's important to
                        understand what that entails. This guide will help you
                        understand the process, the legal framework, and the
                        steps involved in filing a money recovery suit in India.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] xl:!px-12 font-space-grotesk text-center">
              Types of Money Recovery Suit
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

export default MoneyRecoverySuit;
