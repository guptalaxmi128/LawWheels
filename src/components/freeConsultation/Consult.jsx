import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { addReachOut } from "../../actions/reachOut/reachOut";
import Loader from "../../shared/Loader";

const Consult = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please enter your first name."),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please provide a valid email address."),
      message: Yup.string()
        .required("Please enter your message.")
        .min(20, "Your message must be at least 20 characters long."),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const res = await dispatch(addReachOut(values));
        if (res.success) {
          toast.success(res.message, {
            style: {
              fontSize: "12px",
            },
          });
          resetForm();
        }
      } catch (error) {
        console.error(error);
        toast.error(error?.response?.data?.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <section
      className="wrapper bg-repeat bg-fixed bg-image section-frame xl:mx-[1.5rem] xl:rounded-[1rem] lg:mx-[1.5rem] lg:rounded-[1rem] md:mx-[1.5rem] md:rounded-[1rem] mb-8"
      style={{
        backgroundImage: `url(${"https://law-wheel.b-cdn.net/image/bg3.jpg"})`,
      }}
    >
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] mt-[-50px]">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[50px]">
            <h2 className="text-[calc(1.325rem_+_0.9vw)] font-bold leading-[1.2] xl:text-[2rem] text-white mb-3 xl:pr-[4.5rem] xxl:!pr-24 font-space-grotesk">
              Need Assistance? We're Here to Help!
            </h2>
            <p className="lead !text-[1.05rem] !leading-[1.55] font-normal xxl:pr-14 !mb-0 font-space-grotesk text-white">
              Have questions or need support? Fill out the form below, and our
              team will get in touch with you shortly.
            </p>
          </div>

          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[50px]">
            <form
              className="contact-form needs-validation"
              onSubmit={formik.handleSubmit}
              novalidate
            >
              <div className="messages"></div>
              <div className="flex flex-wrap mx-[-10px]">
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[10px] max-w-full">
                  <div className="form-floating relative !mb-4">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      className={`form-control ${
                        formik.touched.name && formik.errors.name
                          ? "is-invalid"
                          : ""
                      }  bg-[#ffffff]  border-0 relative block w-full text-[.75rem] font-medium text-[#60697b] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.7)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-0 focus-visible:!border-0 focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]`}
                      placeholder="Name"
                      {...formik.getFieldProps("name")}
                    />
                    <label
                      className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                      for="form_name"
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

                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[10px] max-w-full">
                  <div className="form-floating relative !mb-4">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      className={`form-control bg-[#ffffff]  border-0 relative block w-full text-[.75rem] font-medium text-[#60697b] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.7)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-0 focus-visible:!border-0 focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25] ${
                        formik.touched.email && formik.errors.email
                          ? "is-invalid"
                          : ""
                      }`}
                      {...formik.getFieldProps("email")}
                      placeholder="Email"
                    />
                    <label
                      className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                      for="form_email"
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

                <div className="w-full flex-[0_0_auto] px-[10px] max-w-full">
                  <div className="form-floating relative !mb-4">
                    <textarea
                      id="form_message"
                      name="message"
                      className={`form-control bg-[#ffffff]  border-0 relative block w-full text-[.75rem] font-medium text-[#60697b] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.7)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-0 focus-visible:!border-0 focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25] font-space-grotesk ${
                        formik.touched.message && formik.errors.message
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Your message"
                      {...formik.getFieldProps("message")}
                      style={{ height: "150px" }}
                    ></textarea>
                    <label
                      className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                      for="form_message"
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

                <div className="w-full flex-[0_0_auto] px-[10px] max-w-full">
                  {/* <input
                    type="submit"
                    className=" text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] btn-send !mb-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] gradient-button font-space-grotesk"
                    value="Send message"
                  /> */}
                  <button
                    type="submit"
                    className={`flex items-center justify-center btn font-space-grotesk btn-primary text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-send !mb-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] gradient-button ${
                      loading ? "cursor-not-allowed" : ""
                    }`}
                    disabled={loading}
                  >
                    {loading && <Loader />}
                    <span className={`${loading ? "ml-2" : ""}`}>
                      Send message
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="overflow-hidden">
        <div className="divider text-[#fefefe] mx-[-0.5rem]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 92.26">
            <path
              fill="currentColor"
              d="M1206,21.2c-60-5-119-36.92-291-5C772,51.11,768,48.42,708,43.13c-60-5.68-108-29.92-168-30.22-60,.3-147,27.93-207,28.23-60-.3-122-25.94-182-36.91S30,5.93,0,16.2V92.26H1440v-87l-30,5.29C1348.94,22.29,1266,26.19,1206,21.2Z"
            />
          </svg>
        </div>
      </div> */}
    </section>
  );
};

export default Consult;
