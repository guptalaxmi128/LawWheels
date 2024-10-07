import React, { useState, useEffect } from "react";
import {
  Heart,
  User,
  Calendar,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Twitter,
  Facebook,
  Dribbble,
  Instagram,
  Youtube,
} from "lucide-react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import blogImage1 from "../../assets/blog/b1.jpg";
// import { Helmet } from "react-helmet";
import { getBlogBySlug } from "../../actions/blog/blog";
import LayoutLoader from "../../components/layout/HeroLoader";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const ParticularBlog = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const category =
    blog?.blogCategory_juction?.length > 0
      ? blog?.blogCategory_juction[0]?.name
      : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await dispatch(getBlogBySlug(slug));
        if (res.success) {
          setBlog(res.data);
          setImageUrl(
            res.data.images?.find((img) => img.fieldName === "FeaturedPic")?.url
          );
        }
      } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch, slug]);

  if (loading) {
    return <LayoutLoader />;
  }

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>No blog found</p>
      </div>
    );
  }
  console.log(imageUrl);
  const formatPublishDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  // // Optional: Remove duplicates
  // const uniqueTagsArray = [...new Set(tagsArray)];

  return (
    // <div>
    //   <Navbar />

    //   <Helmet>
    //   <title>{blog.title}</title>
    //   <meta property="og:title" content={blog.title} />
    //   <meta property="og:image" content={imageUrl} />
    //   <meta property="og:url" content={`https://lawwheels.com/blog/${blog.slug}`} />
    // </Helmet>
    //   <h1>{blog.title}</h1>
    //   {imageUrl && <img src={imageUrl} alt={blog.title} />}

    //   <div
    //     className="border border-gray-300 p-4 rounded-lg"
    //     dangerouslySetInnerHTML={{ __html: blog.content }}
    //   ></div>

    //   <Footer />
    // </div>
    <>
      <Navbar />
      <div className="grow shrink-0">
        <section className="section-frame overflow-hidden">
          {/* <div className="wrapper !bg-[#edf2fc]">
          <div className="container py-14 xl:!py-24 lg:!py-24 md:!py-24 !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="md:w-7/12 lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
              <h1 className="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] !mb-3">Business News</h1>
              <p className="lead lg:!px-[1.25rem] xl:!px-[1.25rem] xxl:!px-[2rem] leading-[1.65] text-[0.9rem] font-medium !mb-[.25rem]">Welcome to our journal. Here you can find the latest company news and business articles.</p>
            </div>
            </div>
          </div>
        </div> */}
          <div
            className="relative h-[400px] bg-cover bg-center
                bg-transparent"
          >
            <img
              src={imageUrl}
              alt="blog"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="space-y-5">
              <div className="absolute inset-0 flex flex-col justify-center py-8 px-40">
                {category && (
                  <div className="inline-block bg-pink-200 text-pink-700 font-semibold rounded-full px-1 py-1 text-center w-28 text-xs font-space-grotesk">
                    {category}
                  </div>
                )}

                <h1 className="text-white text-3xl font-bold mt-4 font-space-grotesk pr-20">
                  {blog.title}
                </h1>
                <div className="border-t border-gray-100" />
                <div className="items-center mt-2 text-white">
                  {/* <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                    className="w-10 h-10 rounded-full mr-4"
                    alt="Author Avatar"
                  /> */}
                  <div className="mt-3 font-space-grotesk">
                    {/* <p
                      className="text-sm font-semibold "
                      style={{ lineHeight: "0.4rem" }}
                    >
                      Foulcher Nathanil
                    </p> */}
                    <p className="text-sm" style={{ lineHeight: "0.4rem" }}>
                      {formatPublishDate(blog?.publishDate)} • {blog?.readTime}{" "}
                      min read
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /section --> */}
        <div className="wrapper !bg-[#ffffff]">
          <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px]">
              <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full md:px-[20px] lg:px-[20px] xl:px-[35px]">
                <p
                  className="text-gray-600 mb-4 font-space-grotesk text-sm blog-content"
                  dangerouslySetInnerHTML={{ __html: blog?.content }}
                />
              </div>

              <aside className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full sidebar mt-8 xl:!mt-6 lg:!mt-6">
                <div className="widget">
                  <form className="search-form relative before:block before:absolute before:-translate-y-2/4 before:text-[0.9rem] before:text-[#959ca9] before:z-[9] before:right-3 before:top-2/4 font-Unicons">
                    <div className="form-floating relative !mb-0">
                      <input
                        id="search-form"
                        type="text"
                        className="form-control font-space-grotesk relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                        placeholder="Search"
                      />
                      <label
                        for="search-form"
                        className="inline-block font-space-grotesk text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope
                  "
                      >
                        Search
                      </label>
                    </div>
                  </form>
                </div>

                <div className="widget mt-[40px] bg-[#f3f4f6] p-3 rounded">
                  <h4 className="widget-title !mb-3 font-space-grotesk">
                    Tags
                  </h4>
                  <div className="border-t border-gray-100" />
                  <ul className="pl-0 list-none tag-list mt-4">
                    {blog?.blogTag_juction.map((tag, index) => {
                      const { description } = tag;

                      return description?.split("\n").map((tagItem, idx) => (
                        <li
                          key={idx} // unique key for the list items
                          className="mt-0 mb-[0.45rem] mr-[0.2rem] inline-block"
                        >
                          <a
                            href="#"
                            className="btn btn-soft-ash bg-white font-space-grotesk btn-sm rounded-sm flex items-center hover:translate-y-[-0.15rem] before:not-italic before:content-['#'] before:font-normal before:pr-[0.2rem]"
                          >
                            {tagItem}
                          </a>
                        </li>
                      ));
                    })}

                    {/* 
                    {blog?.description?.split('\n').map((tag ,index)=> {
                      <li className=" mt-0 mb-[0.45rem] mr-[0.2rem] inline-block">
                        <a
                          key={index}
                          href="#"
                          className="btn btn-soft-ash bg-white font-space-grotesk btn-sm rounded-sm flex items-center hover:translate-y-[-0.15rem]before:not-italic  before:font-normal before:pr-[0.2rem]"
                        >
                          {tag.trim()}
                        </a>
                      </li>})} */}

                    {/* <li className=" mt-0 mb-[0.45rem] mr-[0.2rem] inline-block">
                      <a
                        href="#"
                        className="btn btn-soft-ash btn-sm font-space-grotesk !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:pr-[0.2rem]"
                      >
                        Urban
                      </a>
                    </li>
                    <li className=" mt-0 mb-[0.45rem] mr-[0.2rem] inline-block">
                      <a
                        href="#"
                        className="btn btn-soft-ash btn-sm font-space-grotesk !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:pr-[0.2rem]"
                      >
                        Nature
                      </a>
                    </li>
                    <li className=" mt-0 mb-[0.45rem] mr-[0.2rem] inline-block">
                      <a
                        href="#"
                        className="btn btn-soft-ash btn-sm font-space-grotesk !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:pr-[0.2rem]"
                      >
                        Landscape
                      </a>
                    </li>
                    <li className=" mt-0 mb-[0.45rem] mr-[0.2rem] inline-block">
                      <a
                        href="#"
                        className="btn btn-soft-ash btn-sm font-space-grotesk !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:pr-[0.2rem]"
                      >
                        Macro
                      </a>
                    </li>
                    <li className=" mt-0 mb-[0.45rem] mr-[0.2rem] inline-block">
                      <a
                        href="#"
                        className="btn btn-soft-ash btn-sm font-space-grotesk !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:pr-[0.2rem]"
                      >
                        Fun
                      </a>
                    </li>
                    <li className=" mt-0 mb-[0.45rem] mr-[0.2rem] inline-block">
                      <a
                        href="#"
                        className="btn btn-soft-ash btn-sm font-space-grotesk !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:pr-[0.2rem]"
                      >
                        Workshop
                      </a>
                    </li>
                    <li className=" mt-0 mb-[0.45rem] mr-[0.2rem] inline-block">
                      <a
                        href="#"
                        className="btn btn-soft-ash btn-sm font-space-grotesk !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:pr-[0.2rem]"
                      >
                        Photography
                      </a>
                    </li> */}
                  </ul>
                </div>
                {/* <div className="widget mt-[40px] font-space-grotesk">
                  <h4 className="widget-title !mb-3">About Us</h4>
                  <p>
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum. Nulla vitae elit libero, a
                    pharetra augue. Donec id elit non mi porta gravida at eget
                    metus.
                  </p>
                  <nav className="nav social">
                    <a
                      className="text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                      href="#"
                    >
                      <Twitter className="text-[1rem] text-[#5daed5]" />
                    </a>
                    <a
                      className="text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                      href="#"
                    >
                      <Facebook className="text-[1rem] text-[#4470cf]" />
                    </a>
                    <a
                      className="text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                      href="#"
                    >
                      <Dribbble className="text-[1rem] text-[#e94d88]" />
                    </a>
                    <a
                      className="text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                      href="#"
                    >
                      <Instagram className="text-[1rem] text-[#d53581]" />
                    </a>
                    <a
                      className="text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                      href="#"
                    >
                      <Youtube className="text-[1rem] text-[#c8312b]" />
                    </a>
                  </nav>
                </div> */}

                {/* <div className="p-4 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          <span role="img" aria-label="light-bulb">
            💡
          </span>{' '}
          More Tags
        </h2>
        <a href="#" className="text-blue-500">
          View all
        </a>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm font-semibold"
          >
            {tag.name} ({tag.count})
          </span>
        ))}
      </div>
    </div> */}

                {/* <div className="widget mt-[40px]">
                  <h4 className="widget-title !mb-3 font-space-grotesk">
                    Popular Posts
                  </h4>
                  <ul className="m-0 p-0 after:content-[''] after:block after:h-0 after:clear-both after:invisible">
                    <li className=" clear-both block overflow-hidden">
                      <figure className="!rounded-[.4rem] float-left w-14 h-[4.5rem]">
                        <a href="#">
                          <img
                            className="!rounded-[.4rem]"
                            src={blogImage1}
                            alt="image"
                          />
                        </a>
                      </figure>
                      <div className="!relative ml-[4.25rem] mb-0">
                        <h6 className="!mb-1">
                          {" "}
                          <a
                            className="text-[#343f52] hover:text-[#3f78e0] font-space-grotesk"
                            href="#"
                          >
                            Magna Mollis Ultricies
                          </a>{" "}
                        </h6>

                        <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none flex space-x-2 items-center">
                          <li className="post-date inline-block font-space-grotesk flex items-center">
                            <Calendar className="w-4 h-4 pr-[0.2rem] align-middle" />
                            <span className="font-space-grotesk">
                              26 Mar 2022
                            </span>
                          </li>
                          <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:mx-[0.6rem] before:rounded-full before:bg-[#aab0bc] flex items-center">
                            <a
                              className="text-[#aab0bc] hover:text-[#3f78e0] hover:border-[#3f78e0] flex items-center"
                              href="#"
                            >
                              <MessageCircle className="w-4 h-4 pr-[0.2rem] align-middle" />
                              3
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className=" clear-both block overflow-hidden mt-4">
                      <figure className="!rounded-[.4rem] float-left w-14 !h-[4.5rem]">
                        {" "}
                        <a href="#">
                          <img
                            className="!rounded-[.4rem]"
                            src={blogImage1}
                            alt="image"
                          />
                        </a>
                      </figure>
                      <div className="!relative ml-[4.25rem] mb-0">
                        <h6 className="!mb-2">
                          {" "}
                          <a
                            className="text-[#343f52] hover:text-[#3f78e0] font-space-grotesk"
                            href="#"
                          >
                            Ornare Nullam Risus
                          </a>{" "}
                        </h6>
                        <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none flex space-x-2 items-center">
                          <li className="post-date inline-block font-space-grotesk flex items-center">
                            <Calendar className="w-4 h-4 pr-[0.2rem] align-middle" />
                            <span className="font-space-grotesk">
                              26 Mar 2022
                            </span>
                          </li>
                          <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:mx-[0.6rem] before:rounded-full before:bg-[#aab0bc] flex items-center">
                            <a
                              className="text-[#aab0bc] hover:text-[#3f78e0] hover:border-[#3f78e0] flex items-center"
                              href="#"
                            >
                              <MessageCircle className="w-4 h-4 pr-[0.2rem] align-middle" />
                              3
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="clear-both block overflow-hidden mt-4">
                      <figure className="!rounded-[.4rem] float-left w-14 !h-[4.5rem]">
                        <a href="#">
                          <img
                            className="!rounded-[.4rem]"
                            src={blogImage1}
                            alt="image"
                          />
                        </a>
                      </figure>
                      <div className="!relative ml-[4.25rem] mb-0">
                        <h6 className="!mb-2">
                          {" "}
                          <a
                            className="text-[#343f52] hover:text-[#3f78e0] font-space-grotesk"
                            href="#"
                          >
                            Euismod Nullam Fusce
                          </a>{" "}
                        </h6>
                        <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none flex space-x-2 items-center">
                          <li className="post-date inline-block font-space-grotesk flex items-center">
                            <Calendar className="w-4 h-4 pr-[0.2rem] align-middle" />
                            <span className="font-space-grotesk">
                              26 Mar 2022
                            </span>
                          </li>
                          <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:mx-[0.6rem] before:rounded-full before:bg-[#aab0bc] flex items-center">
                            <a
                              className="text-[#aab0bc] hover:text-[#3f78e0] hover:border-[#3f78e0] flex items-center"
                              href="#"
                            >
                              <MessageCircle className="w-4 h-4 pr-[0.2rem] align-middle" />
                              3
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div> */}

                {/* <div className="widget mt-[40px]">
                  <h4 className="widget-title !mb-3 font-space-grotesk">
                    Categories
                  </h4>
                  <ul className="pl-0 list-none bullet-primary !text-inherit">
                    <li className="relative pl-[1rem] before:absolute  before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif">
                      <a
                        className="text-inherit hover:text-[#3f78e0] font-space-grotesk"
                        href="#"
                      >
                        Teamwork (21)
                      </a>
                    </li>
                    <li className="relative pl-[1rem] before:absolute  before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif mt-[.35rem]">
                      <a
                        className="text-inherit hover:text-[#3f78e0] font-space-grotesk"
                        href="#"
                      >
                        Ideas (19)
                      </a>
                    </li>
                    <li className="relative pl-[1rem] before:absolute  before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif mt-[.35rem]">
                      <a
                        className="text-inherit hover:text-[#3f78e0] font-space-grotesk"
                        href="#"
                      >
                        Workspace (16)
                      </a>
                    </li>
                    <li className="relative pl-[1rem] before:absolute  before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif mt-[.35rem]">
                      <a
                        className="text-inherit hover:text-[#3f78e0] font-space-grotesk"
                        href="#"
                      >
                        Coding (7)
                      </a>
                    </li>
                    <li className="relative pl-[1rem] before:absolute  before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif mt-[.35rem]">
                      <a
                        className="text-inherit hover:text-[#3f78e0] font-space-grotesk"
                        href="#"
                      >
                        Meeting (12)
                      </a>
                    </li>
                    <li className="relative pl-[1rem] before:absolute  before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif mt-[.35rem]">
                      <a
                        className="text-inherit hover:text-[#3f78e0] font-space-grotesk"
                        href="#"
                      >
                        Business Tips (14)
                      </a>
                    </li>
                  </ul>
                </div> */}

                {/* <div className="widget mt-[40px]">
                  <h4 className="widget-title !mb-3 font-space-grotesk">
                    Archive
                  </h4>
                  <ul className="pl-0 list-none bullet-primary !text-inherit">
                    <li className="relative pl-[1rem] before:absolute  before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif">
                      <a
                        className="text-inherit hover:text-[#3f78e0] font-space-grotesk"
                        href="#"
                      >
                        February 2019
                      </a>
                    </li>
                    <li className="relative pl-[1rem] before:absolute  before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif mt-[.35rem]">
                      <a
                        className="text-inherit hover:text-[#3f78e0] font-space-grotesk"
                        href="#"
                      >
                        January 2019
                      </a>
                    </li>
                    <li className="relative pl-[1rem] before:absolute  before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif mt-[.35rem]">
                      <a
                        className="text-inherit hover:text-[#3f78e0] font-space-grotesk"
                        href="#"
                      >
                        December 2018
                      </a>
                    </li>
                    <li className="relative pl-[1rem] before:absolute  before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif mt-[.35rem]">
                      <a
                        className="text-inherit hover:text-[#3f78e0] font-space-grotesk"
                        href="#"
                      >
                        November 2018
                      </a>
                    </li>
                    <li className="relative pl-[1rem] before:absolute  before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif mt-[.35rem]">
                      <a
                        className="text-inherit hover:text-[#3f78e0] font-space-grotesk"
                        href="#"
                      >
                        October 2018
                      </a>
                    </li>
                  </ul>
                </div> */}
              </aside>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ParticularBlog;
