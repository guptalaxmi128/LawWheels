import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, PhoneCall, Mail, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MenuIcon,
  XIcon,
  HomeIcon,
  ChatAlt2Icon,
} from "@heroicons/react/outline";
import { Link, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import FreeConsultation from "../freeConsultation/FreeConsultation";
import logo from "../../assets/images/logo_lw.webp";

const Navbar = () => {
  const location=useLocation();
  const isBlogSlugPath = location.pathname.includes('blog/');
  const [showModal, setShowModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [logoImage, setLogoImage] = useState(
    "https://law-wheel.b-cdn.net/image/logo_law.webp"
  );
  const dropdownRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = "https://law-wheel.b-cdn.net/image/logo_law.webp";
    img.onload = () =>
      setLogoImage("https://law-wheel.b-cdn.net/image/logo_law.webp");
    img.onerror = () => setLogoImage(logo);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = (dropdownId) => {
    setIsDropdownOpen(isDropdownOpen === dropdownId ? null : dropdownId);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <>
      <section
        id="snippet-2"
        // className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid"
        className="wrapper bg-gradient-custom border-b-[rgba(164,174,198,0.2)] border-b border-solid"
      >
        <div className="container-fluid sm:px-2">
          <header className="relative wrapper pb-0 lg:pb-1 xl:pb-1 bg-scroll z-[2] bg-no-repeat bg-[center_center] bg-cover">
            <nav className="navbar navbar-expand-lg center-nav transparent navbar-dark z-[3] relative">
              <div className="container xl:pt-2.5 xl:pb-2.5 lg:pt-2.5 lg:pb-2.5 xl:flex-row lg:flex-row !flex-nowrap items-center">
                <div className="navbar-brand w-full">
                  <a href="/" className="block ml-2 mr-2 sm:ml-4 sm:mr-4">
                    <LazyLoadImage
                      className="logo-dark w-16 h-16"
                      src={logoImage}
                      alt="dark logo"
                      effect="blur"
                      onError={() => setLogoImage(logo)}
                    />
                    <LazyLoadImage
                      className="logo-light w-16 h-16"
                      src={logoImage}
                      alt="light logo"
                      effect="blur"
                      onError={() => setLogoImage(logo)}
                    />
                  </a>
                </div>

                <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start z-[3] relative">
                  <div className="offcanvas-header xl:hidden lg:hidden">
                    <h3 className="text-white xl:text-[1.5rem] text-[calc(1.275rem_+_0.3vw)]  !mb-0">
                      Law Wheels
                    </h3>
                    <button
                      type="button"
                      className="btn-close btn-close-white"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body xl:!ml-auto lg:!ml-auto flex  flex-col !h-full">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a
                          className="nav-link text-xs font-space-grotesk text-black"
                          href="/"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle text-xs font-space-grotesk text-black hover:text-black focus:text-black"
                          href="#"
                          data-bs-toggle="dropdown"
                        >
                          Matrimonial Disputes{" "}
                          <ChevronDown className="inline-block w-3 h-4" />
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a
                              className="dropdown-item text-xs font-space-grotesk"
                              href="/divorce"
                            >
                              Divorce
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="dropdown-item text-xs font-space-grotesk"
                              href="/mutual-divorce"
                            >
                              Mutual Divorce
                            </a>
                          </li>

                          {/* <li className="nav-item">
                            <a
                              className="dropdown-item  text-xs font-space-grotesk"
                              href="/divorce"
                            >
                             Contested Divorce
                            </a>
                          </li> */}
                        </ul>
                      </li>

                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle text-xs font-space-grotesk text-black hover:text-black focus:text-black"
                          href="#"
                          data-bs-toggle="dropdown"
                        >
                          Criminal
                          <ChevronDown className="inline-block w-3 h-4" />
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a
                              className="dropdown-item text-xs font-space-grotesk"
                              href="/bail-application"
                            >
                              Bail Applications
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="dropdown-item text-xs font-space-grotesk"
                              href="/pocso-act"
                            >
                              POCSO Act
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="dropdown-item  text-xs font-space-grotesk"
                              href="/domestic-violence"
                            >
                              Domestic Violence
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="dropdown-item  text-xs font-space-grotesk"
                              href="/cyber-crimes"
                            >
                              Cyber Crimes
                            </a>
                          </li>
                          {/* <li className="nav-item">
                            <a
                              className="dropdown-item  text-xs font-space-grotesk"
                              href="#"
                            >
                              Cheating & Fraud
                            </a>
                          </li> */}
                        </ul>
                      </li>

                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle text-xs font-space-grotesk text-black hover:text-black focus:text-black"
                          href="#"
                          data-bs-toggle="dropdown"
                        >
                          Civil
                          <ChevronDown className="inline-block w-3 h-4" />
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a
                              className="dropdown-item text-xs font-space-grotesk"
                              href="/property-dispute"
                            >
                              Property Dispute
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="dropdown-item text-xs font-space-grotesk"
                              href="/execution-application"
                            >
                              Execution Application
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="dropdown-item  text-xs font-space-grotesk"
                              href="/breach-contract"
                            >
                              Breach Of Contract
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle font-space-grotesk text-xs text-black hover:text-black focus:text-black"
                          href="#"
                          data-bs-toggle="dropdown"
                        >
                          Financial Irregularities
                          <ChevronDown className="inline-block w-3 h-4" />
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a
                              className="dropdown-item  text-xs font-space-grotesk"
                              href="/cheque-bounce"
                            >
                              Cheque Bounce
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="dropdown-item text-xs font-space-grotesk"
                              href="/money-recovery-suit"
                            >
                              Money Recovery Suit
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="dropdown-item font-space-grotesk text-xs"
                              href="/debt-recovery-tribunal"
                            >
                              DRT(Debt Recovery Tribunal)
                            </a>
                          </li>

                        </ul>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-xs font-space-grotesk text-black"
                          href="/blog"
                        >
                          Blog
                        </a>
                      </li>
                      {/* <li className="nav-item dropdown dropdown-mega">
                        <a
                          className="nav-link dropdown-toggle text-xs font-space-grotesk text-black hover:text-black focus:text-black"
                          href="#"
                          data-bs-toggle="dropdown"
                           data-bs-auto-close="false"
                        >
                          More
                          <ChevronDown className="inline-block w-3 h-4" />
                        </a>
                        <ul className="dropdown-menu mega-menu">
                          <li className="mega-menu-content">
                            <div className="flex flex-wrap mx-0 xl:mx-[-7.5px] lg:mx-[-7.5px]">
                              <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] max-w-full">
                                <h6 className="dropdown-header font-space-grotesk">
                                  Divorce
                                </h6>
                                <ul className="!pl-0 list-none  xl:columns-2 lg:columns-2  xl:pb-1 lg:pb-1">
                                  <li className="xl:inline-block xl:w-full lg:inline-block lg:w-full">
                                    <a
                                      className="dropdown-item font-space-grotesk"
                                      href="/mutual-form"
                                    >
                                      Mutual Divorce Form
                                    </a>
                                  </li>
                                  <li className="xl:inline-block xl:w-full lg:inline-block lg:w-full">
                                    <a
                                      className="dropdown-item font-space-grotesk"
                                      href="/mutual-divorce"
                                    >
                                      Mutual Divorce
                                    </a>
                                  </li>
                                  <li className="xl:inline-block xl:w-full lg:inline-block lg:w-full">
                                    <a
                                      className="dropdown-item font-space-grotesk"
                                      href="/divorce"
                                    >
                                      Divorce
                                    </a>
                                  </li>
                                </ul>
                                <h6 className="dropdown-header xl:!mt-6 lg:!mt-6 font-space-grotesk">
                                  Intellectual Property
                                </h6>
                                <ul className="!pl-0 list-none  xl:columns-2 lg:columns-2 ">
                                  <li className=" xl:inline-block xl:w-full lg:inline-block lg:w-full">
                                    <a
                                      className="dropdown-item font-space-grotesk"
                                      href="#"
                                    >
                                      Patent
                                    </a>
                                  </li>
                                  <li className=" xl:inline-block xl:w-full lg:inline-block lg:w-full">
                                    <a
                                      className="dropdown-item font-space-grotesk"
                                      href="#"
                                    >
                                      Trademarks
                                    </a>
                                  </li>
                                  <li className=" xl:inline-block xl:w-full lg:inline-block lg:w-full">
                                    <a
                                      className="dropdown-item font-space-grotesk"
                                      href="#"
                                    >
                                      Copyright
                                    </a>
                                  </li>
                                  <li className=" xl:inline-block xl:w-full lg:inline-block lg:w-full">
                                    <a
                                      className="dropdown-item font-space-grotesk"
                                      href="#"
                                    >
                                      Trade Sample
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] max-w-full xl:border-l-[rgba(164,174,198,0.2)] xl:border-l xl:border-solid lg:border-l-[rgba(164,174,198,0.2)] lg:border-l lg:border-solid">
                                <h6 className="dropdown-header font-space-grotesk">
                                  {" "}
                                  Consumer Matters
                                </h6>
                                <ul className="!pl-0 list-none  xl:columns-3 lg:columns-3 ">
                                  <li>
                                    <a
                                      className="dropdown-item font-space-grotesk"
                                      href="/drafting-complaints"
                                    >
                                      Drafting Complaints
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item font-space-grotesk"
                                      href="/inflated-electricity"
                                    >
                                      Inflated Electricity Bills
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item font-space-grotesk"
                                      href="/food-adulteration"
                                    >
                                     Food Adulteration
                                    </a>
                                  </li>
                                
                                </ul>
                              </div>

                             
                            </div>
                          </li>
                        </ul>
                      </li> */}
                      {/* <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle text-xs font-space-grotesk text-black hover:text-black focus:text-black"
                          href="#"
                          data-bs-toggle="dropdown"
                        >
                          Intellectual property{" "}
                          <ChevronDown className="inline-block w-3 h-4" />
                        </a>
                        <ul className="dropdown-menu">
                        <li className="dropdown dropdown-submenu dropend">
                            <a
                              className="dropdown-item dropdown-toggle  flex justify-between items-center text-xs font-space-grotesk"
                              href="#"
                              data-bs-toggle="dropdown"
                            >
                              Trademark{" "}
                              <ChevronDown className="inline-block w-3 h-4 ml-14" />
                            </a>
                            <ul className="dropdown-menu">
                           
                              <li className="nav-item">
                                <a
                                  className="dropdown-item text-xs font-space-grotesk"
                                  href="#"
                                >
                                  Trademarks Opposition
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="dropdown-item text-xs font-space-grotesk"
                                  href="#"
                                >
                                  Trademarks Objection
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="dropdown-item text-xs font-space-grotesk"
                                  href="#"
                                >
                                  Trademarks Infringement{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="dropdown-item text-xs font-space-grotesk"
                                  href="#"
                                >
                                  Show Cause Hearing
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="dropdown-item text-xs font-space-grotesk"
                                  href="#"
                                >
                                  Trademark Watch Service
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="dropdown-item text-xs font-space-grotesk"
                                  href="#"
                                >
                                  Trademark Litigations{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="dropdown-item text-xs font-space-grotesk"
                                  href="#"
                                >
                                  Assignment Of TM
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="dropdown-item  text-xs font-space-grotesk"
                                  href="#"
                                >
                                  Trademark Dillution{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="dropdown-item text-xs font-space-grotesk"
                                  href="#"
                                >
                                  Trademark Rectification
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="dropdown-item text-xs font-space-grotesk"
                                  href="#"
                                >
                                  Trademark Licencing{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="dropdown-item text-xs font-space-grotesk"
                                  href="#"
                                >
                                  Trademark Renewal
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a
                              className="dropdown-item text-xs font-space-grotesk"
                              href="#"
                            >
                              Patent
                            </a>
                          </li>
                         
                          <li className="nav-item">
                            <a
                              className="dropdown-item text-xs font-space-grotesk"
                              href="#"
                            >
                              Copyright
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="dropdown-item text-xs font-space-grotesk"
                              href="#"
                            >
                              Trade Sample
                            </a>
                          </li>
                        </ul>
                      </li> */}

                      {/* <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle font-space-grotesk text-xs text-black hover:text-black focus:text-black"
                          href="#"
                          data-bs-toggle="dropdown"
                        >
                          Consumer Matters{" "}
                          <ChevronDown className="inline-block w-3 h-4" />
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a
                              className="dropdown-item  text-xs font-space-grotesk"
                              href="/drafting-complaints"
                            >
                              Drafting Complaints
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="dropdown-item text-xs font-space-grotesk"
                              href="/inflated-electricity"
                            >
                              Inflated Electricity Bills
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="dropdown-item font-space-grotesk text-xs"
                              href="/food-adulteration"
                            >
                              Food Adulteration
                            </a>
                          </li>
                        </ul>
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div className="navbar-other w-full !flex !ml-auto">
                  <ul className="navbar-nav !flex-row !items-center !ml-auto">
                    <li className="nav-item hidden xl:block lg:block md:block">
                      <button
                        className="btn btn-sm  !rounded-[50rem] text-xs font-space-grotesk gradient-button "
                        // onClick={() => setShowModal(!showModal)}
                      >
                        {/* <span className="block lg:hidden">
                          Consult Now
                        </span> */}
                        {/* <span className="hidden lg:block text-[0.6rem]">
                          {" "}
                          Consult 
                        </span> */}
                        <div className="font-space-grotesk text-xs flex">
                          <PhoneCall className="w-4 h-4 mr-1" />
                          1800 571 1413
                        </div>
                      </button>
                    </li>

                    <li className="nav-item xl:hidden lg:hidden block ml-2 mr-2 sm:ml-4 sm:mr-4">
                      <button
                        onClick={toggleSidebar}
                        className="text-slate-800 focus:outline-none"
                      >
                        {isOpen ? (
                          <XIcon className="h-6 w-6 text-white" />
                        ) : (
                          <MenuIcon className="h-6 w-6 text-white" />
                        )}
                      </button>
                      {/* Icon */}
                    </li>
                    {/* <li className="nav-item hidden xl:block lg:block md:block ml-4">
      <button className="flex items-center font-space-grotesk gradient-button">
        <PhoneCall className="w-4 h-4 mr-1" />
       <span className="text-xs">1800 571 1413</span> 
      </button>
    </li> */}
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </section>
      {/* <div className="marquee-container lg:mb-6 xl:mb-6 sm:mb-0"> */}
      <div className={`marquee-container ${isBlogSlugPath ? '' : 'lg:mb-6 xl:mb-6 sm:mb-0'}`}>
        <div className="marquee-wrapper">
          <div className="marquee-content">
            <div className="marquee-item font-space-grotesk text-xs">
              <MapPin className="w-4 h-4 mr-1" />
              {/* Surya Kiran Building, 6th Floor, Connaught Place, New Delhi, Delhi
              110001 */}{" "}
              210, Floor 2, 731/1, PMMM Marg Tardeo, Haji Ali, Mumbai,
              Mumbai-400034, Maharashtra
            </div>
            <div className="marquee-item font-space-grotesk text-xs">
              <MapPin className="w-4 h-4 mr-1" />
              Surya Kiran Building, 6th Floor, Connaught Place, New Delhi, Delhi
              110001
            </div>
            <div className="marquee-item font-space-grotesk text-xs">
              <PhoneCall className="w-4 h-4 mr-1" />
              +91 9899924222
            </div>
            <div className="marquee-item font-space-grotesk text-xs">
              <Mail className="w-4 h-4 mr-1" />
              lawWheels@gmail.com
            </div>
            <div className="marquee-item font-space-grotesk text-xs">
              <PhoneCall className="w-4 h-4 mr-1" />
              Toll Free Number 1800 571 1413 (09:00 AM to 09:00 PM)
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            // transition={{ duration: 0.3 }}
            transition={{ duration: 0.1 }}
            className="fixed top-0 left-0 w-3/4 h-full flex flex-col p-3  z-40 text-white overflow-y-auto"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#1E3A8A",
            }}
          >
            <button onClick={toggleSidebar} className="self-end mb-4">
              <XIcon className="h-6 w-6 text-white" />
            </button>
            <div className="mb-8">
              <img
                src={logoImage}
                alt="logo"
                onError={() => setLogoImage(logo)}
                className="w-16 h-16 object-cover mx-auto"
              />
            </div>
            <div className="flex flex-col gap-6">
              <Link
                to="/"
                className="text-custom-xs sm:text-custom-sm flex items-center text-white  font-space-grotesk"
              >
                <HomeIcon className="h-4 w-4 mr-2" />
                Home
              </Link>

              {/* <div className="relative" ref={dropdownRef}>
                <button
                  className="text-sm flex items-center text-white font-space-grotesk"
                  onClick={() => toggleDropdown("intellectualProperty")}
                >
                  <HomeIcon className="h-4 w-4 mr-2" />
                  Intellectual Property
                  <ChevronDown className="h-4 w-4 ml-4" />
                </button>
                <AnimatePresence>
                  {isDropdownOpen === "intellectualProperty" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        marginTop: "0.5rem",
                      }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.1 }}
                      className="bg-[#FFFFFF] rounded-md w-full"
                    >
                      <ul className="py-1">
                        <li className="px-2 py-1">
                          <Link
                            to="#"
                            className="block text-xs text-blue-800 font-space-grotesk"
                          >
                            Patent
                          </Link>
                        </li>
                        <li className="px-2 py-1">
                          <Link
                            to="#"
                            className="block text-xs  text-blue-800  font-space-grotesk"
                          >
                            Trademark
                          </Link>
                        </li>

                        <li className="px-2 py-1">
                          <Link
                            to="#"
                            className="block text-xs  text-blue-800 font-space-grotesk"
                          >
                            Copyright
                          </Link>
                        </li>
                        <li className="px-2 py-1">
                          <Link
                            to="#"
                            className="block text-xs  text-blue-800 font-space-grotesk"
                          >
                            Trade Sample
                          </Link>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div> */}

              <div className="relative" ref={dropdownRef}>
                <button
                  className="text-custom-xs sm:text-custom-sm flex items-center text-white font-space-grotesk"
                  onClick={() => toggleDropdown("matrimonialDisputes")}
                >
                  <HomeIcon className="h-4 w-4 mr-2" />
                  Matrimonial Disputes
                  <ChevronDown className="h-4 w-4 ml-4" />
                </button>
                <AnimatePresence>
                  {isDropdownOpen === "matrimonialDisputes" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        marginTop: "0.5rem",
                      }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.1 }}
                      className="bg-[#FFFFFF] rounded-md w-full"
                    >
                      <ul className="py-1">
                        <li className="px-2 py-1">
                          <Link
                            to="/divorce"
                            className="block text-xs text-blue-800 font-space-grotesk"
                          >
                            Divorce
                          </Link>
                        </li>
                        <li className="px-2 py-1">
                          <Link
                            to="/mutual-divorce"
                            className="block text-xs  text-blue-800  font-space-grotesk"
                          >
                            Mutual Divorce
                          </Link>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative" ref={dropdownRef}>
                <button
                  className="text-custom-xs sm:text-custom-sm flex items-center text-white font-space-grotesk"
                  onClick={() => toggleDropdown("civil")}
                >
                  <HomeIcon className="h-4 w-4 mr-2" />
                  Civil
                  <ChevronDown className="h-4 w-4 ml-2" />
                </button>
                <AnimatePresence>
                  {isDropdownOpen === "civil" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        marginTop: "0.5rem",
                      }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.1 }}
                      className="bg-[#FFFFFF] rounded-md w-full"
                    >
                      <ul className="py-1 ">
                        {/* <li className="px-2 py-1 hover:bg-[#374151]">  background color applied when hover*/}
                        <li className="px-2 py-1">
                          <Link
                            to="/property-dispute"
                            className="block text-xs text-blue-800 font-space-grotesk"
                          >
                            Property Dispute
                          </Link>
                        </li>
                        <li className="px-2 py-1">
                          <Link
                            to="/execution-application"
                            className="block text-xs  text-blue-800  font-space-grotesk"
                          >
                            Execution Application
                          </Link>
                        </li>
                        <li className="px-2 py-1">
                          <Link
                            to="/breach-contract"
                            className="block text-xs  text-blue-800 font-space-grotesk"
                          >
                            Breach Of Contract
                          </Link>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative mt-1" ref={dropdownRef}>
                <button
                  className="text-custom-xs sm:text-custom-sm flex items-center text-white font-space-grotesk"
                  onClick={() => toggleDropdown("criminal")}
                >
                  {" "}
                  <HomeIcon className="h-4 w-4 mr-2" />
                  Criminal
                  <ChevronDown className="h-4 w-4 ml-2" />
                </button>
                <AnimatePresence>
                  {isDropdownOpen === "criminal" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        marginTop: "0.5rem",
                      }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.1 }}
                      className="bg-[#FFFFFF] rounded-md w-full"
                    >
                      <ul className="py-1 ">
                        <li className="px-2 py-1">
                          <Link
                            to="/bail-application"
                            className="block text-xs text-blue-800 font-space-grotesk"
                          >
                            Bail Applications
                          </Link>
                        </li>
                        <li className="px-2 py-1">
                          <Link
                            to="/pocso-act"
                            className="block text-xs text-blue-800 font-space-grotesk"
                          >
                            POCSO Act
                          </Link>
                        </li>
                        <li className="px-2 py-1">
                          <Link
                            to="/domestic-violence"
                            className="block text-xs text-blue-800 font-space-grotesk"
                          >
                            Domestic Violence
                          </Link>
                        </li>
                        <li className="px-2 py-1">
                          <Link
                            to="/cyber-crimes"
                            className="block text-xs text-blue-800 font-space-grotesk"
                          >
                            Cyber Crimes
                          </Link>
                          {/* <li className="px-2 py-1">
                            <Link
                              to="#"
                              className="block text-xs text-blue-800 font-space-grotesk"
                            >
                              Cheating & Fraud
                            </Link>
                          </li> */}
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* <div className="relative mt-1" ref={dropdownRef}>
                <button
                  className="text-sm flex items-center text-white font-space-grotesk"
                  onClick={() => toggleDropdown("consumer")}
                >
                  {" "}
                  <HomeIcon className="h-4 w-4 mr-2" />
                  Consumer Matters
                  <ChevronDown className="h-4 w-4 ml-2" />
                </button>
                <AnimatePresence>
                  {isDropdownOpen === "consumer" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        marginTop: "0.5rem",
                      }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.1 }}
                      className="bg-[#FFFFFF] rounded-md w-full"
                    >
                      <ul className="py-1 ">
                        <li className="px-2 py-1">
                          <Link
                            to="/drafting-complaints"
                            className="block text-xs text-blue-800 font-space-grotesk"
                          >
                            Drafting Complaints
                          </Link>
                        </li>
                        <li className="px-2 py-1">
                          <Link
                            to="/inflated-electricity"
                            className="block text-xs text-blue-800 font-space-grotesk"
                          >
                            Inflated Electricity Bills
                          </Link>
                        </li>
                        <li className="px-2 py-1">
                          <Link
                            to="/food-adulteration"
                            className="block text-xs text-blue-800 font-space-grotesk"
                          >
                            Food Adulteration
                          </Link>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div> */}
              <div className="relative mt-1" ref={dropdownRef}>
                <button
                  className="text-custom-xs sm:text-custom-sm flex items-center text-white font-space-grotesk"
                  onClick={() => toggleDropdown("moneyRecovery")}
                >
                  {" "}
                  <HomeIcon className="h-4 w-4 mr-2" />
                  Financial Irregularities
                  <ChevronDown className="h-4 w-4 ml-2" />
                </button>
                <AnimatePresence>
                  {isDropdownOpen === "moneyRecovery" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        marginTop: "0.5rem",
                      }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.1 }}
                      className="bg-[#FFFFFF] rounded-md w-full"
                    >
                      <ul className="py-1 ">
                        <li className="px-2 py-1">
                          <Link
                            to="/cheque-bounce"
                            className="block text-xs text-blue-800 font-space-grotesk"
                          >
                            Cheque Bounce
                          </Link>
                        </li>
                        <li className="px-2 py-1">
                          <Link
                            to="/money-recovery-suit"
                            className="block text-xs text-blue-800 font-space-grotesk"
                          >
                            Money Recovery Suit
                          </Link>
                        </li>
                        <li className="px-2 py-1">
                          <Link
                            to="/debt-recovery-tribunal"
                            className="block text-xs text-blue-800 font-space-grotesk"
                          >
                            DRT(Debt Recovery Tribunal)
                          </Link>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/blog"
                className="text-custom-xs sm:text-custom-sm flex items-center text-white font-space-grotesk"
              >
                <HomeIcon className="h-4 w-4 mr-2" />
                Blog
              </Link>

              <button
                className="text-custom-xs sm:text-custom-sm flex items-center text-white  font-space-grotesk"
                onClick={() => {
                  setShowModal(true);
                  toggleSidebar();
                }}
              >
                <ChatAlt2Icon className="h-4 w-4 mr-2" />
                Consult Now
              </button>

              <button className="btn btn-sm  !rounded-[50rem] text-xs font-space-grotesk gradient-button ">
                <div className="font-space-grotesk text-xs flex">
                  <PhoneCall className="w-4 h-4 mr-1" />
                  1800 571 1413
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <FreeConsultation showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Navbar;
