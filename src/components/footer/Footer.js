import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_lw.webp";

const Footer = () => {
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
    <div>
      {" "}
      <footer className="bg-[rgba(52,63,82)] opacity-100 text-[#cacaca]">
        <div className="footer-upper relative">
          <div className=" footer-upper-content container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="xl:flex lg:flex flex-row xl:!items-center lg:!items-center">
              <h3 className="text-[calc(1.315rem_+_0.78vw)] font-bold xl:text-[1.9rem] !leading-[1.25] !mb-6 xl:!mb-0 lg:!mb-0 lg:pr-40 xl:pr-60 xxl:pr-[22.5rem] text-white font-space-grotesk">
                Take the First Step Towards Peace and Closure with Our Free
                Consultation.
              </h3>
            </div>

            <hr className="mt-[3rem] mb-[3.5rem] opacity-100 m-[4.5rem_0] border-t border-solid border-[rgba(164,174,198,.2)]" />
            <div className="flex flex-wrap mx-[-15px] mt-[-30px] xl:mt-0 lg:mt-0">
              <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
                <div className="widget text-[#cacaca]">
                  <img
                    className="!mb-4 w-20 h-20"
                    src={logoImage}
                    // srcset="./assets/img/logo-light@2x.png 2x"
                    alt="image"
                    onError={() => setLogoImage(logo)}
                  />
                  <p className="!mb-4 font-space-grotesk">
                    info@lawwheels.com
                    <br className="hidden xl:block lg:block text-[#cacaca]" />
                    +91 9899924222
                  </p>

                  <div className="flex space-x-4">
                    <a
                      className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                      href="#"
                    >
                      <FaTwitter className="w-6 h-6 text-white" />
                    </a>
                    <a
                      className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                      href="#"
                    >
                      <FaFacebook className="w-6 h-6 text-white" />
                    </a>
                    {/* <a
                    className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                    href="#"
                  >
                    <i className="uil uil-dribbble before:content-['\eaa2'] !text-white text-[1rem]"></i>
                  </a> */}
                    <a
                      className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                      href="#"
                    >
                      <FaInstagram className="w-6 h-6 text-white" />
                    </a>
                    <a
                      className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                      href="#"
                    >
                      <FaYoutube className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
                <div className="widget text-[#cacaca]">
                  <h4 className="widget-title text-white !mb-3 text-[1rem] !leading-[1.45] font-space-grotesk">
                    Get In Touch
                  </h4>

                  <p className="!mb-4 font-space-grotesk">
                    <b className="font-bold"> Register Office:</b> 210, Floor 2,
                    731/1, PMMM Marg Tardeo, Haji Ali, Mumbai, Mumbai-400034,
                    Maharashtra
                    <br className="hidden xl:block lg:block text-[#cacaca]" />
                    <div className="!mb-4" />
                    <b className="font-bold">Corporate Office:</b> Surya Kiran
                    Building, 6th Floor, Connaught Place, New Delhi, Delhi
                    110001
                  </p>
                </div>
              </div>

              <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
                <div className="widget text-[#cacaca]">
                  <h4 className="widget-title text-white !mb-3 text-[1rem] !leading-[1.45] font-space-grotesk">
                    Policies
                  </h4>
                  <ul className="pl-0 list-none   !mb-0">
                    <li>
                      <Link
                        className="text-[#cacaca] hover:text-[#fab758] font-space-grotesk"
                        to="/privacy-policy"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="mt-[0.35rem]">
                      <Link
                        className="text-[#cacaca] hover:text-[#fab758] font-space-grotesk"
                        to="/terms-conditions"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                    <li className="mt-[0.35rem]">
                      <Link
                        className="text-[#cacaca] hover:text-[#fab758] font-space-grotesk"
                        to="/refund-policy"
                      >
                        Refund Policy
                      </Link>
                    </li>
                    <li className="mt-[0.35rem]">
                      <Link
                        className="text-[#cacaca] hover:text-[#fab758] font-space-grotesk"
                        to="/cookies-policy"
                      >
                        Cookies Policy
                      </Link>
                    </li>
                    <li className="mt-[0.35rem]">
                      <Link
                        className="text-[#cacaca] hover:text-[#fab758] font-space-grotesk"
                        to="/data-protection"
                      >
                        Data Protection
                      </Link>
                    </li>
                    <li className="mt-[0.35rem]">
                      <Link
                        className="text-[#cacaca] hover:text-[#fab758] font-space-grotesk"
                        to="/disclaimer"
                      >
                        Disclaimer
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
                <div className="widget text-[#cacaca]">
                  <h4 className="widget-title text-white !mb-3 text-[1rem] !leading-[1.45] font-space-grotesk">
                    Learn More
                  </h4>
                  <ul className="pl-0 list-none   !mb-0">
                    <li>
                      <Link
                        className="text-[#cacaca] hover:text-[#fab758] font-space-grotesk"
                        to="/about"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="mt-[0.35rem]">
                      <Link
                        className="text-[#cacaca] hover:text-[#fab758] font-space-grotesk"
                        to="#"
                      >
                        Our Story
                      </Link>
                    </li>
                    <li className="mt-[0.35rem]">
                      <Link
                        className="text-[#cacaca] hover:text-[#fab758] font-space-grotesk"
                        to="/contact"
                      >
                        Contact us
                      </Link>
                    </li>
                    <li className="mt-[0.35rem]">
                      <Link
                        className="text-[#cacaca] hover:text-[#fab758] font-space-grotesk"
                        to="#"
                      >
                        Terms of Use
                      </Link>
                    </li>
                    <li className="mt-[0.35rem]">
                      <Link
                        className="text-[#cacaca] hover:text-[#fab758] font-space-grotesk"
                        to="#"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> */}

              <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
                <div className="widget text-[#cacaca]">
                  <h4 className="widget-title text-white !mb-3 text-[1rem] !leading-[1.45] font-space-grotesk">
                    Quick Links
                  </h4>
                  <ul className="pl-0 list-none   !mb-0">
                    <li>
                      <Link
                        className="text-[#cacaca] hover:text-[#fab758] font-space-grotesk"
                        to="#"
                      >
                        Book an Appointment
                      </Link>
                    </li>
                    <li className="mt-[0.35rem]">
                      <Link
                        className="text-[#cacaca] hover:text-[#fab758] font-space-grotesk"
                        to="#"
                      >
                        Child Custody
                      </Link>
                    </li>
                    <li className="mt-[0.35rem]">
                      <Link
                        className="text-[#cacaca] hover:text-[#fab758] font-space-grotesk"
                        to="#"
                      >
                        Maintenance
                      </Link>
                    </li>
                    <li className="mt-[0.35rem]">
                      <Link
                        className="text-[#cacaca] hover:text-[#fab758] font-space-grotesk"
                        to="#"
                      >
                        FAQ's
                      </Link>
                    </li>
                    <li className="mt-[0.35rem]">
                      <Link
                        className="text-[#cacaca] hover:text-[#fab758] font-space-grotesk"
                        to="#"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
