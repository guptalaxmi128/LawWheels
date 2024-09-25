import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
// import HeroSection from "./HeroSection";//for mutual divorce paga
// import Service from "../service/Service";
// import Community from "../community/Community";
import Footer from "../footer/Footer";
import Service2 from "../service/Service2";
import ContactForm from "../contact/ContactForm";
import Choose from "../../shared/Choose";
// import HomeSlider from "./HomeSlider";
import HomePage from "../home/HomePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };
  return (
    <>
      {/* <div className="pb-8"> */}
      <Navbar />
      {/* </div> */}
      {/* <HeroSection /> */}

      <HomePage />

      {/* <HomeSlider /> */}
      {/* <Service /> */}
      <Choose />
      <Service2 />
      {/* <Community /> */}
      <div className="xl:pb-32">
        <ContactForm />
      </div>

      <div className=" pt-3 lg:pt-20 xl:pt-20 sm:pt-0">
        <div
          className="container py-[1rem] md:pt-24 lg:pt-0 xl:pt-0 xl:pb-[7rem] lg:pb-[7rem] md:pb-[7rem] !relative sm:pt-0"
          style={{ zIndex: "2" }}
        >
          <div className="flex flex-wrap mx-[-15px]">
            <div className="xl:w-11/12 xxl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
              <div className="lg:mt-[-10rem] xl:!mt-[-15rem] !mb-[4.5rem] xl:!mb-[6rem] lg:!mb-[6rem] md:!mb-[6rem] !rounded-[0.8rem]">
                <div
                  className="player relative z-[2] rounded-[0.4rem]"
                  data-plyr-provider="vimeo"
                  data-plyr-embed-id="165101721"
                ></div>
              </div>
              <div className="!relative">
                <div
                  className="h-7 absolute hidden xl:block lg:block"
                  style={{ top: "-90%", right: "-3%" }}
                >
                  <svg
                    width="56"
                    height="45"
                    viewBox="0 0 56 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      clip-path="url(#clip0_105_61)"
                      fill="#3F78E0"
                      stroke="#3F78E0"
                      stroke-width=".83"
                      stroke-miterlimit="10"
                    >
                      <path d="M39.82 9.193s-.044.225-.13.355c-6.429 13.075-21.122 21.37-35.749 20.157a1.4 1.4 0 01-1.288-1.516 1.396 1.396 0 011.52-1.279c13.466 1.128 27.029-6.514 32.968-18.602a1.426 1.426 0 011.895-.648c.59.293.902.941.784 1.533v0zm11.457 13.442c-.028.14-.062.31-.175.434-4.312 7.315-10.568 13.305-18.124 17.25-.69.36-1.552.101-1.915-.586a1.407 1.407 0 01.585-1.905c6.968-3.652 13.004-9.423 17-16.185.4-.682 1.267-.89 1.924-.496.527.31.789.919.677 1.482l.028.006z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_105_61">
                        <path
                          fill="#fff"
                          transform="rotate(-78.742 21.514 17.654)"
                          d="M0 0h36v49H0z"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div
                  className="!h-[4.5rem] absolute hidden xl:block lg:block"
                  style={{ top: "-20%", left: "-12%" }}
                >
                  <svg
                    width="117"
                    height="120"
                    viewBox="0 0 117 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_105_31)">
                      <path
                        d="M115.955 19.489c-.107.586-.539 1.113-1.171 1.267-11.977 3.268-21.419 14.907-24.371 27.965 7.906 2.855 14.636 9.4 14.29 18.29-.13 3.105-1.264 5.827-3.097 7.41-2.824 2.413-7.208 2.152-10.221-.652-2.126-1.97-3.562-4.957-4.403-9.183a38.393 38.393 0 01-.243-13.574c-.423-.077-.872-.192-1.3-.237-11.84-2.091-24.42 2.278-32.796 11.385-4.404 4.817-7.53 10.911-9.101 17.322 3.041 1.732 5.925 3.773 8.633 6.05 3.028 2.538 6.638 6.124 7.856 11.227 1.162 4.856-.59 11.334-5.558 13.356-2.06.803-4.29.699-6.387-.323-3.384-1.694-6.414-5.882-7.718-10.696-1.546-5.7-1.667-11.848-.524-17.933-9.81-5.12-20.969-7.257-31.955-5.928a1.622 1.622 0 01-1.792-1.404A1.627 1.627 0 017.5 72.034c11.36-1.361 22.895.742 33.074 5.863 1.782-6.641 5.08-12.94 9.649-17.928 9.094-9.919 22.822-14.685 35.733-12.397l1.332.242c3.278-14.109 13.56-26.672 26.589-30.185.851-.249 1.761.287 1.975 1.134.056.246.08.486.038.714l.065.012zM89.813 52.01c-.556 3.97-.457 8.027.34 11.942.7 3.527 1.835 5.955 3.447 7.427 1.552 1.427 4.193 2.043 5.905.572 1.156-1.001 1.896-2.852 1.964-5.06.272-7.018-5.227-12.396-11.65-14.914l-.006.033zM42.865 82.825c-.847 5.196-.643 10.517.676 15.436 1.037 3.891 3.459 7.362 6.013 8.635 1.293.64 2.493.69 3.755.214 3.192-1.303 4.467-6.085 3.625-9.57-1.021-4.158-4.182-7.258-6.83-9.491-2.267-1.928-4.706-3.652-7.213-5.186l-.026-.038z"
                        fill="#605DBA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_105_31">
                        <path
                          fill="#fff"
                          transform="rotate(-79.664 61.353 50.183)"
                          d="M0 0h102.968v98.392H0z"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h2 className="text-[0.8rem] uppercase text-[#aab0bc] mb-3 !text-center !leading-[1.35] font-space-grotesk">
                  FAQ
                </h2>
                <h3 className="text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.2] xl:text-[2rem] mb-12 lg:!px-8 xl:!px-12 !text-center font-space-grotesk">
                  If you don't see an{" "}
                  <span className="text-gradient gradient-7 font-space-grotesk">
                    answer
                  </span>{" "}
                  to your question, you can send us an email from our contact
                  form.
                </h3>
              </div>
              <div className="flex flex-wrap mx-[-15px]">
                <div className=" w-full flex-[0_0_auto] px-[15px] max-w-full !mb-0">
                  <div id="accordion-1" className="accordion-wrapper">
                    <div className="card accordion-item mb-5 !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                      <div
                        className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !rounded-[0.4rem] !bg-inherit flex items-center justify-between"
                        id="accordion-heading-1-1"
                        onClick={() => toggleAccordion(0)}
                      >
                        <button
                          className="!text-[#343f52] !text-[0.9rem] hover:!text-[#605dba] before:!text-[#605dba] collapsed flex-grow text-left font-space-grotesk"
                          data-bs-toggle="collapse"
                          data-bs-target="#accordion-collapse-1-1"
                          aria-expanded={expandedIndex === 0}
                          aria-controls="collapseOne"
                        >
                          What services does Law Wheels offer for mutual
                          divorce?
                        </button>
                        <FontAwesomeIcon
                          icon={
                            expandedIndex === 0 ? faChevronUp : faChevronDown
                          }
                          className="ml-2"
                        />
                      </div>

                      <div
                        id="collapseOne"
                        className={`collapse ${
                          expandedIndex === 0 ? "show" : ""
                        }`}
                        aria-labelledby="accordion-heading-1-1"
                        data-bs-target="#accordion-1"
                      >
                        <div className="card-body flex-[1_1_auto]  p-[0_1.25rem_.25rem_2.35rem]">
                          <p className="font-space-grotesk">
                            Law Wheels helps couples navigate the mutual divorce
                            process by providing legal advice, drafting
                            necessary documents, and guiding them through
                            mediation and court procedures.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="card accordion-item mb-5 !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                      <div
                        className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !rounded-[0.4rem] !bg-inherit flex items-center justify-between"
                        id="accordion-heading-1-2"
                        onClick={() => toggleAccordion(1)}
                      >
                        <button
                          className="!text-[#343f52] !text-[0.9rem] hover:!text-[#605dba] before:!text-[#605dba] collapsed font-space-grotesk"
                          data-bs-toggle="collapse"
                          aria-expanded={expandedIndex === 1}
                          aria-controls="collapseTwo"
                        >
                          Can Law Wheels help if I've been a victim of
                          cybercrime?
                        </button>
                        <FontAwesomeIcon
                          icon={
                            expandedIndex === 1 ? faChevronUp : faChevronDown
                          }
                          className="ml-2" // Add some left margin for spacing
                        />
                      </div>

                      <div
                        id="collapseTwo"
                        className={`collapse ${
                          expandedIndex === 1 ? "show" : ""
                        }`}
                        aria-labelledby="accordion-heading-1-2"
                        data-bs-target="#accordion-1"
                      >
                        <div className="card-body flex-[1_1_auto]  p-[0_1.25rem_.25rem_2.35rem]">
                          <p className="font-space-grotesk">
                            Yes, we assist victims of cybercrime by helping them
                            file complaints, gathering evidence, and taking
                            legal action against those responsible.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="card accordion-item mb-5 !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                      <div
                        className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !rounded-[0.4rem] !bg-inherit flex items-center justify-between"
                        id="accordion-heading-1-3"
                        onClick={() => toggleAccordion(2)}
                      >
                        <button
                          className="!text-[#343f52] !text-[0.9rem] hover:!text-[#605dba] before:!text-[#605dba] collapsed font-space-grotesk"
                          aria-expanded={expandedIndex === 2}
                          aria-controls="collapseThree"
                        >
                          What should I do if a cheque I received has bounced?
                        </button>
                        <FontAwesomeIcon
                          icon={
                            expandedIndex === 2 ? faChevronUp : faChevronDown
                          }
                          className="ml-2" // Add some left margin for spacing
                        />
                      </div>

                      <div
                        id="collapseThree"
                        className={`collapse ${
                          expandedIndex === 2 ? "show" : ""
                        }`}
                        aria-labelledby="accordion-heading-1-3"
                        data-bs-target="#accordion-1"
                      >
                        <div className="card-body flex-[1_1_auto]  p-[0_1.25rem_.25rem_2.35rem]">
                          <p className="font-space-grotesk">
                            If a cheque bounces, Law Wheels can help you send a
                            legal notice to the issuer, file a complaint in
                            court, and seek legal action to recover
                            the amount owed.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="card accordion-item mb-5 !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                      <div
                        className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !rounded-[0.4rem] !bg-inherit flex items-center justify-between"
                        id="accordion-heading-1-3"
                        onClick={() => toggleAccordion(3)}
                      >
                        <button
                          className="!text-[#343f52] !text-[0.9rem] hover:!text-[#605dba] before:!text-[#605dba] collapsed font-space-grotesk"
                          aria-expanded={expandedIndex === 3}
                          aria-controls="collapseThree"
                        >
                          How does Law Wheels assist with property disputes?
                        </button>
                        <FontAwesomeIcon
                          icon={
                            expandedIndex === 3 ? faChevronUp : faChevronDown
                          }
                          className="ml-2" // Add some left margin for spacing
                        />
                      </div>

                      <div
                        id="collapseThree"
                        className={`collapse ${
                          expandedIndex === 3 ? "show" : ""
                        }`}
                        aria-labelledby="accordion-heading-1-3"
                        data-bs-target="#accordion-1"
                      >
                        <div className="card-body flex-[1_1_auto]  p-[0_1.25rem_.25rem_2.35rem]">
                          <p className="font-space-grotesk">
                            We help clients resolve property disputes by
                            verifying ownership documents, negotiating
                            settlements, and representing them in court if
                            needed.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="card accordion-item mb-5 !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                      <div
                        className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !rounded-[0.4rem] !bg-inherit flex items-center justify-between"
                        id="accordion-heading-1-3"
                        onClick={() => toggleAccordion(4)}
                      >
                        <button
                          className="!text-[#343f52] !text-[0.9rem] hover:!text-[#605dba] before:!text-[#605dba] collapsed font-space-grotesk"
                          aria-expanded={expandedIndex === 4}
                          aria-controls="collapseThree"
                        >
                          What can Law Wheels do to help recover money owed to
                          me?
                        </button>
                        <FontAwesomeIcon
                          icon={
                            expandedIndex === 4 ? faChevronUp : faChevronDown
                          }
                          className="ml-2" // Add some left margin for spacing
                        />
                      </div>

                      <div
                        id="collapseThree"
                        className={`collapse ${
                          expandedIndex === 4 ? "show" : ""
                        }`}
                        aria-labelledby="accordion-heading-1-3"
                        data-bs-target="#accordion-1"
                      >
                        <div className="card-body flex-[1_1_auto]  p-[0_1.25rem_.25rem_2.35rem]">
                          <p className="font-space-grotesk">
                            We help individuals and businesses recover unpaid
                            debts by filing cases in Debt Recovery Tribunals
                            (DRTs) and pursuing legal actions to enforce
                            payment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                    <div id="accordion-2" className="accordion-wrapper">
                      <div className="card accordion-item mb-5 !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                        <div
                          className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !rounded-[0.4rem] !bg-inherit flex items-center justify-between"
                          id="accordion-heading-2-3"
                          onClick={() => toggleAccordion(5)}
                        >
                          <button
                            className="!text-[#343f52] !text-[0.9rem] hover:!text-[#605dba] before:!text-[#605dba] collapsed font-space-grotesk"
                            aria-expanded={expandedIndex === 5}
                            aria-controls="collapseSix"
                          >
                            How does Law Wheels assist with property disputes?
                          </button>
                          <FontAwesomeIcon
                            icon={
                              expandedIndex === 5 ? faChevronUp : faChevronDown
                            }
                            className="ml-2" // Add some left margin for spacing
                          />
                        </div>

                        <div
                          id="collapseSix"
                          className={`collapse ${
                            expandedIndex === 5 ? "show" : ""
                          }`}
                          aria-labelledby="accordion-heading-2-3"
                          data-bs-target="#accordion-2"
                        >
                          <div className="card-body flex-[1_1_auto]  p-[0_1.25rem_.25rem_2.35rem]">
                            <p className="font-space-grotesk">
                              We help clients resolve property disputes by
                              verifying ownership documents, negotiating
                              settlements, and representing them in court if
                              needed.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card accordion-item mb-5 !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                        <div
                          className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !rounded-[0.4rem] !bg-inherit flex items-center justify-between"
                          id="accordion-heading-2-3"
                          onClick={() => toggleAccordion(6)}
                        >
                          <button
                            className="!text-[#343f52] !text-[0.9rem] hover:!text-[#605dba] before:!text-[#605dba] collapsed font-space-grotesk"
                            aria-expanded={expandedIndex === 6}
                            aria-controls="collapseSix"
                          >
                         What can Law Wheels do to help recover money owed to me?
                          </button>
                          <FontAwesomeIcon
                            icon={
                              expandedIndex === 6 ? faChevronUp : faChevronDown
                            }
                            className="ml-2" // Add some left margin for spacing
                          />
                        </div>

                        <div
                          id="collapseSix"
                          className={`collapse ${
                            expandedIndex === 6 ? "show" : ""
                          }`}
                          aria-labelledby="accordion-heading-2-3"
                          data-bs-target="#accordion-2"
                        >
                          <div className="card-body flex-[1_1_auto]  p-[0_1.25rem_.25rem_2.35rem]">
                            <p className="font-space-grotesk">
                            We help individuals and businesses recover unpaid debts by filing cases in Debt Recovery Tribunals (DRTs) and pursuing legal actions to enforce payment.
                            </p>
                          </div>
                        </div>
                      </div>

                   

                    </div>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
