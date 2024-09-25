import React from "react";
import NavbarLayout from "./NavbarLayout";

const LayoutLoader = () => {
  return (
    <>
  <NavbarLayout />
      <section className="wrapper overflow-hidden bg-gray-100">
        <div className="container py-20 xl:pt-[12.5rem] lg:pt-[12.5rem] md:pt-[12.5rem] !text-center !relative">
          <div className="flex flex-wrap mx-[-15px] !relative">
            <div className="lg:w-8/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !relative">
             
              {/* Skeleton shapes */}
              <div
                className="skeleton-loader absolute shape grape w-5 hidden xl:block lg:block"
                style={{ top: "-5%", left: "-15%" }}
              />
              <div
                className="skeleton-loader absolute shape violet !w-[2.5rem] hidden xl:block lg:block"
                style={{ bottom: "30%", left: "-20%" }}
              />
              <div
                className="skeleton-loader absolute shape fuchsia w-6 hidden xl:block lg:block"
                style={{ top: "0%", right: "-25%", transform: "rotate(70deg)" }}
              />
              <div
                className="skeleton-loader absolute shape yellow w-6 hidden xl:block lg:block"
                style={{ bottom: "25%", right: "-17%" }}
              />

              {/* Skeleton text */}
              <div className="skeleton-loader h-10 mb-5 mx-auto w-3/4" />
              <div className="skeleton-loader h-6 mb-4 mx-auto w-2/4" />
              <div className="skeleton-loader h-6 mb-4 mx-auto w-2/4" />
              <div className="skeleton-loader h-6 mb-8 mx-auto w-1/4" />

              {/* Skeleton buttons */}
              <div className="flex justify-center">
                <span className="skeleton-loader h-10 w-32 mx-1 rounded-lg" />
                <span className="skeleton-loader h-10 w-32 mx-1 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LayoutLoader;
