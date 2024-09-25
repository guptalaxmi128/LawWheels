import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Accordion from "../customAccordion/Accordion";
import dispute from "../../assets/images/dispute.png";
import TabMenu from "../tabMenu/TabMenu";
// import ProgressBar from "../progressBar/ProgressBar";

const PropertyDispute = () => {
  const tabs = [
    {
      name: "ownershipDispute",
      label: "Ownership Dispute",
      content: (
        <div className="font-space-grotesk">
          An ownership dispute happens when there is a disagreement about who
          the real owner of a property is. This can happen due to unclear
          property titles, inheritance issues, border disputes, or fraudulent
          transactions. Solving these disputes often involves legal steps like
          proving ownership with documents, conducting investigations, or going
          to court.
        </div>
      ),
    },
    {
      name: "coOwnershipDisputes",
      label: "Co-Ownership Disputes",
      content: (
        <div className="font-space-grotesk">
          Co-ownership disputes occur when two or more people share ownership of
          a property. Problems may arise about how to use, maintain, or sell the
          property. Common forms of co-ownership include joint tenancy and
          tenancy in common. Disputes can occur if co-owners contribute
          unequally, disagree on property management, or if one wants to sell
          and others don’t. Solutions may involve negotiations, dividing the
          property, or legal decisions.
        </div>
      ),
    },
    {
      name: "titleDisputes",
      label: "Title Disputes",
      content: (
        <div className="font-space-grotesk">
          Title disputes involve questions about who owns the property and the
          rights associated with it. Problems in the title transfer process,
          such as errors, omissions, or fraud, can cause these disputes. To
          resolve title disputes, people often need legal help, thorough title
          searches, and sometimes court actions to establish a clear and
          marketable title.
        </div>
      ),
    },
    {
      name: "landlordTenantDisputes",
      label: "Landlord-Tenant Disputes",
      content: (
        <div className="font-space-grotesk">
          These disputes happen in rental properties. Common issues include
          unpaid rent, lease violations, property maintenance problems, eviction
          processes, or disagreements over security deposits. Resolving these
          disputes involves understanding and enforcing the lease agreement and
          local landlord-tenant laws, and may require legal action if
          discussions or mediation don’t work.
        </div>
      ),
    },
    {
      name: "constructionDispute",
      label: "Construction Dispute",
      content: (
        <div className="font-space-grotesk">
          Construction disputes arise when people involved in a building
          project, like property owners, contractors, or architects, disagree.
          These disputes can be about delays, mistakes, extra costs, or breaches
          of contract. In many areas, Real Estate Regulatory Authorities (RERA)
          oversee construction issues. Resolving these disputes often involves
          arbitration, mediation, litigation, or seeking remedies under
          RERA regulations.
        </div>
      ),
    },
  ];
  const faqItems = [
    {
      question: "What is a property dispute?",
      answer:
        "A property dispute is a disagreement about the ownership, usage, or boundaries of real estate between two or more parties.",
    },
    {
      question: "What are common causes of property disputes?",
      answer:
        "Common causes include inheritance issues, boundary disagreements, co-ownership conflicts, and breaches of lease agreements.",
    },
    {
      question: "How can property disputes be resolved?",
      answer:
        "They can be resolved through legal proceedings, negotiation, mediation, arbitration, or family settlements.",
    },
    {
      question: "What should I do if I find myself in a property dispute?",
      answer:
        "Consult a lawyer experienced in property law to understand your rights and options. Consider mediation or negotiation as first steps.",
    },
    {
      question: "How long do property disputes usually take to resolve?",
      answer:
        "The duration varies widely depending on the complexity of the case and the method of resolution. Legal proceedings can take years, while mediation or negotiation might resolve faster.",
    },
    {
      question: "What documents are important in a property dispute?",
      answer:
        "Essential documents include property deeds, wills, lease agreements, property tax records, and any previous legal judgments related to the property.",
    },
    {
      question: "Can property disputes affect the value of my property?",
      answer:
        "Yes, ongoing disputes can decrease property value and make it harder to sell.",
    },
    {
      question: "What are the costs involved in resolving a property dispute?",
      answer:
        "Costs can include legal fees, court costs, mediation or arbitration fees, and any costs associated with gathering evidence or surveys.",
    },
    {
      question: "What role does a mediator play in a property dispute?",
      answer:
        "A mediator helps facilitate communication between disputing parties to reach a mutually agreeable solution without going to court.",
    },
    {
      question: "Can a property dispute be resolved without going to court?",
      answer:
        "Yes, many property disputes are resolved through negotiation, mediation, or arbitration, which can be faster and less costly than court proceedings.",
    },
  ];
  return (
    <>
      <Navbar />
      <section className="wrapper">
        <div className="container pt-20 xl:!pt-[4rem] lg:!pt-[4rem] md:!pt-[4rem] sm:!pt-[4rem] lg:mb-5 relative">
          <div className="flex flex-wrap items-start lg:mt-[-50px] mb-[5rem] relative ">
            <div className="lg:w-1/2 z-10 bg-[#f9ebe5] p-6  lg:text-left rounded-tl-lg rounded-bl-lg">
              <h2 className="text-xl font-semibold mb-2 font-space-grotesk">
                What is a Property Dispute?
              </h2>
              <p className="text-gray-700 font-space-grotesk ">
                A property dispute is when people disagree about who owns, can
                use, or where the boundaries of a piece of land are. These
                disputes can happen for many reasons, like arguments about who
                inherits property, where property lines are, or problems with
                shared ownership and rental agreements.
                <br />
                Such disputes can make relationships complicated and affect the
                value of the property. To resolve these issues, people might go
                to court, negotiate directly, or come to an agreement within the
                family. Often, legal help is needed to reach a fair solution
                that everyone agrees on.
              </p>
            </div>
            <div className="lg:w-1/2 lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 flex justify-end md:h-full">
              <div className="relative w-full h-full md:h-full">
                <div className="absolute inset-0 w-32 lg:bg-[#f9ebe5] z-0 rounded-tr-lg rounded-br-lg"></div>
                <img
                  src={dispute}
                  alt="Property Dispute"
                  className="relative w-full h-full object-cover z-10"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-9 xl:!px-12 font-space-grotesk text-center">
              Types of Property Disputes
            </h3>
            <div className="w-full max-w-4xl mx-auto text-center">
              <TabMenu tabs={tabs} />
            </div>
          </div>
        </div>
      </section>

      <section
    className="wrapper bg-fixed section-frame xl:mx-[1.5rem] xl:rounded-[1rem] lg:mx-[1.5rem] lg:rounded-[1rem] md:mx-[1.5rem] md:rounded-[1rem] mb-20 !bg-[#ffffff]"
>
    <div className="container pt-10 xl:pt-10 lg:pt-10 md:pt-10 pb-8 xl:pb-8 lg:pb-8 md:pb-8">
     
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#333] font-space-grotesk">Why Choose Law Wheels</h2>
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
                                    Transparent and Affordable Pricing
                                </h3>
                                <p className="!mb-0 font-space-grotesk pb-5">
                                    Offering clear and competitive pricing with no hidden fees, ensuring trust and value.
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

      {/* <section id="snippet-7" className="wrapper !bg-[#ffffff]">
        <div className="container pt-20 xl:pt-20 lg:pt-20 md:pt-20 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div className="flex flex-wrap mx-[-15px] items-center mt-[-40px]">
            <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full text-center lg:text-left xl:text-left mt-[40px]">
              <h2 className="text-[0.8rem] tracking-[0.02rem] uppercase text-[#aab0bc] !mb-3 !leading-[1.35] font-space-grotesk ">
                Save Time and Money
              </h2>
              <h3 className="text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] xl:text-[2rem] !mb-0 xl:pr-10 xxl:!pr-20 font-space-grotesk ">
                Save your time and money by choosing our{" "}
                <span className="!relative z-[2] after:content-[''] after:absolute after:z-[-1] after:block after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2/4 after:left-2/4 style-2 yellow">
                  professional
                </span>{" "}
                team.
              </h3>
            </div>

          
            <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[40px]">
              <div className="flex flex-wrap mx-[-15px] mt-[-30px] text-center">
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex flex-col items-center px-[15px] max-w-full mt-[30px]">
                  <ProgressBar value={95} color="fuchsia" />
                  <h4 className="!mb-0 font-space-grotesk">
                    Customer Satisfaction
                  </h4>
                </div>
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex flex-col items-center px-[15px] max-w-full mt-[30px]">
                  <ProgressBar value={80} color="orange" />
                  <h4 className="!mb-0 font-space-grotesk">
                    Increased Revenue
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="wrapper !bg-[#ffffff]  mb-[12rem] ">
        <div className="container">
          <div className="flex flex-wrap mx-[-15px] !text-center">
            <div className="md:w-10/12 lg:w-9/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
              <h2 className="!text-[.75rem] uppercase text-[#aab0bc] !mb-3 tracking-[0.02rem] !leading-[1.35] font-space-grotesk">
                Why family settlements?
              </h2>
              <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-9 xl:!px-12 font-space-grotesk">
                Family settlements save time, money, and stress, offering better
                resolutions.
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-40px]">
            <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] lg:px-[20px] mt-[40px]">
              <div className="flex flex-row">
                <div>
                  <div className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#343f52] text-blue mr-5 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 507 512"
                    >
                      <path
                        className="lineal-fill"
                        d="M402.4 437.9c0-10.5-4.4-20.4-12.6-28.7-5.1-5.6-10.6-11-16-16.1-2.7-2.6-5.5-5.3-8.1-8l-23.4-23.4c-18-18-41.3-18-59.4 0-2.4 2.4-4.9 4.8-7.3 7.2-6.4 6.4-13.1 12.9-19.6 19.9-11.6-5.2-23-12.4-36.5-23.2-13.4-10.9-62.2-59.7-73.2-73.2-10.7-13.5-17.9-25-23.2-36.5 7-6.4 13.5-13.1 19.9-19.6 2.4-2.4 4.8-4.9 7.2-7.3 18-18 18-41.3 0-59.4l-23.4-23.4c-2.7-2.7-5.4-5.4-8-8.1-5.2-5.3-10.6-10.8-16.1-16-8.3-8.2-18.3-12.6-28.7-12.6s-20.5 4.5-29.1 12.7l-.2.2L33.4 134c-10.8 10.6-17.4 24.8-18.6 39.9-2.1 25 5.3 48.4 11 63.6C39.6 275 60.4 309.7 91.3 347c11.2 13.3 23.2 26 35.9 37.8 11.8 12.7 24.4 24.7 37.8 35.8 37.2 31 72 51.7 109.5 65.6 15.3 5.7 38.6 13 63.6 11 15.1-1.2 29.3-7.8 39.9-18.6l11.6-11.4.2-.2c8.2-8.5 12.6-18.6 12.6-29.1z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M507 237.1C507 106.4 400.7 0 270 0c-54.9 0-108.2 19.1-150.6 54-6.1 5.1-7 14.2-1.9 20.3 5.1 6.1 14.1 7 20.2 2 37.3-30.6 84-47.4 132.3-47.4 114.9 0 208.3 93.4 208.3 208.3-.1 63.1-28.7 122.8-77.8 162.4l-.2-.2c-5.4-5.8-11.1-11.4-16.4-16.5l-.2-.1c-2.5-2.3-5-4.8-7.4-7.3l-23.8-23.8c-11.6-11.6-25.4-17.7-39.9-17.7s-28.3 6.1-39.9 17.7l-3.4 3.4c-1.1 1.1-2.6 2.5-3.8 3.7l-1.8 1.7c-3.5 3.5-7.1 7-10.8 10.7-8.6-4.9-16.8-10.5-24.4-16.7-12.9-10.5-60.4-58.1-71-71-6.2-7.7-11.8-15.8-16.8-24.4 3.7-3.6 7.2-7.2 10.7-10.7l1.7-1.8c1.3-1.3 2.6-2.6 3.8-3.9 1.1-1.1 2.2-2.3 3.4-3.4 23.5-23.5 23.5-56.2 0-79.7L149 148.3c4.5-6.1 9.4-11.8 14.8-17.1 58.5-58.5 153.6-58.5 212 0 44.9 45 56.6 113.4 29.3 170.8-3.4 7.2-.4 15.8 6.8 19.2s15.8.4 19.2-6.8c32.6-68.4 18.7-149.9-34.9-203.5-69.7-69.7-183.1-69.7-252.7 0-5.3 5.3-10.3 10.9-14.9 16.8-5-5.2-10.3-10.6-16-15.8-10.9-11-24.3-16.7-38.6-16.7s-27.8 5.7-39.1 16.6l-.2.2-.2.2-.1.1-11.3 11.6C9.9 136.9 1.8 154.2.4 172.7c-2.3 27.8 5.7 53.2 11.8 69.8 14.5 39.2 36.1 75.3 68.1 113.7C91.7 369.9 104 382.8 117 395c12.2 13 25.1 25.3 38.8 36.8 38.4 31.9 74.5 53.5 113.6 68 14.2 5.2 35.8 12.2 60 12.2 3.3 0 6.7-.1 10-.4 18.5-1.5 35.8-9.5 48.7-22.7l11.6-11.3.1-.1.2-.2.2-.2c10.9-11.3 16.6-24.9 16.6-39.1 0-4.5-.6-9-1.8-13.4 58-45 91.9-114.2 92-187.5zM379.5 457L368 468.4l-.1.1c-8.2 8.4-19.2 13.6-30.9 14.4-2.5.2-5 .3-7.5.3-19.5 0-37.8-6-49.9-10.4-36-13.4-69.5-33.4-105.2-63.1-12.9-10.8-25.1-22.3-36.6-34.6-.2-.3-.5-.5-.7-.7-12.3-11.4-23.8-23.6-34.6-36.5-29.8-35.9-49.9-69.4-63.3-105.4-5.2-14.1-11.9-35.3-10.1-57.4.9-11.8 6-22.8 14.5-31l.1-.1L55 132.5c5.8-5.6 12.4-8.5 19.1-8.5s13 2.9 18.6 8.4l.4.4c5.3 4.9 10.6 10.3 15.5 15.3 2.6 2.7 5.2 5.4 7.8 8l23.8 23.8c12.4 12.4 12.4 26.6 0 39l-3.6 3.6c-1.2 1.2-2.4 2.5-3.7 3.8l-1.9 1.8c-5.6 5.7-11.5 11.6-17.6 17.2-4.6 4.2-6 10.9-3.4 16.5 5.7 12.7 13.7 25.2 25 39.5l.1.2c11.7 14.4 60.9 63.6 75.3 75.3l.1.1c14.3 11.3 26.9 19.3 39.5 25 5.7 2.6 12.3 1.2 16.5-3.4 5.6-6.1 11.5-12 17.3-17.6l1.9-1.8c1.2-1.2 2.4-2.4 3.7-3.6s2.4-2.4 3.6-3.6c6.1-6.1 12.8-9.3 19.5-9.3s13.4 3.2 19.5 9.3l23.8 23.8c2.6 2.6 5.3 5.2 8 7.8 5 4.9 10.4 10.1 15.3 15.5l.4.4c3.9 3.9 8.4 10.3 8.4 18.6.1 6.6-2.8 13.2-8.4 19z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M274.8 258.4h-36.5c.1-4.4 6.9-9 14.7-14.3 13.4-9.2 30-20.6 30-40.4 0-20.4-18.1-31.4-35.1-31.4-16.6 0-34.1 10.2-34.1 29.2 0 8.7 3.9 13.2 11.6 13.2 8.6 0 13.3-5 13.3-9.7 0-7.8 5.1-9.4 9.4-9.4 7.1 0 9.6 4.8 9.6 8.8 0 8-9.9 15.2-20.4 22.9-12.4 9.1-25.2 18.5-25.2 31.2v14c0 5.2 6.6 8.4 11.3 8.4h51.5c4.4 0 8.2-5.3 8.2-11.4s-3.8-11.1-8.3-11.1z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M351.9 234.9h-4.8v-8.7c0-5-5-8.2-12.7-8.2s-12.7 3.2-12.7 8.2v8.7H313l24.6-49.3c.5-1 .8-2.2.8-3.3 0-6.2-8.2-10-12.7-10-4.6-.1-8.8 2.5-10.7 6.6l-33.4 65.5c-.8 1.5-1.3 3.2-1.3 5 0 5.5 3.6 9.3 9 9.3h32.4v13.9c0 5.8 6.6 8.4 12.7 8.4s12.7-2.6 12.7-8.4v-13.9h4.8c4.3 0 8.4-5.8 8.4-11.9 0-5.7-2.6-11.9-8.4-11.9z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-[1rem] tracking-[-0.03em] font-space-grotesk">
                    Faster Resolution
                  </h4>
                  <p className="!mb-0 font-space-grotesk">
                    Court cases can take years, but family settlements can be
                    quicker
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] lg:px-[20px] mt-[40px]">
              <div className="flex flex-row">
                <div>
                  <div className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow mr-5 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 339.8 409.6"
                    >
                      <path
                        className="lineal-stroke"
                        d="M169.9 409.6c-5.5 0-10.9-1.2-15.8-3.5C107.8 384.8 0 327.5 0 255.5V72.1c0-10.7 8.7-19.4 19.4-19.5 2.1 0 4.2.3 6.1 1 9.2 3.1 18.9 4.7 28.6 4.6 31.5.1 60.7-16.3 76.9-43.3C136.6 5.7 146.6 0 157.4 0h25c10.8.1 20.8 5.7 26.4 14.9 16.2 27 45.4 43.4 76.9 43.3 9.7 0 19.4-1.6 28.6-4.6 10.2-3.4 21.2 2.1 24.6 12.3.7 2 1 4.1 1 6.1v48c0 6.5-5.3 11.8-11.7 11.8-6.5 0-11.8-5.3-11.8-11.7V77.6c-10 2.8-20.3 4.2-30.6 4.2-39.7.2-76.5-20.6-97-54.6-1.3-2.2-3.7-3.6-6.3-3.6h-25c-2.6 0-5 1.4-6.3 3.6-20.5 34-57.3 54.8-97 54.6-10.3 0-20.6-1.4-30.6-4.2v178c0 47.7 72.5 98 140.4 129.3 3.8 1.7 8.2 1.7 12 0 67.9-31.3 140.4-81.6 140.4-129.3v-74.9c0-6.5 5.3-11.8 11.8-11.7 6.5 0 11.7 5.3 11.7 11.7v74.9c0 72-107.8 129.3-154.1 150.6-5 2.2-10.4 3.4-15.9 3.4z"
                      />
                      <path
                        className="lineal-fill"
                        d="M156 269l-62.2-31.1c-11.8-5.9-16.6-20.2-10.7-32 5.9-11.8 20.2-16.6 32-10.7l44.9 22.5 56.6-70.7c8.2-10.3 23.2-12 33.5-3.7 10.3 8.2 12 23.2 3.7 33.5l-68.6 85.8c-6.9 8.8-19.1 11.5-29.2 6.4z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M166.7 283.3c-5.5 0-11-1.3-15.9-3.8l-62.2-31.1c-17.6-8.8-24.7-30.2-15.9-47.8s30.2-24.7 47.8-15.9l36.4 18.2 50.6-63.3c12.3-15.4 34.7-17.9 50.1-5.6 15.4 12.3 17.9 34.7 5.6 50.1l-68.6 85.8c-6.8 8.5-17.1 13.4-27.9 13.4zm-62.2-78.8c-6.7 0-12.1 5.4-12.1 12.1 0 4.6 2.6 8.8 6.7 10.8l62.2 31.1c5.1 2.6 11.3 1.2 14.9-3.3l68.6-85.8c4.3-5.1 3.7-12.8-1.4-17.1-5.1-4.3-12.8-3.7-17.1 1.4-.1.2-.3.3-.4.5l-56.6 70.7c-3.5 4.3-9.5 5.6-14.4 3.2L110 205.6c-1.7-.7-3.6-1.1-5.5-1.1z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-[1rem] tracking-[-0.03em] font-space-grotesk">
                    Cost-Effective
                  </h4>
                  <p className="!mb-0 font-space-grotesk">
                    Settling disputes outside of court saves money on legal
                    fees.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] lg:px-[20px] mt-[40px]">
              <div className="flex flex-row">
                <div>
                  <div className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#f78b77] text-orange mr-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 409.6 319.1"
                    >
                      <path
                        className="lineal-stroke"
                        d="M333.9 278.3H276c-6-.2-10.8-5.2-10.6-11.2.2-5.8 4.8-10.4 10.6-10.6h57.9c29.8 0 53.9-24.1 53.9-53.9 0-25.9-18.5-48.1-43.9-52.9-5.9-1.1-9.8-6.8-8.7-12.7 0-.2.1-.5.2-.7 12.6-48.9-16.8-98.7-65.7-111.4-38.3-9.9-78.7 6-100 39.4-2.9 4.6-8.8 6.3-13.7 4.1-30.1-13.6-65.6-.2-79.2 29.9-3.5 7.8-5.3 16.2-5.3 24.7 0 4.6.6 9.3 1.6 13.8 1.4 5.9-2.3 11.7-8.1 13.1-.1 0-.2 0-.2.1-29.3 6-47.9 34.6-41.8 63.7 5.3 24.9 27.2 42.8 52.7 42.8h58.2c6 .2 10.8 5.2 10.6 11.2-.2 5.8-4.8 10.4-10.6 10.6H75.7C33.9 278.3 0 244.4 0 202.6c0-31.9 20-60.4 50-71.2-.3-2.8-.4-5.7-.5-8.5 0-45.1 36.6-81.7 81.8-81.7 8.5 0 16.9 1.3 25 3.9 37.6-50 108.6-60 158.5-22.4C348.4 48 365.2 89.6 358.6 131c39.5 13.6 60.5 56.7 46.9 96.2-10.6 30.6-39.3 51.1-71.6 51.1z"
                      />
                      <path
                        className="lineal-fill"
                        d="M250.6 224.3l-39.3-53.6c-2.7-3.6-7.8-4.4-11.4-1.8-.7.5-1.3 1.1-1.8 1.8L159 224.3c-2.7 3.6-1.9 8.7 1.7 11.4 1.4 1 3.1 1.6 4.9 1.6h10.7v52.2c0 10.3 8.3 18.6 18.6 18.6h19.8c10.3 0 18.6-8.3 18.6-18.6v-52.3H244c4.5 0 8.2-3.6 8.2-8.1.1-1.7-.5-3.4-1.6-4.8z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M214.7 319.1h-19.8c-16.3 0-29.5-13.2-29.5-29.5v-41.3c-10.5-.1-19-8.8-18.9-19.3 0-4 1.3-7.8 3.7-11l39.3-53.6c6.2-8.5 18-10.4 26.5-4.2 1.6 1.2 3 2.6 4.2 4.2l39.3 53.6c6.2 8.5 4.4 20.4-4.1 26.6-3.2 2.3-7.1 3.6-11 3.7v41.3c-.1 16.2-13.4 29.4-29.7 29.5zM171 226.4h5.3c6 0 10.9 4.9 10.9 10.9v52.2c0 4.3 3.5 7.7 7.7 7.7h19.8c4.3 0 7.7-3.5 7.7-7.7v-52.2c0-6 4.9-10.9 10.9-10.9h5.3l-33.9-46.2-33.7 46.2z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-[1rem] tracking-[-0.03em] font-space-grotesk">
                    Less Stressful
                  </h4>
                  <p className="!mb-0 font-space-grotesk">
                    Family settlements are less formal and can be less stressful
                    than court battles.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] lg:px-[20px] mt-[40px]">
              <div className="flex flex-row">
                <div>
                  <div className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#d16b86] text-pink mr-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 427.5"
                    >
                      <path
                        className="lineal-fill"
                        d="M186.9 353.4h138.3V413H186.9z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M460.2 0H51.8C23.2 0 0 23.2 0 51.8v264.4c0 28.6 23.2 51.7 51.8 51.8h120.6v30.6h-28.8c-8 0-14.5 6.5-14.5 14.5s6.5 14.5 14.5 14.5h224.9c8 0 14.5-6.5 14.5-14.5s-6.5-14.5-14.5-14.5h-28.8v-45.1c0-8-6.5-14.5-14.5-14.5H51.8C39.2 339 29 328.8 29 316.2V51.8C29 39.2 39.2 29 51.8 29h408.5c12.6 0 22.8 10.2 22.8 22.8v264.4c0 12.6-10.2 22.8-22.8 22.8h-45.9c-8-.2-14.6 6.1-14.8 14.1-.2 8 6.1 14.6 14.1 14.8h46.7c28.6 0 51.7-23.2 51.8-51.8V51.8C512 23.2 488.8 0 460.2 0zM201.3 398.5v-30.6h109.4v30.6H201.3z"
                      />
                      <path
                        className="lineal-fill"
                        d="M218.2 291.3h-75.6v-90.6c0-20.9 16.9-37.8 37.8-37.8s37.8 16.9 37.8 37.8v90.6zm75.6 0h-75.6V155.4c0-20.9 16.9-37.8 37.8-37.8s37.8 16.9 37.8 37.8v135.9z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M369.4 215.4c8 0 14.4-6.4 14.5-14.4v-91c0-28.9-23.5-52.2-52.3-52.2-28.3 0-51.4 22.6-52.2 50.8-25.8-12.9-57.1-2.5-70.1 23.3-3.4 6.9-5.3 14.4-5.5 22.1-25.8-12.9-57.2-2.5-70.1 23.3-3.6 7.3-5.5 15.3-5.5 23.4v90.6c0 8 6.5 14.5 14.5 14.5h226.7c8 .2 14.6-6.1 14.8-14.1.2-8-6.1-14.6-14.1-14.8h-61.9V110c0-12.9 10.4-23.3 23.3-23.3s23.3 10.4 23.3 23.3v91c.1 8 6.6 14.4 14.6 14.4zm-212.3-14.7c0-12.9 10.4-23.3 23.3-23.3s23.3 10.4 23.3 23.3v76.1h-46.6v-76.1zm75.6 0v-45.4c0-12.9 10.4-23.3 23.3-23.3s23.3 10.4 23.3 23.3v121.5h-46.6v-76.1z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-[1rem] tracking-[-0.03em] font-space-grotesk">
                    More Control
                  </h4>
                  <p className="!mb-0 font-space-grotesk">
                    You have more control over the outcome in a family
                    settlement compared to a court decision.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] lg:px-[20px] mt-[40px]">
              <div className="flex flex-row">
                <div>
                  <div className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#45c4a0] text-green mr-5 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 454.6"
                    >
                      <path
                        className="lineal-fill"
                        d="M131.5 126.8h249V15.2H15.2v256.3h116.3z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M496.8 194.4c-8.4 0-15.2 6.8-15.2 15.2v158.3h-29.7c-8.4 0-15.2 6.8-15.2 15.2 0 .5 0 1.1.1 1.6l2.8 27.2-75.7-42.1c-2.3-1.3-4.8-1.9-7.4-1.9H146.7V142h233.8c8.4 0 15.2-6.8 15.2-15.2V15.2c0-8.4-6.8-15.2-15.2-15.2H15.2C6.8 0 0 6.8 0 15.2v256.3c0 8.4 6.8 15.2 15.2 15.2h101v96.4c0 8.4 6.8 15.2 15.2 15.2h221l97.8 54.3c7.3 4.1 16.6 1.4 20.7-5.9 1.5-2.7 2.2-5.9 1.8-9l-4.1-39.5h28.1c8.4 0 15.2-6.8 15.2-15.2V209.6c.1-8.4-6.7-15.2-15.1-15.2zM30.4 256.3V30.4h334.8v81.2H131.5c-8.4 0-15.2 6.8-15.2 15.2v129.5H30.4z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M413.8 223.6H214.4c-8.4 0-15.2-6.8-15.2-15.2s6.8-15.2 15.2-15.2h199.4c8.4 0 15.2 6.8 15.2 15.2s-6.8 15.2-15.2 15.2zm0 85.9H214.4c-8.4 0-15.2-6.8-15.2-15.2S206 279 214.4 279h199.4c8.4 0 15.2 6.8 15.2 15.2s-6.8 15.3-15.2 15.3z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-[1rem] tracking-[-0.03em] font-space-grotesk">
                    Better Relationships
                  </h4>
                  <p className="!mb-0 font-space-grotesk">
                    Settling disputes amicably can help maintain family
                    relationships.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] lg:px-[20px] mt-[40px]">
            <div className="flex flex-row">
              <div>
                <img
                  src="assets/img/icons/lineal/megaphone.svg"
                  className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#747ed1] text-purple mr-5 mt-1"
                  alt="image"
                />
              </div>
              <div>
                <h4 className="text-[1rem] tracking-[-0.03em] font-space-grotesk">
                  Content Marketing
                </h4>
                <p className="!mb-0 font-space-grotesk">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit nullam quis risus eget.
                </p>
              </div>
            </div>
          </div> */}
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

export default PropertyDispute;
