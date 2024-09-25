import React from "react";
// import childImage from "../../assets/images/3d6.png";

const ChildSection = () => {
  return (
    <section className="wrapper bg-orange-100 section-frame xl:mx-[2.5rem] xl:rounded-[1rem] lg:mx-[1.5rem] lg:rounded-[1rem] md:mx-[1.5rem] md:rounded-[1rem] mt-[50px] ">
      <div className="container pt-4 xl:pt-4 lg:pt-4 md:pt-4 pb-8 xl:pb-8 lg:pb-8 md:pb-8 ">
        <div className="flex flex-wrap mx-[-15px] md:mx-[-15px] lg:mx-[-15px] xl:mx-[-15px] mt-[-100px] items-center lg:text-left xl:text-left">
          <div
            className="md:w-8/12 lg:w-6/12 xl:w-7/12 w-full flex-[0_0_auto] pt-20 max-w-full !relative mt-[20px] px-4 sm:px-10"
            data-cues="slideInDown"
            data-group="page-title"
            data-delay="900"
          >
            <h2 className="!text-[1.75rem] uppercase !mb-3 tracking-[0.02rem] !leading-[1.35] font-space-grotesk">Child Custody</h2>
            <ul className="pl-0 list-none bullet-bg bullet-soft-purple font-space-grotesk">
              <li className="relative flex items-center mt-[0.35rem]">
                <div>
                  <strong className="font-space-grotesk">
                    Best Interests of the Child:
                  </strong>{" "}
                  The primary consideration in child custody agreements is the
                  best interest of the child. Both parents should work together
                  to create a stable and supportive environment.
                </div>
              </li>
              <li className="relative flex items-center mt-[0.35rem]">
                <div>
                  <strong className="font-space-grotesk">
                    Custody Arrangements:
                  </strong>{" "}
                  Decide whether custody will be joint or sole. Joint custody
                  allows both parents to share responsibilities, while sole
                  custody gives one parent primary responsibility.
                </div>
              </li>
              <li className="relative flex items-center mt-[0.35rem]">
                <div>
                  <strong className="font-space-grotesk">
                    Visitation Rights:
                  </strong>{" "}
                  Establish a clear visitation schedule that works for both
                  parents and is in the child’s best interests.
                </div>
              </li>
              <li className="relative flex items-center mt-[0.35rem]">
                <div>
                  <strong className="font-space-grotesk">Child Support:</strong>{" "}
                  Agree on the amount and frequency of child support payments.
                  These payments help cover the child's living expenses,
                  education, and medical needs.
                </div>
              </li>
            </ul>
          </div>
          <div className="md:w-4/12 lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] max-w-full !relative ">
            <figure className="!rounded-[.4rem] relative ">
              <img
                className="!rounded-[.4rem]"
                src={"https://law-wheel.b-cdn.net/image/3d6.png"}
                srcset="./assets/img/photos/about7@2x.jpg 2x"
                alt="image"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildSection;
