import React from "react";
import { FaCheck } from "react-icons/fa";

const DivorceSection = () => {
  return (
    <div className="bg-orange-50 md:p-20 p-8">
      <div
        className="container
         pt-[3.5rem] pb-12 xl:pt-20 lg:pt-20 md:pt-20 xl:pb-[3.5rem] lg:pb-[3.5rem] md:pb-[3.5rem]"
      >
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-8px] lg:mx-[-8px] mt-[-10px] lg:!mb-10 xl:!mb-10 items-center">
          {/* First Part */}
          <div className=" md:w-1/2  md:mb-0">
            {/* <button className="rounded-lg gradient-button px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700 mb-4 font-space-grotesk">
              Document Required
            </button> */}
            <h2 className="text-2xl font-semibold mb-2 text-black mb-3 font-space-grotesk">
              Ensure You Have All <br /> Necessary Documents Ready
            </h2>
            <p className="text-sm text-justify font-space-grotesk">
              To streamline the mutual divorce process, it’s essential to
              <span className="hidden md:inline ">
                {" "}
                <br />{" "}
              </span>
              have all the required documents prepared and organized.
              <span className="hidden md:inline">
                {" "}
                <br />{" "}
              </span>
              Below is a checklist of the documents you’ll need.
            </p>
          </div>
          {/* Second Part */}
          <div className=" md:w-1/4  md:mb-0">
            <ul className="list-none space-y-1">
              <li className="flex items-center mb-2 font-space-grotesk">
                <span className="bg-orange-500 text-white rounded-full p-1 mr-2">
                  <FaCheck className="w-2 h-2" />
                </span>
                Joint Petition for Divorce
              </li>
              <li className="flex items-center mb-3 font-space-grotesk ">
                <span className="bg-orange-500 text-white rounded-full p-1 mr-2">
                  <FaCheck className="w-2 h-2" />
                </span>
                Joint Petition for Divorce
              </li>
              <li className="flex items-center mb-3 font-space-grotesk">
                <span className="bg-orange-500 text-white rounded-full p-1 mr-2">
                  <FaCheck className="w-2 h-2" />
                </span>
                Proof of Residence
              </li>
              <li className="flex items-center mb-3 font-space-grotesk">
                <span className="bg-orange-500 text-white rounded-full p-1 mr-2">
                  <FaCheck className="w-2 h-2" />
                </span>
                Affidavit
              </li>
              <li className="flex items-center mb-3 font-space-grotesk">
                <span className="bg-orange-500 text-white rounded-full p-1 mr-2">
                  <FaCheck className="w-2 h-2" />
                </span>
                Income Proof
              </li>
            </ul>
          </div>
          {/* Third Part */}
          <div className="md:w-1/4  md:mb-0">
            <ul className="list-none space-y-1">
              <li className="flex items-center mb-2 font-space-grotesk">
                <span className="bg-orange-500 text-white rounded-full p-1 mr-2">
                  <FaCheck className="w-2 h-2" />
                </span>
                Property Documents
              </li>
              <li className="flex items-center mb-3 font-space-grotesk">
                <span className="bg-orange-500 text-white rounded-full p-1 mr-2">
                  <FaCheck className="w-2 h-2" />
                </span>
                Joint Petition for Divorce
              </li>
              <li className="flex items-center mb-3 font-space-grotesk">
                <span className="bg-orange-500 text-white rounded-full p-1 mr-2">
                  <FaCheck className="w-2 h-2" />
                </span>
                Child Custody Agreement
              </li>
              <li className="flex items-center mb-3 font-space-grotesk">
                <span className="bg-orange-500 text-white rounded-full p-1 mr-2">
                  <FaCheck className="w-2 h-2" />
                </span>
                Photographs
              </li>
              <li className="flex items-center mb-3 font-space-grotesk">
                <span className="bg-orange-500 text-white rounded-full p-1 mr-2">
                  <FaCheck className="w-2 h-2" />
                </span>
                Any Previous Agreements
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivorceSection;
