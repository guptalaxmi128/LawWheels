import React, { useState,useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Accordion from "../customAccordion/Accordion";
import TabMenu from "../tabMenu/TabMenu";
import { CheckCircle } from "lucide-react";
import cyberCrime from "../../assets/images/cyber_crime.png";

const CyberCrime = () => {
  const [showMore, setShowMore] = useState(false);

  const handleLearnMoreClick = () => {
    setShowMore(!showMore);
  };

  const [logoImage, setLogoImage] = useState(
    "https://law-wheel.b-cdn.net/image/cyber_crime.png"
  );

  useEffect(() => {
    const img = new Image();
    img.src = "https://law-wheel.b-cdn.net/image/cyber_crime.png";
    img.onload = () =>
      setLogoImage("https://law-wheel.b-cdn.net/image/cyber_crime.png");
    img.onerror = () => setLogoImage(cyberCrime);
  }, []);
  const tabs = [
    {
      name: "theftAndFraud",
      label: "Theft and Fraud",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="list-disc mt-1 text-gray-700 font-normal">
              <strong> Hacking: </strong>
              This involves breaking into computers or networks to steal
              sensitive information like personal details, credit card numbers,
              or bank account information. For instance, in late 2013, hackers
              stole millions of customers' personal information from the retail
              company Target by hacking into their systems through the company
              that managed Target's heating and cooling systems.
            </li>
            <li className="list-disc mt-1 text-gray-700 font-normal">
              <strong>Phishing: </strong>
              This is a technique where cybercriminals send fake emails that
              appear to come from legitimate sources, tricking recipients into
              providing personal information.
            </li>
            <li className="list-disc mt-1 text-gray-700 font-normal">
              <strong> Identity Theft: </strong>
              This occurs when someone illegally obtains and uses another
              person's personal information to commit fraud, such as opening
              bank accounts or taking out loans in the victim’s name.
            </li>
            <li className="list-disc mt-1 text-gray-700 font-normal">
              <strong> Credit Card Fraud: </strong>
              This involves the unauthorized use of someone’s credit card
              information for purchases or cash withdrawals.
            </li>
          </ul>
        </div>
      ),
    },
    {
      name: "otherCybercrimes",
      label: "Other Cybercrimes",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="list-disc mt-1 text-gray-700 font-normal">
              <strong> Child Pornography: </strong>
              The use of the internet to share illegal images and videos
              involving minors.
            </li>
            <li className="list-disc mt-1 text-gray-700 font-normal">
              <strong> Espionage:</strong>
              Spying on individuals or organizations to steal sensitive
              information, often for political or financial gain.
            </li>
            <li className="list-disc mt-1 text-gray-700 font-normal">
              <strong> Cyberbullying and Harassment:</strong>
              Using the internet to bully, threaten, or harass others.
            </li>
            <li className="list-disc mt-1 text-gray-700 font-normal">
              <strong> Copyright Infringement: </strong>
              Illegally sharing copyrighted material like movies, music, and
              software without permission.
            </li>
          </ul>
        </div>
      ),
    },
    {
      name: "cyberAttacks",
      label: "Cyber Attacks",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="list-disc mt-1 text-gray-700 font-normal">
              <strong> Viruses and Malware: </strong>
              Malicious software that can damage or disable computers and
              networks. They can steal, encrypt, or delete data.
            </li>
            <li className="list-disc mt-1 text-gray-700 font-normal">
              <strong> Distributed Denial-of-Service (DDoS) Attacks: </strong>
              Overloading a server with traffic to make it unavailable to users.
              An example of this is when the U.S. Department of Justice’s
              website was disabled by a DDoS attack following the raid on the
              file-sharing site Megaupload.
            </li>
          </ul>
        </div>
      ),
    },
  ];
  const faqItems = [
    {
      question: "What is cybercrime?",
      answer:
        "Cybercrime involves illegal activities done using computers and the internet.",
    },
    {
      question: "What are common types of cybercrime?",
      answer:
        "Common types include identity theft, credit card fraud, cyberattacks, and sharing illegal materials.",
    },
    {
      question: "How do cybercriminals steal information?",
      answer:
        "They use techniques like hacking and sending malicious emails to access personal data.",
    },
    {
      question: "What is a DDoS attack?",
      answer:
        "A DDoS attack floods a server with too many requests, causing it to shut down.",
    },
    {
      question: "What laws protect against cybercrime?",
      answer:
        "There are various laws, including those against wire fraud, computer fraud, and email fraud.",
    },
    {
      question: "What is wire fraud?",
      answer: "Wire fraud is using electronic communication to commit fraud.",
    },
    {
      question: "What is computer fraud?",
      answer:
        "Computer fraud involves accessing computers without permission to commit crimes.",
    },
    {
      question: "How can I protect myself from cybercrime?",
      answer:
        "Use strong passwords, keep your software updated, and be cautious of suspicious emails.",
    },
    {
      question: "What should I do if I am a victim of cybercrime?",
      answer:
        "Report it to the authorities, change your passwords, and monitor your accounts for suspicious activity.",
    },
    {
      question: "Are there specific laws against online harassment?",
      answer:
        "Yes, many states have laws against online stalking, harassment, and revenge porn.",
    },
    {
      question: "How can I stay safe online?",
      answer:
        "Cybercrime is a growing problem, but by understanding the risks and knowing how to protect yourself, you can stay safe online. If you ever become a victim, it's important to seek help immediately.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="wrapper">
        <div className="container pt-20 xl:!pt-[4rem] lg:!pt-[4rem] md:!pt-[4rem] sm:!pt-[4rem] lg:mb-5 relative">
          <div className="card !bg-[#eaebea] mb-10">
            <div className="card-body xl:!p-[2.4rem] lg:!p-[2.5rem] md:!p-[2.5rem] xxl:!py-24 p-[20px] !relative">
              <div
                className="absolute hidden lg:block xl:block crime-container"
               
              >
                <figure className="m-0 p-0">
                  <img
                    className="w-full max-w-full !h-auto"
                  src={logoImage}
                  onError={()=>setLogoImage(cyberCrime)}
                    alt="image"
                  />
                </figure>
              </div>

              <div className="flex flex-wrap mx-[-10px]">
                <div className="lg:w-8/12 xl:w-8/12 w-full flex-[0_0_auto] px-[15px] xl:px-[15px]">
                  <p className="text-xl font-bold font-space-grotesk">
                    Understanding Cybercrime in Simple Terms
                  </p>
                  <div>
                    <div className="info p-0">
                      <p className="!mb-1 text-[.9rem] !leading-[1.5] font-space-grotesk">
                        Cybercrime, or "computer crime," involves illegal
                        activities carried out using computers and the internet.
                        These crimes can range from stealing personal
                        information to disrupting entire computer networks.
                        Cybercrime can be broadly categorized into different
                        types, each with specific goals and methods.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em]  xl:!px-12 font-space-grotesk text-center">
              Types of Cyber Crimes
            </h3>
            <div className="w-full max-w-4xl mx-auto text-center">
              <TabMenu tabs={tabs} />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="wrapper">
        <div className="container pt-28 xl:!pt-[10rem] lg:!pt-[10rem] md:!pt-[10rem] sm:!pt-[10rem] lg:mb-5 relative">
          <div className="flex flex-wrap items-start lg:mt-[-50px] mb-[5rem] relative ">
            <div className="lg:w-1/2 z-10 bg-[#eaebea] p-6  lg:text-left rounded-tl-lg rounded-bl-lg">
              <h2 className="text-xl font-semibold mb-2 font-space-grotesk">
                Understanding Cybercrime in Simple Terms
              </h2>
              <p className="text-gray-700 font-space-grotesk ">
                Cybercrime, or "computer crime," involves illegal activities
                carried out using computers and the internet. These crimes can
                range from stealing personal information to disrupting entire
                computer networks. Cybercrime can be broadly categorized into
                different types, each with specific goals and methods.
              </p>
            </div>
            <div className="lg:w-1/2 lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 flex justify-end md:h-full">
              <div className="relative w-full h-full md:h-full">
                <div className="absolute inset-0 w-32 lg:bg-[#eaebea] z-0 rounded-tr-lg rounded-br-lg"></div>
                <img
                  src={cyberCrime}
                  alt="CyberCrime"
                  className="relative w-1/2 h-full  z-10"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-9 xl:!px-12 font-space-grotesk text-center">
              Types of Cyber Crimes
            </h3>
            <div className="w-full max-w-4xl mx-auto text-center">
              <TabMenu tabs={tabs} />
            </div>
          </div>
        </div>
      </section> */}

      <section
        id="snippet-3"
        className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid"
      >
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20 ">
          <div className="flex flex-wrap mx-[-15px] ">
            <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
              <h2 className="!text-[.75rem] uppercase text-[#aab0bc] !mb-3 tracking-[0.02rem] leading-[1.35] !text-center font-space-grotesk">
                What We Do?
              </h2>
              <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-10 xl:!px-10 !text-center font-space-grotesk">
                Laws Against Cybercrime
              </h3>
            </div>
          </div>

          <div className="!relative">
            <div
              className="shape !rounded-[50%] !bg-[#edf2fc] rellax !w-[6rem] !h-[6rem] !absolute z-[1]"
              data-rellax-speed="1"
              style={{ bottom: "-0.5rem", right: "-2.2rem", zIndex: "0" }}
            ></div>
            <div
              className="shape bg-dot yellow rellax !w-[6rem] !h-[7rem] !absolute opacity-50"
              data-rellax-speed="1"
              style={{ top: "-0.5rem", left: "-2.5rem", zIndex: "0" }}
            ></div>
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px] ">
              <div className="md:w-6/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <h4 className="font-space-grotesk ">Wire Fraud</h4>
                    <div className="flex">
                      {" "}
                      <CheckCircle
                        className="text-blue-500  h-4 mr-2"
                        style={{ width: "5rem" }}
                      />{" "}
                      <p className="!mb-2 font-space-grotesk text-xs text-justify">
                        This law prohibits using electronic communication (like
                        emails or the internet) to commit fraud. It has been
                        expanded by the courts to include the use of computer
                        and cable networks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-6/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <h4 className="font-space-grotesk">Computer Fraud</h4>
                    <p className="!mb-2 font-space-grotesk text-xs text-justify">
                      This law forbids accessing a computer without permission,
                      especially if it's used by the government or financial
                      institutions, or if it's involved in interstate commerce.
                      It includes activities like:
                    </p>
                    {showMore && (
                      <ul className="list-none mt-1 space-y-2 font-space-grotesk">
                        <li className="flex items-start text-xs">
                          <CheckCircle className="text-blue-500 w-5 h-4 mr-2" />
                          Accessing classified or sensitive information.
                        </li>
                        <li className="flex items-start text-xs">
                          <CheckCircle className="text-blue-500 w-5 h-4 mr-2" />
                          Stealing confidential financial or credit data.
                        </li>
                        <li className="flex items-start text-xs">
                          <CheckCircle className="text-blue-500 w-5 h-4 mr-2" />
                          Disrupting government operations.
                        </li>
                        <li className="flex items-start text-xs">
                          <CheckCircle className="text-blue-500 w-5 h-4 mr-2" />
                          Committing fraud involving amounts greater than
                          $5,000.
                        </li>
                        <li className="flex items-start text-xs">
                          <CheckCircle className="text-blue-500 w-5 h-4 mr-2" />
                          Damaging computers by transmitting viruses or malware.
                        </li>
                        <li className="flex items-start text-xs">
                          <CheckCircle className="text-blue-500 w-5 h-4 mr-2" />
                          Trafficking passwords for government computers.
                        </li>
                        <li className="flex items-start text-xs">
                          <CheckCircle className="text-blue-500 w-5 h-4 mr-2" />
                          Extorting victims by threatening to damage computers
                          or steal information.
                        </li>
                      </ul>
                    )}
                    <a
                      href="#"
                      onClick={handleLearnMoreClick}
                      className="more hover text-[#3f78e0] focus:text-[#3f78e0] hover:text-[#3f78e0] text-xs  block font-space-grotesk"
                    >
                      {showMore ? "Show Less" : "Learn More"}
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:w-6/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <h4 className="font-space-grotesk">Email Fraud</h4>
                    <div className="flex">
                      {" "}
                      <CheckCircle
                        className="text-blue-500  h-4 mr-2"
                        style={{ width: "5rem" }}
                      />{" "}
                      <p className="!mb-2 font-space-grotesk text-xs text-justify">
                        This law makes it illegal to access computers to send
                        fraudulent emails, alter email headers, and engage in
                        activities commonly associated with internet spam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-6/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <h4 className="font-space-grotesk">
                      State Laws on Cyberbullying and Revenge Porn
                    </h4>
                    <div className="flex">
                      {" "}
                      <CheckCircle
                        className="text-blue-500  h-4 mr-2"
                        style={{ width: "5rem" }}
                      />{" "}
                      <p className="!mb-2 font-space-grotesk text-xs text-justify">
                        Many states have enacted laws to combat online stalking,
                        harassment, and revenge porn, which involves sharing
                        intimate photos without consent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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

export default CyberCrime;
