import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import image1 from "../../assets/images/3d6.png";
// import bg from "../../assets/images/bg22.png";
import SwiperNavButton from "./SwiperNavButton";

const HomeSlider = () => {
  return (
    <section className="wrapper !bg-[#ffffff] mt-10">
      <div className="container-card">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
            <section
              className="wrapper bg-repeat bg-fixed bg-image section-frame xl:mx-[1.5rem] xl:rounded-[1rem] lg:mx-[1.5rem] lg:rounded-[1rem] md:mx-[1.5rem] md:rounded-[1rem] mb-16"
              style={{
                backgroundImage: `url(${"https://law-wheel.b-cdn.net/image/bg22.png"})`,
              }}
            >
              <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-8 xl:pb-8 lg:pb-8 md:pb-8">
                <div className="card-body py-[4.5rem] px-0">
                  <div className="container">
                    <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] mt-[-50px] items-center lg:text-left xl:text-left">
                      <div
                        className="lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] px-[15px] md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[50px] max-w-full"
                        data-cues="slideInDown"
                        data-group="page-title"
                        data-delay="900"
                      >
                        <h1 className="xl:text-[2rem] text-[calc(1.355rem_+_1.26vw)] font-semibold !leading-[1.2] tracking-[normal] mb-4 xl:!mr-5 xxl:!mr-0  font-space-grotesk">
                          Networking {" "}
                          <span className="text-gradient gradient-1 font-space-grotesk">
                            solutions
                          </span>
                          {""} for worldwide communication
                        </h1>
                        <p className="lead !text-[1.15rem] !leading-[1.5] font-medium mb-7 xxl:!pr-20 font-space-grotesk">
                          We're a company that focuses on establishing long-term
                          relationships with customers.
                        </p>
                        <div>
                          <a
                            href="#"
                            className="btn btn-lg btn-gradient gradient-1 rounded font-space-grotesk"
                          >
                            Explore Now
                          </a>
                        </div>
                      </div>
                      <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[50px] max-w-full">
                        <img
                          className="max-w-full h-auto mb-[-8rem]"
                          src={"https://law-wheel.b-cdn.net/image/3d6.png"}
                          srcSet="./assets/img/illustrations/3d6@2x.png 2x"
                          data-cue="fadeIn"
                          data-delay="300"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          {/* Add more SwiperSlide components here for additional slides */}
          <SwiperSlide>
            <section
              className="wrapper bg-repeat bg-fixed bg-image section-frame xl:mx-[1.5rem] xl:rounded-[1rem] lg:mx-[1.5rem] lg:rounded-[1rem] md:mx-[1.5rem] md:rounded-[1rem] mb-16"
              style={{
                backgroundImage: `url(${"https://law-wheel.b-cdn.net/image/bg22.png"})`,
              }}
            >
              <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-8 xl:pb-8 lg:pb-8 md:pb-8">
                <div className="card-body py-[4.5rem] px-0">
                  <div className="container">
                    <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] mt-[-50px] items-center lg:text-left xl:text-left">
                      <div
                        className="lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] px-[15px] md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[50px] max-w-full"
                        data-cues="slideInDown"
                        data-group="page-title"
                        data-delay="900"
                      >
                        <h1 className="xl:text-[2rem] text-[calc(1.355rem_+_1.26vw)] font-semibold !leading-[1.2] tracking-[normal] mb-4 xl:!mr-5 xxl:!mr-0  font-space-grotesk">
                          Networking {" "}
                          <span className="text-gradient gradient-1 font-space-grotesk">
                            solutions 
                          </span>
                          {""} for worldwide communication
                        </h1>
                        <p className="lead !text-[1.15rem] !leading-[1.5] font-medium mb-7 xxl:!pr-20 font-space-grotesk">
                          We're a company that focuses on establishing long-term
                          relationships with customers.
                        </p>
                        <div>
                          <a
                            href="#"
                            className="btn btn-lg btn-gradient gradient-1 rounded font-space-grotesk"
                          >
                            Explore Now
                          </a>
                        </div>
                      </div>
                      <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[50px] max-w-full">
                        <img
                          className="max-w-full h-auto mb-[-8rem]"
                          src={"https://law-wheel.b-cdn.net/image/3d6.png"}
                          srcSet="./assets/img/illustrations/3d6@2x.png 2x"
                          data-cue="fadeIn"
                          data-delay="300"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <div className="section-header__action flex justify-center">
  <div className="swiper-nav swiper-nav--style1">
    <SwiperNavButton />
  </div>
</div>

        </Swiper>
      </div>
    </section>
  );
};

export default HomeSlider;
