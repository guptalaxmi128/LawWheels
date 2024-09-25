import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo_lw.webp";

const Choose = () => {
  const [logoImage, setLogoImage] = useState(
    "https://law-wheel.b-cdn.net/image/logo_law.webp"
  );

  useEffect(() => {
    const img = new Image();
    img.src = "https://law-wheel.b-cdn.net/image/logo_law.webp";
    img.onload = () =>
      setLogoImage("https://law-wheel.b-cdn.net/image/logo_law.webp");
    img.onerror = () => setLogoImage(logo);
  }, []);
  return (
    <section
      className="wrapper gradient-bg bg-repeat bg-fixed bg-image section-frame xl:mx-[1.5rem] xl:min-h-[68vh] choose-height xl:rounded-[1rem] lg:mx-[1.5rem] lg:rounded-[1rem] md:mx-[1.5rem] md:rounded-[1rem] mb-16"
     
    >
      {/* <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-8 xl:pb-8 lg:pb-8 md:pb-8"> */}
      <div className="container">
        <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 mt-[-50px] items-center mb-[8rem]">
        <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full text-[#cacaca] xl:px-0 lg:px-0 mt-[30px]">
          <div className="mb-5 flex custom-logo">
            <img
              className="logo-dark w-40 h-40"
              src={logoImage}
              alt="image"
              onError={() => setLogoImage(logo)}
            />
            </div>
            <h2 className="text-[calc(1.2rem_+_1.14vw)] font-bold leading-[1.2] xl:text-[1.8rem] mb-3 text-white font-space-grotesk">
              Why Choose Law Wheels?
            </h2>
            <p className="lead !text-[1.05rem] !leading-[1.55] !font-normal xl:pr-5 lg:pr-5 font-space-grotesk text-justify">
            Choose Law Wheels for expert legal solutions, personalized support, and a proven track record of delivering timely, effective outcomes across diverse legal challenges.
            </p>
            {/* <a href="#" className="btn btn-white !rounded-[0.8rem]  !mb-0 font-space-grotesk">
              Learn More
            </a> */}
          </div>
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!order-2 xl:!ml-auto lg:!order-2 lg:!ml-auto xl:px-0 lg:px-0 mt-[50px]">
            <div className="card !rounded-[0.8rem] xl:!mr-6 lg:!mr-6 !bg-[#e6e5f4]">
              <div className="card-body p-3 choose-padding">
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
                      Providing expert legal services across all domains to meet
                      your diverse legal needs efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card !rounded-[0.8rem] xl:!ml-16 lg:!ml-16 mt-4 !bg-[#fbe7f3]">
              <div className="card-body p-3 choose-padding">
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
                      Delivering personalized legal strategies tailored to your
                      unique situation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card !rounded-[0.8rem] xl:!ml-14 lg:!ml-14 mt-4 !bg-[#e1f6f0]">
              <div className="card-body p-3 choose-padding">
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
                      dedicated legal representation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card !rounded-[0.8rem] xl:!mr-6 lg:!mr-6 mb-8  mt-4 !bg-[#e6e5f4]">
              <div className="card-body p-3 choose-padding">
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
                      Offering clear and competitive pricing with no hidden
                      fees, ensuring trust and value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

       
        </div>
      </div>
    </section>
  );
};

export default Choose;
