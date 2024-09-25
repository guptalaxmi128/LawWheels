import React from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import process1 from "../../assets/images/process.png";

const Service = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/process");
  };
  return (
    <div>
      <section className="wrapper !bg-[#ffffff]">
        {/* <div className="container pt-2 xl:!py-[2rem] lg:!py-[2rem] md:!py-[2rem]"> */}
        <div className="container" >
          <div className="flex flex-wrap mx-[-15px] items-start mt-[-50px] mb-[5rem] xl:!mb-[5rem] lg:!mb-[5rem] md:!mb-[5rem]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!sticky lg:!sticky mt-[50px]"
              style={{ top: "8rem" }}
            >
              <h3 className="text-[calc(1.345rem_+_1.14vw)] !leading-[1.2] xl:text-[2.2rem] mb-5 font-space-grotesk">
                Step-by-Step Guide to Mutual Divorce
              </h3>
              <p className="!mb-7 font-space-grotesk">
                Follow our easy-to-understand, step-by-step guide to navigate
                through the mutual divorce process, from filing the petition to
                receiving the final decree.
              </p>
              <>
                {/* {location.pathname !== "/process" && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex rounded-lg gradient-button px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700 font-space-grotesk"
                    onClick={handleRedirect}
                  >
                    More Details
                    <ChevronRightIcon className="w-6 h-6 ml-2" />
                  </motion.button>
                )} */}
              </>
               <img
                src={process1}
                alt="Additional Info"
                className="mt-5"
                style={{width:'100%',height:'100%'}}
              />
            </motion.div>

            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full ml-auto mt-[50px]">
              <div className="card !bg-[#fdf1f8] !mb-6">
                <div className="card-body flex flex-row p-[40px]">
                  <div>
                    <div className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#e668b3] text-fuchsia mr-5">
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
                    <h3 className="text-[1.05rem] mb-2 font-space-grotesk">
                      Initial Consultation
                    </h3>
                    <p className="text-sm mb-2 text-black font-space-grotesk">
                      Understanding Your Situation and Options
                    </p>
                    <p className="!mb-0 font-space-grotesk">
                      During the initial consultation, our legal experts will
                      sit down with you and your spouse to discuss your
                      situation, understand your concerns, and explain the
                      mutual divorce process. This step is crucial for gathering
                      all necessary information and setting the stage for a
                      smooth journey ahead.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card !bg-[#eff7fa] !mb-6">
                <div className="card-body flex flex-row p-[40px]">
                  <div>
                    <div className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#54a8c7] text-aqua mr-5">
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
                    <h3 className="text-[1.05rem] mb-2 font-space-grotesk">
                      Filing the Joint Petition
                    </h3>
                    <p className="text-sm mb-2 text-black font-space-grotesk">
                      Taking the First Legal Step Together
                    </p>
                    <p className="!mb-0 font-space-grotesk">
                      Both spouses must file a joint petition for mutual divorce
                      in the family court. This petition includes details such
                      as the grounds for divorce, terms of agreement on child
                      custody, alimony, and property division. Our team will
                      help you prepare and file this petition accurately and
                      efficiently.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card !bg-[#fff8ee] !mb-6">
                <div className="card-body flex flex-row p-[40px]">
                  <div>
                    <div className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow mr-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 409.6 361.2"
                      >
                        <path
                          className="lineal-stroke"
                          d="M309.9 231h-12.7c-6.1.2-11.3-4.6-11.5-10.8-.2-6.1 4.6-11.3 10.8-11.5h13.4c23 0 41.6-18.7 41.6-41.6 0-20-14.3-37.1-33.9-40.8-6-1.1-10-6.9-8.9-13 0-.3.1-.5.2-.7 10-38.6-13.2-78-51.8-88-5.9-1.5-11.9-2.3-18-2.3-24.7-.1-47.7 12.6-60.9 33.5-3 4.7-8.9 6.5-14 4.2-23.4-10.6-50.9-.2-61.5 23.2-2.7 6-4.1 12.5-4.1 19.1 0 3.6.4 7.2 1.3 10.7 1.4 6-2.3 12-8.3 13.4-.1 0-.2 0-.3.1-22.5 4.7-36.9 26.7-32.2 49.2 4 19.3 21 33.1 40.7 33.1h138.4c6.1.2 11 5.3 10.8 11.5-.2 5.9-4.9 10.6-10.8 10.8H99.8c-35.3 0-63.8-28.6-63.8-63.9 0-26.3 16.1-49.8 40.5-59.4-.1-1.8-.2-3.6-.2-5.4 0-38 30.8-68.7 68.8-68.7 6.6 0 13.2 1 19.5 2.8C196.6-4.7 255.9-12 297 20.1c26.6 20.7 40.1 54 35.4 87.4 33 12.4 49.6 49.3 37.2 82.3-9.3 24.8-33.2 41.2-59.7 41.2z"
                        />
                        <path
                          className="lineal-stroke"
                          d="M204.8 334.3c-6.1 0-11.1-5-11.1-11.1V220.8c-.2-6.1 4.6-11.3 10.8-11.5 6.1-.2 11.3 4.6 11.5 10.8v103.1c-.1 6.1-5.1 11.1-11.2 11.1z"
                        />
                        <path
                          className="lineal-stroke"
                          d="M398.5 334.3H11.1C5 334.1.1 329 .3 322.8c.2-5.9 4.9-10.6 10.8-10.8h387.4c6.1.2 11 5.3 10.8 11.5-.2 5.9-4.9 10.6-10.8 10.8z"
                        />
                        <path
                          className="lineal-fill"
                          d="M234.8 350.1h-60.1c-8 0-14.5-6.5-14.5-14.4v-25c0-8 6.5-14.5 14.4-14.5h60.1c8 0 14.5 6.5 14.5 14.5v25c.1 7.9-6.4 14.4-14.4 14.4z"
                        />
                        <path
                          className="lineal-stroke"
                          d="M234.8 361.2h-60.1c-14.1 0-25.6-11.5-25.6-25.6v-25c0-14.1 11.5-25.6 25.6-25.6h60.1c14.1 0 25.6 11.5 25.6 25.6v25c0 14.2-11.4 25.6-25.6 25.6zm-60-53.9c-1.8 0-3.3 1.5-3.3 3.3v25c0 1.8 1.5 3.3 3.3 3.3h60.1c1.8 0 3.3-1.5 3.3-3.3v-25c0-1.8-1.5-3.3-3.3-3.3h-60.1zM71.3 356.5c-6.1 0-11.1-5-11.1-11.1v-44.5c.2-6.1 5.3-11 11.5-10.8 5.9.2 10.6 4.9 10.8 10.8v44.5c-.1 6.1-5.1 11.1-11.2 11.1zm267 0c-6.1 0-11.1-5-11.1-11.1v-44.5c.2-6.1 5.3-11 11.5-10.8 5.9.2 10.6 4.9 10.8 10.8v44.5c-.1 6.1-5.1 11.1-11.2 11.1z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[1.05rem] mb-2 font-space-grotesk">
                      Cooling-Off Period
                    </h3>
                    <p className="text-sm mb-2 text-black font-space-grotesk">
                      Reflecting on the Decision
                    </p>
                    <p className="!mb-0 font-space-grotesk">
                      Indian law mandates a six-month cooling-off period after
                      filing the joint petition. This period allows both parties
                      to reconsider their decision. While waiting, we continue
                      to provide support and ensure all necessary documents are
                      in order for the next steps.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card !bg-[#f3f8f5] !mb-6">
                <div className="card-body flex flex-row p-[40px]">
                  <div>
                    <div className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#7cb798] text-leaf mr-5">
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
                    <h3 className="text-[1.05rem] mb-2 font-space-grotesk">
                      Second Motion and Final Hearing
                    </h3>
                    <p className="text-sm mb-2 text-black font-space-grotesk">
                      Confirming the Mutual Agreement
                    </p>
                    <p className="!mb-0 font-space-grotesk">
                      After the cooling-off period, both parties must appear in
                      court for the second motion. During this hearing, the
                      court verifies the mutual consent and agreement on the
                      divorce terms. Our legal team will guide you through this
                      process and represent your interests in court.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card !bg-[#fef4f2] !mb-6 ">
                <div className="card-body flex flex-row p-[40px]">
                  <div>
                    <div className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow mr-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 409.6 361.2"
                      >
                        <path
                          className="lineal-stroke"
                          d="M309.9 231h-12.7c-6.1.2-11.3-4.6-11.5-10.8-.2-6.1 4.6-11.3 10.8-11.5h13.4c23 0 41.6-18.7 41.6-41.6 0-20-14.3-37.1-33.9-40.8-6-1.1-10-6.9-8.9-13 0-.3.1-.5.2-.7 10-38.6-13.2-78-51.8-88-5.9-1.5-11.9-2.3-18-2.3-24.7-.1-47.7 12.6-60.9 33.5-3 4.7-8.9 6.5-14 4.2-23.4-10.6-50.9-.2-61.5 23.2-2.7 6-4.1 12.5-4.1 19.1 0 3.6.4 7.2 1.3 10.7 1.4 6-2.3 12-8.3 13.4-.1 0-.2 0-.3.1-22.5 4.7-36.9 26.7-32.2 49.2 4 19.3 21 33.1 40.7 33.1h138.4c6.1.2 11 5.3 10.8 11.5-.2 5.9-4.9 10.6-10.8 10.8H99.8c-35.3 0-63.8-28.6-63.8-63.9 0-26.3 16.1-49.8 40.5-59.4-.1-1.8-.2-3.6-.2-5.4 0-38 30.8-68.7 68.8-68.7 6.6 0 13.2 1 19.5 2.8C196.6-4.7 255.9-12 297 20.1c26.6 20.7 40.1 54 35.4 87.4 33 12.4 49.6 49.3 37.2 82.3-9.3 24.8-33.2 41.2-59.7 41.2z"
                        />
                        <path
                          className="lineal-stroke"
                          d="M204.8 334.3c-6.1 0-11.1-5-11.1-11.1V220.8c-.2-6.1 4.6-11.3 10.8-11.5 6.1-.2 11.3 4.6 11.5 10.8v103.1c-.1 6.1-5.1 11.1-11.2 11.1z"
                        />
                        <path
                          className="lineal-stroke"
                          d="M398.5 334.3H11.1C5 334.1.1 329 .3 322.8c.2-5.9 4.9-10.6 10.8-10.8h387.4c6.1.2 11 5.3 10.8 11.5-.2 5.9-4.9 10.6-10.8 10.8z"
                        />
                        <path
                          className="lineal-fill"
                          d="M234.8 350.1h-60.1c-8 0-14.5-6.5-14.5-14.4v-25c0-8 6.5-14.5 14.4-14.5h60.1c8 0 14.5 6.5 14.5 14.5v25c.1 7.9-6.4 14.4-14.4 14.4z"
                        />
                        <path
                          className="lineal-stroke"
                          d="M234.8 361.2h-60.1c-14.1 0-25.6-11.5-25.6-25.6v-25c0-14.1 11.5-25.6 25.6-25.6h60.1c14.1 0 25.6 11.5 25.6 25.6v25c0 14.2-11.4 25.6-25.6 25.6zm-60-53.9c-1.8 0-3.3 1.5-3.3 3.3v25c0 1.8 1.5 3.3 3.3 3.3h60.1c1.8 0 3.3-1.5 3.3-3.3v-25c0-1.8-1.5-3.3-3.3-3.3h-60.1zM71.3 356.5c-6.1 0-11.1-5-11.1-11.1v-44.5c.2-6.1 5.3-11 11.5-10.8 5.9.2 10.6 4.9 10.8 10.8v44.5c-.1 6.1-5.1 11.1-11.2 11.1zm267 0c-6.1 0-11.1-5-11.1-11.1v-44.5c.2-6.1 5.3-11 11.5-10.8 5.9.2 10.6 4.9 10.8 10.8v44.5c-.1 6.1-5.1 11.1-11.2 11.1z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[1.05rem] mb-2 font-space-grotesk">
                      Court Approval and Decree
                    </h3>
                    <p className="text-sm mb-2 text-black font-space-grotesk">
                      Finalizing the Divorce
                    </p>
                    <p className="!mb-0 font-space-grotesk">
                      Upon satisfactory verification, the court grants the
                      divorce decree, officially ending the marriage. This
                      decree includes all agreed-upon terms regarding custody,
                      alimony, and asset division. We ensure that the process is
                      smooth and that you understand all the legal implications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card !bg-[#f0f0f8]">
                <div className="card-body flex flex-row p-[40px]">
                  <div>
                    <div className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow mr-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 409.6 361.2"
                      >
                        <path
                          className="lineal-stroke"
                          d="M309.9 231h-12.7c-6.1.2-11.3-4.6-11.5-10.8-.2-6.1 4.6-11.3 10.8-11.5h13.4c23 0 41.6-18.7 41.6-41.6 0-20-14.3-37.1-33.9-40.8-6-1.1-10-6.9-8.9-13 0-.3.1-.5.2-.7 10-38.6-13.2-78-51.8-88-5.9-1.5-11.9-2.3-18-2.3-24.7-.1-47.7 12.6-60.9 33.5-3 4.7-8.9 6.5-14 4.2-23.4-10.6-50.9-.2-61.5 23.2-2.7 6-4.1 12.5-4.1 19.1 0 3.6.4 7.2 1.3 10.7 1.4 6-2.3 12-8.3 13.4-.1 0-.2 0-.3.1-22.5 4.7-36.9 26.7-32.2 49.2 4 19.3 21 33.1 40.7 33.1h138.4c6.1.2 11 5.3 10.8 11.5-.2 5.9-4.9 10.6-10.8 10.8H99.8c-35.3 0-63.8-28.6-63.8-63.9 0-26.3 16.1-49.8 40.5-59.4-.1-1.8-.2-3.6-.2-5.4 0-38 30.8-68.7 68.8-68.7 6.6 0 13.2 1 19.5 2.8C196.6-4.7 255.9-12 297 20.1c26.6 20.7 40.1 54 35.4 87.4 33 12.4 49.6 49.3 37.2 82.3-9.3 24.8-33.2 41.2-59.7 41.2z"
                        />
                        <path
                          className="lineal-stroke"
                          d="M204.8 334.3c-6.1 0-11.1-5-11.1-11.1V220.8c-.2-6.1 4.6-11.3 10.8-11.5 6.1-.2 11.3 4.6 11.5 10.8v103.1c-.1 6.1-5.1 11.1-11.2 11.1z"
                        />
                        <path
                          className="lineal-stroke"
                          d="M398.5 334.3H11.1C5 334.1.1 329 .3 322.8c.2-5.9 4.9-10.6 10.8-10.8h387.4c6.1.2 11 5.3 10.8 11.5-.2 5.9-4.9 10.6-10.8 10.8z"
                        />
                        <path
                          className="lineal-fill"
                          d="M234.8 350.1h-60.1c-8 0-14.5-6.5-14.5-14.4v-25c0-8 6.5-14.5 14.4-14.5h60.1c8 0 14.5 6.5 14.5 14.5v25c.1 7.9-6.4 14.4-14.4 14.4z"
                        />
                        <path
                          className="lineal-stroke"
                          d="M234.8 361.2h-60.1c-14.1 0-25.6-11.5-25.6-25.6v-25c0-14.1 11.5-25.6 25.6-25.6h60.1c14.1 0 25.6 11.5 25.6 25.6v25c0 14.2-11.4 25.6-25.6 25.6zm-60-53.9c-1.8 0-3.3 1.5-3.3 3.3v25c0 1.8 1.5 3.3 3.3 3.3h60.1c1.8 0 3.3-1.5 3.3-3.3v-25c0-1.8-1.5-3.3-3.3-3.3h-60.1zM71.3 356.5c-6.1 0-11.1-5-11.1-11.1v-44.5c.2-6.1 5.3-11 11.5-10.8 5.9.2 10.6 4.9 10.8 10.8v44.5c-.1 6.1-5.1 11.1-11.2 11.1zm267 0c-6.1 0-11.1-5-11.1-11.1v-44.5c.2-6.1 5.3-11 11.5-10.8 5.9.2 10.6 4.9 10.8 10.8v44.5c-.1 6.1-5.1 11.1-11.2 11.1z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[1.05rem] mb-2 font-space-grotesk">
                      Post-Divorce Support
                    </h3>
                    <p className="text-sm mb-2 text-black font-space-grotesk">
                      Moving Forward with Confidence
                    </p>
                    <p className="!mb-0 font-space-grotesk">
                      After the divorce is finalized, we continue to offer
                      support and guidance. Whether you need help with the
                      enforcement of the divorce decree, or any other legal
                      advice, our team is here to assist you in navigating life
                      post-divorce, ensuring a smooth transition into your new
                      chapter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process content */}

      {location.pathname === "/process" && (
        <section className="wrapper !bg-[#ffffff]">
          <div className="container pb-[5rem] xl:!pb-[7rem] lg:!pb-[7rem] md:!pb-[7rem]">
            <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 mt-[-50px] mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] items-center">
              <div className="lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] px-[15px] xl:px-0 lg:px-0 mt-[50px] max-w-full lg:!order-2 xl:!order-2 ml-auto">
                <figure className="!rounded-[.4rem]  !mb-0">
                  <img
                    className="max-w-full h-auto"
                    src={"https://law-wheel.b-cdn.net/image/ui3.png"}
                    srcset="./assets/img/illustrations/ui1@2x.png 2x"
                    alt="image"
                  />
                </figure>
              </div>

              <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[15px] xl:px-0 lg:px-0 mt-[50px] max-w-full">
                <h3 className="xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mb-3 font-space-grotesk">
                  What is Mutual Divorce?
                </h3>
                <p className="font-space-grotesk">
                  Mutual divorce is a type of divorce where both spouses agree
                  to end their marriage amicably and jointly file for divorce.
                  This approach is generally less stressful, quicker, and more
                  cost-effective compared to a contested divorce, where the
                  parties cannot agree on terms and must go to court to resolve
                  their differences.
                </p>
                <ul className="pl-0 list-none bullet-bg bullet-soft-purple font-space-grotesk">
                  <li className="relative pl-6 mt-[0.35rem]">
                    {" "}
                    <CheckCircle className="absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-normal !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-full top-[0.2rem]" />
                    <strong className="font-space-grotesk">
                      Amicable Resolution:{" "}
                    </strong>
                    Both parties cooperate to reach a fair settlement,
                    minimizing conflict.
                  </li>
                  <li className="relative pl-6 mt-[0.35rem]">
                    {" "}
                    <CheckCircle className="absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-normal !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-full top-[0.2rem]" />
                    <strong className="font-space-grotesk">
                      Faster Process:{" "}
                    </strong>
                    The divorce can be finalized more quickly since both parties
                    are in agreement.
                  </li>
                  <li className="relative pl-6 mt-[0.35rem]">
                    {" "}
                    <CheckCircle className="absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-normal !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-full top-[0.2rem]" />
                    <strong className="font-space-grotesk">
                      Cost-Effective:{" "}
                    </strong>
                    Reduced legal fees and court costs as compared to contested
                    divorces.
                  </li>
                  <li className="relative pl-6 mt-[0.35rem]">
                    {" "}
                    <CheckCircle className="absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-normal !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-full top-[0.2rem]" />
                    <strong className="font-space-grotesk">
                      Less Stressful:{" "}
                    </strong>
                    A cooperative process is generally less emotionally draining
                    for both parties.
                  </li>
                </ul>
                {/* <div style={{ marginTop: "2rem" }}>
                  <a
                    href="#"
                    className="!mt-2 !mb-0 gradient-button font-space-grotesk"
                  >
                    More Details
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Service;
