import React from "react";
// import blurry from "../../assets/images/blurry.png";

const Community = () => {
  return (
    <div>
      <section className="overflow-hidden">
        <div className="container pt-10 xl:pt-8 lg:pt-32 md:pt-8 xl:pb-10 lg:pb-10 md:pb-10 sm:pb-0">
          <div className="flex flex-wrap mx-[-6px] xl:mx-[-8px] lg:mx-[-8px] mt-[-8px] items-center mb-5 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
            <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !relative xl:px-[35px] lg:px-[20px] mt-[50px]">
              <div
                className="absolute hidden xl:block lg:block md:block"
                style={{
                  top: "50%",
                  left: "50%",
                  width: "130%",
                  height: "auto",
                  transform: "translate(-50%,-50%)",
                  zIndex: "-1",
                }}
              >
                <img
                  className="w-full"
                  src={"https://law-wheel.b-cdn.net/image/blurry.png"}
                  alt="image"
                />
              </div>
              <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px]">
                <div className="md:w-6/12 lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full !self-end xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px]">
                  <div className="card !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem]">
                    <div className="card-body flex-[1_1_auto] p-[25px]">
                      <blockquote className="text-[0.85rem] !leading-[1.7] !font-normal pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                        <p className="font-space-grotesk">
                          “Law Wheels resolved my property dispute quickly and
                          professionally. Highly recommend their services!”
                        </p>
                        <div className="flex items-center text-left">
                          <div className="info p-0">
                            <h5 className="!mb-1 text-[.9rem] !leading-[1.5] font-space-grotesk">
                              Ravi Sharma
                            </h5>
                            {/* <p className="!mb-0 text-[.8rem] font-space-grotesk">Financial Analyst</p> */}
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full !self-end xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px]">
                  <div className="card !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem]">
                    <div className="card-body flex-[1_1_auto] p-[25px]">
                      <blockquote className="text-[0.85rem] !leading-[1.7] !font-normal pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                        <p className="font-space-grotesk">
                          “The team at Law Wheels made my divorce process smooth
                          and stress-free. Thank you”
                        </p>
                        <div className="flex items-center text-left">
                          <div className="info p-0">
                            <h5 className="!mb-1 text-[.9rem] !leading-[1.5] font-space-grotesk">
                              Anita Verma
                            </h5>
                            {/* <p className="!mb-0 text-[.8rem] font-space-grotesk">Marketing Specialist</p> */}
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="md:w-6/12 lg:w-6/12 xl:w-5/12 flex-[0_0_auto] px-[15px] max-w-full xl:!ml-[8.33333333%] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px]">
                  <div className="card !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem]">
                    <div className="card-body flex-[1_1_auto] p-[20px]">
                      <blockquote className="text-[0.85rem] !leading-[1.7] !font-normal pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                        <p className="font-space-grotesk">
                          “Law Wheels provided excellent legal advice for my
                          cybercrime case. Very satisfied with the outcome.”
                        </p>
                        <div className="flex items-center text-left">
                          <div className="info p-0">
                            <h5 className="!mb-1 text-[.9rem] !leading-[1.5] font-space-grotesk">
                              Suresh Patel
                            </h5>
                            {/* <p className="!mb-0 text-[.8rem] font-space-grotesk">Sales Specialist</p> */}
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full !self-start xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px]">
                  <div className="card !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem]">
                    <div className="card-body flex-[1_1_auto] p-[25px]">
                      <blockquote className="text-[0.85rem] !leading-[1.7] !font-normal pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                        <p className="font-space-grotesk">
                          “Efficient and transparent service. Law Wheels helped
                          me recover my debts without any hassle”
                        </p>
                        <div className="flex items-center text-left">
                          <div className="info p-0">
                            <h5 className="!mb-1 text-[.9rem] !leading-[1.5] font-space-grotesk">
                              Meena Joshi
                            </h5>
                            {/* <p className="!mb-0 text-[.8rem] font-space-grotesk">Investment Planner</p> */}
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] lg:px-[20px] mt-[50px]">
              <h2 className="text-[calc(1.345rem_+_1.14vw)] font-bold leading-[1.2] xl:text-[2.2rem] mb-2  xl:mt-[-1.5rem] lg:mt-[-1.5rem] font-space-grotesk">
                Clients Review
              </h2>
              <p className="lead !text-[1.05rem] !leading-[1.55] !font-normal mb-4 font-space-grotesk">
                Customer satisfaction is our major goal. See what our clients
                are saying about our services.
              </p>
              <p className="font-space-grotesk">
              Hear from our satisfied clients about how Law Wheels has helped them navigate their legal challenges with confidence, delivering timely and effective solutions across a wide range of legal services.
              </p>
              {/* <a
                href="#"
                className="btn gradient-button font-space-grotesk text-white !bg-[#605dba] border-[#605dba] hover:text-white hover:bg-[#605dba] hover:border-[#605dba] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#605dba] active:border-[#605dba] disabled:text-white disabled:bg-[#605dba] disabled:border-[#605dba] !rounded-[0.8rem] mt-3"
              >
                All Testimonials
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
