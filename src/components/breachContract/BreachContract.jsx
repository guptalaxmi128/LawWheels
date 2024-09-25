import React, { useState, useEffect } from "react";
import { Volume, ShieldCheck, Laptop, LineChart } from "lucide-react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Accordion from "../customAccordion/Accordion";
import dispute from "../../assets/images/contract.webp";
import TabMenu from "../tabMenu/TabMenu";
import g1 from "../../assets/images/g1.jpg";
import g2 from "../../assets/images/g2.jpg";
import g3 from "../../assets/images/g3.jpg";
import g4 from "../../assets/images/g4.jpg";

const BreachContract = () => {
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
      question: "What is a breach of contract?",
      answer:
        "A breach of contract occurs when one party fails to fulfill their obligations under a contract. This can include not performing on time, not performing in accordance with the contract terms, or not performing at all..",
    },
    {
      question: "What are the types of breaches of contract?",
      answer:
        "There are four main types: actual breach, material breach, minor breach, and anticipatory breach. Each type varies in severity and the legal remedies available.",
    },
    {
      question: "What is an actual breach of contract?",
      answer:
        "An actual breach happens when one party fails to perform their contractual duties by the deadline specified in the contract.",
    },
    {
      question: "What is a material breach of contract?",
      answer:
        "A material breach is a significant failure to perform that permits the other party to either compel performance, or collect damages because the breach has severely harmed the agreement's value.",
    },
    {
      question: "What is a minor breach of contract?",
      answer:
        "A minor breach occurs when one party performs most of their obligations, but fails to perform a small part of their duties. The contract remains mostly intact and enforceable.",
    },
    {
      question: "What is an anticipatory breach of contract?",
      answer:
        "An anticipatory breach happens when one party indicates in advance that they will not be fulfilling their contractual obligations.",
    },
    {
      question: "What remedies are available for a breach of contract?",
      answer:
        "Remedies include rescission (cancelling the contract), damages (monetary compensation), specific performance (requiring the party to fulfill their duties), and injunctions (court orders preventing specific actions).",
    },
    {
      question: "How can a breach of contract be proven?",
      answer:
        "To prove a breach of contract, you must show that a valid contract existed, you performed your contractual obligations, the other party failed to fulfill their obligations, and you suffered damages as a result.",
    },
    {
      question: "Can a breach of contract be settled outside of court?",
      answer:
        "Yes, many breaches of contract are settled through negotiation, mediation, or arbitration, which can be faster and less expensive than going to court.",
    },
    {
      question: "What should I do if I am accused of breaching a contract?",
      answer:
        "If accused of a breach, review the contract terms carefully, gather evidence of your performance, and seek legal advice to understand your rights and potential defenses. Negotiation or settlement may be possible to avoid litigation.",
    },
  ];

  const [logoImage, setLogoImage] = useState(
    "https://law-wheel.b-cdn.net/image/contract.webp"
  );

  useEffect(() => {
    const img = new Image();
    img.src = "https://law-wheel.b-cdn.net/image/contract.webp";
    img.onload = () =>
      setLogoImage("https://law-wheel.b-cdn.net/image/contract.webp");
    img.onerror = () => setLogoImage(dispute);
  }, []);
  return (
    <>
      <Navbar />
      <section className="wrapper">
        <div className="container pt-20 xl:!pt-[5rem] lg:!pt-[5rem] md:!pt-[5rem] sm:!pt-[5rem] lg:mb-5 relative">
          <div className="card !bg-[#edf2fc] mb-10">
            <div className="card-body xl:!p-[1.4rem] lg:!p-[2.5rem] md:!p-[2.5rem] xxl:!py-24 p-[10px] !relative">
              <div className="breach-container hidden lg:block xl:block">
                <figure className="m-0 p-0">
                  <img
                    className="w-full max-w-full h-auto"
                    src={logoImage}
                    onError={() => setLogoImage(dispute)}
                    alt="image"
                  />
                </figure>
              </div>
              <div className="flex flex-wrap mx-[-10px]">
                <div className="lg:w-8/12 xl:w-8/12 w-full flex-[0_0_auto] px-[15px] xl:px-[10px]">
                  <p className="text-xl font-bold font-space-grotesk">
                    What is a Breach of Contract?
                  </p>
                  <div>
                    <div className="info p-0">
                      <p className="!mb-1 text-[.9rem] !leading-[1.5] font-space-grotesk">
                        A breach of contract happens when one party fails to
                        follow the terms agreed upon in a legal contract. This
                        means not doing what was promised, like not paying for
                        services or not delivering goods on time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-40px]">
            <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[40px]">
              <div className="flex flex-row">
                <div>
                  <div className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#54a8c7] text-aqua !mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <circle
                        className="lineal-fill"
                        cx="283.8"
                        cy="283.8"
                        r="143"
                      />
                      <path
                        className="lineal-stroke"
                        d="M283.8 441.8c-87.1 0-158-70.9-158-158s70.9-158 158-158 158 70.9 158 158-70.9 158-158 158zm0-286.1c-70.7 0-128.1 57.3-128.1 128.1S213 411.9 283.8 411.9s128.1-57.3 128.1-128.1c-.1-70.7-57.4-128-128.1-128.1z"
                      />
                      <path
                        className="lineal-fill"
                        d="M283.8 210.5c40.5 0 73.3 32.8 73.3 73.3s-32.8 73.3-73.3 73.3-73.3-32.8-73.3-73.3"
                      />
                      <path
                        className="lineal-stroke"
                        d="M283.8 372.1c-48.7-.1-88.2-39.5-88.2-88.3.2-8.2 7.1-14.8 15.3-14.5 7.9.2 14.3 6.6 14.5 14.5 0 32.2 26.1 58.4 58.4 58.4s58.4-26.1 58.4-58.4-26.1-58.4-58.4-58.4c-8.2-.2-14.8-7.1-14.5-15.3.2-7.9 6.6-14.3 14.5-14.5 48.7-.5 88.7 38.6 89.2 87.3s-38.6 88.7-87.3 89.2h-1.9z"
                      />
                      <path
                        className="lineal-fill"
                        d="M107.9 55.1l-5.3 47.5-47.5 5.3-40.2-40.1 52.9-52.9z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M283.8 55.7c-55.3 0-108.8 20.1-150.4 56.7l-15.2-15.2 4.5-40.4c.5-4.5-1.1-9-4.3-12.2L78.3 4.4c-5.8-5.8-15.3-5.8-21.1 0L4.4 57.2c-5.8 5.8-5.8 15.3 0 21.1l40.1 40.1c2.8 2.8 6.6 4.4 10.6 4.4.5 0 1.1 0 1.6-.1l40.4-4.5 15.2 15.2c-36.6 41.5-56.7 95-56.7 150.4C55.7 409.6 158 512 283.8 512c66.2 0 129.1-28.7 172.4-78.7 5.6-6.1 5.1-15.6-1-21.1s-15.6-5.1-21.1 1l-.5.5c-37.7 43.4-92.3 68.4-149.8 68.4-109.3 0-198.3-89-198.3-198.3 0-47.4 17-93.3 48-129.2l140.2 140.2c5.8 5.8 15.3 5.8 21.1 0s5.8-15.3 0-21.1L154.6 133.5c35.9-31 81.8-48 129.2-48 109.4 0 198.3 89 198.3 198.3 0 8.3 6.7 14.9 14.9 14.9s14.9-6.7 14.9-14.9C512 158 409.6 55.7 283.8 55.7zM36.1 67.8l31.7-31.7 24.5 24.5-3.2 28.5-28.5 3.2-24.5-24.5z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="!mb-1 font-space-grotesk">
                    Employer and Employee
                  </h4>
                  <p className="!mb-0 font-space-grotesk">
                    {" "}
                    When an employer doesn't pay wages or an employee doesn't
                    work the agreed hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[40px]">
              <div className="flex flex-row">
                <div>
                  <div className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#fab758] text-yellow !mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 316.5 409.6"
                    >
                      <path
                        className="lineal-stroke"
                        d="M158.2 409.6c-59.4 0-107.5-48.2-107.5-107.5S99 194.6 158.3 194.6s107.5 48.2 107.5 107.5c0 20-5.6 39.6-16.1 56.6-3.4 5.5-10.6 7.1-16 3.7s-7.1-10.6-3.7-16c24.4-39.5 12.2-91.3-27.3-115.8S111.3 218.5 86.8 258s-12.2 91.3 27.3 115.8c22.5 13.9 50.2 16.4 74.8 6.8 6-2.3 12.7.6 15.1 6.6 2.3 6-.6 12.7-6.6 15.1-12.5 4.8-25.8 7.3-39.2 7.3z"
                      />
                      <path
                        className="lineal-fill"
                        d="M158.2 206.2c19.9 0 39.4 6.2 55.6 17.8l88.1-152.5c4.6-8 3.7-18-2.2-25l-23-27.1c-4.1-4.9-10.2-7.7-16.6-7.7H56.4c-6.4 0-12.5 2.8-16.6 7.7l-23 27.2c-6 7-6.9 17-2.2 25l88 152.4c16.2-11.6 35.7-17.8 55.6-17.8zm73.4-134l-73.3 127-73.4-127h146.7z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M213.8 235.6c-2.4 0-4.8-.8-6.8-2.2-29.2-20.8-68.5-20.8-97.7 0-5.2 3.7-12.5 2.5-16.2-2.7l-.6-.9-88-152.5c-7-12.2-5.7-27.5 3.4-38.3l23-27.2C37.2 4.3 46.6 0 56.4 0h203.7c9.8 0 19.2 4.3 25.5 11.8l23 27.1c9.1 10.8 10.5 26.1 3.4 38.3l-88.1 152.5c-1.6 2.8-4.4 4.9-7.6 5.6-.8.2-1.6.3-2.5.3zM56.4 23.3c-3 0-5.8 1.3-7.8 3.6L25.7 54c-2.8 3.3-3.2 7.9-1 11.7l82.1 142c11.2-6.1 23.4-10.2 36-12.1L74.8 78c-3.2-5.6-1.3-12.7 4.3-15.9 1.8-1 3.8-1.6 5.8-1.6h146.7c6.4 0 11.6 5.2 11.6 11.7 0 2-.5 4-1.6 5.8l-67.9 117.7c12.6 1.8 24.8 5.9 36 12.1l82-142c2.1-3.7 1.7-8.4-1-11.6l-23-27.2c-1.9-2.3-4.8-3.6-7.7-3.6l-203.6-.1zm48.7 60.5l53.2 92.1 53.2-92.1H105.1zm45.1 192.9l-4.4 2.7c-1.1.8-2.4 1.2-3.8 1.2-4.4 0-7.4-4.7-7.4-9.4-.1-3.3 1.6-6.3 4.4-8l20-12.1c1.3-.8 2.9-1.1 4.4-1.1 4.8 0 10.4 2.9 10.4 7.4v96.2c0 4.9-5.9 7.3-11.8 7.3s-11.8-2.4-11.8-7.3v-76.9z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="!mb-1 font-space-grotesk">
                    Doctor and Patient
                  </h4>
                  <p className="!mb-0 font-space-grotesk">
                    When a doctor doesn't provide the promised treatment, or a
                    patient doesn't pay the doctor's fees.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[40px]">
              <div className="flex flex-row">
                <div>
                  <div className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#e2626b] text-red !mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 409.6 391.2"
                    >
                      <path
                        className="lineal-fill"
                        d="M148.9 61.3C136 24.4 95.7 4.9 58.8 17.8S2.4 71.1 15.3 108c6.5 18.5 20.3 33.5 38.3 41.4 15.9-42.8 51.3-75.5 95.3-88.1z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M53.5 160.7c-1.6 0-3.1-.4-4.6-1C7.5 141.4-11.3 93 7 51.5s66.8-60.3 108.2-42c20.8 9.2 36.9 26.6 44.4 48.1 2.1 5.9-1 12.3-6.9 14.4-.2.1-.4.1-.6.2-40.5 11.6-73.1 41.7-87.9 81.1-1.8 4.5-6 7.4-10.7 7.4zM82.1 25.2c-32.8 0-59.5 26.6-59.5 59.5 0 19.4 9.5 37.7 25.4 48.8C65.2 97.2 95.8 69 133.4 54.7c-10.7-18.3-30.2-29.5-51.3-29.5z"
                      />
                      <path
                        className="lineal-fill"
                        d="M327.5 13.9c-30.1 0-56.9 19-66.8 47.5 44 12.6 79.4 45.2 95.4 88.1 35.8-15.8 52-57.6 36.2-93.3-11.3-25.8-36.7-42.3-64.8-42.3z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M356.1 160.7c-4.7 0-8.9-2.9-10.6-7.4-14.8-39.5-47.4-69.6-87.9-81.2-6-1.7-9.5-8-7.8-14 .1-.2.1-.4.2-.6C264.9 14.7 311.7-7.9 354.5 7S420 68.8 405 111.7c-7.5 21.5-23.6 38.9-44.4 48.1-1.4.6-2.9.9-4.5.9zM276.2 54.6c37.6 14.3 68.1 42.5 85.4 78.8 26.9-18.8 33.5-55.9 14.7-82.8s-55.9-33.5-82.8-14.7c-7.1 4.9-13 11.3-17.3 18.7zm-79.4 176c-3.1 0-6.1-.7-8.8-2.1l-45.1-22.6c-5.6-2.8-7.8-9.6-5-15.2s9.6-7.8 15.2-5l43.3 21.6 57.4-57.4c4.4-4.4 11.6-4.4 16 0s4.4 11.6 0 16l-58.9 58.9c-3.8 3.7-8.8 5.8-14.1 5.8z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M204.8 391.2c-96.8 0-175.6-78.8-175.6-175.6S108 39.9 204.8 39.9c69.8 0 133 41.3 161 105.2 2.5 5.7-.1 12.4-5.9 14.9s-12.4-.1-14.9-5.9c-24.4-55.7-79.4-91.7-140.2-91.7-84.4 0-153 68.6-153 153s68.6 153 153 153 153-68.6 153-153c-.2-6.2 4.7-11.5 11-11.6 6.2-.2 11.5 4.7 11.6 11v.7c0 96.9-78.8 175.7-175.6 175.7z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M287.1 281.5c-1.9 0-3.7-.5-5.4-1.4l-102.4-55.7c-5.5-3-7.5-9.8-4.5-15.3s9.8-7.5 15.3-4.5l102.5 55.7c5.5 3 7.5 9.8 4.5 15.3-2 3.6-5.8 5.9-10 5.9zm-82.3-178.4c-6.2 0-11.3-5-11.3-11.3V51.2c0-6.2 5.1-11.3 11.3-11.3s11.3 5.1 11.3 11.3v40.5c0 6.3-5 11.3-11.3 11.4zm0 288.1c-6.2 0-11.3-5.1-11.3-11.3v-40.5c0-6.2 5.1-11.3 11.3-11.3s11.3 5.1 11.3 11.3v40.5c0 6.2-5 11.3-11.3 11.3zm164.3-164.3h-40.5c-6.2.2-11.5-4.7-11.6-11-.2-6.2 4.7-11.5 11-11.6h41.2c6.2.2 11.2 5.4 11 11.6-.3 6-5.1 10.8-11.1 11zm-288.1 0H40.5c-6.2-.2-11.2-5.4-11-11.6.2-6 5-10.8 11-11H81c6.2.2 11.2 5.4 11 11.6-.2 6-5 10.8-11 11z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M241.2 62.5c-6.2 0-11.3-5.1-11.3-11.3V27.9c0-2.9-2.4-5.3-5.3-5.3H185c-2.9 0-5.3 2.4-5.3 5.3v23.4c0 6.2-5.1 11.3-11.3 11.3s-11.3-5.1-11.3-11.3V27.9C157.1 12.5 169.6 0 185 0h39.6c15.4 0 27.9 12.5 27.9 27.9v23.4c-.1 6.2-5.1 11.2-11.3 11.2z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="!mb-1 font-space-grotesk">Buyer and Seller</h4>
                  <p className="!mb-0 font-space-grotesk">
                    {" "}
                    When a seller delivers a defective product or a buyer
                    doesn't pay for what they bought.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[40px]">
              <div className="flex flex-row">
                <div>
                  <div className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#d16b86] text-pink !mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 409.6 409.6"
                    >
                      <path
                        className="lineal-stroke"
                        d="M204.8 409.6C91.9 409.6 0 317.7 0 204.8c0-49.9 18.2-98.1 51.2-135.5 4.4-5 12-5.5 17-1.1s5.5 12 1.1 17c-29.1 33-45.2 75.5-45.2 119.5 0 99.6 81.1 180.7 180.7 180.7s180.7-81.1 180.7-180.7S304.4 24.1 204.8 24.1c-27.3-.1-54.2 6.1-78.7 18-6 2.9-13.2.4-16.1-5.6-2.9-6-.4-13.2 5.6-16.1C143.4 6.9 173.9-.1 204.8 0c112.9 0 204.8 91.9 204.8 204.8s-91.9 204.8-204.8 204.8z"
                      />
                      <path
                        className="lineal-fill"
                        d="M349.4 204.8c0 79.8-64.7 144.6-144.6 144.6S60.2 284.6 60.2 204.8 125 60.2 204.8 60.2 349.4 125 349.4 204.8z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M204.8 361.4c-86.4 0-156.6-70.2-156.6-156.6S118.4 48.2 204.8 48.2s156.6 70.2 156.6 156.6-70.2 156.6-156.6 156.6zm0-289.1c-73.1 0-132.5 59.4-132.5 132.5s59.4 132.5 132.5 132.5 132.5-59.5 132.5-132.5S277.9 72.3 204.8 72.3z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M200.9 246.7c-8.8 0-17.2-3.5-23.5-9.7L145 204.5c-4.7-4.7-4.7-12.3 0-17s12.3-4.7 17 0l32.5 32.5c3.6 3.5 9.3 3.5 12.8 0l49.8-49.9c4.7-4.7 12.3-4.7 17 0s4.7 12.3 0 17L224.4 237c-6.2 6.2-14.7 9.7-23.5 9.7z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="!mb-1 font-space-grotesk">Two Companies</h4>
                  <p className="!mb-0 font-space-grotesk">
                    {" "}
                    When one company doesn't deliver goods or services as
                    agreed, or another company doesn't pay on time.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[40px]">
              <div className="flex flex-row">
                <div>
                  <div className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#45c4a0] text-green !mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 466.4"
                    >
                      <path
                        className="lineal-fill"
                        d="M201.4 172.5h-96l26.1-158.4h83zm205.2 0h-96L297.5 14.1h83zm-216.7 97.1c7.2-7 16.8-10.9 26.9-10.8 9.6 0 18.8 3.1 26.9 5.8 4 1.4 8.1 2.6 12.3 3.5 4.2-.9 8.3-2.1 12.3-3.5 8.1-2.7 17.3-5.8 26.9-5.8 10-.1 19.7 3.7 26.9 10.8 24.4 22.9 15.9 48.4 10.9 63.7l-.3.8c-4.6 14-22 59.8-51.4 59.8-15.6 0-20.9-2.5-24.8-4.4l-.6-.3-.6.3c-3.9 1.9-9.1 4.4-24.8 4.4-29.3 0-46.7-45.8-51.4-59.8l-.3-.8c-4.8-15.3-13.3-40.8 11.1-63.7z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M511.1 147.4l-6.4-25.9c-1.9-7.6-9.6-12.1-17.2-10.2-7.5 1.9-12.1 9.5-10.3 17l6.4 25.9c.4 1.8-.7 3.6-2.5 4.1-.3.1-.5.1-.8.1h-61.7l-14.2-86-7.3-44.1h52.6c1.5 0 2.9 1 3.2 2.5l6.6 26.8c1.9 7.6 9.6 12.1 17.2 10.2 7.5-1.9 12.1-9.5 10.3-17L480.5 24C477 9.9 464.3 0 449.8 0H62.2C47.7 0 35 9.9 31.5 24L.9 147.4c-4.2 17 6.1 34.1 23.1 38.3 2.5.6 5.1.9 7.6.9h8.1v265.6c0 7.8 6.3 14.1 14.2 14.1h404.2c7.8 0 14.1-6.3 14.1-14.1V257.8c0-7.8-6.3-14.2-14.1-14.2s-14.2 6.3-14.2 14.1V438H68V186.7h412.4c17.5 0 31.6-14.2 31.6-31.6 0-2.6-.3-5.2-.9-7.7zM227.5 28.3h56.9l10.8 130.1h-78.4l10.7-130.1zM29 157.1c-.7-.8-.9-1.9-.6-2.9L59 30.8c.4-1.5 1.7-2.5 3.2-2.5h52.6l-5.3 32.1-16.2 98H31.6c-1 0-2-.5-2.6-1.3zm98.3-30.8l16.2-98h55.6l-10.7 130.1H122l5.3-32.1zm196.3 32.1L315.2 57l-2.4-28.7h55.6l16.2 98 5.3 32.1h-66.3z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M256 220c-7.8 0-14.1 6.3-14.1 14.1v15c-7.4-2.3-15.9-4.4-25-4.4-13.6-.1-26.8 5.1-36.6 14.6-31 29.1-19.9 62.4-14.6 78.4l.3.8c6.9 20.9 27 69.5 64.8 69.5 12.6 0 19.9-1.5 25.3-3.4 5.4 2 12.8 3.4 25.3 3.4 37.8 0 57.9-48.6 64.8-69.5l.3-.8c5.3-16 16.3-49.3-14.6-78.4-9.8-9.5-22.9-14.7-36.6-14.6-9.1 0-17.6 2.1-25 4.4v-15c-.1-7.8-6.4-14.1-14.3-14.1zm39.2 53c6.4-.1 12.7 2.4 17.2 6.9 16.5 15.5 13 31.3 7.1 48.9l-.3.8c-8.2 24.9-23.2 50.1-37.9 50.1-12.4 0-15.8-1.7-18.6-3l-.7-.3c-3.9-1.8-8.3-1.8-12.2 0l-.6.3c-2.8 1.3-6.2 3-18.6 3-14.8 0-29.7-25.1-37.9-50l-.3-.8c-5.8-17.6-9.3-33.4 7.1-48.9 4.5-4.6 10.8-7.1 17.2-6.9 7.3 0 15 2.6 22.5 5 4.6 1.7 9.4 3 14.2 4 1.7.3 3.3.3 5 0 4.8-1 9.6-2.3 14.2-4 7.6-2.6 15.3-5.1 22.6-5.1z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="!mb-1 font-space-grotesk">
                    Landlord and Tenant
                  </h4>
                  <p className="!mb-0 font-space-grotesk">
                    When a tenant doesn't pay rent or a landlord doesn't fulfill
                    maintenance responsibilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[40px]">
              <div className="flex flex-row">
                <div>
                  <div className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#747ed1] text-purple !mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 409.6 356.2"
                    >
                      <path
                        className="lineal-fill"
                        d="M265.2 180.7H144.4v-17.6c0-33.3 27-60.4 60.4-60.4s60.4 27 60.4 60.4v17.6z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M265.2 191.7H144.4c-6.1 0-11.1-5-11.1-11.1V163c-.5-39.5 31.1-71.8 70.6-72.3s71.8 31.1 72.3 70.6v19.3c0 6.2-4.9 11.1-11 11.1zm-109.7-22.1h98.6v-6.5c.4-27.2-21.4-49.6-48.6-50s-49.6 21.4-50 48.6v7.9z"
                      />
                      <path
                        className="lineal-fill"
                        d="M250.4 56.7c0 25.2-20.4 45.6-45.6 45.6s-45.6-20.4-45.6-45.6 20.4-45.6 45.6-45.6c25.2 0 45.6 20.4 45.6 45.6z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M204.8 113.3c-31.3 0-56.7-25.4-56.7-56.7S173.5-.1 204.8-.1s56.7 25.4 56.7 56.7c-.1 31.3-25.4 56.7-56.7 56.7zm0-91.2c-19.1 0-34.5 15.4-34.5 34.5s15.4 34.5 34.5 34.5 34.5-15.4 34.5-34.5c0-19-15.5-34.4-34.5-34.5zm193.7 334.1H296.8c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.7c-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.4-6 2.3-11.9 8.3-13.3 5.8-1.4 11.7 2.2 13.2 8 1.2 4.9 1.8 9.9 1.8 14.9v14.8c0 6.1-4.9 11.1-11.1 11.1z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M347.6 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.2 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.3-27.3 27.4 0 15.1 12.3 27.3 27.4 27.3S375 256 375 241c0-15.1-12.3-27.3-27.4-27.4zM112.8 356.2H11.1c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1.2 10.9 5.3 10.7 11.4-.2 5.9-4.9 10.6-10.7 10.7-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.5-5.9 2.2-11.9 8.1-13.4s11.9 2.2 13.4 8.1c1.2 4.9 1.8 9.9 1.8 14.9v14.8c.1 6.1-4.9 11.1-11.1 11.1.1 0 .1 0 0 0z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M61.9 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.1 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.2-27.3 27.4 0 15.1 12.2 27.4 27.4 27.4 15.1 0 27.3-12.2 27.3-27.3 0-15.2-12.3-27.4-27.4-27.5zm142.9 72.1c-6.1 0-11.1-5-11.1-11.1v-56.4c-.2-6.1 4.6-11.2 10.7-11.4 6.1-.2 11.2 4.6 11.4 10.7v57.1c.1 6.2-4.9 11.1-11 11.1z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M279.5 285.7H130.1c-6.1.2-11.2-4.6-11.4-10.7s4.6-11.2 10.7-11.4h150.2c6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.8z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="!mb-1 font-space-grotesk">
                    Lawyer and Client
                  </h4>
                  <p className="!mb-0 font-space-grotesk">
                    When a lawyer fails to perform agreed-upon duties or doesn't
                    file necessary legal actions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-10">
            <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-6 xl:!px-12 font-space-grotesk text-center">
              Types of Breach of Contract
            </h3>
            <div className="w-full max-w-4xl mx-auto text-center">
              <TabMenu tabs={tabs} />
            </div>
          </div>
        </div>
      </section>

      {/* <section
        className="wrapper bg-repeat bg-fixed bg-image section-frame xl:mx-[1.5rem] xl:rounded-[1rem] lg:mx-[1.5rem] lg:rounded-[1rem] md:mx-[1.5rem] md:rounded-[1rem] mb-5"
        style={{
          backgroundImage: `url(${"https://law-wheel.b-cdn.net/image/pattern.png"})`,
        }}
      >
        <div className="container pt-10 xl:pt-10 lg:pt-10 md:pt-10 pb-8 xl:pb-8 lg:pb-8 md:pb-8">
          <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 mt-[-50px] items-center justify-center">
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[20px] max-w-full mt-[50px]">
              <div className="card !rounded-[0.8rem] !bg-[#e6e5f4]">
                <div className="card-body p-6">
                  <div className="flex flex-row">
                    <div>
                      <span className="icon btn btn-block btn-lg !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem] btn-white pointer-events-none !mr-4">
                        <span className="number text-[#605dba] font-space-grotesk">
                          01
                        </span>
                      </span>
                    </div>
                    <div>
                      <h3 className="!mb-1 text-[#605dba] font-space-grotesk">
                      Comprehensive Legal Solutions
                      </h3>
                      <p className="!mb-0 font-space-grotesk">
                      Providing expert legal services across all domains to meet your diverse legal needs efficiently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[20px] max-w-full mt-[50px]">
              <div className="card !rounded-[0.8rem] !bg-[#fbe7f3]">
                <div className="card-body p-6">
                  <div className="flex flex-row">
                    <div>
                      <span className="icon btn btn-block btn-lg !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem] btn-white pointer-events-none !mr-4">
                        <span className="number text-[#e668b3] font-space-grotesk">
                          02
                        </span>
                      </span>
                    </div>
                    <div>
                      <h3 className="!mb-1 text-[#e668b3] font-space-grotesk">
                      Client-Centric Approach
                      </h3>
                      <p className="!mb-0 font-space-grotesk">
                      Delivering personalized legal strategies tailored to your unique situation and individual requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 items-center justify-center">
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[20px] max-w-full mt-[50px]">
              <div className="card !rounded-[0.8rem] !bg-[#e1f6f0]">
                <div className="card-body p-6">
                  <div className="flex flex-row">
                    <div>
                      <span className="icon btn btn-block btn-lg !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem] btn-white pointer-events-none !mr-4">
                        <span className="number text-[#45c4a0] font-space-grotesk">
                          03
                        </span>
                      </span>
                    </div>
                    <div>
                      <h3 className="!mb-1 text-[#45c4a0] font-space-grotesk">
                      Efficient and Timely Resolutions
                      </h3>
                      <p className="!mb-0 font-space-grotesk">
                      Focused on resolving your legal matters swiftly with dedicated and effective legal representation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[20px] max-w-full mt-[50px]">
              <div className="card !rounded-[0.8rem] !bg-[#e6e5f4]">
                <div className="card-body p-6">
                  <div className="flex flex-row">
                    <div>
                      <span className="icon btn btn-block btn-lg !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem] btn-white pointer-events-none !mr-4">
                        <span className="number text-[#605dba] font-space-grotesk">
                          04
                        </span>
                      </span>
                    </div>
                    <div>
                      <h3 className="!mb-1 text-[#605dba] font-space-grotesk">
                      Transparent and affordable Pricing
                      </h3>
                      <p className="!mb-0 font-space-grotesk">
                      Offering clear and competitive pricing with no hidden fees, ensuring trust and value.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section> */}

      <section className="wrapper bg-fixed section-frame xl:mx-[1.5rem] xl:rounded-[1rem] lg:mx-[1.5rem] lg:rounded-[1rem] md:mx-[1.5rem] md:rounded-[1rem] mb-5 !bg-[#ffffff]">
        <div className="container pt-10 xl:pt-10 lg:pt-10 md:pt-10 pb-8 xl:pb-8 lg:pb-8 md:pb-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#333] font-space-grotesk">
              Why Choose Law Wheels
            </h2>
          </div>

          <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 mt-[-50px] items-center justify-center">
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[20px] max-w-full mt-[50px]">
              <div className="card !rounded-[0.8rem] !bg-[#e6e5f4]">
                <div className="card-body p-6">
                  <div className="flex flex-row">
                    <div>
                      <span className="icon btn btn-block btn-lg !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem] btn-white pointer-events-none !mr-4">
                        <span className="number text-[#605dba] font-space-grotesk">
                          01
                        </span>
                      </span>
                    </div>
                    <div>
                      <h3 className="!mb-1 text-[#605dba] font-space-grotesk">
                        Comprehensive Legal Solutions
                      </h3>
                      <p className="!mb-0 font-space-grotesk">
                        Providing expert legal services across all domains to
                        meet your diverse legal needs efficiently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[20px] max-w-full mt-[50px]">
              <div className="card !rounded-[0.8rem] !bg-[#fbe7f3]">
                <div className="card-body p-6">
                  <div className="flex flex-row">
                    <div>
                      <span className="icon btn btn-block btn-lg !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem] btn-white pointer-events-none !mr-4">
                        <span className="number text-[#e668b3] font-space-grotesk">
                          02
                        </span>
                      </span>
                    </div>
                    <div>
                      <h3 className="!mb-1 text-[#e668b3] font-space-grotesk">
                        Client-Centric Approach
                      </h3>
                      <p className="!mb-0 font-space-grotesk">
                        Delivering personalized legal strategies tailored to
                        your unique situation and individual requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 items-center justify-center">
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[20px] max-w-full mt-[50px]">
              <div className="card !rounded-[0.8rem] !bg-[#e1f6f0]">
                <div className="card-body p-6">
                  <div className="flex flex-row">
                    <div>
                      <span className="icon btn btn-block btn-lg !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem] btn-white pointer-events-none !mr-4">
                        <span className="number text-[#45c4a0] font-space-grotesk">
                          03
                        </span>
                      </span>
                    </div>
                    <div>
                      <h3 className="!mb-1 text-[#45c4a0] font-space-grotesk">
                        Efficient and Timely Resolutions
                      </h3>
                      <p className="!mb-0 font-space-grotesk">
                        Focused on resolving your legal matters swiftly with
                        dedicated and effective legal representation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[20px] max-w-full mt-[50px]">
              <div className="card !rounded-[0.8rem] !bg-[#e6e5f4]">
                <div className="card-body p-6">
                  <div className="flex flex-row">
                    <div>
                      <span className="icon btn btn-block btn-lg !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem] btn-white pointer-events-none !mr-4">
                        <span className="number text-[#605dba] font-space-grotesk">
                          04
                        </span>
                      </span>
                    </div>
                    <div>
                      <h3 className="!mb-1 text-[#605dba] font-space-grotesk">
                        Transparent and Affordable Pricing
                      </h3>
                      <p className="!mb-0 font-space-grotesk pb-5">
                        Offering clear and competitive pricing with no hidden
                        fees, ensuring trust and value.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="snippet-10"
        className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid mb-24"
      >
        <div className="container pt-20 xl:pt-20 lg:pt-20 md:pt-20 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] mt-[-40px] items-center">
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[20px] mt-[40px] max-w-full xl:!order-2 lg:!order-2">
              <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px]">
                <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[16.66666667%] !self-end mt-[25px]">
                  <figure className="rounded-[0.4rem]">
                    <img
                      className="rounded-[0.4rem]"
                      src={g1}
                      // srcset="../../assets/img/photos/g1@2x.jpg 2x"
                      alt="image"
                    />
                  </figure>
                </div>

                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] max-w-full !self-end mt-[25px]">
                  <figure className="rounded-[0.4rem]">
                    <img
                      className="rounded-[0.4rem]"
                      src={g2}
                      // srcset="../../assets/img/photos/g2@2x.jpg 2x"
                      alt="image"
                    />
                  </figure>
                </div>

                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] md:!ml-[8.33333333%] mt-[25px]">
                  <figure className="rounded-[0.4rem]">
                    <img
                      className="rounded-[0.4rem]"
                      src={g3}
                      // srcset="../../assets/img/photos/g3@2x.jpg 2x"
                      alt="image"
                    />
                  </figure>
                </div>

                <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full !self-start mt-[25px]">
                  <figure className="rounded-[0.4rem]">
                    <img
                      className="rounded-[0.4rem]"
                      src={g4}
                      // srcset="../../assets/img/photos/g4@2x.jpg 2x"
                      alt="image"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[20px] lg:px-[20px] px-[15px] mt-[40px] max-w-full">
              <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] !mb-3">
                What We Do?
              </h2>
              <p className="lead !mb-8 xxl:!pr-2 !text-[1.05rem] !leading-[1.6] font-space-grotesk">
                By simplifying legal terms and providing clear examples, we
                <span className="relative z-[2] font-space-grotesk whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)]">
                  aim
                </span>{" "}
                to make the concept of breach of contract easy to understand for
                everyone.
              </p>
              <div className="flex flex-wrap mx-[-15px] xl:mx-[-25px] mt-[-30px]">
                <div className="md:w-6/12 lg:w-full  w-full flex-[0_0_auto] xl:px-[25px] px-[15px] max-w-full mt-[30px]">
                  <div className="flex flex-row">
                    <div>
                      <div className="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none mr-5 xl:text-[1.3rem] w-12 h-12 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none p-0 !rounded-[100%]">
                        <div className="text-[calc(1.255rem_+_0.06vw)]">
                          <Volume className="text-current" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="!mb-1 font-space-grotesk">
                        Rescission of Contract
                      </h4>
                      <p className="!mb-0 font-space-grotesk">
                        Cancelling the contract, freeing both parties from their
                        obligations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:w-6/12 lg:w-full w-full flex-[0_0_auto] xl:px-[25px] px-[15px] max-w-full mt-[30px]">
                  <div className="flex flex-row">
                    <div>
                      <div className="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none mr-5 xl:text-[1.3rem] w-12 h-12 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none p-0 !rounded-[100%]">
                        <div className="text-[calc(1.255rem_+_0.06vw)]">
                          <ShieldCheck className="text-current" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="!mb-1 font-space-grotesk">
                        Sues for Damage
                      </h4>
                      <p className="!mb-0 font-space-grotesk">
                        Suing the breacher for monetary compensation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:w-6/12 lg:w-full w-full flex-[0_0_auto] xl:px-[25px] px-[15px] max-w-full mt-[30px]">
                  <div className="flex flex-row">
                    <div>
                      <div className="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none mr-5 xl:text-[1.3rem] w-12 h-12 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none p-0 !rounded-[100%]">
                        <div className="text-[calc(1.255rem_+_0.06vw)]">
                          <Laptop className=" text-current" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="!mb-1 font-space-grotesk">Injunction</h4>
                      <p className="!mb-0 font-space-grotesk">
                        A court order stopping a party from specific actions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:w-6/12 lg:w-full  w-full flex-[0_0_auto] xl:px-[25px] px-[15px] max-w-full mt-[30px]">
                  <div className="flex flex-row">
                    <div>
                      <div className="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none mr-5 xl:text-[1.3rem] w-12 h-12 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none p-0 !rounded-[100%]">
                        <div className="text-[calc(1.255rem_+_0.06vw)]">
                          <LineChart className=" text-current" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="!mb-1 font-space-grotesk">
                        Quantum Meruit
                      </h4>
                      <p className="!mb-0 font-space-grotesk">
                        Compensation for work done when the other party prevents
                        the completion of the contract.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:pt-24 xl:pt-24 sm:pt-0">
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

export default BreachContract;
