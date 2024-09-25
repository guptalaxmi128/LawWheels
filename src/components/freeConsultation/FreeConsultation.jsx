import React, { useEffect,useRef,useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { addContact } from "../../actions/contact/contact";
import Loader from "../../shared/Loader";

const FreeConsultation = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const contactContent = document.querySelector('.contact-content');
      if (contactContent) {
        if (window.scrollY > 0) {
          contactContent.style.margin = "auto";
        } else {
          contactContent.style.marginTop = "200px";
          contactContent.style.marginBottom = "0";
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setShowModal(showModal);
  }, [showModal, setShowModal]);


  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);


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
          setShowModal(false);
        }
      } catch (error) {
        console.error(error);
        toast.error(error?.response?.data?.message|| "Something went wrong!");
      }finally{
        setLoading(false)
      }
    },
  });

  return (
    <div>
      {showModal && (
        <div className="modal-container">
          <div className="contact-content" ref={modalRef}>
            <div className="p-4 ">
            <h2 className="text-[calc(1rem_+_0.66vw)] font-bold xl:text-[1rem] leading-[1.3] mb-3 !text-center font-space-grotesk">
               Free Mutual Divorce Consultation
              </h2>
              <p className="lead leading-[1.65] text-[0.9rem] font-medium !text-center mb-4 font-space-grotesk">
              Fill out the form below to schedule a no-cost, confidential consultation with our experts.
              </p>
              <form
                className="contact-form needs-validation"
                onSubmit={formik.handleSubmit}
                noValidate
              >
                <div className="messages"></div>
                <div className="flex flex-wrap mx-[-10px]">
                  <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
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

                  <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
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

                  <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
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

                  <div className=" w-full flex-[0_0_auto] px-[15px] max-w-full">
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

                  <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                    <div className="form-floating relative !mb-4">
                      <textarea
                        id="form_message"
                        name="message"
                        style={{ height: "100px" }}
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
                    {/* <input
                      type="submit"
                      className="btn font-space-grotesk btn-primary text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0]  btn-send !mb-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] gradient-button"
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
      )}
    </div>
  );
};

export default FreeConsultation;
