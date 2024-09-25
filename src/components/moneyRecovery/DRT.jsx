import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Accordion from "../customAccordion/Accordion";
import TabMenu from "../tabMenu/TabMenu";

const DRT = () => {
  const tabs = [
    {
      name: "recoveryActs",
      label: "Recovery Acts",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="text-gray-500">
              <strong> RDDBFI Act:</strong>
              The Recovery of Debts Due to Banks and Financial Institutions
              (RDDBFI) Act, 1993, was established to create Tribunals for the
              swift adjudication and recovery of debts owed to banks and
              financial institutions. It also covers related or incidental
              matters.
            </li>
            <li className="text-gray-500">
              <strong>SARFAESI Act:</strong>
              The Securitization and Reconstruction of Financial Assets and
              Enforcement of Security Interest (SARFAESI) Act, 2002, regulates
              the securitization and reconstruction of financial assets and the
              enforcement of security interests, along with related or
              incidental matters.
            </li>
          </ul>
        </div>
      ),
    },
    {
      name: "DocumentsRequired ",
      label: "Documents Required ",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="text-gray-500">
              A statement showing details of the debt due and circumstances
              under which it became due.
            </li>
            <li className="text-gray-500">
              Any documents relied upon by the applicant.
            </li>
            <li className="text-gray-500">
              Crossed Bank Draft or Indian Postal Order representing the
              application fee.
            </li>
            <li className="text-gray-500">
              Index of documents to be produced.
            </li>
          </ul>
        </div>
      ),
    },
    {
      name: "Fees",
      label: "Fees",
      content: (
        <div className="font-space-grotesk text-gray-500 ont-normal ">
          The fees depend on the amount involved in the case. The tribunal
          levies a fixed percentage of the amount as the fee, which can be
          reduced by the tribunal's order if necessary.
        </div>
      ),
    },
    {
      name: "ProcessOfApplication",
      label: "Process of Application",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="text-gray-500 font-normal">
              <strong>Filing the Application :</strong> Submit the Original
              Application (OA) to the DRT, including details of the debt and
              relevant case details.
            </li>
            <li className="text-gray-500 font-normal">
              <strong> Inspection of Application :</strong> The registrar
              inspects the application and assigns a serial number for tracking.
            </li>
            <li className="text-gray-500 font-normal">
              <strong> Summons to Respondent :</strong> The Presiding Officer
              issues a show-cause notice to the respondent.
            </li>
            <li className="text-gray-500 font-normal">
              <strong> Affidavit Submission :</strong> Both parties present
              their arguments and supporting documents in the form of affidavits
              to the tribunal. Final Order : The Presiding Officer examines all
              arguments and evidence, then issues a final order. If the judgment
              favors the bank, a Recovery Certificate is issued to the recovery
              officer. If it favours the borrower, the case is dismissed.
            </li>
            <li className="text-gray-500 font-normal">
              <strong> Final Order :</strong>
              The Presiding Officer examines all arguments and evidence, then
              issues a final order. If the judgment favors the bank, a Recovery
              Certificate is issued to the recovery officer. If it favours the
              borrower, the case is dismissed.
              <br />
              Note: If either party is dissatisfied with the decision, they can
              appeal to the DRAT.
            </li>
          </ul>
        </div>
      ),
    },
  ];
  const faqItems = [
    {
      question: "What is the DRT?",
      answer:
        "The Debt Recovery Tribunal (DRT) is a specialized tribunal established to handle cases involving the recovery of debts owed to banks and financial institutions.",
    },
    {
      question: "What types of applications can be filed in the DRT?",
      answer:
        "Original Application (OA), Securitization Application (SA), Interlocutory Application (IA), and Miscellaneous Application (MA).",
    },
    {
      question: "How many DRTs and DRATs are there in India?",
      answer: "There are 39 DRTs and 5 DRATs in India.",
    },
    {
      question: "What is the RDDBFI Act, 1993?",
      answer:
        "The Recovery of Debts Due to Banks and Financial Institutions Act, 1993, establishes tribunals for the speedy adjudication and recovery of debts due to banks and financial institutions.",
    },
    {
      question: "What is the SARFAESI Act, 2002?",
      answer:
        "The Securitization and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002, regulates the securitization and reconstruction of financial assets and enforcement of security interests.",
    },
    {
      question:
        "What documents are required to file an application in the DRT?",
      answer:
        "A statement of debt details, relevant documents, application fee in the form of a Bank Draft or Indian Postal Order, and an index of documents.",
    },
    {
      question:
        "How are the fees for filing an application in the DRT determined?",
      answer:
        "Fees are a fixed percentage of the amount involved in the case and can be reduced by the tribunal if necessary.",
    },
    {
      question: "What is the process for filing an application in the DRT?",
      answer:
        "File the OA, have it inspected by the registrar, obtain a serial number, have the Presiding Officer issue a summons, present arguments and documents, and receive a final order.",
    },
    {
      question: "Can decisions of the DRT be appealed?",
      answer:
        "Yes, decisions can be appealed to the DRAT, provided the appellant deposits 75% of the debt amount as determined by the DRT.",
    },
    {
      question: "Why is the DRT important?",
      answer:
        "The DRT helps reduce the burden on higher courts and provides a speedy resolution in debt recovery matters for banks and financial institutions.",
    },
  ];

  const DRTData = [
    {
      heading: "DRAT Chennai",
      value: [
        "DRT Chennai-1",
        " DRT Chennai-2",
        " DRT Chennai-3",
        "DRT Bangluru-1",
        "DRT-Bangluru-2",
        "DRT Coimbatore",
        "DRT Ernakulam-1",
        "DRT Ernakulam-2",
        "DRT Madurai",
      ],
    },
    {
      heading: "DRAT Kolkata",
      value: [
        "DRT Kolkata-1",
        "DRT Kolkata-2",
        "DRT Kolkata-3",
        "DRT Hyderabad-1",
        "DRT Hyderbad-2",
        "DRT Visakhapatnam",
        "DRT Siliguri",
        "DRT Cuttack",
        "DRT Guwahati",
      ],
    },
    {
      heading: "DRAT Mumbai",
      value: [
        "DRT Mumbai-1",
        "DRT Mumbai-2",
        "DRT Mumbai-3",
        "DRT Ahmedabad-1",
        "DRT Ahmedabad-2",
        "DRT Aurangabad",
        "DRT Nagpur",
        "DRT Pune",
      ],
    },
    {
      heading: "DRAT Delhi",
      value: [
        "DRT Delhi-1",
        "DRT Delhi-2",
        "DRT Delhi-3",
        "DRT Chandigarh-1",
        "DRT Chandigarh-2",
        "DRT Chandigarh-3",
        "DRT Jaipur",
      ],
    },
    {
      heading: "DRAT Allahabad",
      value: [
        "DRT Allahabad",
        "DRT Dehradun",
        "DRT Jabalpur",
        "DRT Patna",
        "DRT Ranchi",
        "DRT Lucknow",
      ],
    },
  ];
  return (
    <>
      <Navbar />
      <section className="wrapper">
        <div className="container pt-20 xl:!pt-[3rem] lg:!pt-[3rem] md:!pt-[3rem] sm:!pt-[3rem] lg:mb-5 relative">
          <div className="bg-gray-100 p-8 rounded-md mb-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 font-space-grotesk ">
              Debt Recovery Tribunal (DRT)
            </h2>
            <p className="text-gray-700 mb-4 font-space-grotesk ">
              The Debt Recovery Tribunal (DRT) was set up in 1993 to address the
              backlog of money recovery cases for banks. Both banks and
              defaulters can file applications in the DRT to resolve disputes.
              The tribunal's powers are akin to those of a civil court, with the
              primary objective of providing a speedy resolution.
            </p>
            <p className="text-gray-700 mb-4 font-space-grotesk ">
              Are you concerned about recovering money owed to you by a bank or
              financial institution? The Debt Recovery Tribunal (DRT) may be the
              solution you're looking for. Established to handle the recovery of
              debts due to banks and financial institutions, the DRT deals with
              cases involving amounts greater than ₹20 lakhs. This guide will
              explain the process, fees, and documents required for filing an
              application with the DRT.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg  max-w-full mx-auto mt-6 mb-10">
            <h2 className="text-2xl font-semibold mb-4 font-space-grotesk ">
              Types of Applications Under the DRT
            </h2>
            <ul className="list-disc pl-5 mb-6 font-space-grotesk ">
              <li className="mb-2">Original Application (OA)</li>
              <li className="mb-2">Securitization Application (SA)</li>
              <li className="mb-2">Interlocutory Application (IA)</li>
              <li>Miscellaneous Application (MA)</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4 font-space-grotesk ">
              Debt Recovery Appellate Tribunal (DRAT)
            </h2>
            <p className="mb-2 font-space-grotesk ">
              If a party is dissatisfied with the DRT's decision, they can
              appeal to the Debt Recovery Appellate Tribunal (DRAT). However,
              DRAT requires the appellant to deposit 75% of the debt amount as
              determined by the DRT before entertaining the appeal.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] xl:!px-12 font-space-grotesk text-center">
              Types of DRT (Debt Recovery Tribunal)
            </h3>
            <div className="w-full max-w-4xl mx-auto text-center">
              <TabMenu tabs={tabs} />
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center">
        <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] xl:!px-12 font-space-grotesk text-center">
          Branches of DRTs and DRATs
        </h3>
        <div className="container mx-auto p-2 mb-5">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:hidden gap-4">
            {DRTData.map((item, index) => (
              <div
                key={index}
                className="border border-blue-800 rounded-lg bg-white shadow-sm"
              >
                <h3 className="font-bold text-sm mb-4 font-space-grotesk text-center gradient-header">
                  {item.heading}
                </h3>
                <ul className="pl-5 pb-2 text-xs font-space-grotesk">
                  {item.value.map((val, idx) => (
                    <li key={idx} className="flex items-center mb-2 px-1">
                      <div className="w-4 h-4 mr-2 rounded-full  flex items-center justify-center gradient-svg">
                        <svg
                          className="w-4 h-4 "
                          fill="#ffffff"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.485 1.929a.5.5 0 0 1 0 .707L6.707 9.414a.5.5 0 0 1-.707 0L2.515 6.929a.5.5 0 1 1 .707-.707l3.036 3.035 6.071-6.071a.5.5 0 0 1 .707 0z" />
                        </svg>
                      </div>
                      {val}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto p-2 mb-20 hidden xl:block">
          <div className="grid sm:hidden md:hidden lg:hidden xl:grid-cols-3 gap-4">
            {DRTData.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="border border-blue-800 rounded-lg bg-white shadow-sm"
              >
                <h3 className="font-bold text-sm mb-4 font-space-grotesk text-center gradient-header">
                  {item.heading}
                </h3>
                <ul className="pl-5 pb-2 text-xs font-space-grotesk">
                  {item.value.map((val, idx) => (
                    <li key={idx} className="flex items-center mb-2 px-1">
                      <div className="w-4 h-4 mr-2 rounded-full flex items-center justify-center gradient-svg">
                        <svg
                          className="w-4 h-4"
                          fill="#ffffff"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.485 1.929a.5.5 0 0 1 0 .707L6.707 9.414a.5.5 0 0 1-.707 0L2.515 6.929a.5.5 0 1 1 .707-.707l3.036 3.035 6.071-6.071a.5.5 0 0 1 .707 0z" />
                        </svg>
                      </div>
                      {val}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-4">
            {DRTData.slice(3, 5).map((item, index) => (
              <div
                key={index}
                className="border border-blue-800 rounded-lg bg-white shadow-sm w-full max-w-[calc(33.333%-1rem)]"
              >
                <h3 className="font-bold text-sm mb-4 font-space-grotesk text-center gradient-header">
                  {item.heading}
                </h3>
                <ul className="pl-5 pb-2 text-xs font-space-grotesk">
                  {item.value.map((val, idx) => (
                    <li key={idx} className="flex items-center mb-2 px-1">
                      <div className="w-4 h-4 mr-2 rounded-full flex items-center justify-center gradient-svg">
                        <svg
                          className="w-4 h-4"
                          fill="#ffffff"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.485 1.929a.5.5 0 0 1 0 .707L6.707 9.414a.5.5 0 0 1-.707 0L2.515 6.929a.5.5 0 1 1 .707-.707l3.036 3.035 6.071-6.071a.5.5 0 0 1 .707 0z" />
                        </svg>
                      </div>
                      {val}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

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

export default DRT;
