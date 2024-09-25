import React from "react";
// import about from "../../assets/images/about7.jpg";

const Settlement = () => {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pt-12 xl:pt-[6rem] lg:pt-[6rem] md:pt-[6rem] pb-6 xl:pb-6 lg:pb-6 md:pb-6">
        <div className="flex flex-wrap mx-[-15px] xsm:mt-[-50px] mt-[-80px] xl:mx-[-7.5px] lg:mx-[-7.5px] mb-24 md:!mb-[8rem] items-center">
          <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] xl:px-[7.5px] lg:px-[7.5px] px-[15px] max-w-full !relative mt-[80px]">
            <div
              className="shape bg-dot rellax !w-[7rem] !h-[12.5rem] absolute z-[1] opacity-50 !bg-[radial-gradient(#54a8c7_2px,transparent_2.5px)]"
              data-rellax-speed="1"
              style={{ top: "-2rem", left: "-1.9rem" }}
            ></div>
            <div
              className="shape !rounded-[.4rem] !bg-[#edf2fc] rellax xl:block lg:block md:block !absolute z-[1]"
              data-rellax-speed="0"
              style={{
                bottom: "-1.8rem",
                right: "-1.5rem",
                width: "85%",
                height: "90%",
              }}
            ></div>
            <figure className="!rounded-[.4rem] relative z-[2]">
              <img
                className="!rounded-[.4rem]"
                src={"https://law-wheel.b-cdn.net/image/about7.jpg"}
                srcset="./assets/img/photos/about7@2x.jpg 2x"
                alt="image"
              />
            </figure>
          </div>

          <div className="lg:w-5/12 xl:w-4/12 xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] w-full flex-[0_0_auto] xl:px-[7.5px] lg:px-[7.5px] px-[15px] max-w-full mt-[80px]">
            <h2 className="text-[0.8rem] uppercase inline-flex !leading-[1.35] text-line relative align-top pl-[1.4rem] tracking-[0.02rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#54a8c7] text-[#54a8c7]  !mb-3 font-space-grotesk">
              How It Works?
            </h2>
            <h3 className="text-[calc(1.315rem_+_0.78vw)] font-bold xl:text-[1.9rem] !leading-[1.25] mb-7 font-space-grotesk">
            Settlements
            </h3>
            <div className="flex flex-row !mb-6">
              <div>
                <span className="icon btn btn-block btn-soft-aqua pointer-events-none mr-5">
                  <span className="number !text-[0.9rem] font-space-grotesk">1</span>
                </span>
              </div>
              <div>
                <h4 className="!mb-1 !text-[1rem] !leading-[1.45] font-space-grotesk">
                Property Division
                </h4>
                <p className="!mb-0 font-space-grotesk text-justify">
                Both parties must agree on how to divide their property and assets. This includes real estate, savings, investments, and personal belongings.

                </p>
              </div>
            </div>
            <div className="flex flex-row !mb-6">
              <div>
                <span className="icon btn btn-block btn-soft-aqua pointer-events-none mr-5">
                  <span className="number !text-[0.9rem] font-space-grotesk">2</span>
                </span>
              </div>
              <div>
                <h4 className="!mb-1 !text-[1rem] !leading-[1.45] font-space-grotesk">
                Alimony
                </h4>
                <p className="!mb-0 font-space-grotesk text-justify">
                Agree on any spousal support, including the amount and duration of payments. This agreement should be fair and sustainable for both parties.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <span className="icon btn btn-block btn-soft-aqua pointer-events-none mr-5">
                  <span className="number !text-[0.9rem] font-space-grotesk">3</span>
                </span>
              </div>
              <div>
                <h4 className="!mb-1 !text-[1rem] !leading-[1.45] font-space-grotesk">
                Debt Allocation
                </h4>
                <p className="!mb-0 font-space-grotesk text-justify">
                Decide on how to handle any shared debts, such as mortgages, loans, and credit card balances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settlement;
