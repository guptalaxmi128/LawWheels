import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { addContact } from "../../actions/contact/contact";
import Loader from "../../shared/Loader";
// import videoUrl from "../../assets/media/movie2.mp4";
import videoUrl from "../../assets/media/movie4.mp4";
import movie2 from "../../assets/images/movie2.jpg";
import logo from "../../assets/images/logo_lw.webp";
import FreeConsultation from "../freeConsultation/FreeConsultation";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const [logoImage, setLogoImage] = useState(
    "https://law-wheel.b-cdn.net/image/logo_law.webp"
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      phonenumber: "",
      message: "",
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
        };
        const res = await dispatch(addContact(data));
        if (res.success) {
          toast.success(res.message);
          resetForm();
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
    const img = new Image();
    img.src = "https://law-wheel.b-cdn.net/image/logo_law.webp";
    img.onload = () =>
      setLogoImage("https://law-wheel.b-cdn.net/image/logo_law.webp");
    img.onerror = () => setLogoImage(logo);
  }, []);


  useEffect(() => {
    setHasErrors(Object.keys(formik.errors).length > 0 && formik.touched);
  }, [formik.errors, formik.touched]);
  return (
    <>
      <div className="relative z-[1]">
        <section className={`video-wrapper relative overflow-hidden bg-overlay bg-overlay-gradient py-10  xl:min-h-[68vh] ${
        hasErrors ? 'custom-height-error' : 'custom-height'} !mt-0 xl:rounded-[1rem] lg:rounded-[1rem] md:rounded-[1rem] xl:mx-6 xl:rounded-[1rem] lg:mx-6 lg:rounded-[1rem] md:mx-6 md:rounded-[1rem] mb-6 z-[1]`}>
          <video
            poster={movie2}
            src={videoUrl}
            autoPlay
            loop
            playsInline
            muted
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          ></video>
          <div className="video-content absolute z-[2] w-full h-full flex items-center justify-center  flex-col left-0 top-0">
            <div className="container py-[4rem] xl:!py-[4rem] lg:!py-[4rem] md:!py-[4rem]">
              <div className="flex flex-wrap mx-[-15px]">
                <div className="lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full  text-white !mx-auto">
                  <div>
                    <div className="flex items-center justify-center mt-8">
                      <img
                        className="logo-dark w-20 h-20 mx-auto my-auto"
                        src={logoImage}
                        style={{ marginBottom: "20px" }}
                        alt="image"
                        onError={() => setLogoImage(logo)}
                      />
                    </div>
                    <h1 className="xl:text-3xl font-semibold !leading-[1.15] text-white mb-5">
                      <span className="rotator-zoom text-center font-space-grotesk">
                        India's Leading Platform for Legal Assistance
                      </span>
                    </h1>
                    <p className="lead text-lg !leading-[1.6] font-medium !mb-0 xxl:!mx-8 text-center font-space-grotesk">
                      The legal service you need to win your rights
                    </p>
                    <p
                      className="lead !text-[0.8rem] !leading-[1.6] font-medium xl:!mb-0 xxl:!mx-8 font-space-grotesk  text-center sm:mb-4 
     lg:!mb-0 "
                    >
                      Expert legal solutions
                    </p>
                    <div className="flex justify-start text-center mt-6 sm:mb-4 lg:mb-4 hidden sm:hidden lg:block xl:block">
                      <button
                        className="btn btn-sm gradient-button !rounded-[50rem] text-xs font-space-grotesk"
                        onClick={() => {
                          setShowModal(true);
                        }}
                      >
                        Free Consultation
                      </button>
                    </div>
                  </div>
                </div>
                <div className="lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] px-[10px] max-w-full !text-center text-white !mx-auto">
                  <div className="card !bg-[#ffffff] mt-4">
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
                         <div class="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto]  px-[15px] max-w-full">
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

                          <div class="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] px-[15px]   max-w-full">
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

      <section className="wrapper !bg-[#ffffff]">
        <div className="container pt-32 xl:pt-40 lg:pt-40 md:pt-40 pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24">
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
        { bg: "#e1f6f0", title: "Property Disputes",shortTitle:"Property<br /> Disputes" },
        {
          bg: "#f0eaf6",
          title: "Cheque Bounce Cases",
          shortTitle: "Cheque<br /> Bounce",
        },
        {
          bg: "#e0e9fa",
          title: "Consumer Protection",
          shortTitle:"Consumer<br/>Protection"
        },
        { bg: "#fef3e4", title: "Cyber crime Law",shortTitle:'Cybercrime<br />Law' },
        { bg: "#feece9", title: "Dispute Resolution",shortTitle:'Dispute<br />Resolution' },
        { bg: "#e1f6f0", title: "Debt Recovery",shortTitle:'Debt<br />Recovery' },
        { bg: "#fef3e4", title: "Bail and Bonds",shortTitle:'Bail and <br />Bonds' },
      ].map((item, index) => (
        <div
          key={index}
          className="sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] flex-[0_0_auto] max-w-full"
        >
          <div
            className={`svg-bg svg-bg-lg !bg-[${item.bg}] !rounded-[0.8rem] mb-4`}
          >
            <div className="svg-inject icon-svg solid text-[#343f52] text-navy">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186.69 256">
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
      <FreeConsultation showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default HomePage;
