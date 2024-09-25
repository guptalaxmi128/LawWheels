import React,{useState,useEffect} from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Accordion from "../customAccordion/Accordion";
import TabMenu from "../tabMenu/TabMenu";
import execution from "../../assets/images/execution.webp";

const ExecutionApplication = () => {
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
  const faqItems = [
    {
      question: "What is the execution of a decree?",
      answer:
        "Execution of a decree is the legal process through which a court enforces a judgment, ensuring the winning party receives the awarded relief or remedy.",
    },
    {
      question: "Who are the main parties involved in execution proceedings?",
      answer:
        "The main parties are the decree holder (the person in whose favor the decree is passed) and the judgment debtor (the person against whom the decree is passed).",
    },
    {
      question: "Which courts can execute a decree?",
      answer:
        "The court that passed the decree or another court to which the decree is transferred can execute the decree.",
    },
    {
      question: "What are the primary methods of executing a decree?",
      answer:
        "Methods include delivering property, attaching and selling property, arresting and detaining the judgment debtor, appointing a receiver, and other specific performance actions.",
    },
    {
      question: "How does a decree holder initiate execution proceedings?",
      answer:
        "The decree holder files an application for execution with the court, detailing the case, properties involved, and any necessary documents.",
    },
    {
      question: "What is the time limit for filing an execution application?",
      answer:
        "Generally, the time limit is 12 years from the date of the decree for most cases, as per Article 136 of the Limitation Act, 1963.",
    },
    {
      question: "Can the judgment debtor object to the execution proceedings?",
      answer:
        "Yes, the judgment debtor can file objections, particularly if there are errors or irregularities in the execution process.",
    },
    {
      question: "Can a court stay the execution of a decree?",
      answer:
        "Yes, an executing court can stay the execution temporarily to allow the judgment debtor to seek a stay from the original or appellate court.",
    },
    {
      question:
        "What happens if the property of the judgment debtor is attached?",
      answer:
        "The attached property can be seized and sold by the court to satisfy the decree amount. This includes moveable and immoveable property, salaries, and other assets.",
    },
    {
      question:
        "How is the distribution of sale proceeds handled if there are multiple decree holders?",
      answer:
        "The court ensures rateable distribution, meaning the proceeds are fairly divided among all decree holders with claims against the judgment debtor.",
    },
  ];

  const [logoImage, setLogoImage] = useState(
    "https://law-wheel.b-cdn.net/image/execution.webp"
  );

  useEffect(() => {
    const img = new Image();
    img.src = "https://law-wheel.b-cdn.net/image/execution.webp";
    img.onload = () =>
      setLogoImage("https://law-wheel.b-cdn.net/image/execution.webp");
    img.onerror = () => setLogoImage(execution);
  }, []);
  return (
    <>
      <Navbar />
      <section className="wrapper">
        <div className="container pt-20 xl:!pt-[4rem] lg:!pt-[4rem] md:!pt-[4rem] sm:!pt-[4rem] lg:mb-5 relative">
          <div className="card !bg-[#e6e5f4] mb-10">
            <div className="card-body xl:!p-[1.4rem] lg:!p-[2.5rem] md:!p-[2.5rem] xxl:!py-24 p-[10px] !relative">
              <div className="execution-container hidden lg:block xl:block">
                <figure className="m-0 p-0">
                  <img
                    className="w-full max-w-full h-auto"
                    src={logoImage}
                    onError={() => setLogoImage(execution)}
                    alt="image"
                  />
                </figure>
              </div>

              <div className="flex flex-wrap mx-[-10px]">
                <div className="lg:w-7/12 xl:w-7/12 w-full flex-[0_0_auto] px-[15px] xl:px-[10px]">
                  <div>
                    <div className="info p-0">
                      <p className="!mb-1 text-[.9rem] !leading-[1.5] font-space-grotesk">
                        An Execution Application is a legal document filed to
                        enforce a judgment or decree passed by a court. Once a
                        decree has been issued, the winning party, known as the
                        decree holder, can file an execution application to
                        ensure that the losing party, known as the judgment
                        debtor, complies with the court's order. This
                        application can be used to compel the judgment debtor to
                        pay money, transfer property, or take other actions as
                        specified in the decree.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-10">
            <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-6 xl:!px-12 font-space-grotesk text-center">
              Types of Execution Application
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

export default ExecutionApplication;
