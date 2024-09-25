import React from "react";
// import blurry from "../../assets/images/bg3.jpeg";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const RefundPolicy = () => {
  return (
    <div>
      <Navbar />
      <section
        className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.1)]"
        style={{
          backgroundImage: `url(${"https://law-wheel.b-cdn.net/image/bg3.jpg"})`,
        }}
      >
        <div className="container pt-28 pb-40 xl:pt-36 lg:pt-36 md:pt-36 xl:pb-[12.5rem] lg:pb-[12.5rem] md:pb-[12.5rem] !text-center">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
              <h1 className="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] mb-3 text-white font-space-grotesk">
                Refund Policy
              </h1>
              <nav className="inline-block" aria-label="breadcrumb">
                <ol className="breadcrumb flex flex-wrap bg-none p-0 rounded-none list-none mb-20px">
                  <li className="breadcrumb-item flex items-center text-white">
                    <a
                      className="flex items-center text-white hover:text-white font-space-grotesk"
                      href="/"
                    >
                      Home <ChevronRightIcon className="w-4 h-4 ml-2" />
                    </a>
                  </li>
                  <li className="breadcrumb-item flex items-center text-white pl-2">
                    <a
                      className="flex items-center text-white hover:text-white font-space-grotesk"
                      href="#"
                    >
                      Policies
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper bg-[#ffffff] relative border-0 upper-end before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:border-y-transparent before:border-0 before:border-solid before:right-0">
        <div className="container pb-12 pt-10">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="w-full px-[15px]">
            <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.5rem] leading-[1.3] mb-3 text-left font-space-grotesk">
                Consultation Fees
              </h2>
              <p className="lead leading-[1.65] text-[0.9rem] font-medium text-left mb-5 font-space-grotesk">
                Consultation fees paid for initial legal advice are
                non-refundable.
              </p>
            </div>

            <div className="w-full px-[15px]">
            <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.5rem] leading-[1.3] mb-3 text-left font-space-grotesk">
                Service Fees
              </h2>
              <p className="lead leading-[1.65] text-[0.9rem] font-medium text-left mb-5 font-space-grotesk">
                Fees paid for specific services such as document preparation and
                court filings are non-refundable once the service has been
                initiated.
              </p>
            </div>
            <div className="w-full px-[15px]">
            <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.5rem] leading-[1.3] mb-3 text-left font-space-grotesk">
                Cancellations
              </h2>
              <p className="lead leading-[1.65] text-[0.9rem] font-medium text-left mb-5 font-space-grotesk">
                If you wish to cancel a service before it has been initiated,
                please contact us at connect@lawwheels.com. Refund eligibility
                will be determined on a case-by-case basis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
