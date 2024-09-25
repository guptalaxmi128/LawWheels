import React,{useState,useEffect} from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Accordion from "../customAccordion/Accordion";
import TabMenu from "../tabMenu/TabMenu";
import domestic from "../../assets/images/domestic.png";

const DomesticViolence = () => {
  const [logoImage, setLogoImage] = useState(
    "https://law-wheel.b-cdn.net/image/domestic.png"
  );

  useEffect(() => {
    const img = new Image();
    img.src = "https://law-wheel.b-cdn.net/image/domestic.png";
    img.onload = () =>
      setLogoImage("https://law-wheel.b-cdn.net/image/domestic.png");
    img.onerror = () => setLogoImage(domestic);
  }, []);
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
    // {
    //   name: "findingHelp",
    //   label: "Finding Help",
    //   content: (
    //     <div className="font-space-grotesk  mt-1 text-gray-700 font-norma">
    //       If you are a victim of domestic violence, seek help immediately.
    //       Contact local helplines, counseling services, and legal aid
    //       organizations. It is essential to know your rights and take steps to
    //       protect yourself and your loved ones.
    //     </div>
    //   ),
    // },
  ];
  const faqItems = [
    {
      question: "What is domestic violence?",
      answer:
        "Domestic violence includes physical, sexual, emotional, and economic abuse by a partner or family member.",
    },
    {
      question: "Who can be a victim of domestic violence?",
      answer:
        "Anyone can be a victim, regardless of age, gender, or social class.",
    },
    {
      question: "Why do victims stay in abusive relationships?",
      answer:
        "Reasons include fear, lack of self-esteem, family pressure, and lack of support.",
    },
    {
      question: "What are the signs of domestic violence?",
      answer:
        "Signs include physical injuries, isolation, fear of the partner, and controlling behavior.",
    },
    {
      question: "How common is domestic violence in India?",
      answer:
        "It is very common, with one in three women experiencing it since the age of 15.",
    },
    {
      question:
        "What legal protections are available for domestic violence victims in India?",
      answer:
        "The Protection of Women from Domestic Violence Act provides various legal protections and remedies.",
    },
    {
      question: "Can domestic violence cases be resolved out of court?",
      answer:
        "Yes, recent changes allow for counseling and mediation by NGOs, counselors, and police.",
    },
    {
      question: "How can a victim prove domestic violence in India?",
      answer:
        "Evidence can include medical reports, witness statements, and police reports.",
    },
    {
      question:
        "What support is available for domestic violence victims in India?",
      answer:
        "Support includes helplines, counseling services, legal aid, and shelters.",
    },
    {
      question: "How can I help someone experiencing domestic violence?",
      answer:
        "Offer support, encourage them to seek help, and provide information about resources and legal options.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="wrapper">
        <div className="container pt-20 xl:!pt-[4rem] lg:!pt-[4rem] md:!pt-[4rem] sm:!pt-[4rem]  relative">
          <div className="card !bg-[#eaebea] mb-10">
            <div className="card-body xl:!p-[1.5rem] lg:!p-[2.5rem] md:!p-[2.5rem] xxl:!py-24 p-[20px] !relative">
              <div
                className="absolute hidden domestic-container lg:block xl:block"
               
              >
                <figure className="m-0 p-0">
                  <img
                    className="w-full max-w-full !h-auto"
                  
                    src={logoImage}
                    onError={()=>setLogoImage(domestic)}
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
          </div>
          <div className="flex flex-col items-center">
            <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] xl:!px-12 font-space-grotesk text-center">
              Types of Domestic Violence
            </h3>
            <div className="w-full max-w-4xl mx-auto text-center">
              <TabMenu tabs={tabs} />
            </div>
          </div>
        </div>
      </section>

      <div className="container  xl:!py-[2rem] relative">
          <div className="card !bg-[#eceff7] mb-5">
            <div className="card-body xl:!p-[1.5rem] lg:!p-[2.5rem] md:!p-[2.5rem] xxl:!py-24 p-[20px] !relative">
             

              <div className="flex flex-wrap mx-[-10px]">
                <div className=" w-full flex-[0_0_auto] px-[15px] xl:px-[15px]">
                  <p className="text-xl font-bold font-space-grotesk">
                    Finding Help
                  </p>
                  <div>
                    <div className="info p-0">
                      <p className="!mb-1 text-[.9rem] !leading-[1.5] font-space-grotesk">
                      If you are a victim of domestic violence, seek help immediately. Contact local helplines, counseling services, and legal aid organizations. It is essential to know your rights and take steps to protect yourself and your loved ones
                    
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
        <section className="wrapper  py-6 mb-10">
    <div className="container mx-auto px-4">
        <div className="bg-[#f8f9fa] rounded-md p-6 shadow-md">
           
            <p className="mb-4 font-space-grotesk ">
                According to the National Family Health Survey (NFHS-4) released by the Union Health Ministry, domestic violence is a widespread issue in India, affecting every third woman since the age of 15. The majority of this violence is perpetrated by husbands, highlighting a significant problem within marital relationships.
            </p>
            <p className="mb-4 font-space-grotesk ">
                The survey revealed that 31% of married women have endured physical, sexual, or emotional violence from their spouses, with physical violence being the most prevalent at 27%, followed by emotional violence at 13%. However, the survey did not address economic abuse, which is also a significant form of domestic violence faced by many women in India.
            </p>
            <p className="mb-4 font-space-grotesk ">
                These alarming statistics underscore the urgent need for deeper discussions on the underlying causes of domestic violence, the experiences of the victims, and the strategies for providing support and legal assistance to survivors.
            </p>
            <p className="font-space-grotesk ">
                In a positive development, a 2015 ruling by the Bombay High Court set aside a state government circular that previously prohibited counselling and mediation in domestic violence cases without a court order. This ruling allows for out-of-court resolutions with the help of NGOs, counsellors, and police. Women are now guided on their rights and the legal options available to them under the Protection of Women from Domestic Violence Act, empowering them to make informed decisions about their future.
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

export default DomesticViolence;
