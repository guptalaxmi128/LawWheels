import React, { useState, useEffect } from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { getBlog } from "../../actions/blog/blog";
import Loader from "../../shared/Loader";

const Blog = () => {
  const swiper = useSwiper();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await dispatch(getBlog());
        if (res.success) {
          setRecords(res.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error(error?.response?.data?.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        {" "}
        <Loader />
      </div>
    );
  }

  console.log(records);
  return (
    <div>
      <Navbar />
      <section
        id="snippet-3"
        className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid"
      >
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
              <h2 className="!text-[.75rem] !leading-[1.35] uppercase text-[#3f78e0]  !text-center">
                Our News
              </h2>
              <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] !mb-6 !text-center">
                Here are the latest company news from our blog that got the most
                attention.
              </h3>
            </div>
            {/* <!-- /column --> */}
          </div>
          {/* <!-- /.row --> */}
          <div className="!relative">
            <div
              className="shape bg-dot primary rellax !w-[7rem] !h-[10rem] !absolute z-[1] opacity-50 !bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)]"
              data-rellax-speed="1"
              style={{ top: 0, left: "-1.7rem" }}
            ></div>
            <div
              className="swiper-container dots-closer blog grid-view !mb-6"
              data-margin="0"
              data-dots="true"
              data-items-xl="3"
              data-items-md="2"
              data-items-xs="1"
            >
              <div className="swiper">
                <Swiper
                  modules={[Navigation, Pagination, A11y]}
                  spaceBetween={30}
                  // slidesPerView={3}
                  breakpoints={{
                    396: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                  // slidesPerView="auto"
                >
                  <div className="swiper-wrapper">
                    {records?.map((record, index) => {
                      console.log(record);
                      return (
                        <SwiperSlide>
                          <div className="swiper-slide">
                          <Link to={`/blog/${record.slug}`}>
                            <div className="item-inner">
                              <article>
                                <div className="card" key={record.id}>
                                  <figure className="card-img-top overlay overlay-1 hover-scale group">
                                    <a href="#">
                                      {" "}
                                      <img
                                        className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                                        src={
                                          record.images.find(
                                            (img) =>
                                              img.fieldName === "FeaturedPic"
                                          )?.url
                                        }
                                        alt="image"
                                      />
                                    </a>
                                    {/* <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                                      <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                                        Read More
                                      </h5>
                                    </figcaption> */}
                                  </figure>
                                  <div className="card-body flex-[1_1_auto] p-[40px] xl:p-[1.75rem_1.75rem_1rem_1.75rem] lg:p-[1.75rem_1.75rem_1rem_1.75rem] md:p-[1.75rem_1.75rem_1rem_1.75rem] sm:pb-4 xsm:pb-4  ">
                                    <div className="post-header">
                                      {/* <div className="inline-flex mb-[.4rem] uppercase tracking-[0.02rem] text-[0.7rem] font-bold text-[#aab0bc] relative align-top pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0]">
                                        <a
                                          href="#"
                                          className="hover"
                                          rel="category"
                                        >
                                          Coding
                                        </a>
                                      </div> */}
                                      {/* <!-- /.post-category --> */}
                                      <h2 className="post-title h3 !mt-1 !mb-3">
                                        <a
                                          className="text-[#343f52] hover:text-[#3f78e0]"
                                        //   href="../blog-post.html"
                                        >
                                          {record.title}
                                        </a>
                                      </h2>
                                    </div>
                                    {/* <!-- /.post-header --> */}
                                    <div className="!relative">
                                      <p>
                                        Mauris convallis non ligula non
                                        interdum. Gravida vulputate convallis
                                        tempus vestibulum cras imperdiet nun eu
                                        dolor. Aenean lacinia bibendum nulla
                                        sed.
                                      </p>
                                    </div>
                                    {/* <!-- /.post-content --> */}
                                  </div>
                                  {/* <!--/.card-body --> */}
                                  <div className="card-footer xl:p-[1.25rem_1.75rem_1.25rem] lg:p-[1.25rem_1.75rem_1.25rem] md:p-[1.25rem_1.75rem_1.25rem] p-[18px_40px]">
                                    <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none flex  !mb-0">
                                      <li className="post-date inline-block">
                                        <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']"></i>
                                        <span>14 Apr 2022</span>
                                      </li>
                                      <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                                        <a
                                          className="text-[#aab0bc] hover:text-[#3f78e0] hover:border-[#3f78e0]"
                                          href="#"
                                        >
                                          <i className="uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-['\ea54']"></i>
                                          4
                                        </a>
                                      </li>
                                      <li className="post-likes !ml-auto inline-block">
                                        <a
                                          className="text-[#aab0bc] hover:text-[#3f78e0] hover:border-[#3f78e0]"
                                          href="#"
                                        >
                                          <i className="uil uil-heart-alt pr-[0.2rem] align-[-.05rem] before:content-['\eb60']"></i>
                                          5
                                        </a>
                                      </li>
                                    </ul>
                                    {/* <!-- /.post-meta --> */}
                                  </div>
                                  {/* <!-- /.card-footer --> */}
                                </div>
                                {/* <!-- /.card --> */}
                              </article>
                              {/* <!-- /article --> */}
                            </div>
                            </Link>
                            {/* <!-- /.item-inner --> */}
                          </div>
                        </SwiperSlide>
                      );
                    })}
                    {/* <!--/.swiper-slide --> */}
                    <div>
                      <div>
                        <div className="flex">
                          <button onClick={() => swiper.slidePrev()}>
                            <FontAwesomeIcon
                              icon={faArrowLeft}
                              className="text-2xl"
                            />
                          </button>
                          <button
                            onClick={() => swiper.slideNext()}
                            className="ml-3"
                          >
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-2xl"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Swiper>
                {/* <!--/.swiper-wrapper --> */}
              </div>
              {/* <!-- /.swiper --> */}
            </div>
            {/* <!-- /.swiper-container --> */}
          </div>
          {/* <!-- /.relative --> */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
