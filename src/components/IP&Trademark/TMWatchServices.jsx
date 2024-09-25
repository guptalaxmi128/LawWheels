import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Accordion from "../customAccordion/Accordion";
import TabMenu from "../tabMenu/TabMenu";


const TMWatchServices = () => {
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
      question: "What is a Trademark Watch Service?",
      answer: "A Trademark Watch Service monitors trademark databases to detect potential infringements and conflicts, allowing brand owners to take timely action.",
    },
    {
      question: "Why is Trademark Protection important?",
      answer: "Trademark protection safeguards your brand’s identity, reputation, and investment, preventing unauthorized use by others.",
    },
    {
      question: "How does a Trademark Watch Service detect infringements?",
      answer: "The service monitors trademark databases, domain registrations, and marketplaces to identify unauthorized use of similar or identical marks.",
    },
    {
      question: "What should I do if an infringement is detected?",
      answer: "If an infringement is detected, you can issue a cease and desist letter or pursue legal action with the help of a trademark attorney.",
    },
    {
      question: "Can a Trademark Watch Service prevent all infringements?",
      answer: "While it cannot prevent all infringements, the service significantly reduces the risk by identifying potential issues early.",
    },
    {
      question: "Is a Trademark Watch Service necessary for small businesses?",
      answer: "Yes, small businesses benefit from this service by protecting their brand and avoiding costly legal disputes.",
    },
    {
      question: "How often should trademarks be monitored?",
      answer: "Continuous monitoring is recommended to ensure that any potential infringements are detected as soon as possible.",
    },
    {
      question: "What are the costs associated with a Trademark Watch Service?",
      answer: "Costs vary depending on the scope of monitoring and the services provided, but LawWheels Legalis offers competitive pricing.",
    },
    {
      question: "Can I handle trademark monitoring on my own?",
      answer: "While possible, professional monitoring services offer more comprehensive coverage and expertise, reducing the risk of missed infringements.",
    },
    {
      question: "Why choose Lawwheels Legalis for Trademark Watch Services?",
      answer: "LawWheels Legalis offers expert legal advice, affordable fees, and a quick, efficient process, making it the ideal choice for trademark protection.",
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
              Types of TM Watch Services
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

export default TMWatchServices;
