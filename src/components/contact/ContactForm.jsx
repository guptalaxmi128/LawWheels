import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

import movie2 from "../../assets/images/movie2.jpg";
import videoUrl from "../../assets/media/movie2.mp4";
import {
  addContact,
  resendOtp,
  verifyOtp,
} from "../../actions/contact/contact";
import Loader from "../../shared/Loader";
import OtpInput from "../home/OtpInput";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [leadId, setLeadId] = useState("");
  const [contactStep, setContactStep] = useState("contactStep");

  const formik = useFormik({
    initialValues: {
      name: "",
      // surname: "",
      email: "",
      phonenumber: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please enter your name."),
      // surname: Yup.string().required("Please enter your last name."),
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
          name: values.name,
          // lastName: values.surname,
          email: values.email,
          mobileNumber: values.phonenumber,
          message: values.message,
        };
        const res = await dispatch(addContact(data));
        if (res.success) {
          toast.success(res.message);
          setLeadId(res.data.id);
          setMobileNumber(res.data.mobileNumber);
          setContactStep("getOtp");
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

  const onOtpSubmit = async (otp) => {
    try {
      setLoading(true);
      const res = await dispatch(verifyOtp({ leadId, mobileOTP: otp }));

      if (res.success) {
        toast.success(res.message);
        setContactStep("contactStep");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.error("Error during user verification:", error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const onResendOtp = async () => {
    try {
      setLoading(true);
      const res = await dispatch(resendOtp({ id: leadId }));
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.error("Error during resend Otp:", error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };
  return (
    <div>
      <section className="wrapper relative border-0 upper-end">
        <div className="container pb-0 xl:pb-12 lg:pb-12 relative z-10">
          <div className="flex flex-wrap mx-[-15px] pb-8">
            <div className="card !bg-opacity-10 bg-[#edf2fc] w-full">
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
                <h2 className="text-[calc(1.305rem_+_0.66vw)] text-white  font-bold xl:text-[1.8rem] leading-[1.3] mb-3 !text-center font-space-grotesk">
                   Legal Consultation
                </h2>
                <p className="lead leading-[1.65] text-[0.9rem] text-white font-medium !text-center mb-10 font-space-grotesk">
                  Fill out the form below to schedule a Online / Telephonic, confidential
                  consultation with our expert.
                </p>
                {contactStep === "getOtp" && (
                  <p className="lead leading-[1.65] text-[0.9rem] text-white font-medium !text-center mb-10 font-space-grotesk">
                    We have sent the verification code to your +91 
                    {mobileNumber}
                  </p>
                )}

                {contactStep === "contactStep" && (
                  <div className="flex justify-center items-center">
                    {/* min-h-screen for 100vh height */}
                    <div className="flex flex-wrap sm:mx-[-15px] xsm:mx-[-15px] xl:mx-[-35px] mx-0 w-full lg:w-7/12 xl:w-6/12 max-w-full">
                      <form
                        className="contact-form needs-validation"
                        onSubmit={formik.handleSubmit}
                        noValidate
                      >
                        <div className="messages"></div>
                        <div className="flex flex-wrap mx-[-10px]">
                        <div className=" w-full flex-[0_0_auto] px-[15px] max-w-full">
                          {/* <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full"> */}
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
                                placeholder="Name"
                                {...formik.getFieldProps("name")}
                              />
                              <label
                                for="form_name"
                                className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
                              >
                                Name *
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

                          {/* <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                            <div className="form-floating relative !mb-4">
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
                                className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
                              >
                                Last Name *
                              </label>
                              {formik.touched.surname &&
                              formik.errors.surname ? (
                                <div className="invalid-feedback font-space-grotesk">
                                  {formik.errors.surname}
                                </div>
                              ) : (
                                <div className="valid-feedback font-space-grotesk">
                                  Looks good!
                                </div>
                              )}
                            </div>
                          </div> */}

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
                                Schedule Consultation
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
                )}

                {contactStep === "getOtp" && (
                  <>
                    <div className="flex justify-center items-center">
                      {/* min-h-screen for 100vh height */}
                      <div className="flex flex-wrap sm:mx-[-15px] xsm:mx-[-15px] xl:mx-[-35px] mx-0 w-full lg:w-7/12 xl:w-6/12 max-w-full">
                      <div className="w-full flex-[0_0_auto] px-[15px] max-w-full !text-center">
                      <div className="form-floating relative !mb-4">
                        <OtpInput length={6} onOtpSubmit={onOtpSubmit} />

                        <div className="text-center font-space-grotesk text-white mt-20">
                          Didn't receive any code?
                        </div>
                        <div className="text-center font-space-grotesk text-white">
                          <button
                            onClick={onResendOtp}
                          >
                            Resend OTP
                          </button>
                        </div>
                        </div>
                        
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
