import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo_lw.webp";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import ContactForm from "../../components/contact/ContactForm";
// import Consult from "../freeConsultation/Consult";
import Quality from "./Quality";


const About = () => {
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
    <>
      <Navbar />
      <section>
        <section
          className="wrapper bg-repeat bg-fixed bg-image section-frame xl:mx-[1.5rem] xl:rounded-[1rem] lg:mx-[1.5rem] lg:rounded-[1rem] md:mx-[1.5rem] md:rounded-[1rem] mb-8"
          style={{
            backgroundImage: `url(${"https://law-wheel.b-cdn.net/image/bg3.jpg"})`,
          }}
        >
          <div className="container pt-20 xl:pt-20 lg:pt-20 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] mt-[-50px]">
              <div className="xl:w-8/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[20px]">
                {/* <h2 className="text-[calc(1.325rem_+_0.9vw)] font-bold leading-[1.2] xl:text-[2rem] text-white mb-3 xl:pr-[4.5rem] xxl:!pr-24 font-space-grotesk">
              Need Assistance? We're Here to Help!
            </h2> */}
                <p className="lead !text-[1.05rem] !leading-[1.55] font-normal xxl:pr-14 !mb-0 font-space-grotesk text-white">
                  Law Wheels is a brand of M Law Online Pvt Ltd, a registered
                  legal entity in India. We provide comprehensive legal
                  consultation services, connecting individuals and businesses
                  with experienced legal professionals. Operating under M Law
                  Online Pvt Ltd, Law Wheels ensures compliance with all legal
                  regulations and offers high-quality services.
                </p>
                <p className="lead !text-[1.05rem] !leading-[1.55] font-normal xxl:pr-14 !mb-0 font-space-grotesk text-white">
                  Our head office is located in Mumbai, and we also operate from
                  our branch office in Delhi, ensuring a broad geographic reach
                  to serve clients effectively across India.
                </p>
              </div>

              <div className="xl:w-4/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full md:px-[20px] lg:px-[20px] xl:px-[15px] mt-[20px]  flex justify-center items-center">
                <img
                  className="logo-dark w-44 h-44"
                  src={logoImage}
                  alt="image"
                  onError={() => setLogoImage(logo)}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="wrapper !bg-[#ffffff]">
        <div className="container pt-20 xl:pt-24 lg:pt-24 md:pt-24 pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24">
          <div className="flex flex-wrap mx-[-15px] !text-center">
            <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto !relative">
              <div
                className="!h-[3rem] absolute hidden xl:block lg:block"
                style={{ top: "-45%", left: "23%" }}
              >
                <svg
                  width="85"
                  height="82"
                  viewBox="0 0 85 82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.789 30.259C12.05 24.219 18.06 13.106 16.918 2.375c-2.082 10.35 4.838 21.55 15.92 25.773-6.332 1.994-10.73 7.213-12.754 12.813-2.023 5.57-1.993 11.523-1.964 17.387 1.202-10.702-6.333-21.697-16.302-28.06l-.03-.03z"
                    stroke="#FAB758"
                    stroke-width=".25"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M18.09 59.784h-.087c-.763-.029-1.349-.674-1.349-1.436V53.89c-.997-9.148-8.151-17.622-15.657-22.4a1.386 1.386 0 01-.645-1.232c0-.499.264-.968.704-1.202C8.708 24.54 13.927 16.947 15.276 9a20.939 20.939 0 01.235-6.89A1.424 1.424 0 0116.977.968c.703.029 1.29.586 1.348 1.26a26.634 26.634 0 01-.146 6.656c1.173 7.623 7.007 14.836 15.129 17.944.557.206.938.763.909 1.378a1.38 1.38 0 01-.997 1.32c-5.307 1.671-9.734 6.128-11.816 11.933-1.437 3.958-1.789 8.151-1.877 12.344a25.074 25.074 0 010 4.691 1.423 1.423 0 01-1.407 1.261l-.03.03zM4.399 30.317c5.278 3.812 10.204 9.266 12.96 15.452a27.979 27.979 0 011.378-5.277c1.964-5.454 5.776-9.91 10.497-12.374C23.398 25.04 19 20.143 16.742 14.543 14.514 20.7 10.174 26.33 4.398 30.288v.03z"
                    fill="#FAB758"
                    stroke="#FAB758"
                    stroke-width=".25"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M55.533 58.582c9.148-4.017 14.748-12.784 13.546-21.17 1.7 8.27 4.603 17.857 14.132 21.17-4.926 1.202-8.59 4.691-10.555 8.533-1.994 3.84-2.522 8.033-3.05 12.197 1.29-9.119-5.922-18.59-14.073-20.7v-.03z"
                    stroke="#FAB758"
                    stroke-width=".25"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M69.607 80.72H69.4a1.446 1.446 0 01-1.231-1.613c0-.147.03-.323.059-.47.938-8.532-6.011-16.83-13.077-18.677-.587-.146-1.026-.674-1.056-1.26-.058-.616.293-1.173.85-1.437 8.591-3.782 13.84-11.875 12.696-19.645a1.42 1.42 0 011.173-1.612 1.401 1.401 0 011.642 1.114c1.789 8.679 4.603 17.123 13.194 20.114.587.205.997.791.968 1.407a1.408 1.408 0 01-1.085 1.32c-4.076.996-7.594 3.84-9.617 7.799-1.789 3.489-2.346 7.388-2.844 11.2 0 .176-.03.352-.059.528a1.422 1.422 0 01-1.407 1.231zM59.05 58.376c4.574 2.228 8.767 6.568 10.82 11.787.38-1.26.88-2.492 1.524-3.724 1.818-3.548 4.662-6.333 8.063-8.004-5.013-2.874-7.858-7.682-9.705-12.93-1.67 5.13-5.453 9.763-10.702 12.871z"
                    fill="#FAB758"
                    stroke="#FAB758"
                    stroke-width=".25"
                    stroke-miterlimit="10"
                  />
                </svg>
              </div>
              <div
                className="h-8 absolute hidden xl:block lg:block"
                style={{ top: "5%", right: "-3%" }}
              >
                <svg
                  width="42"
                  height="55"
                  viewBox="0 0 42 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    clip-path="url(#clip0_103_106)"
                    fill="#3F78E0"
                    stroke="#3F78E0"
                    stroke-width=".83"
                    stroke-miterlimit="10"
                  >
                    <path d="M4.689 42.735a1.476 1.476 0 01-.613-.373c-.68-.587-.699-1.55-.114-2.112 8.18-7.775 9.47-19.826 10.132-32.51.036-.817.808-1.41 1.697-1.324.889.086 1.582.837 1.546 1.654-.692 13.28-2.065 25.875-10.984 34.35-.43.425-1.097.512-1.696.304l.032.01zm12.923 6.55a1.828 1.828 0 01-.587-.321c-.72-.575-.858-1.448-.269-1.98 5.194-4.887 9.184-10.545 11.785-16.863.28-.699 1.227-.989 2.104-.654.877.334 1.357 1.178 1.077 1.877-2.743 6.623-6.909 12.574-12.358 17.666-.437.408-1.128.492-1.752.276z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_103_106">
                      <path
                        fill="#fff"
                        transform="rotate(19.164 7.878 46.669)"
                        d="M0 0h27.436v48H0z"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <h2 className="text-[0.8rem] !leading-[1.35] tracking-[0.02rem] uppercase text-[#aab0bc] !mb-3 font-space-grotesk">
                Our Legal Expertise
              </h2>
              <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-semibold !leading-[1.2] mb-12 lg:!px-5 xl:!px-0 xxl:!px-6 font-space-grotesk">
                Dedicated to addressing your &nbsp;
                <span className="text-gradient gradient-7 font-space-grotesk">
                  legal
                </span>{" "}
                needs with specialized knowledge in key areas of law.
              </h3>
            </div>
          </div>

          <div className="flex justify-center mx-auto mb-10 mt-10">
            <div className="xxl:w-11/12 w-full px-[15px]">
              <div className="flex flex-wrap gap-[20px] justify-center items-center text-center mt-[-50px]">
                {[
                  {
                    bg: "#fef3e4",
                    title: "Mutual Divorce Consultation",
                    shortTitle: "Mutual<br /> Divorce",
                  },
                  {
                    bg: "#e1f6f0",
                    title: "Property Disputes",
                    shortTitle: "Property<br /> Disputes",
                  },
                  {
                    bg: "#f0eaf6",
                    title: "Cheque Bounce Cases",
                    shortTitle: "Cheque<br /> Bounce",
                  },
                  {
                    bg: "#e0e9fa",
                    title: "Consumer Protection",
                    shortTitle: "Consumer<br/>Protection",
                  },
                  {
                    bg: "#fef3e4",
                    title: "Cyber crime Law",
                    shortTitle: "Cybercrime<br />Law",
                  },
                  {
                    bg: "#feece9",
                    title: "Dispute Resolution",
                    shortTitle: "Dispute<br />Resolution",
                  },
                  {
                    bg: "#e1f6f0",
                    title: "Debt Recovery",
                    shortTitle: "Debt<br />Recovery",
                  },
                  {
                    bg: "#fef3e4",
                    title: "Bail and Bonds",
                    shortTitle: "Bail and <br />Bonds",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] flex-[0_0_auto] max-w-full"
                  >
                    <div
                      className={`svg-bg svg-bg-lg !bg-[${item.bg}] !rounded-[0.8rem] mb-4`}
                    >
                      <div className="svg-inject icon-svg solid text-[#343f52] text-navy">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 186.69 256"
                        >
                          <path
                            className="fill-secondary"
                            d="M26.69 83.54V58.66a32 32 0 0164 0V80a31.67 31.67 0 013.25.37A47.94 47.94 0 1010.69 48a47.71 47.71 0 0016 35.54z"
                          />
                          <path
                            className="fill-primary"
                            d="M170.69 117.33a16 16 0 00-16 16V136a2.68 2.68 0 01-5.35 0v-13.33a16 16 0 10-32 0V136a2.67 2.67 0 11-5.34 0v-24a16 16 0 00-32 0v24a2.67 2.67 0 11-5.34 0V58.67a16 16 0 00-32 0v96a5.32 5.32 0 01-5.33-5.33V128h-5.27C14.51 128 0 142.16 0 159.71.08 216.05 41.09 256 66.3 256h67.06a53.32 53.32 0 0053.33-53.33v-69.33a16 16 0 00-16-16z"
                          />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-sm lg:text-[1rem] xl:text-[1rem] font-space-grotesk">
                      <span
                        className={`block ${
                          item.shortTitle ? "lg:hidden xl:hidden" : ""
                        }`}
                        dangerouslySetInnerHTML={{
                          __html: item.shortTitle || item.title,
                        }}
                      />
                      <span
                        className={`hidden ${
                          item.shortTitle ? "lg:block xl:block" : ""
                        }`}
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* <div className="container pt-14 xl:pt-0 lg:pt-0 md:pt-0 pb-24 xl:pb-32 lg:pb-32 md:pb-32">
          <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 mt-[-50px] items-center">
            <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[15px] xl:px-0 lg:px-0 mt-[50px] max-w-full xl:!ml-[8.33333333%] xl:!order-2 lg:!ml-[8.33333333%] lg:!order-2">
              <h2 className="xl:text-[2rem] text-[calc(1.325rem_+_.9vw)] font-semibold !leading-[1.2] !mb-3 font-space-grotesk">
                My areas of <em>expertise</em>
              </h2>
              <p className="lead !text-[1.05rem] !leading-[1.55] font-normal font-space-grotesk">
                The full service I am offering is specifically designed to meet
                your business needs.
              </p>
              <p className="font-space-grotesk">
                Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Nullam quis risus
                eget urna mollis ornare vel eu leo. Nullam quis risus eget urna
                mollis ornare vel eu leo. Maecenas faucibus mollis elit
                interdum. Duis mollis, est non commodo luctus, nisi erat ligula
                magna mollis.
              </p>
              <a
                href="#"
                className="btn gradient-button font-space-grotesk text-white hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] mt-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
              >
                More Details
              </a>
            </div>

            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] xl:px-0 lg:px-0 mt-[50px] max-w-full">
              <div className="flex flex-wrap mx-[-15px] mt-[-30px] !text-center">
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                  <div className="flex flex-wrap mx-[-15px]">
                    <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                      <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-6">
                        <div className="card-body flex-[1_1_auto] p-[40px]">
                          <div className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-duo text-purple-aqua !mb-3 m-[0_auto]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                            >
                              <path
                                class="fill-primary"
                                d="M152 0H29.33A29.32 29.32 0 000 29.33v165.33A29.32 29.32 0 0029.33 224h78.72l2.35-13.12a29.71 29.71 0 018.11-15.68l62.83-62.72V29.33A29.33 29.33 0 00152 0zM42.67 42.67h42.67a10.67 10.67 0 110 21.33H42.66a10.67 10.67 0 010-21.33zM96 149.33H42.67a10.67 10.67 0 110-21.33H96a10.67 10.67 0 110 21.33zm42.67-42.66h-96a10.67 10.67 0 010-21.34h96a10.67 10.67 0 110 21.34z"
                              />
                              <path
                                class="fill-secondary"
                                d="M133.63 256a8 8 0 01-7.89-9.38l5.67-32.06a8 8 0 012.22-4.27l79.2-79.2c9.73-9.75 19.28-7.12 24.51-1.89l13.2 13.2a18.69 18.69 0 010 26.4l-79.2 79.2a7.83 7.83 0 01-4.27 2.22l-32 5.67a10.71 10.71 0 01-1.44.11zm32.05-13.65z"
                              />
                            </svg>
                          </div>
                          <h3 className="font-space-grotesk">
                            Content Marketing
                          </h3>
                          <p className="!mb-2 font-space-grotesk">
                            Nulla vitae elit libero, a pharetra augue. Donec id
                            elit non mi porta gravida.
                          </p>
                          <a
                            href="#"
                            className="more hover text-[#747ed1] focus:text-[#747ed1] hover:text-[#747ed1] font-space-grotesk "
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                      <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                        <div className="card-body flex-[1_1_auto] p-[40px]">
                          <div className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-duo text-purple-aqua !mb-3 m-[0_auto]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 255.98 256"
                            >
                              <circle
                                class="fill-primary"
                                cx="128"
                                cy="26.67"
                                r="26.67"
                              />
                              <circle
                                class="fill-primary"
                                cx="202.67"
                                cy="176"
                                r="26.67"
                              />
                              <circle
                                class="fill-primary"
                                cx="53.33"
                                cy="176"
                                r="26.67"
                              />
                              <path
                                class="fill-primary"
                                d="M173.33 106.67H82.66a8 8 0 01-8-8v-5.33A29.35 29.35 0 01104 64h48a29.35 29.35 0 0129.33 29.32v5.33a8 8 0 01-8 8.02zM248 256h-90.67a8 8 0 01-8-8v-5.33a29.36 29.36 0 0129.33-29.33h48A29.36 29.36 0 01256 242.67V248a8 8 0 01-8 8zm-149.33 0H8a8 8 0 01-8-8v-5.33a29.36 29.36 0 0129.33-29.33h48a29.37 29.37 0 0129.33 29.33V248a8 8 0 01-8 8z"
                              />
                              <path
                                class="fill-secondary"
                                d="M29.33 136.13a8 8 0 01-8-8 107.1 107.1 0 0161.73-96.77 8 8 0 116.73 14.51 91 91 0 00-52.48 82.26 8 8 0 01-7.98 8zm197.34 0a8 8 0 01-8-8 91 91 0 00-52.48-82.26 8 8 0 116.74-14.51 107.09 107.09 0 0161.73 96.77 8 8 0 01-8 8zM128 234.8a105.08 105.08 0 01-11.15-.58 8 8 0 011.66-15.9 93.73 93.73 0 0019.6-.06 8 8 0 011.76 15.9 110.68 110.68 0 01-11.87.64z"
                              />
                            </svg>
                          </div>
                          <h3 className="font-space-grotesk">
                            Social Engagement
                          </h3>
                          <p className="!mb-2 font-space-grotesk">
                            Nulla vitae elit libero, a pharetra augue. Donec id
                            elit non mi porta gravida.
                          </p>
                          <a
                            href="#"
                            className="more hover text-[#747ed1] focus:text-[#747ed1] hover:text-[#747ed1] font-space-grotesk"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                  <div className="flex flex-wrap mx-[-15px]">
                    <div className="w-full flex-[0_0_auto] px-[15px] max-w-full xl:!order-2 lg:!order-2 md:!order-2">
                      <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-6 xl:mb-0 lg:mb-0 xl:mb-0 lg:mb-0 md:mb-0">
                        <div className="card-body flex-[1_1_auto] p-[40px]">
                          <div className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-duo text-purple-aqua !mb-3 m-[0_auto]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                            >
                              <path
                                class="fill-secondary"
                                d="M128 36.86a8 8 0 01-8-8V8a8 8 0 0116 0v20.86a8 8 0 01-8 8zm70.1 29.04a8 8 0 01-5.67-13.64l14.77-14.77a8 8 0 1111.31 11.31l-14.77 14.77a8 8 0 01-5.64 2.33zM248 136h-20.86a8 8 0 010-16H248a8 8 0 010 16zm-35.15 84.85a8.06 8.06 0 01-5.67-2.34l-14.76-14.77a8 8 0 0111.31-11.31l14.77 14.77a8 8 0 010 11.31 7.92 7.92 0 01-5.65 2.34zm-169.7 0a8 8 0 01-5.66-13.65l14.77-14.77a8 8 0 0111.31 11.31L48.8 218.51a7.93 7.93 0 01-5.65 2.34zM28.86 136H8a8 8 0 010-16h20.86a8 8 0 110 16zM57.9 65.9a8 8 0 01-5.66-2.33L37.47 48.8a8 8 0 1111.31-11.31l14.77 14.77A8 8 0 0157.9 65.9z"
                              />
                              <path
                                class="fill-primary"
                                d="M160 224v13.33A18.76 18.76 0 01141.33 256h-26.67c-9 0-18.66-6.83-18.66-21.76V224zm15-154a74.93 74.93 0 00-63-15c-28.27 5.91-51.2 29-57.07 57.21a74.74 74.74 0 0028.16 75.41A32.19 32.19 0 0195.25 208v.12A2 2 0 0196 208h64a.93.93 0 01.53.11V208c1.49-8.11 6.29-15.57 13.65-21.33A74.72 74.72 0 00175 70zm-7 63.36a8.06 8.06 0 01-8-8A29.32 29.32 0 00130.67 96a8 8 0 110-16A45.43 45.43 0 01176 125.33a8.06 8.06 0 01-8 8z"
                              />
                              <path
                                class="fill-secondary"
                                d="M95.25 208H96a1.8 1.8 0 00-.75.11z"
                              />
                              <path
                                class="fill-primary"
                                d="M160.53 208v.11a.93.93 0 00-.53-.11z"
                              />
                            </svg>
                          </div>
                          <h3 className="font-space-grotesk">
                            Identity & Branding
                          </h3>
                          <p className="!mb-2 font-space-grotesk">
                            Nulla vitae elit libero, a pharetra augue. Donec id
                            elit non mi porta gravida.
                          </p>
                          <a
                            href="#"
                            className="more hover text-[#747ed1] focus:text-[#747ed1] hover:text-[#747ed1] font-space-grotesk"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                      <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] xl:!mb-6 lg:!mb-6 md:!mb-6 lg:!mt-6 xl:!mt-6">
                        <div className="card-body flex-[1_1_auto] p-[40px]">
                          <div className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-duo text-purple-aqua !mb-3 m-[0_auto]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                            >
                              <path
                                class="fill-secondary"
                                d="M172 20.57L55.79 80 9.6 57.32 123.71 1A9.43 9.43 0 01132 1zm74.27 36.75l-118.21 58.56-44.27-21.8-6.38-3.25L193.7 31.36l6.4 3.24z"
                              />
                              <path
                                class="fill-primary"
                                d="M118.59 132.76L118.46 256 5.23 196.91A9.89 9.89 0 010 188.22V74.2l48 23.64v41.55a9.6 9.6 0 1019.2 0v-31.94l6.4 3.12zm137.28-58.43l-118.08 58.31-.13 123.23L256 194.08z"
                              />
                            </svg>
                          </div>
                          <h3 className="font-space-grotesk">Product Design</h3>
                          <p className="!mb-2 font-space-grotesk">
                            Nulla vitae elit libero, a pharetra augue. Donec id
                            elit non mi porta gravida.
                          </p>
                          <a
                            href="#"
                            className="more hover text-[#747ed1] focus:text-[#747ed1] hover:text-[#747ed1] font-space-grotesk"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      {/* <Consult /> */}
      <ContactForm />
      <Quality />
   
      <Footer />
    </>
  );
};

export default About;
