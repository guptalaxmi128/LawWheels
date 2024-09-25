import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { CheckCircle } from "lucide-react";
import { addContact } from "../../actions/contact/contact";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import FAQ from "../faq/FAQ";
import mutualDivorce from "../../assets/images/mutual_divorce.webp";
import Loader from "../../shared/Loader";
import logo from "../../assets/images/logo_lw.webp";
import childCustody from "../../assets/images/child_custody.webp";
import Service from "../service/Service";
import videoUrl from "../../assets/media/movie4.mp4";
import movie2 from "../../assets/images/movie2.jpg";

const MutualDivorce = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const [submitModal, setSubmitModal] = useState(false);
  const [childImage, setChildImage] = useState(
    "https://law-wheel.b-cdn.net/image/child_custody.png"
  );
  const [mutualImage, setMutualImage] = useState(
    "https://law-wheel.b-cdn.net/image/mutual_divorce.webp"
  );
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      phonenumber: "",
      message: "",
      data_from_page:''
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please enter your first name."),
      surname: Yup.string().required("Please enter your last name."),
      email: Yup.string()
        .email("Invalid email address")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Please provide a valid email address."
        )
        .required("Please provide a valid email address."),
      phonenumber: Yup.string()
        .required("Please enter your phone number.")
        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits."),
      message: Yup.string()
        .required("Please enter your message.")
        .min(20, "Your message must be at least 20 characters long."),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const data = {
          firstName: values.name,
          lastName: values.surname,
          email: values.email,
          mobileNumber: values.phonenumber,
          message: values.message,
          data_from_page:"Mutual Divorce"
        };
        const res = await dispatch(addContact(data));
        if (res.success) {
          toast.success(res.message);
          resetForm();
          setSubmitModal(true);
        }
      } catch (error) {
        console.error(error);
        toast.error(error?.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    setHasErrors(Object.keys(formik.errors).length > 0 && formik.touched);
  }, [formik.errors, formik.touched]);
  
  const closeHandler = () => {
    setSubmitModal(false);
  };

  const [logoImage, setLogoImage] = useState(
    "https://law-wheel.b-cdn.net/image/logo_lw.webp"
  );

  useEffect(() => {
    const img = new Image();
    img.src = "https://law-wheel.b-cdn.net/image/logo_lw.webp";
    img.onload = () =>
      setLogoImage("https://law-wheel.b-cdn.net/image/logo_lw.webp");
    img.onerror = () => setLogoImage(logo);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = "https://law-wheel.b-cdn.net/image/mutual_divorce.webp";
    img.onload = () =>
      setMutualImage("https://law-wheel.b-cdn.net/image/mutual_divorce.webp");
    img.onerror = () => setMutualImage(mutualDivorce);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = "https://law-wheel.b-cdn.net/image/child_custody.png";
    img.onload = () =>
      setChildImage("https://law-wheel.b-cdn.net/image/child_custody.png");
    img.onerror = () => setChildImage(childCustody);
  }, []);
 
  return (
    <>
      <Navbar />
      <div className="relative z-[1]">
        {/* <section className="video-wrapper gradient-bg relative overflow-hidden py-10  xl:min-h-[68vh] custom-height  !mt-0 xl:rounded-[1rem] lg:rounded-[1rem] md:rounded-[1rem] xl:mx-6 xl:rounded-[1rem] lg:mx-6 lg:rounded-[1rem] md:mx-6 md:rounded-[1rem] mb-6 z-[1]"> */}
        <section className={`video-wrapper relative overflow-hidden bg-overlay bg-overlay-gradient py-10  xl:min-h-[68vh] ${hasErrors ? 'custom-height-error' : 'custom-height'}  !mt-0 xl:rounded-[1rem] lg:rounded-[1rem] md:rounded-[1rem] xl:mx-6 xl:rounded-[1rem] lg:mx-6 lg:rounded-[1rem] md:mx-6 md:rounded-[1rem] mb-24 z-[1]`}>
          <video
            poster={movie2}
            src={videoUrl}
            autoPlay
            loop
            playsInline
            muted
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          ></video>
          <div className="video-content absolute z-[2] w-full h-full flex items-center justify-center flex-col left-0 top-0">
            <div className="container py-[4rem] xl:!py-[4rem] lg:!py-[4rem] md:!py-[4rem]">
              <div className="flex flex-wrap mx-[-15px]">
                <div className="lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                  <div className="py-[2rem] xl:!py-[6rem] lg:!py-[4rem] md:!py-[2rem]">
                    <h1 className="xl:text-[2rem] text-[calc(1.395rem_+_1.74vw)] font-semibold  !mb-0 !leading-[1.15]">
                      <span className="rotator-zoom text-center font-space-grotesk text-white">
                        Mutual Divorce
                      </span>
                    </h1>
                    <p className="lead !text-[0.9rem] !leading-[1.6] font-medium xxl:!mx-8 text-center text-white font-space-grotesk mb-4">
                      Compassionate Guidance and Legal Expertise You Can Trust
                    </p>
                    <p
                      className="lead !text-[1rem] !leading-[1.6] font-medium xl:!mb-0 xxl:!mx-8 text-center text-white font-space-grotesk sm:mb-4 
     lg:!mb-0 "
                    >
                      Our legal expert will contact you shortly
                    </p>
                  </div>
                </div>

                <div className="lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] px-[10px] max-w-full !text-center text-white !mx-auto">
                  <div className="card !bg-[#ffffff] mt-2 mb-1">
                    <div className="card-body xl:!p-[0.5rem] lg:!p-[0.5rem] md:!p-[0.5rem] xxl:!py-4 p-[4px] !relative">
                      <h2 className="text-sm font-bold xl:text-[1rem] leading-[1.3]  mt-2 mb-4 !text-center font-space-grotesk">
                        Connect for a Free Consultation
                      </h2>

                      <form
                        className="contact-form needs-validation"
                        onSubmit={formik.handleSubmit}
                        noValidate
                      >
                        <div className="messages"></div>
                        <div className="flex flex-wrap mx-[-10px]">
                          <div class="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                            <div className="form-floating relative !mb-2">
                              <input
                                id="form_name"
                                type="text"
                                name="name"
                                className={`form-control ${
                                  formik.touched.name && formik.errors.name
                                    ? "is-invalid"
                                    : ""
                                }  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]`}
                                placeholder="First Name"
                                {...formik.getFieldProps("name")}
                              />
                              <label
                                for="form_name"
                                className="text-[#959ca9] mb-1 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
                              >
                                First Name *
                              </label>
                              {formik.touched.name && formik.errors.name ? (
                                <div className="invalid-feedback font-space-grotesk text-left">
                                  {formik.errors.name}
                                </div>
                              ) : (
                                <div className="valid-feedback font-space-grotesk">
                                  Looks good!
                                </div>
                              )}
                            </div>
                          </div>

                          <div class="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                            <div className="form-floating relative !mb-2">
                              <input
                                id="form_surname"
                                type="text"
                                name="surname"
                                placeholder="Last Name"
                                required
                                className={`form-control relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25] ${
                                  formik.touched.surname &&
                                  formik.errors.surname
                                    ? "is-invalid"
                                    : ""
                                }`}
                                {...formik.getFieldProps("surname")}
                              />
                              <label
                                for="form_surname"
                                className="text-[#959ca9] mb-1 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
                              >
                                Last Name *
                              </label>
                              {formik.touched.surname &&
                              formik.errors.surname ? (
                                <div className="invalid-feedback font-space-grotesk text-left">
                                  {formik.errors.surname}
                                </div>
                              ) : (
                                <div className="valid-feedback font-space-grotesk">
                                  Looks good!
                                </div>
                              )}
                            </div>
                          </div>

                          <div className=" w-full flex-[0_0_auto] px-[15px] max-w-full">
                            <div className="form-floating relative !mb-2">
                              <input
                                id="form_email"
                                type="email"
                                name="email"
                                className={`form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25] ${
                                  formik.touched.email && formik.errors.email
                                    ? "is-invalid"
                                    : ""
                                }`}
                                {...formik.getFieldProps("email")}
                                placeholder="Email"
                                required
                              />
                              <label
                                for="form_email"
                                className="text-[#959ca9] mb-1 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
                              >
                                Email *
                              </label>
                              {formik.touched.email && formik.errors.email ? (
                                <div className="invalid-feedback font-space-grotesk text-left">
                                  {formik.errors.email}
                                </div>
                              ) : (
                                <div className="valid-feedback font-space-grotesk">
                                  Looks good!
                                </div>
                              )}
                            </div>
                          </div>

                          <div className=" w-full flex-[0_0_auto] px-[15px] max-w-full">
                            <div className="form-floating relative !mb-2">
                              <input
                                id="form_phonenumber"
                                type="text"
                                name="phonenumber"
                                className={`form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25] ${
                                  formik.touched.phonenumber &&
                                  formik.errors.phonenumber
                                    ? "is-invalid"
                                    : ""
                                }`}
                                {...formik.getFieldProps("phonenumber")}
                                placeholder="Phone Number"
                                required
                              />
                              <label
                                for="form_phoneNumner"
                                className="text-[#959ca9] mb-1 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
                              >
                                Phone Number *
                              </label>
                              {formik.touched.phonenumber &&
                              formik.errors.phonenumber ? (
                                <div className="invalid-feedback font-space-grotesk text-left">
                                  {formik.errors.phonenumber}
                                </div>
                              ) : (
                                <div className="valid-feedback font-space-grotesk">
                                  Looks good!
                                </div>
                              )}
                            </div>
                          </div>

                          <div className=" w-full flex-[0_0_auto] px-[15px] max-w-full">
                            <div className="form-floating relative !mb-2">
                              <textarea
                                id="form_message"
                                name="message"
                                // style={{ height: "150px" }}
                                required
                                className={`form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25] font-space-grotesk ${
                                  formik.touched.message &&
                                  formik.errors.message
                                    ? "is-invalid"
                                    : ""
                                }`}
                                placeholder="Your message"
                                {...formik.getFieldProps("message")}
                              ></textarea>
                              <label
                                for="form_message"
                                className="text-[#959ca9] font-space-grotesk mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 "
                              >
                                Message *
                              </label>
                              {formik.touched.message &&
                              formik.errors.message ? (
                                <div className="invalid-feedback font-space-grotesk text-left">
                                  {formik.errors.message}
                                </div>
                              ) : (
                                <div className="valid-feedback font-space-grotesk">
                                  Looks good!
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="w-full flex-[0_0_auto] px-[15px] max-w-full !text-center">
                            <button
                              type="submit"
                              className={`flex items-center justify-center btn font-space-grotesk btn-primary text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-send !mb-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] gradient-button ${
                                loading ? "cursor-not-allowed" : ""
                              }`}
                              disabled={loading}
                            >
                              {loading && <Loader />}
                              <span className={`${loading ? "ml-2" : ""}`}>
                                Schedule Now
                              </span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {submitModal && (
        <div className="modal-container">
          <div className="modal-content">
            <div className="p-5 text-center">
              <CheckCircle
                size={18}
                color="green"
                className="stroke-1.5 mx-auto mt-3 h-16 w-16"
              />
              <div className=" text-2xl font-space-grotesk">Thank you</div>
            </div>
            <div className="px-5 pb-8 text-center">
              <button
                data-tw-merge=""
                type="button"
                className="transition font-space-grotesk gradient-button duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary w-24"
                onClick={closeHandler}
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="wrapper gradient-bg bg-repeat bg-fixed bg-image section-frame xl:mx-[1.5rem] xl:min-h-[68vh] choose-height  xl:rounded-[1rem] lg:mx-[1.5rem] lg:rounded-[1rem] md:mx-[1.5rem] md:rounded-[1rem] ">
        {/* <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-8 xl:pb-8 lg:pb-8 md:pb-8"> */}
        <div className="container">
          <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 mt-[-50px] items-center lg:mb-[8rem] xl:mb-[8rem] sm:mb-0">
            <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full text-[#cacaca] xl:px-0 lg:px-0 mt-[50px]">
              <div className="mb-5 flex custom-logo">
                <img
                  className="logo-dark w-40 h-40"
                  src={logoImage}
                  alt="image"
                  onError={() => setLogoImage(logo)}
                />
              </div>
              <h2 className="text-[calc(1.2rem_+_1.14vw)] font-bold leading-[1.2] xl:text-[1.8rem] mb-3 text-white font-space-grotesk">
                Why Choose Law Wheels?
              </h2>
              <p className="lead !text-[1.05rem] !leading-[1.55] !font-normal xl:pr-5 lg:pr-5 font-space-grotesk text-justify">
                Choose Law Wheels for expert legal solutions, personalized
                support, and a proven track record of delivering timely,
                effective outcomes across diverse legal challenges.
              </p>
            </div>
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!order-2 xl:!ml-auto lg:!order-2 lg:!ml-auto xl:px-0 lg:px-0 mt-[50px]">
              <div className="card !rounded-[0.8rem] xl:!mr-6 lg:!mr-6 !bg-[#e6e5f4]">
                <div className="card-body p-3 choose-padding">
                  <div className="flex flex-row">
                    <div>
                      <span className="icon btn btn-block btn-lg !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem] btn-white pointer-events-none !mr-4">
                        <span className="number text-[#605dba] font-space-grotesk">
                          01
                        </span>
                      </span>
                    </div>
                    <div>
                      <h3 className="!mb-1 text-[#605dba] font-space-grotesk">
                        Compassionate Legal Guidance
                      </h3>
                      <p className="!mb-0 font-space-grotesk text-xs">
                        We provide empathetic support throughout your divorce,
                        ensuring care and understanding.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card !rounded-[0.8rem] xl:!ml-16 lg:!ml-16 mt-6 !bg-[#fbe7f3]">
                <div className="card-body p-3 choose-padding">
                  <div className="flex flex-row">
                    <div>
                      <span className="icon btn btn-block btn-lg !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem] btn-white pointer-events-none !mr-4">
                        <span className="number text-[#e668b3] font-space-grotesk">
                          02
                        </span>
                      </span>
                    </div>
                    <div>
                      <h3 className="!mb-1 text-[#e668b3] font-space-grotesk">
                        Expertise in Family Law
                      </h3>
                      <p className="!mb-0 font-space-grotesk text-xs">
                        {/* Our skilled legal team handles mutual divorces
                        precisely, ensuring smooth and accurate procedures. */}
                        Our skilled legal team handles mutual divorces precisely
                        and accurate procedures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card !rounded-[0.8rem] xl:!ml-14 lg:!ml-14 mt-6 !bg-[#e1f6f0]">
                <div className="card-body p-3 choose-padding">
                  <div className="flex flex-row">
                    <div>
                      <span className="icon btn btn-block btn-lg !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem] btn-white pointer-events-none !mr-4">
                        <span className="number text-[#45c4a0] font-space-grotesk">
                          03
                        </span>
                      </span>
                    </div>
                    <div>
                      <h3 className="!mb-1 text-[#45c4a0] font-space-grotesk">
                        Efficient and Confidential
                      </h3>
                      <p className="!mb-0 font-space-grotesk text-xs">
                        {/* We safeguard your privacy and manage your case
                        effectively, minimizing court appearances and stress. */}
                        We safeguard your privacy and minimizing court
                        appearances and stress.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card !rounded-[0.8rem] xl:!mr-6 lg:!mr-6 mb-8  mt-6 !bg-[#e6e5f4]">
                <div className="card-body p-3 choose-padding">
                  <div className="flex flex-row">
                    <div>
                      <span className="icon btn btn-block btn-lg !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem] btn-white pointer-events-none !mr-4">
                        <span className="number text-[#605dba] font-space-grotesk">
                          04
                        </span>
                      </span>
                    </div>
                    <div>
                      <h3 className="!mb-1 text-[#605dba] font-space-grotesk">
                        Custom Legal Solutions
                      </h3>
                      <p className="!mb-0 font-space-grotesk text-xs">
                        We create customized agreements that fit your unique
                        needs, ensuring fair outcomes for both parties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper">
        <div className="container pt-4 xl:!pt-[2rem] lg:!pt-[2rem] md:!pt-[2rem] sm:!pt-[2rem] lg:mb-5 relative">
        <h1 className="text-xl font-bold font-space-grotesk">
        Not every divorce needs to be bitter - Choose Mutual Respect.
                  </h1>
          <div className="card !bg-[#eaebea] mb-10 mt-10">
            <div className="card-body xl:!p-[2.4rem] lg:!p-[2.5rem] md:!p-[2.5rem] xxl:!py-24 p-[20px] !relative">
              <div className="absolute hidden lg:block xl:block mutual-container">
                <figure className="m-0 p-0">
                  <img
                    className="w-full max-w-full !h-auto"
                    src={mutualImage}
                    onError={() => setMutualImage(mutualDivorce)}
                    alt="image"
                  />
                </figure>
              </div>

              <div className="flex flex-wrap mx-[-10px]">
                <div className="lg:w-8/12 xl:w-8/12 w-full flex-[0_0_auto] px-[15px] xl:px-[15px]">
                  <p className="text-base font-bold font-space-grotesk">
                    What is Mutual Divorce?
                  </p>
                  <div>
                    <div className="info p-0">
                      <p className="!mb-1 text-[.8rem] !leading-[1.5] font-space-grotesk">
                        Mutual divorce is a legal process where both spouses
                        agree to dissolve their marriage amicably. It is one of
                        the most straightforward and conflict-free ways to end a
                        marriage, as both parties cooperate on the terms of
                        separation, including child custody, alimony, and
                        property division. With mutual consent, the divorce
                        process becomes quicker, more cost-effective, and less
                        emotionally taxing.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Service />
          {/* <div className="flex flex-col items-center">
            <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] xl:!px-12 font-space-grotesk text-center">
              Mutual Divorce
            </h3>
            <div className="w-full max-w-4xl mx-auto text-center">
              <TabMenu tabs={tabs} />
            </div>
          </div> */}
        </div>
      </section>
      <section className="wrapper">
        <div className="container pt-5 xl:!pt-[2rem] lg:!pt-[2rem] md:!pt-[2rem] sm:!pt-[2rem]  relative">
          <div className="flex flex-col items-center mb-16">
            <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] xl:!px-12 font-space-grotesk text-center">
              Child Custody
            </h3>
            <h3 className="xl:text-base font-bold !leading-[1.25] tracking-[-0.03em] xl:!px-12 font-space-grotesk text-center">
              Prioritizing Your Child’s Well-Being
            </h3>
          </div>
          <div className="card !bg-[#eaebea] mb-10">
            <div className="card-body xl:!p-[2.4rem] lg:!p-[2.5rem] md:!p-[2.5rem] xxl:!py-24 p-[20px] !relative">
              <div className="absolute hidden lg:block xl:block child-container">
                <figure className="m-0 p-0">
                  <img
                    className="w-full max-w-full !h-auto"
                    src={childImage}
                    onError={() => setChildImage(childCustody)}
                    alt="image"
                  />
                </figure>
              </div>

              <div className="flex flex-wrap mx-[-10px]">
                <div className="lg:w-8/12 xl:w-8/12 w-full flex-[0_0_auto] px-[15px] xl:px-[15px]">
                  <p className="text-sm font-bold font-space-grotesk">
                    Compassionate and expert legal guidance to navigate child
                    custody matters, ensuring the best interests of your child
                    come first.
                  </p>
                  <div>
                    <div className="info p-0">
                      <p className="!mb-1 text-[.8rem] !leading-[1.5] font-space-grotesk">
                        Child custody can be one of the most challenging aspects
                        of a divorce. At Law Wheels, we understand the emotional
                        complexities involved and prioritize the well-being of
                        your children above all else. Our experienced legal team
                        is dedicated to helping parents reach amicable
                        agreements that foster a supportive and stable
                        environment for their children.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper !bg-[#ffffff]">
        <div className="container py-[2.5rem] xl:!py-[2rem] lg:!py-[2rem] md:!py-[2rem]">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-40px] mb-[4.5rem] xl:mb-[7rem] lg:mb-[7rem] md:mb-[7rem]">
            <div className="md:w-6/12 lg:w-4/12 xl:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[40px]">
              <div className="flex flex-row">
                <div>
                  <div className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#54a8c7] text-aqua !mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <circle
                        className="lineal-fill"
                        cx="283.8"
                        cy="283.8"
                        r="143"
                      />
                      <path
                        className="lineal-stroke"
                        d="M283.8 441.8c-87.1 0-158-70.9-158-158s70.9-158 158-158 158 70.9 158 158-70.9 158-158 158zm0-286.1c-70.7 0-128.1 57.3-128.1 128.1S213 411.9 283.8 411.9s128.1-57.3 128.1-128.1c-.1-70.7-57.4-128-128.1-128.1z"
                      />
                      <path
                        className="lineal-fill"
                        d="M283.8 210.5c40.5 0 73.3 32.8 73.3 73.3s-32.8 73.3-73.3 73.3-73.3-32.8-73.3-73.3"
                      />
                      <path
                        className="lineal-stroke"
                        d="M283.8 372.1c-48.7-.1-88.2-39.5-88.2-88.3.2-8.2 7.1-14.8 15.3-14.5 7.9.2 14.3 6.6 14.5 14.5 0 32.2 26.1 58.4 58.4 58.4s58.4-26.1 58.4-58.4-26.1-58.4-58.4-58.4c-8.2-.2-14.8-7.1-14.5-15.3.2-7.9 6.6-14.3 14.5-14.5 48.7-.5 88.7 38.6 89.2 87.3s-38.6 88.7-87.3 89.2h-1.9z"
                      />
                      <path
                        className="lineal-fill"
                        d="M107.9 55.1l-5.3 47.5-47.5 5.3-40.2-40.1 52.9-52.9z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M283.8 55.7c-55.3 0-108.8 20.1-150.4 56.7l-15.2-15.2 4.5-40.4c.5-4.5-1.1-9-4.3-12.2L78.3 4.4c-5.8-5.8-15.3-5.8-21.1 0L4.4 57.2c-5.8 5.8-5.8 15.3 0 21.1l40.1 40.1c2.8 2.8 6.6 4.4 10.6 4.4.5 0 1.1 0 1.6-.1l40.4-4.5 15.2 15.2c-36.6 41.5-56.7 95-56.7 150.4C55.7 409.6 158 512 283.8 512c66.2 0 129.1-28.7 172.4-78.7 5.6-6.1 5.1-15.6-1-21.1s-15.6-5.1-21.1 1l-.5.5c-37.7 43.4-92.3 68.4-149.8 68.4-109.3 0-198.3-89-198.3-198.3 0-47.4 17-93.3 48-129.2l140.2 140.2c5.8 5.8 15.3 5.8 21.1 0s5.8-15.3 0-21.1L154.6 133.5c35.9-31 81.8-48 129.2-48 109.4 0 198.3 89 198.3 198.3 0 8.3 6.7 14.9 14.9 14.9s14.9-6.7 14.9-14.9C512 158 409.6 55.7 283.8 55.7zM36.1 67.8l31.7-31.7 24.5 24.5-3.2 28.5-28.5 3.2-24.5-24.5z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="!mb-1 !text-[1rem] !leading-[1.45] font-space-grotesk">
                    Understanding Your Needs
                  </h4>
                  <p className="!mb-0 font-space-grotesk">
                    We listen carefully to understand your family's unique
                    dynamics and work to develop a custody plan that reflects
                    your child's best interests and maintains their routines and
                    stability.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-6/12 lg:w-4/12 xl:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[40px]">
              <div className="flex flex-row">
                <div>
                  <div className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#e2626b] text-red !mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 316.5 409.6"
                    >
                      <path
                        className="lineal-stroke"
                        d="M158.2 409.6c-59.4 0-107.5-48.2-107.5-107.5S99 194.6 158.3 194.6s107.5 48.2 107.5 107.5c0 20-5.6 39.6-16.1 56.6-3.4 5.5-10.6 7.1-16 3.7s-7.1-10.6-3.7-16c24.4-39.5 12.2-91.3-27.3-115.8S111.3 218.5 86.8 258s-12.2 91.3 27.3 115.8c22.5 13.9 50.2 16.4 74.8 6.8 6-2.3 12.7.6 15.1 6.6 2.3 6-.6 12.7-6.6 15.1-12.5 4.8-25.8 7.3-39.2 7.3z"
                      />
                      <path
                        className="lineal-fill"
                        d="M158.2 206.2c19.9 0 39.4 6.2 55.6 17.8l88.1-152.5c4.6-8 3.7-18-2.2-25l-23-27.1c-4.1-4.9-10.2-7.7-16.6-7.7H56.4c-6.4 0-12.5 2.8-16.6 7.7l-23 27.2c-6 7-6.9 17-2.2 25l88 152.4c16.2-11.6 35.7-17.8 55.6-17.8zm73.4-134l-73.3 127-73.4-127h146.7z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M213.8 235.6c-2.4 0-4.8-.8-6.8-2.2-29.2-20.8-68.5-20.8-97.7 0-5.2 3.7-12.5 2.5-16.2-2.7l-.6-.9-88-152.5c-7-12.2-5.7-27.5 3.4-38.3l23-27.2C37.2 4.3 46.6 0 56.4 0h203.7c9.8 0 19.2 4.3 25.5 11.8l23 27.1c9.1 10.8 10.5 26.1 3.4 38.3l-88.1 152.5c-1.6 2.8-4.4 4.9-7.6 5.6-.8.2-1.6.3-2.5.3zM56.4 23.3c-3 0-5.8 1.3-7.8 3.6L25.7 54c-2.8 3.3-3.2 7.9-1 11.7l82.1 142c11.2-6.1 23.4-10.2 36-12.1L74.8 78c-3.2-5.6-1.3-12.7 4.3-15.9 1.8-1 3.8-1.6 5.8-1.6h146.7c6.4 0 11.6 5.2 11.6 11.7 0 2-.5 4-1.6 5.8l-67.9 117.7c12.6 1.8 24.8 5.9 36 12.1l82-142c2.1-3.7 1.7-8.4-1-11.6l-23-27.2c-1.9-2.3-4.8-3.6-7.7-3.6l-203.6-.1zm48.7 60.5l53.2 92.1 53.2-92.1H105.1zm45.1 192.9l-4.4 2.7c-1.1.8-2.4 1.2-3.8 1.2-4.4 0-7.4-4.7-7.4-9.4-.1-3.3 1.6-6.3 4.4-8l20-12.1c1.3-.8 2.9-1.1 4.4-1.1 4.8 0 10.4 2.9 10.4 7.4v96.2c0 4.9-5.9 7.3-11.8 7.3s-11.8-2.4-11.8-7.3v-76.9z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="!mb-1 !text-[1rem] !leading-[1.45] font-space-grotesk">
                    Customized Custody Agreements
                  </h4>
                  <p className="!mb-0 font-space-grotesk">
                    {" "}
                    Whether you’re seeking joint custody or sole custody, we
                    craft agreements that align with your child’s needs,
                    ensuring that both parents remain active participants in
                    their child’s life.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-6/12 lg:w-4/12 xl:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[40px]">
              <div className="flex flex-row">
                <div>
                  <div className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#d16b86] text-pink !mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 409.6 409.6"
                    >
                      <path
                        className="lineal-stroke"
                        d="M204.8 409.6C91.9 409.6 0 317.7 0 204.8c0-49.9 18.2-98.1 51.2-135.5 4.4-5 12-5.5 17-1.1s5.5 12 1.1 17c-29.1 33-45.2 75.5-45.2 119.5 0 99.6 81.1 180.7 180.7 180.7s180.7-81.1 180.7-180.7S304.4 24.1 204.8 24.1c-27.3-.1-54.2 6.1-78.7 18-6 2.9-13.2.4-16.1-5.6-2.9-6-.4-13.2 5.6-16.1C143.4 6.9 173.9-.1 204.8 0c112.9 0 204.8 91.9 204.8 204.8s-91.9 204.8-204.8 204.8z"
                      />
                      <path
                        className="lineal-fill"
                        d="M349.4 204.8c0 79.8-64.7 144.6-144.6 144.6S60.2 284.6 60.2 204.8 125 60.2 204.8 60.2 349.4 125 349.4 204.8z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M204.8 361.4c-86.4 0-156.6-70.2-156.6-156.6S118.4 48.2 204.8 48.2s156.6 70.2 156.6 156.6-70.2 156.6-156.6 156.6zm0-289.1c-73.1 0-132.5 59.4-132.5 132.5s59.4 132.5 132.5 132.5 132.5-59.5 132.5-132.5S277.9 72.3 204.8 72.3z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M200.9 246.7c-8.8 0-17.2-3.5-23.5-9.7L145 204.5c-4.7-4.7-4.7-12.3 0-17s12.3-4.7 17 0l32.5 32.5c3.6 3.5 9.3 3.5 12.8 0l49.8-49.9c4.7-4.7 12.3-4.7 17 0s4.7 12.3 0 17L224.4 237c-6.2 6.2-14.7 9.7-23.5 9.7z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="!mb-1 !text-[1rem] !leading-[1.45] font-space-grotesk">
                    Mediation and Negotiation
                  </h4>
                  <p className="!mb-0 font-space-grotesk">
                    {" "}
                    We aim to reduce conflict through mediation and negotiation,
                    helping you reach a custody arrangement that is fair,
                    balanced, and amicable, minimizing the emotional toll on
                    your family.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-6/12 lg:w-4/12 xl:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[40px]">
              <div className="flex flex-row">
                <div>
                  <div className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#747ed1] text-purple !mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 409.6 356.2"
                    >
                      <path
                        className="lineal-fill"
                        d="M265.2 180.7H144.4v-17.6c0-33.3 27-60.4 60.4-60.4s60.4 27 60.4 60.4v17.6z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M265.2 191.7H144.4c-6.1 0-11.1-5-11.1-11.1V163c-.5-39.5 31.1-71.8 70.6-72.3s71.8 31.1 72.3 70.6v19.3c0 6.2-4.9 11.1-11 11.1zm-109.7-22.1h98.6v-6.5c.4-27.2-21.4-49.6-48.6-50s-49.6 21.4-50 48.6v7.9z"
                      />
                      <path
                        className="lineal-fill"
                        d="M250.4 56.7c0 25.2-20.4 45.6-45.6 45.6s-45.6-20.4-45.6-45.6 20.4-45.6 45.6-45.6c25.2 0 45.6 20.4 45.6 45.6z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M204.8 113.3c-31.3 0-56.7-25.4-56.7-56.7S173.5-.1 204.8-.1s56.7 25.4 56.7 56.7c-.1 31.3-25.4 56.7-56.7 56.7zm0-91.2c-19.1 0-34.5 15.4-34.5 34.5s15.4 34.5 34.5 34.5 34.5-15.4 34.5-34.5c0-19-15.5-34.4-34.5-34.5zm193.7 334.1H296.8c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.7c-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.4-6 2.3-11.9 8.3-13.3 5.8-1.4 11.7 2.2 13.2 8 1.2 4.9 1.8 9.9 1.8 14.9v14.8c0 6.1-4.9 11.1-11.1 11.1z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M347.6 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.2 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.3-27.3 27.4 0 15.1 12.3 27.3 27.4 27.3S375 256 375 241c0-15.1-12.3-27.3-27.4-27.4zM112.8 356.2H11.1c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1.2 10.9 5.3 10.7 11.4-.2 5.9-4.9 10.6-10.7 10.7-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.5-5.9 2.2-11.9 8.1-13.4s11.9 2.2 13.4 8.1c1.2 4.9 1.8 9.9 1.8 14.9v14.8c.1 6.1-4.9 11.1-11.1 11.1.1 0 .1 0 0 0z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M61.9 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.1 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.2-27.3 27.4 0 15.1 12.2 27.4 27.4 27.4 15.1 0 27.3-12.2 27.3-27.3 0-15.2-12.3-27.4-27.4-27.5zm142.9 72.1c-6.1 0-11.1-5-11.1-11.1v-56.4c-.2-6.1 4.6-11.2 10.7-11.4 6.1-.2 11.2 4.6 11.4 10.7v57.1c.1 6.2-4.9 11.1-11 11.1z"
                      />
                      <path
                        className="lineal-stroke"
                        d="M279.5 285.7H130.1c-6.1.2-11.2-4.6-11.4-10.7s4.6-11.2 10.7-11.4h150.2c6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.8z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="!mb-1 !text-[1rem] !leading-[1.45] font-space-grotesk">
                    Legal Advocacy in Court
                  </h4>
                  <p className="!mb-0 font-space-grotesk">
                    {" "}
                    If an amicable agreement cannot be reached, our team is
                    prepared to advocate fiercely for your parental rights in
                    court, presenting a compelling case to ensure a favorable
                    outcome for you and your child.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    

      <div className="pt-3 lg:pt-10 xl:pt-10 xxl:pt-20">
        <FAQ />
      </div>
      <Footer />
    </>
  );
};

export default MutualDivorce;
