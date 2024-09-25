import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Accordion from "../customAccordion/Accordion";
import TabMenu from "../tabMenu/TabMenu";
import pocso from "../../assets/images/posco.png";

const POCSOAct = () => {
  const [logoImage, setLogoImage] = useState(
    "https://law-wheel.b-cdn.net/image/posco.png"
  );

  useEffect(() => {
    const img = new Image();
    img.src = "https://law-wheel.b-cdn.net/image/posco.png";
    img.onload = () =>
      setLogoImage("https://law-wheel.b-cdn.net/image/posco.png");
    img.onerror = () => setLogoImage(pocso);
  }, []);
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
      question: "What is the POCSO Act?",
      answer:
        "The POCSO Act is a law designed to protect children under 18 from sexual offenses, including harassment, abuse, and pornography.",
    },
    {
      question: "What is the objective of the POCSO Act?",
      answer:
        "To provide a child-friendly trial environment and ensure strict punishment for offenders.",
    },
    {
      question: "What recent amendments have been made to the POCSO Act?",
      answer:
        "The Criminal Law Amendment Bill, 2018, which enhances punishments for crimes against girl children.",
    },
    {
      question:
        "What is the punishment for raping a child under 12 years under the new amendment?",
      answer:
        "The perpetrator can be sentenced to up to 20 years in prison, with the death penalty for severe cases.",
    },
    {
      question:
        "What is the punishment for gang rape of a child under 12 years?",
      answer:
        "Life imprisonment is the punishment for gang rape of a child under 12 years.",
    },
    {
      question:
        "What are the penalties for crimes against children aged 16 to 18 under the POCSO Act?",
      answer: "Offenders face 10 years to life imprisonment.",
    },
    {
      question: "What happens to repeat offenders under the POCSO Act?",
      answer:
        "Repeat offenders may receive the death penalty or life imprisonment.",
    },
    {
      question: "How quickly are POCSO cases resolved?",
      answer:
        "POCSO cases are resolved in fast-track courts, ideally within six months.",
    },
    {
      question: "Who does the POCSO Act apply to?",
      answer:
        "The Act applies to any person who commits a sexual offense against a child under 18 years.",
    },
    {
      question: "How can Lex Jurists help with POCSO cases?",
      answer:
        "Lex Jurists provides experienced lawyers who stay updated with amendments and work to ensure the best outcomes for clients. Feel free to reach out to Lex Jurists for expert legal assistance with POCSO cases.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="wrapper">
        <div className="container pt-20 xl:!pt-[4rem] lg:!pt-[4rem] md:!pt-[4rem] sm:!pt-[4rem] lg:mb-5 relative">
          <div className="card !bg-[#f2e5df] mb-10">
            <div className="card-body xl:!p-[1.4rem] lg:!p-[2.5rem] md:!p-[2.5rem] xxl:!py-24 p-[15px] !relative">
              <div className="absolute hidden pocso-img lg:block xl:block">
                <figure className="m-0 p-0">
                  <img
                    className="w-full max-w-full !h-auto"
                    src={logoImage}
                    onError={() => setLogoImage(pocso)}
                    alt="image"
                  />
                </figure>
              </div>

              <div className="flex flex-wrap mx-[-10px]">
                <div className="lg:w-8/12 xl:w-8/12 w-full flex-[0_0_auto] px-[15px] xl:px-[15px]">
                  <p className="text-xl font-bold font-space-grotesk">
                    Understanding the POCSO Act
                  </p>
                  <div>
                    <div className="info p-0">
                      <p className="!mb-1 text-[.9rem] !leading-[1.5] font-space-grotesk">
                        The Protection of Children from Sexual Offenses (POCSO)
                        Act, 2012, was established to safeguard children under
                        18 from sexual crimes like harassment, abuse, and child
                        pornography. The Act aims to create a child-friendly
                        environment during trials and ensures perpetrators face
                        strict punishment. It also includes measures to prevent
                        the re-victimization of children.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em]  xl:!px-12 font-space-grotesk text-center">
              Types of POCSO Act
            </h3>
            <div className="w-full max-w-4xl mx-auto text-center">
              <TabMenu tabs={tabs} />
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper  py-6 mb-10">
        <div className="container mx-auto px-4">
          <div className="bg-[#e6e5f4] rounded-md p-6 shadow-md">
            <h2 className=" text-2xl font-semibold mb-4 text-[#334155] font-space-grotesk ">
              New Amendment
            </h2>

            <p className="text-gray-700 mb-4 font-space-grotesk ">
              Recently, the government introduced the POCSO Amendment Act. The
              Criminal Law Amendment Bill, 2018, strengthens the penalties for
              crimes against girl children of various age groups.
            </p>
            <h3 className="text-xl font-semibold mb-4  font-space-grotesk ">
              Key changes include:
            </h3>
            <ul className="list-disc pl-5 mb-4 text-gray-700 font-space-grotesk ">
              <li>
                For victims below 12 years: The perpetrator faces up to 20 years
                in prison, increased from the previous 10 years.
              </li>
              <li>
                The death penalty is the maximum punishment for severe cases,
                including gang rape of children under 12.
              </li>
              <li>
                For victims aged 16 to 18: Punishments range from 10 years in
                prison to life imprisonment.
              </li>
              <li>Repeat offenders may face death or life imprisonment.</li>
              <li>
                Cases are resolved in fast-track courts, with a mandate to
                conclude within six months.
              </li>
            </ul>
            <p className="text-gray-700 mb-4 font-space-grotesk ">
              Lex Jurists is a top POCSO law firm in Delhi, specializing in
              cases under this Act. Our experienced lawyers stay updated with
              the latest amendments to ensure the best outcomes for our clients.
              We are dedicated to resolving cases efficiently and effectively.
            </p>
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

export default POCSOAct;
