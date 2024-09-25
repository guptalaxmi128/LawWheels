import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Accordion from "../customAccordion/Accordion";
import TabMenu from "../tabMenu/TabMenu";


const ShowCauseHearing = () => {
  const tabs = [
    {
      name: "facts",
      label: "Facts",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="list-disc mt-1 text-gray-700 font-normal">
              <strong>Prevalence:</strong> Domestic violence is common across
              all social classes in India.
            </li>
            <li className="list-disc mt-1 text-gray-700 font-normal">
              <strong> Reporting:</strong>
              Many women do not report abuse due to shame, guilt, or lack of
              support.
            </li>
            <li className="list-disc mt-1 text-gray-700 font-normal">
              <strong>Legal Protection:</strong> There are strong laws against
              domestic violence in India.
            </li>
            <li className="list-disc mt-1 text-gray-700 font-normal">
              <strong>Misuse of Laws</strong> While some may misuse these laws,
              the need for legal protection remains critical.
            </li>
          </ul>
        </div>
      ),
    },
    {
      name: "keyStatistics",
      label: "Key Statistics",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="list-disc mt-1 text-gray-700 font-normal">
              <strong>Domestic Violence:</strong> According to the National
              Family Health Survey (NHFS-4), one in three women in India has
              faced domestic violence since the age of 15.
            </li>
            <li className="list-disc mt-1 text-gray-700 font-normal">
              <strong>Types of Violence:</strong>
              The most common type of spousal violence is physical (27%),
              followed by emotional (13%)
            </li>
            <li className="list-disc mt-1 text-gray-700 font-normal">
              <strong>Perpetrators:</strong> Husbands are often the perpetrators
              of domestic violence
            </li>
          </ul>
        </div>
      ),
    },
    {
      name: "legalAndSupportMesures",
      label: "Legal and Support Measures",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="list-disc mt-1 text-gray-700 font-normal">
              <strong>Protection of Women from Domestic Violence Act:</strong>{" "}
              This law provides various protections and remedies for victims.
            </li>
            <li className="list-disc mt-1 text-gray-700 font-normal">
              <strong> Counseling and Mediation:</strong>
              Recent changes allow NGOs, counselors, and police to mediate and
              counsel victims without a court order.
            </li>
          </ul>
        </div>
      ),
    },
  
  ];
  const faqItems = [
    {
      question: "What is a Show Cause Hearing?",
      answer: "A Show Cause Hearing is a legal procedure in trademark registration where the applicant must address objections raised by the Trademark Office.",
    },
    {
      question: "What evidence can be submitted in a Trademark Show Cause Hearing?",
      answer: "Evidence may include business proofs, affidavits, case references, and additional documents supporting the trademark's validity.",
    },
    {
      question: "What are the common reasons for a Trademark Show Cause Hearing?",
      answer: "Common reasons include likelihood of confusion, geographical significance, incorrect classification, and false or incomplete information.",
    },
    {
      question: "What is the likelihood of confusion in trademark law?",
      answer: "Likelihood of confusion refers to the possibility that consumers may mistakenly believe that two trademarks are related due to their similarities.",
    },
    {
      question: "Can I avoid a Trademark Show Cause Hearing?",
      answer: "While not always avoidable, thorough research and proper filing can reduce the chances of receiving objections that lead to a hearing.",
    },
    {
      question: "How can I prepare for a Trademark Show Cause Hearing?",
      answer: "Preparation involves understanding the objections, consulting with a trademark attorney, gathering necessary documents, and crafting strong arguments.",
    },
    {
      question: "What happens if I do not attend the Show Cause Hearing?",
      answer: "Failure to attend the hearing may result in the rejection of your trademark application.",
    },
    {
      question: "Can I appeal the decision of a Trademark Show Cause Hearing?",
      answer: "Yes, you can appeal the decision if you believe the outcome was unjust, but it’s advisable to consult with an attorney for the appeal process.",
    },
    {
      question: "What is the role of a trademark attorney in a Show Cause Hearing?",
      answer: "A trademark attorney provides legal expertise, helps prepare your case, and represents you during the hearing to improve your chances of success.",
    },
    {
      question: "Why is LawWheels Legalis the best choice for handling Trademark Show Cause Hearings?",
      answer: "LawWheels Legalis offers free legal advice, expert lawyers, affordable fees, and a quick process, making it a top choice for trademark-related legal services.",
    },
  ];
  

  return (
    <>
      <Navbar />
      <section className="wrapper">
        <div className="container pt-28 xl:!pt-[10rem] lg:!pt-[10rem] md:!pt-[10rem] sm:!pt-[10rem]  relative">
          {/* <div className="card !bg-[#eaebea] mb-10">
            <div className="card-body xl:!p-[1.5rem] lg:!p-[2.5rem] md:!p-[2.5rem] xxl:!py-24 p-[20px] !relative">
              <div
                className="absolute hidden lg:block xl:block"
                style={{
                  top: "34%",
                  right: 0,
                  // right:-70,
                  transform: "translateY(-50%)",
                  width: "37%",
                  zIndex: "2",
                }}
              >
                <figure className="m-0 p-0">
                  <img
                    className="w-full max-w-full !h-auto"
                    // src={domestic}
                    src={"https://law-wheel.b-cdn.net/image/domestic.png"}
                    srcset="./assets/img/photos/co2@2x.png 2x"
                    alt="image"
                  />
                </figure>
              </div>

              <div className="flex flex-wrap mx-[-10px]">
                <div className="lg:w-8/12 xl:w-8/12 w-full flex-[0_0_auto] px-[15px] xl:px-[15px]">
                  <p className="text-xl font-bold font-space-grotesk">
                    What is Domestic Violence?
                  </p>
                  <div>
                    <div className="info p-0">
                      <p className="!mb-1 text-[.9rem] !leading-[1.5] font-space-grotesk">
                        Domestic violence involves any form of physical, sexual,
                        emotional, or economic abuse by a partner or family
                        member. It is not limited to any social class and can
                        happen to anyone.
                        <br />
                        <div className="!mb-1 text-[.9rem] !leading-[1.5] font-space-grotesk mt-5" >
                        <strong>The Cycle of Violence</strong> <br />
                        The cycle of violence explains why many victims stay in
                        abusive relationships. It describes the phases an
                        abusive relationship goes through, from tension building
                        to the actual violent event, and the reconciliation that
                        follows. Understanding this cycle can help explain why
                        leaving an abusive relationship can be difficult.
                        </div>
                    
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="flex flex-col items-center">
            <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] xl:!px-12 font-space-grotesk text-center">
              Types of Show Cause Hearing
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

export default ShowCauseHearing;
