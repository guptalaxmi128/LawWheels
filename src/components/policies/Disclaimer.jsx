import React from "react";
// import blurry from "../../assets/images/bg3.jpeg";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Disclaimer = () => {
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
              Disclaimer
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
              General Information
              </h2>
              <p className="lead leading-[1.65] text-[0.9rem] font-medium text-left mb-5 font-space-grotesk">
              The information provided on our website (lawwheels.com) is for general informational purposes only and does not constitute legal advice.
              </p>
            </div>
            <div className="w-full px-[15px]">
            <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.5rem] leading-[1.3] mb-3 text-left font-space-grotesk">
              No Attorney-Client Relationship
              </h2>
              <p className="lead leading-[1.65] text-[0.9rem] font-medium text-left mb-5 font-space-grotesk">
              Using our website or services does not create an attorney-client relationship between you and Law Wheels.
              </p>
            </div>
          
            <div className="w-full px-[15px]">
            <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.5rem] leading-[1.3] mb-3 text-left font-space-grotesk">
              Accuracy
              </h2>
              <p className="lead leading-[1.65] text-[0.9rem] font-medium text-left mb-5 font-space-grotesk">
              We strive to ensure that the information on our website is accurate and up-to-date, but we cannot guarantee its completeness or accuracy.
              </p>
            </div>
            <div className="w-full px-[15px]">
            <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.5rem] leading-[1.3] mb-3 text-left font-space-grotesk">
              External Links
              </h2>
              <p className="lead leading-[1.65] text-[0.9rem] font-medium text-left mb-5 font-space-grotesk">
              Our website may contain links to third-party sites. We are not responsible for the content or practices of these sites.
              </p>
            </div>
            <div className="w-full px-[15px]">
            <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.5rem] leading-[1.3] mb-3 text-left font-space-grotesk">
              Limitation of Liability
              </h2>
              <p className="lead leading-[1.65] text-[0.9rem] font-medium text-left mb-5 font-space-grotesk">
              Law Wheels is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our website or services.
              </p>
            </div>
          
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Disclaimer;
