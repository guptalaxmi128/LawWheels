import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Accordion from "../customAccordion/Accordion";
import TabMenu from "../tabMenu/TabMenu";

const DraftingComplaints = () => {
  const tabs = [
    {
      name: "ConsumerRights ",
      label: "Consumer Rights ",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="text-gray-500">
              Consumers are protected under several basic rights, including:
              <li className="list-disc mt-1 text-gray-700 font-normal">
                <strong>Right to Safety :</strong> Protection against the
                marketing of goods or services that are hazardous to life and
                property.
              </li>
              <li className="list-disc mt-1 text-gray-700 font-normal">
                <strong> Right to Information :</strong> Access to accurate
                information regarding the products or services they purchase.
              </li>
              <li className="list-disc mt-1 text-gray-700 font-normal">
                <strong>Right to be Heard :</strong> The opportunity to voice
                complaints or grievances in the appropriate consumer forums.
              </li>
              <li className="list-disc mt-1 text-gray-700 font-normal">
                <strong>Right to Seek Redressal :</strong> Legal recourse
                against unfair trade practices or defective products.
              </li>
              <li className="list-disc mt-1 text-gray-700 font-normal">
                <strong>Right to Consumer Education :</strong> Awareness of
                their rights and responsibilities when purchasing goods and
                services.
              </li>
            </li>
          </ul>
        </div>
      ),
    },
    {
      name: "PointsToRemember",
      label: "Points to Remember",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="text-gray-500 font-normal">
              The notice must include the seller’s name, description, and
              address.
            </li>
            <li className="text-gray-500 font-normal">
              Clearly state the date when the issue arose.
            </li>
            <li className="text-gray-500 font-normal">
              Detail all grievances with specific dates and facts.
            </li>
            <li className="text-gray-500 font-normal">
              Explain how the seller’s failure to provide quality goods/services
              led to the grievance.
            </li>
            <li className="text-gray-500 font-normal">
              Specify the actions you plan to take if the issue is not resolved.
            </li>
            <li className="text-gray-500 font-normal">
              Include any previous communications with the seller.
            </li>
            <li className="text-gray-500 font-normal">
              Offer a reasonable period (usually 15 to 30 days) for the seller
              to resolve the issue.
            </li>
            <li className="text-gray-500 font-normal">
              Ensure the notice is signed by both the lawyer and the sender,
              with the lawyer keeping a copy.
            </li>
          </ul>
        </div>
      ),
    },
    {
      name: "Easydrafting?",
      label: "Why Choose Easydrafting?",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="text-gray-500">
              <li className="list-disc mt-1 text-gray-700 font-normal">
                <strong>Legal Experts at Your Reach</strong> Easydrafting
                connects you with verified lawyers who deliver professional
                services efficiently. You can monitor the progress of your case
                at any time through our platform.
              </li>
              <li className="list-disc mt-1 text-gray-700 font-normal">
                <strong>Customer Satisfaction</strong> Our clients consistently
                rate us highly due to our commitment to simplifying legal
                processes and providing regular updates.
              </li>
              <li className="list-disc mt-1 text-gray-700 font-normal">
                <strong>Strong Support Team </strong> Our team of experienced
                business advisors is always available to answer your questions
                and ensure a smooth and seamless interaction with our
                professionals.
                <br />
                For expert legal assistance or to learn more about sending a
                legal notice for defective goods, contact Easydrafting in Noida,
                Greater Noida, and Noida Extension.
              </li>
            </li>
          </ul>
        </div>
      ),
    },
  ];
  const faqItems = [
    {
      question: "What is a legal notice in consumer cases?",
      answer:
        "A legal notice in consumer cases is a formal communication sent by a consumer to a seller or service provider, outlining the grievances related to defective goods or unsatisfactory services, and demanding rectification or compensation.",
    },
    {
      question: "When should I send a legal notice to a seller?",
      answer:
        "You should send a legal notice if the seller has failed to provide quality goods or services, or if you are dissatisfied with the product or service and the issue has not been resolved through direct communication.",
    },
    {
      question:
        "Is it mandatory to send a legal notice before filing a consumer complaint?",
      answer:
        "While it's not always mandatory, sending a legal notice gives the seller an opportunity to resolve the issue out of court. It can strengthen your case if the matter escalates to a consumer forum.",
    },
    {
      question:
        "What information should be included in a legal notice for consumer matters?",
      answer:
        "The notice should include the seller's details, a description of the problem, the date the issue occurred, your grievances, previous communications, and the actions you expect the seller to take, along with a deadline for resolution.",
    },
    {
      question: "How long does a seller have to respond to a legal notice?",
      answer:
        "Typically, the seller is given 15 to 30 days to respond to the legal notice. This period can be specified in the notice itself.",
    },
    {
      question: "Can I send a legal notice on my own, or do I need a lawyer?",
      answer:
        "While you can send a legal notice on your own, it is advisable to consult a lawyer who specializes in consumer law to ensure the notice is properly drafted and legally sound.",
    },
    {
      question:
        "What happens if the seller does not respond to the legal notice?",
      answer:
        "If the seller does not respond or resolve the issue within the specified time, you can proceed to file a complaint with the appropriate consumer forum for redressal.",
    },
    {
      question:
        "What are the basic rights of a consumer under the Consumer Protection Act?",
      answer:
        "Consumers have the right to safety, information, choice, representation, redressal, and consumer education. These rights are designed to protect consumers from unfair trade practices and defective products.",
    },
    {
      question:
        "Can I claim compensation for mental agony or harassment in a consumer case?",
      answer:
        "Yes, consumers can claim compensation for mental agony, harassment, or inconvenience caused by defective products or deficient services.",
    },
    {
      question:
        "Where can I file a complaint if the issue is not resolved after sending a legal notice?",
      answer:
        "If the issue is not resolved, you can file a complaint with the appropriate consumer forum based on the value of the claim and the location of the seller or service provider.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="wrapper">
        <div className="container pt-28 xl:!pt-[10rem] lg:!pt-[10rem] md:!pt-[10rem] sm:!pt-[10rem] lg:mb-5 relative">
          <div className="flex flex-col items-center">
            <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-9 xl:!px-12 font-space-grotesk text-center">
              Types of Drafting Complaints
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

export default DraftingComplaints;
