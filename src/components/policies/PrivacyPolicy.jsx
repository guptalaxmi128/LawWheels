import React from "react";
// import blurry from "../../assets/images/bg3.jpeg";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
                Privacy Policy
              </h1>
              <nav className="inline-block" aria-label="breadcrumb">
                <ol className="breadcrumb flex flex-wrap bg-none p-0 rounded-none list-none mb-20px">
                  <li className="breadcrumb-item flex items-center text-white">
                    <Link
                      className="flex items-center text-white hover:text-white font-space-grotesk"
                      to="/"
                    >
                      Home <ChevronRightIcon className="w-4 h-4 ml-2" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item flex items-center text-white pl-2">
                    <Link
                      className="flex items-center text-white hover:text-white font-space-grotesk"
                      to="#"
                    >
                      Policy
                    </Link>
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
                Introduction
              </h2>
              <p className="lead leading-[1.65] text-[0.9rem] font-medium text-left mb-10 font-space-grotesk">
                At Law Wheels, we are committed to protecting your privacy. This
                Privacy Policy outlines how we collect, use, and safeguard your
                personal information when you visit our website (lawwheels.com)
                and use our mutual divorce services.
              </p>
            </div>
            <div className="w-full px-[15px]">
            <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.5rem] leading-[1.3] mb-3 text-left font-space-grotesk">
                Information We Collect
              </h2>
              <p className="lead leading-[1.65] text-[0.9rem] font-medium text-left mb-5 font-space-grotesk">
                We collect the following types of information:
              </p>
              <ul className="list-disc pl-6 text-left space-y-4 text-[0.9rem] leading-[1.65] font-medium font-space-grotesk">
                <li>
                  <strong>Personal Information:</strong> Details such as your
                  name, address, email, phone number, and other identifying
                  information.
                </li>
                <li>
                  <strong>Divorce Details:</strong> Information related to your
                  marriage and divorce, including names, marriage certificate,
                  joint petition details, etc.
                </li>
                <li>
                  <strong>Financial Information:</strong> Income details, bank
                  statements, and other financial documents required for the
                  mutual divorce process.
                </li>
                <li>
                  <strong>Cookies and Usage Data:</strong> Information on how
                  you access and use our website, including IP address, browser
                  type, and usage statistics.
                </li>
              </ul>
            </div>
            <div className="w-full px-[15px]">
              <h4 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.5rem] leading-[1.3] mb-3 text-left font-space-grotesk">
                How We Use Your Information
              </h4>
              <ul className="list-disc pl-6 text-left space-y-4 text-[0.9rem] leading-[1.65] font-medium font-space-grotesk">
                <li>
                  <strong>Service Provision:</strong> To facilitate the mutual
                  divorce process, including legal consultations, document
                  preparation, and court filings.
                </li>
                <li>
                  <strong>Communication:</strong> To communicate with you
                  regarding your case, updates, and any necessary follow-up.
                </li>
                <li>
                  <strong>Improvement:</strong> To improve our services, website
                  functionality, and user experience.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> To comply with legal
                  obligations and protect our legal rights.
                </li>
              </ul>
            </div>
            <div className="w-full px-[15px]">
            <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.5rem] leading-[1.3] mb-3 text-left font-space-grotesk">
                Data Protection
              </h2>
              <p className="lead leading-[1.65] text-[0.9rem] font-medium text-left mb-10 font-space-grotesk">
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized access,
                alteration, disclosure, or destruction.
              </p>
            </div>
            <div className="w-full px-[15px]">
            <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.5rem] leading-[1.3] mb-3 text-left font-space-grotesk">
                Sharing of Information
              </h2>
              <p className="lead leading-[1.65] text-[0.9rem] font-medium text-left mb-10 font-space-grotesk">
                We do not sell, trade, or otherwise transfer your personal
                information to outside parties, except as required for legal
                proceedings or with your explicit consent.
              </p>
            </div>
            <div className="w-full px-[15px]">
            <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.5rem] leading-[1.3] mb-3 text-left font-space-grotesk">
                Your Rights
              </h2>
              <p className="lead leading-[1.65] text-[0.9rem] font-medium text-left mb-10 font-space-grotesk">
                You have the right to access, correct, or delete your personal
                information. You can contact us at connect@lawwheels.com to
                exercise these rights.
              </p>
            </div>
            <div className="w-full px-[15px]">
            <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.5rem] leading-[1.3] mb-3 text-left font-space-grotesk">
                Changes to This Policy
              </h2>
              <p className="lead leading-[1.65] text-[0.9rem] font-medium text-left mb-10 font-space-grotesk">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on our
                website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
