import React,{useState,useEffect} from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Accordion from "../customAccordion/Accordion";
import TabMenu from "../tabMenu/TabMenu";
import bail from "../../assets/images/bail.webp";

const BailApplication = () => {
  const [logoImage, setLogoImage] = useState(
    "https://law-wheel.b-cdn.net/image/bail.webp"
  );

  useEffect(() => {
    const img = new Image();
    img.src = "https://law-wheel.b-cdn.net/image/bail.webp";
    img.onload = () =>
      setLogoImage("https://law-wheel.b-cdn.net/image/bail.webp");
    img.onerror = () => setLogoImage(bail);
  }, []);
  const tabs = [
    {
      name: "TheBookingProcess",
      label: "The Booking Process",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="text-gray-500">
              When you're arrested, you're taken into custody and "booked,"
              which means the police will:
              <li className="list-disc mt-1 text-gray-700 font-normal">
                Take down your personal information (name, birthdate, etc.).
              </li>
              <li className="list-disc mt-1 text-gray-700 font-normal">
                Record the crime you’re accused of.
              </li>
              <li className="list-disc mt-1 text-gray-700 font-normal">
                Take your fingerprints and photos.
              </li>
              <li className="list-disc mt-1 text-gray-700 font-normal">
                Check your background for any previous criminal activity.
              </li>
              <li className="list-disc mt-1 text-gray-700 font-normal">
                Search you and take away your personal items (which you’ll get
                back later).
              </li>
              <li className="list-disc mt-1 text-gray-700 font-normal">
                Put you in a jail cell.
                <br />
                Sometimes, for minor offenses, you might be released after
                signing a promise to appear in court later. If not, you’ll have
                to go through the bail process.
              </li>
            </li>
          </ul>
        </div>
      ),
    },
    {
      name: "arraignmentAndBail",
      label: "Arraignment and Bail",
      content: (
        <div className="font-space-grotesk">
          <ul className="list-disc">
            <li className="text-gray-500">
              After booking, you’ll go to an arraignment, where the charges
              against you are read out, and you can arrange for your release. In
              some cases, you may be released on your own recognizance (OR),
              which means you don’t have to pay bail but promise in writing to
              show up in court. A judge decides if you’re eligible for OR based
              on:
              <li className="list-disc mt-1 text-gray-700 font-normal">
                The seriousness of your crime.
              </li>
              <li className="list-disc mt-1 text-gray-700 font-normal">
                Your criminal history.
              </li>
              <li className="list-disc mt-1 text-gray-700 font-normal">
                Whether you’re considered a danger to the community.
              </li>
              <li className="list-disc mt-1 text-gray-700 font-normal">
                Your ties to the community (to see if you might flee).
                <br />
                If you don’t show up for court after being released on OR, a
                warrant can be issued for your arrest.
              </li>
            </li>
          </ul>
        </div>
      ),
    },
    {
      name: "postingBail",
      label: "Posting Bail",
      content: (
        <div className="font-space-grotesk text-gray-500 font-normal mb-4">
        After bail is set, you or someone on your behalf must pay it to the court. This can be done with cash, a money order, or a cashier’s check. If you can’t afford to pay the full amount, you can use a bail bond agent. A bond agent pays the bail for you, but charges a non-refundable fee, usually 10-20% of the bail amount. If you don’t show up to court, the agent must pay the full bail amount to the court, so they have a financial incentive to ensure you attend all court proceedings.
       
        </div>
      ),
    },
    {
      name: "regularBail",
      label: "Regular Bail",
      content: (
        <div className="font-space-grotesk text-gray-500 font-normal mb-4">
       Regular bail is granted by the court after an arrest to ensure that the accused person will appear in court as required. If you are arrested, you have the right to apply for bail under Sections 437 and 439 of the Criminal Procedure Code (CrPC). These sections specify that a person accused of a non-bailable offense can be released on bail unless there is strong evidence that they committed a crime punishable by death or life imprisonment.
        </div>
      ),
    },
    {
      name: "powersOfCourts ",
      label: "Powers of  Courts ",
      content: (
        <div className="font-space-grotesk text-gray-500 font-normal mb-4">
Section 439 of the CrPC gives the High Court and Sessions Court special powers to grant bail. If someone is accused of a serious crime, these courts can impose conditions on bail, such as requiring the person to surrender their passport or regularly report to the police. The court also needs to inform the Public Prosecutor before granting bail in serious cases, unless there are urgent reasons not to do so.
        </div>
      ),
    },
  ];
  const faqItems = [
    {
      question: "What is the booking process?",
      answer:
        "Booking involves recording your details, documenting the crime, taking fingerprints and photos, and placing you in a cell.",
    },
    {
      question: "What happens during an arraignment?",
      answer:
        "At arraignment, charges are read, and you can arrange for your release.",
    },
    {
      question:
        "What does it mean to be released on your own recognizance (OR)?",
      answer:
        "OR release means you promise in writing to appear in court without paying bail.",
    },
    {
      question: "What is bail?",
      answer:
        "Bail is money paid for your release from custody, ensuring you attend court proceedings.",
    },
    {
      question: "How is bail amount determined?",
      answer:
        "A bail hearing considers factors like your health, financial resources, family ties, and criminal history.",
    },
    {
      question: "What if I can’t afford bail?",
      answer:
        "You can use a bail bond agent who pays the bail for a nonrefundable fee.",
    },
    {
      question: "What are bail bond agents?",
      answer: "They are professionals who post bail on your behalf for a fee.",
    },
    {
      question: "What happens if I don’t appear in court after posting bail?",
      answer: "You forfeit the bail money and risk arrest.",
    },
    {
      question:
        "What are sections 437 and 439 of the Code of Criminal Procedure?",
      answer:
        "Section 437 covers bail for non-bailable offenses; section 439 gives higher courts special powers to grant bail.",
    },
    {
      question: "Can bail be denied?",
      answer:
        "Yes, for severe crimes or if you have a history of serious offenses.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="wrapper">
        <div className="container pt-16 xl:!pt-[4rem] lg:!pt-[4rem] md:!pt-[4rem] sm:!pt-[4rem] lg:mb-5 relative">
       
              <div className="card !bg-[#f9ebe5] mb-10">
                <div className="card-body xl:!p-[1.4rem] lg:!p-[2.5rem] md:!p-[2.5rem] xxl:!py-24 p-[10px] !relative">
                  <div
                    className="absolute hidden bail-container lg:block xl:block"
                 
                  >
                    <figure className="m-0 p-0">
                      <img
                        className="w-full max-w-full !h-auto"
                        src={logoImage}
                        onError={() => setLogoImage(bail)}
                        alt="image"
                      />
                    </figure>
                  </div>

                  <div className="flex flex-wrap mx-[-10px]">
                    <div className="lg:w-8/12 xl:w-7/12 w-full flex-[0_0_auto] px-[15px] xl:px-[10px]">
                      <p className="text-xl font-bold font-space-grotesk">
                        {" "}
                        What is Bail and Bonds ?
                      </p>
                      <div>
                        <div className="info p-0">
                          <p className="!mb-1 text-[.9rem] !leading-[1.5] font-space-grotesk">
                            When someone gets arrested, their first thought is
                            usually about how to get out of jail quickly. To do
                            this, they have to go through a process called bail.
                            Bail is money that you pay to the court to be
                            released from jail, with the promise that you will
                            show up for your court dates.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center mt-10">
                <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-6 xl:!px-12 font-space-grotesk text-center">
                  Types of Bail Application
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

export default BailApplication;
