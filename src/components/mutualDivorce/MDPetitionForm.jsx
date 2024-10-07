import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { CheckCircle } from "lucide-react";
import Loader from "../../shared/Loader";
import { addMDPForm } from "../../actions/mutualForm/mutualForm";

const MDPetitionForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [submitModal, setSubmitModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");

  const handleSelectPayment = (value) => {
    setSelectedPayment(value);
  };

  const formik = useFormik({
    initialValues: {
      you_are: "",
      name: "",
      spouse_name: "",
      paper_in_60Min: "",
      place_last_resided_together: "",
      date_last_resided_together: null,
      total_payable_amount: "",
      anyChild: "",
      your_contact_number: "",
      your_current_address: "",
      your_email: "",
      reason_for_divorce: "",
      term_accepted: false,
      marriage_date: null,
    },
    validationSchema: Yup.object({
      you_are: Yup.string().required("Please select an option"),
      name: Yup.string().required("Name is required"),
      spouse_name: Yup.string().required("Spouse name is required"),
      paper_in_60Min: Yup.string().required("This field is required"),
      marriage_date: Yup.date().required("This field is required"),
      your_contact_number: Yup.string()
        .required("Phone Number is required")
        .matches(/^\d{10}$/, "Phone Number must be exactly 10 digits"),
      your_email: Yup.string()
        .email("Invalid email address")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Please provide a valid email address."
        )
        .required("Please provide a valid email address."),
      term_accepted: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions") // Custom error message
        .required("This field is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const data = {
          you_are: values.you_are,
          name: values.name,
          marriage_date: values.marriage_date,
          spouse_name: values.spouse_name,
          paper_in_60Min: values.paper_in_60Min === "yes", // Convert to boolean if needed
          your_contact_number: values.your_contact_number,
          your_email: values.your_email,
          term_accepted: values.term_accepted,
        };

        if (values.place_last_resided_together) {
          data.place_last_resided_together = values.place_last_resided_together;
        }
        if (values.date_last_resided_together) {
          data.date_last_resided_together = values.date_last_resided_together;
        }
        if (values.total_payable_amount) {
          data.total_payable_amount = Number(values.total_payable_amount);
        }
        if (values.anyChild) {
          data.anyChild = values.anyChild === "yes";
        }
        if (values.reason_for_divorce) {
          data.reason_for_divorce = values.reason_for_divorce;
        }
        const res = await dispatch(addMDPForm(data));
        if (res.success) {
          toast.success(res.message);
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

  const closeHandler = () => {
    setSubmitModal(false);
    navigate("/process");
  };

  function generateRandomReceipt() {
    return new Date().getTime().toString();
  }

  // const handleAddPayment = async(recordId,comment) => {
  //   try {
  // const commentResponse = await dispatch(addComment({serviceId:recordId,comment}));
  // console.log(commentResponse.data);
  // if(commentResponse.success){
  //   message.success(commentResponse.message)
  //   setIsModalVisible(false);
  // }

  //     const initialReceipt = generateRandomReceipt();
  //     let amountToSend = price * 100;
  //     const paymentInfo = {
  //       id: recordId,
  //       amount: amountToSend.toString(),
  //       receipt: initialReceipt,
  //       currency: "INR",
  //     };

  //     console.log(paymentInfo);

  //     dispatch(addPayment(paymentInfo))
  //       .then((response) => {
  //         console.log(response);
  //         toast.success("Payment details added successfully!");

  //         const options = {
  //           key: "rzp_test_yuovJjUxz5HmFs",
  //           name: "Law wheels",
  //           description: "Some Description",
  //           order_id: response.data.id,
  //           handler: async (response) => {
  //             try {
  //               const paymentId = response.razorpay_payment_id;
  //               // const url = `http://localhost:5000/api/user/verifyPayment`;
  //               const url =`https://my-way-sip.onrender.com/api/user/verifyPayment`
  //               const captureResponse = await axios.post(url, { response });
  //               console.log(captureResponse.data);
  //               console.log(paymentId);
  //             } catch (err) {
  //               console.log(err);
  //             }
  //           },
  //           // callback_url: "http://localhost:5000/api/user/verifyPayment",
  //           callback_url:`https://my-way-sip.onrender.com/api/user/verifyPayment`,
  //           redirect: true,
  //           theme: {
  //             color: "#686CFD",
  //           },
  //         };

  //         const rzp1 = new window.Razorpay(options);
  //         rzp1.open();
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   } catch (error) {
  //     console.error("Error adding payment:", error);
  //     toast.error(error.response?.data?.message || "Failed to add payment");
  //   }
  // };

  return (
    <div className="container pb-12">
      <div className="flex flex-wrap mx-[-15px] !mb-[4.5rem] md:!mb-24">
        <div className="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto mt-[-9rem]">
          <div className="card">
            <form onSubmit={formik.handleSubmit}>
              <div
                className="flex flex-wrap mx-[-15px]"
                style={{ background: "#e5effc" }}
              >
                <div className="xl:w-8/12 xl:!ml-[16.66666667%] lg:w-10/12 lg:!ml-[8.33333333%] w-full flex-[0_0_auto] px-[15px] max-w-full">
                  <div className="mt-8 px-4">
                    <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-4 !text-center font-space-grotesk">
                      Mutual Divorce Form
                    </h2>
                  </div>
                  <div className="grid xl:grid-cols-2 lg:grid-cols-2  gap-4 sm:grid-cols-1 px-4">
                    <div className="w-full flex-[0_0_auto] px-[2px] max-w-full">
                      <div className="form-floating relative">
                        <select
                          name="you_are"
                          id="you_are"
                          className={`form-control ${
                            formik.touched.you_are && formik.errors.you_are
                              ? "is-invalid"
                              : ""
                          }  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.you_are}
                        >
                          <option value="">Select an option</option>
                          <option value="Wife">Wife</option>
                          <option value="Husband">Husband</option>
                        </select>
                        <label
                          htmlFor="form_you_are"
                          className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
                        >
                          You are *
                        </label>
                        {formik.touched.you_are && formik.errors.you_are ? (
                          <div className="text-red-500 font-space-grotesk text-xs">
                            {formik.errors.you_are}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="w-full flex-[0_0_auto] px-[2px] max-w-full">
                      <div className="form-floating relative">
                        <input
                          id="name"
                          type="text"
                          name="name"
                          className={`form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25] ${
                            formik.touched.name && formik.errors.name
                              ? "is-invalid"
                              : ""
                          }`}
                          placeholder="Name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                        />
                        <label
                          for="form_name"
                          className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
                        >
                          Name *
                        </label>
                        {formik.touched.you_are && formik.errors.name ? (
                          <div className="text-red-500 font-space-grotesk text-xs">
                            {formik.errors.name}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className=" w-full flex-[0_0_auto] px-[2px] max-w-full">
                      <div className="form-floating relative">
                        <input
                          id="your_contact_number"
                          type="text"
                          name="your_contact_number"
                          className={`form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25] ${
                            formik.touched.your_contact_number &&
                            formik.errors.your_contact_number
                              ? "is-invalid"
                              : ""
                          }`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.your_contact_number}
                          placeholder="Phone Number"
                        />
                        <label
                          for="your_contact_number"
                          className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
                        >
                          Phone Number *
                        </label>
                        {formik.touched.your_contact_number &&
                        formik.errors.your_contact_number ? (
                          <div className="text-red-500 font-space-grotesk text-xs">
                            {formik.errors.your_contact_number}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className=" w-full flex-[0_0_auto] px-[2px] max-w-full">
                      <div className="form-floating relative">
                        <input
                          id="your_email"
                          type="email"
                          name="your_email"
                          className={`form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25] ${
                            formik.touched.your_email &&
                            formik.errors.your_email
                              ? "is-invalid"
                              : ""
                          }`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.your_email}
                          placeholder="Email"
                        />
                        <label
                          for="your_email"
                          className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
                        >
                          Email *
                        </label>
                        {formik.touched.your_email &&
                        formik.errors.your_email ? (
                          <div className="text-red-500 font-space-grotesk text-xs">
                            {formik.errors.your_email}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className=" w-full flex-[0_0_auto] px-[2px] max-w-full">
                      <div className="form-floating relative">
                        <input
                          id="your_current_address"
                          type="text"
                          name="your_current_address"
                          className={`form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25] 
                               `}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.your_current_address}
                          placeholder="Current Address"
                        />
                        <label
                          for="your_current_address:"
                          className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
                        >
                          Current Address *
                        </label>
                      </div>
                    </div>

                    <div className="w-full flex-[0_0_auto] px-[2px] max-w-full">
                      <div className="form-floating relative">
                        <input
                          id="spouse_name"
                          type="text"
                          name="spouse_name"
                          className={`form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]`}
                          placeholder="Spouse's Name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.spouse_name}
                        />
                        <label
                          for="spouse_name"
                          className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
                        >
                          Your Spouse's Name *
                        </label>
                        {formik.touched.spouse_name &&
                        formik.errors.spouse_name ? (
                          <div className="text-red-500 font-space-grotesk text-xs">
                            {formik.errors.spouse_name}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="w-full flex-[0_0_auto] px-[2px] max-w-full">
                      <div className="form-floating relative">
                        <input
                          type="date"
                          id="marriage_date"
                          name="marriage_date"
                          className={`form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]`}
                          placeholder="Date Of Marriage"
                          onChange={(e) => {
                            const formattedDate = new Date(e.target.value)
                              .toISOString()
                              .split("T")[0]; // Format date to YYYY-MM-DD
                            formik.setFieldValue(
                              "marriage_date",
                              formattedDate
                            ); // Set the formatted date in formik state
                          }}
                          onBlur={formik.handleBlur}
                          value={formik.values.marriage_date}
                        />
                        <label
                          for="marriage_date"
                          className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
                        >
                          Date Of Marriage*
                        </label>
                        {formik.touched.marriage_date &&
                        formik.errors.marriage_date ? (
                          <div className="text-red-500 font-space-grotesk text-xs">
                            {formik.errors.marriage_date}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="w-full flex-[0_0_auto] px-[2px] max-w-full">
                      <div className="form-floating relative">
                        <select
                          name="anyChild"
                          id="anyChild"
                          className={`form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25] 
                          
                        }`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.anyChild}
                        >
                          <option value="">Select an option</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                        <label
                          for="anyChild"
                          className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
                        >
                          Do You have children *
                        </label>
                      </div>
                    </div>

                    <div className="w-full flex-[0_0_auto] px-[2px] max-w-full">
                      <div className="form-floating relative">
                        <input
                          id="place_last_resided_together"
                          type="text"
                          name="place_last_resided_together"
                          className={`form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]`}
                          placeholder="Place"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.place_last_resided_together}
                        />
                        <label
                          for="place_last_resided_together"
                          className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
                        >
                          Place Last resided together*
                        </label>
                      </div>
                    </div>

                    <div className="w-full flex-[0_0_auto] px-[2px] max-w-full">
                      <div className="form-floating relative">
                        <input
                          type="date"
                          id="date_last_resided_together"
                          name="ate_last_resided_together"
                          className={`form-control relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]`}
                          placeholder="Select Date"
                          onChange={(e) => {
                            const formattedDate = new Date(e.target.value)
                              .toISOString()
                              .split("T")[0]; // Format date to YYYY-MM-DD
                            formik.setFieldValue(
                              "date_last_resided_together}",
                              formattedDate
                            ); // Set the formatted date in formik state
                          }}
                          onBlur={formik.handleBlur}
                          value={formik.values.date_last_resided_together}
                        />
                        <label
                          for="date_last_resided_together"
                          className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
                        >
                          Date Last resided together *
                        </label>
                      </div>
                    </div>

                    <div className="w-full flex-[0_0_auto] px-[2px] max-w-full">
                      <div className="form-floating relative">
                        <PaymentCard
                          title="Yes, I want papers within 24 hours"
                          bgColor="bg-white"
                          name="paper_in_60Min"
                          value="yes"
                          price="5100" // Pass the price here
                          selectedPayment={formik.values.paper_in_60Min}
                          onSelect={() => {
                            formik.setFieldValue("paper_in_60Min", "yes");
                            formik.setFieldValue(
                              "total_payable_amount",
                              "5100"
                            );
                          }}
                        />
                      </div>
                    </div>

                    <div className="w-full flex-[0_0_auto] px-[2px] max-w-full">
                      <div className="form-floating relative">
                        <PaymentCard
                          title="No, I will wait for 24 hours"
                          bgColor="bg-white"
                          name="paper_in_60Min"
                          value="no"
                          price="2100"
                          selectedPayment={formik.values.paper_in_60Min} // Pass Formik state for selected card
                          onSelect={() => {
                            formik.setFieldValue("paper_in_60Min", "no"); // Update selection
                            formik.setFieldValue(
                              "total_payable_amount",
                              "2100"
                            ); // Set price for this option
                          }}
                        />
                      </div>
                    </div>
                    {formik.touched.paper_in_60Min &&
                      formik.errors.paper_in_60Min && (
                        <div className="text-red-500 text-xs font-space-grotesk">
                          {formik.errors.paper_in_60Min}
                        </div>
                      )}
                  </div>
                  <div className="w-full flex-[0_0_auto] px-[15px] max-w-full mt-4">
                    <div className="form-floating relative">
                      <input
                        id="reason_for_divorce"
                        type="text"
                        name="reason_for_divorce"
                        className={`form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]`}
                        placeholder="Write Text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.reason_for_divorce}
                      />
                      <label
                        for="reason_for_divorce"
                        className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
                      >
                        Reason
                      </label>
                    </div>
                  </div>
                  <div className="w-full flex-[0_0_auto] px-[2px] max-w-full">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="term_accepted" // Name attribute for grouping the radio buttons
                        className="form-checkbox"
                        value="true" // Set the value for this radio button
                        checked={formik.values.term_accepted} // Check based on Formik state
                        onChange={() =>
                          formik.setFieldValue("term_accepted", true)
                        } // Update Formik state on selection
                        onBlur={formik.handleBlur}
                      />
                      <p className="m-2 font-space-grotesk text-xs">
                        I agree to the terms and conditions of this website.
                      </p>
                      {formik.touched.term_accepted &&
                      formik.errors.term_accepted ? (
                        <div className="text-red-500 text-xs font-space-grotesk">
                          {formik.errors.term_accepted}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex justify-between mt-4 mb-8 px-4">
                    <button
                      // disabled={isSubmitting}

                      type="submit"
                      className="inline-flex gradient-button font-space-grotesk items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      {loading ? (
                        <>
                          <Loader />
                          <span className="ml-2">Submitting...</span>{" "}
                      
                        </>
                      ) : (
                        <span>Submit</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
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
    </div>
  );
};

const PaymentCard = ({
  title,
  bgColor,
  value,
  selectedPayment,
  onSelect,
  name,
  price,
}) => {
  const isSelected = selectedPayment === value;

  return (
    <div
      className={`p-4 border rounded-lg shadow-sm ${
        isSelected ? "bg-[#1450ad]" : bgColor
      } transition-colors duration-300`}
    >
      {isSelected && (
        <div className="absolute top-2 left-6 font-space-grotesk text bg-gray-100 text-sm font-bold text-black px-3 py-1 rounded-full shadow-sm">
          ₹{price}
        </div>
      )}

      <div className={`flex items-center ${isSelected ? "mt-4" : ""}`}>
        <input
          type="radio"
          name={name}
          value={value}
          checked={isSelected}
          onChange={() => onSelect(value)}
          className="form-radio"
        />
        <p
          className={`m-2 font-space-grotesk text-xs ${
            isSelected ? "text-white" : "text-gray-800"
          }`}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default MDPetitionForm;
