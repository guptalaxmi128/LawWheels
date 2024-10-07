import React from "react";
// import blurry from "../../assets/images/bg3.jpg";
import {
  ChevronRightIcon,
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon,
} from "@heroicons/react/outline";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useDispatch } from "react-redux";
// import { toast } from "react-hot-toast";
// import movie2 from "../../assets/images/movie2.jpg";
// import videoUrl from "../../assets/media/movie2.mp4";
// import { addContact } from "../../actions/contact/contact";
// import Loader from "../../shared/Loader";
import ContactForm from "./ContactForm";

const Contact = () => {
  // const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false);
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     surname: "",
  //     email: "",
  //     phonenumber: "",
  //     message: "",
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string().required("Please enter your first name."),
  //     surname: Yup.string().required("Please enter your last name."),
  //     email: Yup.string()
  //   .email("Invalid email address")
  //   .matches(
  //     /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  //     "Please provide a valid email address."
  //   )
  //   .required("Please provide a valid email address."),
  //     phonenumber: Yup.string()
  //       .required("Please enter your phone number.")
  //       .matches(/^\d{10}$/, "Phone number must be exactly 10 digits."),
  //     message: Yup.string()
  //       .required("Please enter your message.")
  //       .min(20, "Your message must be at least 20 characters long."),
  //   }),
  //   onSubmit: async (values, { resetForm }) => {
  //     setLoading(true);
  //     try {
  //       const data = {
  //         firstName: values.name,
  //         lastName: values.surname,
  //         email: values.email,
  //         mobileNumber: values.phonenumber,
  //         message: values.message,
  //       };
  //       const res = await dispatch(addContact(data));
  //       if (res.success) {
  //         toast.success(res.message);
  //         resetForm();
  //       }
  //     } catch (error) {
  //       console.error(error);
  //       toast.error(error?.response?.data?.message || "Something went wrong");
  //     } finally {
  //       setLoading(false);
  //     }
  //   },
  // });
  return (
    <div>
      <Navbar />
      <section
        className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.1)]"
        style={{
          backgroundImage: `url(${"https://law-wheel.b-cdn.net/image/bg3.jpg"})`,
        }}
      >
        <div className="container pt-28 pb-40 xl:pt-36 lg:pt-36 md:pt-36 xl:pb-[12.5rem] lg:pb-[12.5rem] md:pb-[12.5rem] !text-center">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
              <h1 className="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] mb-3 text-white font-space-grotesk">
                Get in Touch
              </h1>
              <nav className="inline-block" aria-label="breadcrumb">
                <ol className="breadcrumb flex flex-wrap bg-none p-0 rounded-none list-none mb-20px">
                  <li className="breadcrumb-item flex items-center text-white">
                    <a
                      className="flex items-center text-white hover:text-white font-space-grotesk"
                      href="/"
                    >
                      Home <ChevronRightIcon className="w-4 h-4 ml-2" />
                    </a>
                  </li>
                  <li className="breadcrumb-item flex items-center text-white pl-2">
                    <a
                      className="flex items-center text-white hover:text-white font-space-grotesk"
                      href="/contact"
                    >
                      Contact
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper !bg-[#ffffff]   relative border-0 upper-end before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:border-y-transparent before:border-0 before:border-solid before:right-0">
        <div className="container pb-12">
          <div className="flex flex-wrap mx-[-15px] !mb-[4.5rem] md:!mb-24">
            <div className="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto mt-[-9rem]">
              <div className="card">
                <div className="flex flex-wrap mx-0">
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full !self-stretch">
                    <div className="map map-full rounded-t-[0.4rem] rounded-lg-start h-full min-h-[15rem]">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25387.23478654725!2d-122.06115399490332!3d37.309248660190086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4571bd377ab%3A0x394d3fe1a3e178b4!2sCupertino%2C%20CA%2C%20USA!5e0!3m2!1sen!2str!4v1645437305701!5m2!1sen!2str"
                        style={{ width: "100%", height: "100%", border: "0" }}
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>

                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full">
                    <div className="p-10 xl:!p-[4.5rem] lg:!p-[4.5rem] md:!p-12">
                      <div className="flex flex-row">
                        <div>
                          <div className="icon text-[#3f78e0] xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mr-4 mt-[-0.25rem]">
                            <LocationMarkerIcon className="w-5 h-5 text-blue-800" />
                          </div>
                        </div>
                        <div className="!self-start !justify-start">
                          <h5 className="!mb-1 font-space-grotesk">Address</h5>
                          <address className=" not-italic leading-[inherit] mb-4 font-space-grotesk">
                            Surya Kiran Building, 6th Floor, Connaught Place,
                            <br className="hidden xl:block lg:block md:block" />
                            New Delhi, Delhi 110001
                          </address>
                        </div>
                      </div>

                      <div className="flex flex-row">
                        <div>
                          <div className="icon text-[#3f78e0] xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mr-4 mt-[-0.25rem]">
                            <PhoneIcon className="w-5 h-5 text-blue-800" />
                          </div>
                        </div>
                        <div>
                          <h5 className="!mb-1 font-space-grotesk">Phone</h5>
                          <p className="font-space-grotesk">
                            00 (123) 456 78 90 <br />
                            00 (987) 654 32 10
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-row">
                        <div>
                          <div className="icon text-[#3f78e0] xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mr-4 mt-[-0.25rem]">
                            <MailIcon className="w-5 h-5 text-blue-800" />
                          </div>
                        </div>
                        <div>
                          <h5 className="!mb-1 font-space-grotesk">E-mail</h5>
                          <p className="!mb-0">
                            <a
                              href="mailto:lawWheels@email.com"
                              className="text-[#60697b] font-space-grotesk"
                            >
                              lawWheels@gmail.com
                            </a>
                          </p>
                          <p className="!mb-0">
                            <a
                              href="mailto:contact@lawWheels.com"
                              className="text-[#60697b] font-space-grotesk"
                            >
                              contact@lawwheels.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <section className="wrapper relative border-0 upper-end">
        <div className="container pb-12 relative z-10">
          <div className="flex flex-wrap mx-[-15px] pb-8">
            <div className="card !bg-opacity-10 bg-[#edf2fc]">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover -z-10 lg:rounded-[10px] xl:rounded-[10px]"
                poster={movie2}
                src={videoUrl}
                autoPlay
                loop
                muted
                // style={{ borderRadius: "10px" }}
              />
              <div className="card-body xl:!p-[2.5rem] lg:!p-[2.5rem] md:!p-[2.5rem] xxl:!py-24 p-[40px] !relative">
                <h2 className="text-[calc(1.305rem_+_0.66vw)] text-white font-bold xl:text-[1.8rem] leading-[1.3] mb-3 !text-center font-space-grotesk">
                Free Legal Consultation 
                </h2>
                <p className="lead leading-[1.65] text-[0.9rem] text-white font-medium !text-center mb-10 font-space-grotesk">
                Fill out the form below to schedule a no-cost, confidential consultation with our expert. 
                </p>

                  <div className="flex justify-center items-center"> 
                  <div className="flex flex-wrap sm:mx-[-15px] xsm:mx-[-15px] xl:mx-[-35px] mx-0 w-full lg:w-7/12 xl:w-6/12 max-w-full">
                    <form
                      className="contact-form needs-validation"
                      onSubmit={formik.handleSubmit}
                      noValidate
                    >
                      <div className="messages"></div>
                      <div className="flex flex-wrap mx-[-10px]">
                        <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                          <div className="form-floating relative !mb-4">
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
                              className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
                            >
                              First Name *
                            </label>
                            {formik.touched.name && formik.errors.name ? (
                              <div className="invalid-feedback font-space-grotesk">
                                {formik.errors.name}
                              </div>
                            ) : (
                              <div className="valid-feedback font-space-grotesk">
                                Looks good!
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                          <div className="form-floating relative !mb-4">
                            <input
                              id="form_surname"
                              type="text"
                              name="surname"
                              placeholder="Last Name"
                              required
                              className={`form-control relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25] ${
                                formik.touched.surname && formik.errors.surname
                                  ? "is-invalid"
                                  : ""
                              }`}
                              {...formik.getFieldProps("surname")}
                            />
                            <label
                              for="form_surname"
                              className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
                            >
                              Last Name *
                            </label>
                            {formik.touched.surname && formik.errors.surname ? (
                              <div className="invalid-feedback font-space-grotesk">
                                {formik.errors.surname}
                              </div>
                            ) : (
                              <div className="valid-feedback font-space-grotesk">
                                Looks good!
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                          <div className="form-floating relative !mb-4">
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
                              className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
                            >
                              Email *
                            </label>
                            {formik.touched.email && formik.errors.email ? (
                              <div className="invalid-feedback font-space-grotesk">
                                {formik.errors.email}
                              </div>
                            ) : (
                              <div className="valid-feedback font-space-grotesk">
                                Looks good!
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                          <div className="form-floating relative !mb-4">
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
                              className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
                            >
                              Phone Number *
                            </label>
                            {formik.touched.phonenumber &&
                            formik.errors.phonenumber ? (
                              <div className="invalid-feedback font-space-grotesk">
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
                          <div className="form-floating relative !mb-4">
                            <textarea
                              id="form_message"
                              name="message"
                              style={{ height: "150px" }}
                              required
                              className={`form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25] font-space-grotesk ${
                                formik.touched.message && formik.errors.message
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
                            {formik.touched.message && formik.errors.message ? (
                              <div className="invalid-feedback font-space-grotesk">
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
                              Schedule My Free Consultation
                            </span>
                          </button>
                          <p className="text-[#aab0bc] font-space-grotesk">
                            <strong>*</strong> These fields are required.
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section> */}
        <ContactForm />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
