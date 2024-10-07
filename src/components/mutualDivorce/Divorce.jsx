import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import FAQ from "../faq/FAQ";
import TabMenu from "../tabMenu/TabMenu";

const Divorce = () => {
  const tabs = [
    {
      name: "decree",
      label: "Decree",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="text-gray-500">
              <strong>Court Details:</strong> Name of the court that passed the
              decree.
            </li>
            <li className="text-gray-500">
              <strong>Case Details:</strong> Case number, date of decree, and
              names of the parties involved.
            </li>
            <li className="text-gray-500">
              <strong>Nature of the Decree:</strong> A brief description of the
              decree, whether it's for payment of money, transfer of property,
              or any other action.
            </li>
          </ul>
        </div>
      ),
    },
    {
      name: "judgmentDebtor",
      label: "Judgment Debtor",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="text-gray-500">
              <strong> Name and Address:</strong> Full name and current address
              of the judgment debtor.
            </li>
            <li className="text-gray-500">
              <strong>Assets:</strong> Description of the judgment debtor's
              assets that may be targeted for enforcement, such as bank
              accounts, real estate, or movable property.
            </li>
          </ul>
        </div>
      ),
    },
    {
      name: "modeOfExecution",
      label: "Mode of Execution",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="text-gray-500">
              The application should specify how the decree should be enforced.
              Common modes include:
              <li className="list-disc mt-1 text-gray-700 font-normal">
                Attachment and Sale of Property: Seizing and selling the
                debtor’s property to recover the amount due.
              </li>
              <li className="list-disc mt-1 text-gray-700 font-normal">
                Arrest and Detention: Imprisonment of the debtor for failing to
                comply with the court's order.
              </li>
              <li className="list-disc mt-1 text-gray-700 font-normal">
                Garnishee Orders: Directing a third party (such as a bank) to
                pay the decree holder directly from the debtor’s account.
              </li>
            </li>
          </ul>
        </div>
      ),
    },
    {
      name: "supportingDocuments",
      label: "Supporting Documents",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="text-gray-500">
              <strong> Certified Copy of the Decree:</strong> A copy of the
              original court decree.
            </li>
            <li className="text-gray-500">
              <strong> Affidavit:</strong>An affidavit affirming that the
              judgment debtor has not complied with the decree.
            </li>
            <li className="text-gray-500">
              <strong>Other Relevant Documents: </strong>Any other documents
              that support the execution application, such as property records,
              bank statements, etc.
            </li>
          </ul>
        </div>
      ),
    },
    {
      name: "prayerSought",
      label: "Prayers/Reliefs Sought",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="text-gray-500 font-semibold">
              A clear statement of what the decree holder is asking the court to
              do, such as seizing property, arresting the debtor, or appointing
              a receiver.
            </li>
          </ul>
        </div>
      ),
    },
    {
      name: "verification",
      label: "Verification",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="text-gray-500">
            The application must include a verification clause where the decree holder affirms that the statements made in the application are true to the best of their knowledge and belief.
            </li>
          </ul>
        </div>
      ),
    },
  ];
 


  return (
    <>
      <Navbar />
   
      <section className="wrapper">
        <div className="container pt-5 xl:!pt-[2rem] lg:!pt-[2rem] md:!pt-[2rem] sm:!pt-[2rem] lg:mb-5 relative">
          <div className="bg-gray-100 p-8 rounded-md mb-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 font-space-grotesk ">
             Divorce
            </h2>
            <p className="text-gray-700 mb-4 text-sm font-space-grotesk ">
            A divorce is when both spouses agree to end their marriage amicably and jointly file for divorce. It involves a cooperative approach to reach a settlement.
            </p>
          
          </div>
          <div className="flex flex-col items-center">
            <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] xl:!px-12 font-space-grotesk text-center">
              Divorce
            </h3>
            <div className="w-full max-w-4xl mx-auto text-center">
              <TabMenu tabs={tabs} />
            </div>
          </div>
          </div>
      </section>

      <div className="lg:pt-32 xl:pt-32 sm:pt-0">
        <section className="wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600 bg-content [background-size:100%] bg-[center_center] bg-no-repeat bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(255,255,255,.6)]">
          <div
            className="container py-[1rem] md:pt-24 lg:pt-0 xl:pt-0 xl:pb-[7rem] lg:pb-[7rem] md:pb-[7rem] !relative sm:pt-0"
            style={{ zIndex: "2" }}
          >
          <FAQ />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Divorce;
