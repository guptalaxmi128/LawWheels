// import React, { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
// import { useDispatch} from "react-redux";
// import { toast } from "react-hot-toast";
// import { CheckCircle } from "lucide-react";
// import { addContact,verifyOtp,resendOtp } from "../../actions/contact/contact";
// import Navbar from "../navbar/Navbar";
// import Footer from "../footer/Footer";
// import FAQ from "../faq/FAQ";
// import mutualDivorce from "../../assets/images/mutual_divorce.webp";
// import Loader from "../../shared/Loader";
// import logo from "../../assets/images/logo_lw.webp";
// import childCustody from "../../assets/images/child_custody.webp";
// import Service from "../service/Service";
// import videoUrl from "../../assets/media/movie4.mp4";
// import movie2 from "../../assets/images/movie2.jpg";
// // import OtpInput from "../home/OtpInput";
// import FreeConsultation from "../freeConsultation/FreeConsultation";

// const MutualDivorceLandingPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [showModal, setShowModal] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [hasErrors, setHasErrors] = useState(false);
//   const [submitModal, setSubmitModal] = useState(false);
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [leadId, setLeadId] = useState("");
//   const [contactStep, setContactStep] = useState("contactStep");
//   const [childImage, setChildImage] = useState(
//     "https://law-wheel.b-cdn.net/image/child_custody.png"
//   );
//   const [mutualImage, setMutualImage] = useState(
//     "https://law-wheel.b-cdn.net/image/mutual_divorce.webp"
//   );
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       // surname: "",
//       email: "",
//       phonenumber: "",
//       message: "",
//       data_from_page:''
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required("Please enter your name."),
//       // surname: Yup.string().required("Please enter your last name."),
//       email: Yup.string()
//         .email("Invalid email address")
//         .matches(
//           /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//           "Please provide a valid email address."
//         )
//         .required("Please provide a valid email address."),
//       phonenumber: Yup.string()
//         .required("Please enter your phone number.")
//         .matches(/^\d{10}$/, "Phone number must be exactly 10 digits."),
//       message: Yup.string()
//         .required("Please enter your message.")
//         .min(20, "Your message must be at least 20 characters long."),
//     }),
//     onSubmit: async (values, { resetForm }) => {
//       setLoading(true);
//       try {
//         const data = {
//           name: values.name,
//           // lastName: values.surname,
//           email: values.email,
//           mobileNumber: values.phonenumber,
//           message: values.message,
//           data_from_page:"Mutual Divorce"
//         };
//         const res = await dispatch(addContact(data));
//         if (res.success) {
//           toast.success(res.message);
//           setLeadId(res.data.id);
//           setMobileNumber(res.data.mobileNumber);
//           setContactStep("getOtp");
//           resetForm();
      
//         }
//       } catch (error) {
//         console.error(error);
//         toast.error(error?.response?.data?.message || "Something went wrong");
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   const handleMove = () => navigate("/mutual-form");
//   useEffect(() => {
//     setHasErrors(Object.keys(formik.errors).length > 0 && formik.touched);
//   }, [formik.errors, formik.touched]);
  
//   const closeHandler = () => {
//     setSubmitModal(false);
//   };

//   const [logoImage, setLogoImage] = useState(
//     "https://law-wheel.b-cdn.net/image/logo_lw.webp"
//   );

//   useEffect(() => {
//     const img = new Image();
//     img.src = "https://law-wheel.b-cdn.net/image/logo_lw.webp";
//     img.onload = () =>
//       setLogoImage("https://law-wheel.b-cdn.net/image/logo_lw.webp");
//     img.onerror = () => setLogoImage(logo);
//   }, []);

//   useEffect(() => {
//     const img = new Image();
//     img.src = "https://law-wheel.b-cdn.net/image/mutual_divorce.webp";
//     img.onload = () =>
//       setMutualImage("https://law-wheel.b-cdn.net/image/mutual_divorce.webp");
//     img.onerror = () => setMutualImage(mutualDivorce);
//   }, []);

//   useEffect(() => {
//     const img = new Image();
//     img.src = "https://law-wheel.b-cdn.net/image/child_custody.png";
//     img.onload = () =>
//       setChildImage("https://law-wheel.b-cdn.net/image/child_custody.png");
//     img.onerror = () => setChildImage(childCustody);
//   }, []);
 

//   const onOtpSubmit = async (otp) => {
//     try {
//       setLoading(true);
//       // console.log("email", email);
//       // console.log("otp", otp);
//       const res = await dispatch(verifyOtp({ leadId, mobileOTP: otp }));

//       if (res.success) {
//         toast.success(res.message);
//         setContactStep("contactStep");
//         setSubmitModal(true);
//       } else {
//         toast.error(res.message);
//       }
//     } catch (error) {
//       console.error("Error during user verification:", error);
//       toast.error(error?.response?.data?.message || "Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const onResendOtp = async () => {
//     try {
//       setLoading(true);
//       const res = await dispatch(resendOtp({id:leadId}));

//       if (res.success) {
//        toast.success(res.message)
       
//       } else {
//         toast.error(res.message);
//       }
//     } catch (error) {
//       console.error("Error during resend Otp:", error);
//       toast.error(error?.response?.data?.message ||"Something went wrong");
//     } finally {
//       setLoading(false); // Set loading to false regardless of success or failure
//     }
//   };
//   return (
//     <>
//       <Navbar />
//       <div className="relative z-[1]">
//         {/* <section className="video-wrapper gradient-bg relative overflow-hidden py-10  xl:min-h-[68vh] custom-height  !mt-0 xl:rounded-[1rem] lg:rounded-[1rem] md:rounded-[1rem] xl:mx-6 xl:rounded-[1rem] lg:mx-6 lg:rounded-[1rem] md:mx-6 md:rounded-[1rem] mb-6 z-[1]"> */}
//         <section className={`video-wrapper relative overflow-hidden bg-overlay bg-overlay-gradient py-10  xl:min-h-[68vh] ${hasErrors ? 'custom-height-error' : 'custom-height'}  !mt-0 xl:rounded-[1rem] lg:rounded-[1rem] md:rounded-[1rem] xl:mx-6 xl:rounded-[1rem] lg:mx-6 lg:rounded-[1rem] md:mx-6 md:rounded-[1rem] mb-24 z-[1]`}>
//           <video
//             poster={movie2}
//             src={videoUrl}
//             autoPlay
//             loop
//             playsInline
//             muted
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//           ></video>
//           <div className="video-content absolute z-[2] w-full h-full flex items-center justify-center flex-col left-0 top-0">
//             <div className="container py-[4rem] xl:!py-[4rem] lg:!py-[4rem] md:!py-[4rem]">
//               {/* <div className="flex flex-wrap mx-[-15px]">
//                 <div className="lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
//                   <div className="py-[2rem] xl:!py-[6rem] lg:!py-[4rem] md:!py-[2rem]">
//                     <h1 className="xl:text-[2rem] text-[calc(1.395rem_+_1.74vw)] font-semibold  !mb-0 !leading-[1.15]">
//                       <span className="rotator-zoom text-center font-space-grotesk text-white">
//                         Mutual Divorce
//                       </span>
//                     </h1>
//                     <p className="lead !text-[0.9rem] !leading-[1.6] font-medium xxl:!mx-8 text-center text-white font-space-grotesk mb-4">
//                       Compassionate Guidance and Legal Expertise You Can Trust
//                     </p>
//                     <p
//                       className="lead !text-[1rem] !leading-[1.6] font-medium xl:!mb-0 xxl:!mx-8 text-center text-white font-space-grotesk sm:mb-4 
//      lg:!mb-0 "
//                     >
//                       Our legal expert will contact you shortly
//                     </p>
//                   </div>
//                 </div>

//                 <div className="lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] px-[10px] max-w-full !text-center text-white !mx-auto">
//                   <div className="card !bg-[#ffffff] mt-2 mb-1">

//                   {contactStep === "getOtp" && (
//                       <div className="card-body xl:!p-[0.5rem] lg:!p-[0.5rem] md:!p-[0.5rem] xxl:!py-4 p-[4px] !relative flex flex-col justify-center items-center">
//                         <h2 className="text-sm font-bold xl:text-[1rem] leading-[1.3] mt-4 mb-16 !text-center font-space-grotesk">
//                           We have sent the verification code to your +91{" "}
//                           {mobileNumber}
//                         </h2>
//                         <OtpInput length={6} onOtpSubmit={onOtpSubmit} />

                    
//                         <div className="text-center font-space-grotesk text-black mt-20">
//                           Didn't receive any code?
//                         </div>
//                         <div className="text-center font-space-grotesk">
//                           <button onClick={onResendOtp} style={{color:"blue"}} >Resend OTP</button>
//                         </div>
//                       </div>
//                     )}
//                     {contactStep === "contactStep" && (
//                       <>
//                     <div className="card-body xl:!p-[0.5rem] lg:!p-[0.5rem] md:!p-[0.5rem] xxl:!py-4 p-[4px] !relative">
//                       <h2 className="text-sm font-bold xl:text-[1rem] leading-[1.3]  mt-2 mb-4 !text-center font-space-grotesk">
//                         Connect for a Free Consultation
//                       </h2>

//                       <form
//                         className="contact-form needs-validation"
//                         onSubmit={formik.handleSubmit}
//                         noValidate
//                       >
//                         <div className="messages"></div>
//                         <div className="flex flex-wrap mx-[-10px]">
//                         <div className=" w-full flex-[0_0_auto] px-[15px] max-w-full">
//                             <div className="form-floating relative !mb-2">
//                               <input
//                                 id="form_name"
//                                 type="text"
//                                 name="name"
//                                 className={`form-control ${
//                                   formik.touched.name && formik.errors.name
//                                     ? "is-invalid"
//                                     : ""
//                                 }  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]`}
//                                 placeholder="Name"
//                                 {...formik.getFieldProps("name")}
//                               />
//                               <label
//                                 for="form_name"
//                                 className="text-[#959ca9] mb-1 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
//                               >
//                                 Name *
//                               </label>
//                               {formik.touched.name && formik.errors.name ? (
//                                 <div className="invalid-feedback font-space-grotesk text-left">
//                                   {formik.errors.name}
//                                 </div>
//                               ) : (
//                                 <div className="valid-feedback font-space-grotesk">
//                                   Looks good!
//                                 </div>
//                               )}
//                             </div>
//                           </div>

                        

//                           <div className=" w-full flex-[0_0_auto] px-[15px] max-w-full">
//                             <div className="form-floating relative !mb-2">
//                               <input
//                                 id="form_email"
//                                 type="email"
//                                 name="email"
//                                 className={`form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25] ${
//                                   formik.touched.email && formik.errors.email
//                                     ? "is-invalid"
//                                     : ""
//                                 }`}
//                                 {...formik.getFieldProps("email")}
//                                 placeholder="Email"
//                                 required
//                               />
//                               <label
//                                 for="form_email"
//                                 className="text-[#959ca9] mb-1 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
//                               >
//                                 Email *
//                               </label>
//                               {formik.touched.email && formik.errors.email ? (
//                                 <div className="invalid-feedback font-space-grotesk text-left">
//                                   {formik.errors.email}
//                                 </div>
//                               ) : (
//                                 <div className="valid-feedback font-space-grotesk">
//                                   Looks good!
//                                 </div>
//                               )}
//                             </div>
//                           </div>

//                           <div className=" w-full flex-[0_0_auto] px-[15px] max-w-full">
//                             <div className="form-floating relative !mb-2">
//                               <input
//                                 id="form_phonenumber"
//                                 type="text"
//                                 name="phonenumber"
//                                 className={`form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25] ${
//                                   formik.touched.phonenumber &&
//                                   formik.errors.phonenumber
//                                     ? "is-invalid"
//                                     : ""
//                                 }`}
//                                 {...formik.getFieldProps("phonenumber")}
//                                 placeholder="Phone Number"
//                                 required
//                               />
//                               <label
//                                 for="form_phoneNumner"
//                                 className="text-[#959ca9] mb-1 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-space-grotesk"
//                               >
//                                 Phone Number *
//                               </label>
//                               {formik.touched.phonenumber &&
//                               formik.errors.phonenumber ? (
//                                 <div className="invalid-feedback font-space-grotesk text-left">
//                                   {formik.errors.phonenumber}
//                                 </div>
//                               ) : (
//                                 <div className="valid-feedback font-space-grotesk">
//                                   Looks good!
//                                 </div>
//                               )}
//                             </div>
//                           </div>

//                           <div className=" w-full flex-[0_0_auto] px-[15px] max-w-full">
//                             <div className="form-floating relative !mb-2">
//                               <textarea
//                                 id="form_message"
//                                 name="message"
//                                 // style={{ height: "150px" }}
//                                 required
//                                 className={`form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25] font-space-grotesk ${
//                                   formik.touched.message &&
//                                   formik.errors.message
//                                     ? "is-invalid"
//                                     : ""
//                                 }`}
//                                 placeholder="Your message"
//                                 {...formik.getFieldProps("message")}
//                               ></textarea>
//                               <label
//                                 for="form_message"
//                                 className="text-[#959ca9] font-space-grotesk mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 "
//                               >
//                                 Message *
//                               </label>
//                               {formik.touched.message &&
//                               formik.errors.message ? (
//                                 <div className="invalid-feedback font-space-grotesk text-left">
//                                   {formik.errors.message}
//                                 </div>
//                               ) : (
//                                 <div className="valid-feedback font-space-grotesk">
//                                   Looks good!
//                                 </div>
//                               )}
//                             </div>
//                           </div>

//                           <div className="w-full flex-[0_0_auto] px-[15px] max-w-full !text-center">
//                             <button
//                               type="submit"
//                               className={`flex items-center justify-center btn font-space-grotesk btn-primary text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-send !mb-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] gradient-button ${
//                                 loading ? "cursor-not-allowed" : ""
//                               }`}
//                               disabled={loading}
//                             >
//                               {loading && <Loader />}
//                               <span className={`${loading ? "ml-2" : ""}`}>
//                                 Schedule Now
//                               </span>
//                             </button>
//                           </div>
//                         </div>
//                       </form>
//                     </div>
//                     </>)}
//                   </div>
//                 </div>
//               </div> */}
//               <section className="wrapper  w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
//         <div className="container !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24">
//           <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-30px] !mb-[4.5rem] xl:!mb-36 lg:!mb-36 md:!mb-36">
//             <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[30px] max-w-full">
//               <div className="feature">
//                 <div className="card card--custom">
//                   <div className="card__icon">
//                     <svg
//                       width="46"
//                       height="46"
//                       viewBox="0 0 46 46"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M15.3334 44.8858H7.73639C6.34245 44.8858 5.22729 43.7707 5.22729 42.3767V28.7161C5.22729 27.3222 6.34245 26.207 7.73639 26.207H15.3334C15.7515 26.207 16.0303 26.4858 16.0303 26.904V44.1889C16.0303 44.607 15.7515 44.8858 15.3334 44.8858ZM7.73639 27.601C7.10911 27.601 6.62123 28.0889 6.62123 28.7161V42.3767C6.62123 43.004 7.10911 43.4919 7.73639 43.4919H14.6364V27.601H7.73639Z"
//                         fill="#074C3E"
//                       />
//                       <path
//                         d="M37.985 31.1554H36.5911C36.1729 31.1554 35.8941 30.8766 35.8941 30.4585C35.8941 30.0403 36.1729 29.7615 36.5911 29.7615H37.985C38.8911 29.7615 39.6577 28.9948 39.6577 28.0888C39.6577 27.1827 38.8911 26.416 37.985 26.416H24.2547C24.0456 26.416 23.8365 26.2766 23.6971 26.1373C23.5577 25.9282 23.5577 25.7191 23.6274 25.51C24.6032 23.21 24.9517 21.3282 24.6729 19.6554V19.5857C24.6729 17.216 22.9305 15.2645 20.6305 14.9857C20.0729 20.3524 18.4699 25.0221 15.7517 29.2039C15.5426 29.5524 15.1244 29.6221 14.7759 29.413C14.4274 29.2039 14.3577 28.7857 14.5668 28.4373C17.285 24.3251 18.8183 19.6554 19.2365 14.2191C19.2365 13.8706 19.585 13.5918 19.9335 13.5918C23.279 13.5918 25.9971 16.31 25.9971 19.5857C26.2062 21.2585 25.9971 23.0706 25.2305 25.1615H37.9153C39.6577 25.1615 40.982 26.4857 40.982 28.2282C41.0517 29.8312 39.7274 31.1554 37.985 31.1554Z"
//                         fill="#074C3E"
//                       />
//                       <path
//                         d="M37.2879 35.8951H35.894C35.4758 35.8951 35.197 35.6163 35.197 35.1981C35.197 34.7799 35.4758 34.5011 35.894 34.5011H37.2879C38.194 34.5011 38.9607 33.7344 38.9607 32.8284C38.9607 31.9223 38.194 31.1557 37.2879 31.1557C36.8697 31.1557 36.591 30.8769 36.591 30.4587C36.591 30.0405 36.8697 29.7617 37.2879 29.7617C39.0304 29.7617 40.3546 31.086 40.3546 32.8284C40.3546 34.5708 39.0304 35.8951 37.2879 35.8951Z"
//                         fill="#074C3E"
//                       />
//                       <path
//                         d="M36.5213 40.6333H35.1274C34.7092 40.6333 34.4304 40.3545 34.4304 39.9364C34.4304 39.5182 34.7092 39.2394 35.1274 39.2394H36.5213C37.4274 39.2394 38.1941 38.4727 38.1941 37.497C38.1941 36.4515 37.6365 35.8939 36.5213 35.8939C36.1031 35.8939 35.8244 35.6152 35.8244 35.197C35.8244 34.7788 36.1031 34.5 36.5213 34.5C38.3334 34.5 39.5183 35.5455 39.588 37.3576V37.7061C39.4486 39.3091 38.1244 40.6333 36.5213 40.6333Z"
//                         fill="#074C3E"
//                       />
//                       <path
//                         d="M35.8243 45.3033H19.1667C18.2607 45.3033 17.494 45.0942 16.7273 44.7458L15.0546 43.9094C14.7061 43.77 14.5667 43.3518 14.7758 43.0033C14.9152 42.6548 15.3334 42.5154 15.6819 42.7245L17.3546 43.5609C17.9122 43.8397 18.5395 43.9791 19.2364 43.9791H35.894C36.8001 43.9791 37.5667 43.2124 37.5667 42.3064C37.5667 41.4003 36.8001 40.6336 35.894 40.6336C35.4758 40.6336 35.197 40.3548 35.197 39.9367C35.197 39.5185 35.4758 39.2397 35.894 39.2397C37.6364 39.2397 38.9607 40.5639 38.9607 42.3064C38.891 43.9791 37.5667 45.3033 35.8243 45.3033ZM12.8243 41.9579H8.4334C8.01522 41.9579 7.73643 41.6791 7.73643 41.2609C7.73643 40.8427 8.01522 40.5639 8.4334 40.5639H12.8243C13.2425 40.5639 13.5213 40.8427 13.5213 41.2609C13.5213 41.6791 13.2425 41.9579 12.8243 41.9579ZM24.8819 11.5003C24.7425 11.5003 24.6031 11.5003 24.5334 11.4306L21.9546 9.89727L19.1667 11.2215C18.9576 11.3609 18.6092 11.2912 18.4001 11.1518C18.191 11.0124 18.1213 10.7336 18.191 10.4548L18.8879 7.45787L16.797 5.29727C16.5879 5.08817 16.5182 4.80939 16.6576 4.6003C16.7273 4.32151 17.0061 4.18211 17.2152 4.11242L20.2122 3.76393L21.6061 1.11545C21.7455 0.83666 22.0243 0.697266 22.2334 0.697266C22.5122 0.697266 22.7213 0.83666 22.8607 1.11545L24.1152 3.90333L27.1122 4.4609C27.391 4.5306 27.6001 4.66999 27.6698 4.94878C27.7395 5.22757 27.6698 5.50636 27.4607 5.64575L25.2304 7.66696L25.5789 10.7336C25.5789 11.0124 25.5092 11.2912 25.3001 11.4306C25.1607 11.4306 25.0213 11.5003 24.8819 11.5003ZM21.9546 8.36393C22.094 8.36393 22.2334 8.36393 22.3031 8.43363L23.9758 9.47908L23.697 7.45787C23.697 7.24878 23.7667 6.96999 23.9061 6.8306L25.4395 5.57605L23.4879 5.22757C23.2789 5.15787 23.0698 5.01848 23.0001 4.80939L22.1637 2.99727L21.2576 4.73969C21.1182 4.94878 20.9789 5.08818 20.7001 5.08818L18.7485 5.29727L20.1425 6.69121C20.2819 6.8306 20.3516 7.10939 20.3516 7.31848L19.9334 9.26999L21.7455 8.43363C21.7455 8.36393 21.8849 8.36393 21.9546 8.36393ZM13.2425 15.8215C13.1031 15.8215 12.9637 15.8215 12.894 15.7518L10.3152 14.2185L7.52734 15.5427C7.31825 15.6821 6.96976 15.6124 6.76067 15.473C6.55158 15.3336 6.48188 15.0548 6.55158 14.7761L7.24855 11.8488L5.15764 9.61848C4.94855 9.40939 4.94855 9.1306 5.01825 8.92151C5.01825 8.57302 5.22734 8.36393 5.50613 8.36393L8.57279 8.08515L9.96673 5.43666C10.1061 5.22757 10.3849 5.08818 10.594 5.08818C10.8728 5.08818 11.0819 5.22757 11.2213 5.50636L12.4758 8.29424L15.4728 8.85181C15.7516 8.92151 15.9607 9.0609 16.0304 9.33969C16.1001 9.61848 16.0304 9.89727 15.8213 10.0367L13.591 12.1276L13.9395 15.1245C13.9395 15.4033 13.8698 15.6821 13.6607 15.8215C13.5213 15.7518 13.3819 15.8215 13.2425 15.8215ZM10.3152 12.6851C10.4546 12.6851 10.594 12.6851 10.6637 12.7548L12.3364 13.8003L12.1273 11.8488C12.1273 11.6397 12.197 11.4306 12.3364 11.2215L13.8001 9.89727L11.8485 9.54878C11.6395 9.47908 11.4304 9.33969 11.3607 9.1306L10.5243 7.31848L9.61825 9.0609C9.47885 9.26999 9.33946 9.40939 9.06067 9.40939L7.03946 9.61848L8.4334 11.0821C8.57279 11.2215 8.64249 11.5003 8.57279 11.7094L8.15461 13.5912L9.96673 12.7548C10.1061 12.6851 10.2455 12.6851 10.3152 12.6851ZM36.8001 15.8215C36.6607 15.8215 36.5213 15.8215 36.4516 15.7518L33.8728 14.2185L31.1546 15.5427C30.9455 15.6821 30.597 15.6124 30.4576 15.473C30.2485 15.3336 30.1789 15.0548 30.1789 14.7761L30.8061 11.8488L28.7152 9.61848C28.5061 9.40939 28.5061 9.1306 28.5758 8.92151C28.6455 8.64272 28.9243 8.50333 29.1334 8.50333L32.1304 8.22454L33.594 5.57605C33.7334 5.36696 33.9425 5.22757 34.2213 5.22757C34.5001 5.22757 34.7092 5.43666 34.8485 5.64575L36.0334 8.43363L39.0304 8.99121C39.3092 9.0609 39.5182 9.2003 39.5879 9.47908C39.6576 9.75787 39.5879 10.0367 39.3789 10.1761L37.1485 12.267L37.497 15.2639C37.497 15.5427 37.4273 15.8215 37.2182 15.9609C37.0789 15.7518 36.9395 15.8215 36.8001 15.8215ZM33.8728 12.6851C34.0122 12.6851 34.1516 12.6851 34.2213 12.7548L35.894 13.8003L35.6849 11.8488C35.6849 11.6397 35.7546 11.4306 35.894 11.2215L37.3576 9.89727L35.4061 9.54878C35.197 9.47908 34.9879 9.33969 34.9182 9.1306L34.1516 7.31848L33.1758 9.0609C33.0364 9.26999 32.897 9.40939 32.6182 9.40939L30.6667 9.61848L32.0607 11.0821C32.2001 11.2215 32.2698 11.5003 32.2001 11.7094L31.7819 13.5912L33.594 12.7548C33.6637 12.6851 33.8031 12.6851 33.8728 12.6851Z"
//                         fill="#074C3E"
//                       />
//                     </svg>
//                   </div>
//                   <div className="card__content">
//                     <h4 className="card__title font-space-grotesk">
//                       <button onClick={handleMove}>
//                         Fill Mutual Divorce Form
//                       </button>
//                     </h4>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[30px] max-w-full">
//               <div className="feature">
//                 <div className="card card--custom">
//                   <div className="card__icon">
//                     <svg
//                       width="46"
//                       height="46"
//                       viewBox="0 0 46 46"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <g clip-path="url(#clip0_1417_1496)">
//                         <path
//                           d="M17.0787 30.188C17.0235 29.8151 16.6755 29.5574 16.3037 29.613L1.62902 31.7869C1.62165 31.7884 1.60955 31.7801 1.60827 31.7714L1.36514 30.1309C1.36444 30.1261 1.36567 30.1211 1.36857 30.1172C1.37146 30.1133 1.37579 30.1107 1.38061 30.11L16.0556 27.9359C16.1443 27.9228 16.2295 27.8923 16.3064 27.8463C16.3833 27.8002 16.4503 27.7395 16.5037 27.6675C16.5571 27.5955 16.5958 27.5137 16.6176 27.4268C16.6394 27.3399 16.6438 27.2495 16.6307 27.1608C16.5755 26.7879 16.2275 26.5302 15.8556 26.5858L11.656 27.2079C11.8494 26.8983 11.9878 26.5576 12.0651 26.2009C13.0711 26.122 13.866 25.2798 13.866 24.2538V24.0183C13.866 23.1333 13.2746 22.3849 12.4665 22.1449V21.1958L14.2542 18.0417C14.299 17.9637 14.328 17.8777 14.3394 17.7884C14.3509 17.6992 14.3445 17.6086 14.3208 17.5218C14.2971 17.435 14.2565 17.3538 14.2013 17.2828C14.146 17.2118 14.0773 17.1524 13.9991 17.108C13.9208 17.0636 13.8345 17.0352 13.7452 17.0243C13.6559 17.0134 13.5654 17.0202 13.4787 17.0445C13.3921 17.0687 13.3111 17.1098 13.2404 17.1654C13.1697 17.2211 13.1107 17.2902 13.0668 17.3687L11.2642 20.5488C11.1577 20.7372 11.1016 20.9499 11.1015 21.1664V22.0633H5.94827V21.1664C5.94827 20.9504 5.89203 20.7367 5.78539 20.5485L3.16631 15.9276L3.16058 15.9169C2.66413 15.0156 2.40299 13.9917 2.40517 12.9562C2.41245 9.61143 5.13908 6.87233 8.48327 6.85013L8.5254 6.84995C10.1526 6.84995 11.6828 7.48051 12.838 8.62791C14.0033 9.7854 14.645 11.3274 14.645 12.9698C14.6457 13.6254 14.5408 14.2769 14.3344 14.8992C14.3061 14.9842 14.2949 15.074 14.3013 15.1634C14.3077 15.2528 14.3317 15.34 14.3719 15.4201C14.412 15.5002 14.4676 15.5716 14.5354 15.6303C14.6031 15.6889 14.6818 15.7336 14.7668 15.7619C14.8519 15.7902 14.9417 15.8015 15.0311 15.7951C15.1205 15.7887 15.2077 15.7647 15.2879 15.7245C15.368 15.6843 15.4394 15.6288 15.498 15.561C15.5567 15.4932 15.6013 15.4145 15.6295 15.3294C15.8821 14.5683 16.0105 13.7716 16.0099 12.9697C16.0099 10.9611 15.225 9.07513 13.7999 7.65949C12.3871 6.25605 10.5157 5.48508 8.52577 5.48508L8.47426 5.48526C4.38413 5.51247 1.04922 8.86257 1.0404 12.9532C1.03767 14.2121 1.35368 15.4573 1.95458 16.5561C1.95913 16.5651 1.96396 16.5739 1.96887 16.5827L4.58349 21.1958V22.1449C3.77549 22.3848 3.18396 23.1333 3.18396 24.0183V24.2538C3.18396 25.2828 3.98368 26.1266 4.99386 26.2013C5.15291 26.9353 5.56547 27.5753 6.13507 28.0257L1.18052 28.7596C0.426209 28.8715 -0.0966249 29.5763 0.0150209 30.3308L0.258149 31.9714C0.284258 32.1512 0.345788 32.324 0.439174 32.4799C0.532559 32.6358 0.655945 32.7716 0.802183 32.8794C1.03931 33.0565 1.32734 33.1522 1.62329 33.1521C1.69153 33.1521 1.76032 33.147 1.82902 33.1369L16.5037 30.9628C16.5923 30.9497 16.6775 30.9193 16.7544 30.8733C16.8313 30.8273 16.8984 30.7665 16.9518 30.6946C17.0052 30.6226 17.0439 30.5409 17.0657 30.4539C17.0874 30.367 17.0919 30.2767 17.0787 30.188ZM6.41996 26.2087H10.6391C10.3684 26.8756 9.71456 27.3476 8.95169 27.3476H8.10748C7.34443 27.3476 6.69066 26.8756 6.41996 26.2087ZM4.54873 24.2539V24.0184C4.54888 23.862 4.61107 23.712 4.72166 23.6014C4.83226 23.4908 4.98221 23.4286 5.13863 23.4284H11.9114C12.0678 23.4286 12.2177 23.4908 12.3283 23.6014C12.4389 23.712 12.5011 23.862 12.5012 24.0184V24.2539C12.5011 24.4103 12.4389 24.5602 12.3283 24.6709C12.2177 24.7815 12.0678 24.8437 11.9114 24.8439H5.13872C4.9823 24.8437 4.83235 24.7814 4.72175 24.6708C4.61115 24.5602 4.54893 24.4103 4.54873 24.2539ZM45.985 25.1971L45.742 23.5562C45.6301 22.8018 44.9242 22.2789 44.1709 22.3908L40.2604 22.9702C40.6797 22.5423 40.9698 22.0048 41.0971 21.4194C42.1074 21.3448 42.907 20.5009 42.907 19.4719V19.2364C42.907 18.3515 42.3156 17.6031 41.5075 17.363V16.414L44.1221 11.8009C44.1271 11.792 44.1319 11.7833 44.1364 11.7743C44.7373 10.6757 45.0533 9.43026 45.0506 8.17131C45.0416 4.08073 41.7068 0.730624 37.6167 0.703327C35.6056 0.688768 33.7161 1.46219 32.2911 2.87765C30.866 4.29337 30.0812 6.17925 30.0812 8.18787C30.0812 9.27604 30.3105 10.3266 30.7629 11.3104C30.8386 11.4749 30.9764 11.6025 31.1462 11.6653C31.3159 11.7282 31.5037 11.721 31.6681 11.6453C31.8326 11.5697 31.9602 11.4319 32.0231 11.2621C32.0859 11.0924 32.0787 10.9046 32.0031 10.7402C31.6334 9.93645 31.446 9.07777 31.446 8.18787C31.446 6.54549 32.0878 5.00347 33.253 3.84597C34.4181 2.68848 35.9618 2.05691 37.6076 2.0681C40.9517 2.09039 43.6784 4.82967 43.6857 8.17423C43.6879 9.20979 43.4268 10.2336 42.9303 11.135L42.9246 11.1456L40.3055 15.7666C40.1988 15.955 40.1427 16.1678 40.1427 16.3843V17.2813H34.9891V16.3843C34.989 16.1678 34.9329 15.955 34.8262 15.7666L33.3892 13.2314C33.3 13.074 33.1518 12.9584 32.9774 12.9102C32.8029 12.862 32.6165 12.885 32.459 12.9743C32.381 13.0185 32.3125 13.0776 32.2574 13.1482C32.2023 13.2189 32.1616 13.2997 32.1378 13.3861C32.1139 13.4725 32.1073 13.5627 32.1183 13.6517C32.1293 13.7406 32.1577 13.8265 32.2019 13.9045L33.6242 16.4139V17.3629C32.8162 17.6029 32.2247 18.3514 32.2247 19.2363V19.4718C32.2247 20.4978 33.0196 21.3399 34.0256 21.4189C34.2383 22.4011 34.9049 23.2158 35.7944 23.6318L29.4961 24.5648C29.4074 24.5779 29.3222 24.6084 29.2453 24.6544C29.1685 24.7005 29.1014 24.7612 29.048 24.8332C28.9946 24.9052 28.9559 24.987 28.9342 25.0739C28.9124 25.1608 28.908 25.2512 28.9211 25.3398C28.9763 25.7128 29.3242 25.9705 29.6962 25.9149L44.3709 23.7409C44.3804 23.7387 44.3902 23.7464 44.3917 23.7562L44.6348 25.3969C44.6355 25.4017 44.6343 25.4066 44.6314 25.4105C44.6285 25.4145 44.6241 25.4171 44.6193 25.4178L29.9443 27.5919C29.8556 27.605 29.7704 27.6354 29.6935 27.6815C29.6167 27.7275 29.5496 27.7883 29.4962 27.8603C29.4428 27.9322 29.4041 28.014 29.3823 28.101C29.3605 28.1879 29.3561 28.2783 29.3692 28.3669C29.3958 28.5459 29.4923 28.7071 29.6376 28.8149C29.783 28.9228 29.9652 28.9685 30.1442 28.942L44.8194 26.7679C45.5739 26.6562 46.0967 25.9515 45.985 25.1971ZM35.452 21.4268H39.6711C39.4004 22.0937 38.7466 22.5657 37.9837 22.5657H37.1395C36.3765 22.5656 35.7227 22.0937 35.452 21.4268ZM33.5897 19.4719V19.2364C33.5898 19.08 33.652 18.93 33.7626 18.8194C33.8732 18.7088 34.0232 18.6466 34.1796 18.6465H40.9523C41.1087 18.6466 41.2586 18.7088 41.3692 18.8194C41.4798 18.93 41.542 19.08 41.5422 19.2364V19.4719C41.542 19.6283 41.4798 19.7783 41.3692 19.8889C41.2586 19.9995 41.1087 20.0617 40.9523 20.0618H34.1796C34.0232 20.0617 33.8732 19.9995 33.7626 19.8889C33.652 19.7783 33.5898 19.6283 33.5897 19.4719ZM23.0001 30.0314C24.2504 30.0314 25.2675 29.0142 25.2675 27.7639C25.2675 26.5136 24.2504 25.4964 23.0001 25.4964C21.7497 25.4964 20.7326 26.5136 20.7326 27.7639C20.7326 29.0142 21.7497 30.0314 23.0001 30.0314ZM23.0001 26.8613C23.4978 26.8613 23.9027 27.2662 23.9027 27.7639C23.9027 28.2617 23.4978 28.6666 23.0001 28.6666C22.5023 28.6666 22.0974 28.2617 22.0974 27.7639C22.0974 27.2662 22.5023 26.8613 23.0001 26.8613Z"
//                           fill="#074C3E"
//                         />
//                         <path
//                           d="M31.3776 40.5518L29.4689 37.3333C29.3758 37.1792 29.2256 37.0682 29.051 37.0244C28.8765 36.9806 28.6916 37.0075 28.5368 37.0993C28.382 37.1911 28.2697 37.3403 28.2244 37.5145C28.1791 37.6887 28.2044 37.8738 28.2949 38.0294L29.7669 40.5114H16.233L21.0517 32.3861C21.6681 32.6467 22.3307 32.7806 23 32.7799C23.6906 32.7799 24.349 32.6396 24.9483 32.3861L26.8114 35.5278C26.8571 35.6049 26.9175 35.6723 26.9892 35.726C27.0609 35.7798 27.1426 35.8189 27.2294 35.8411C27.3162 35.8632 27.4066 35.8681 27.4953 35.8553C27.584 35.8426 27.6694 35.8125 27.7464 35.7667C27.9021 35.6744 28.0147 35.524 28.0596 35.3487C28.1044 35.1733 28.0777 34.9874 27.9854 34.8317L26.1205 31.6871C27.2749 30.7671 28.017 29.3506 28.017 27.7631C28.017 24.9968 25.7664 22.7462 23 22.7462C20.2336 22.7462 17.983 24.9967 17.983 27.7631C17.983 29.3506 18.725 30.7672 19.8795 31.6871L14.6224 40.5518C13.6388 40.7447 12.8943 41.613 12.8943 42.6522V44.1845C12.8943 44.797 13.3925 45.2954 14.005 45.2954H31.9951C32.6075 45.2954 33.1058 44.797 33.1058 44.1845V42.6522C33.1057 41.6131 32.3612 40.7447 31.3776 40.5518ZM19.3479 27.7631C19.3479 25.7493 20.9862 24.111 23 24.111C25.0138 24.111 26.6521 25.7493 26.6521 27.7631C26.6521 29.777 25.0138 31.4152 23 31.4152C20.9862 31.4152 19.3479 29.777 19.3479 27.7631ZM31.7409 43.9306H14.259V42.6523C14.259 42.2249 14.6065 41.8771 15.0337 41.8765H15.0342L15.0356 41.8764H30.9642L30.9655 41.8765H30.966C31.3933 41.8771 31.7407 42.2249 31.7407 42.6523V43.9306H31.7409ZM9.3126 9.36142C9.2496 9.20753 9.14215 9.07591 9.00398 8.9834C8.86581 8.89088 8.70318 8.84166 8.5369 8.84204H8.53572C8.36925 8.84188 8.20652 8.89143 8.06839 8.98433C7.93025 9.07724 7.82301 9.20927 7.76038 9.36351C7.75838 9.36861 7.75629 9.3737 7.75438 9.37889L5.16177 16.186C5.09734 16.3552 5.10274 16.543 5.17678 16.7081C5.25082 16.8733 5.38744 17.0023 5.55658 17.0667C5.72573 17.1311 5.91354 17.1257 6.0787 17.0517C6.24386 16.9777 6.37285 16.841 6.43728 16.6719L6.91562 15.416H10.1391L10.6123 16.6699C10.6613 16.7997 10.7486 16.9114 10.8627 16.9904C10.9768 17.0693 11.1122 17.1115 11.2509 17.1116C11.3613 17.1116 11.47 17.0848 11.5678 17.0335C11.6656 16.9822 11.7495 16.908 11.8122 16.8172C11.875 16.7264 11.9148 16.6217 11.9282 16.5121C11.9416 16.4025 11.9282 16.2913 11.8892 16.188L9.32024 9.38053C9.31772 9.37415 9.31517 9.36778 9.3126 9.36142ZM7.43527 14.0511L8.53462 11.1647L9.62388 14.0511H7.43527ZM37.81 4.91797H35.8044C35.7148 4.91796 35.6261 4.9356 35.5432 4.96989C35.4604 5.00418 35.3852 5.05445 35.3218 5.11782C35.2585 5.18119 35.2082 5.25643 35.1739 5.33923C35.1396 5.42203 35.122 5.51078 35.122 5.6004V12.5048C35.1221 12.6858 35.194 12.8593 35.3219 12.9873C35.4499 13.1152 35.6234 13.1871 35.8044 13.1872H35.8074C35.8076 13.1872 37.6519 13.179 38.1602 13.179C39.5612 13.179 40.7011 12.0392 40.7011 10.6381C40.7011 9.7798 40.2728 9.02002 39.6192 8.55979C39.9192 8.16584 40.0814 7.68426 40.081 7.1891C40.0811 5.93679 39.0623 4.91797 37.81 4.91797ZM37.81 6.28283C38.3097 6.28283 38.7162 6.68938 38.7162 7.1891C38.7162 7.68882 38.3097 8.09537 37.81 8.09537C37.6627 8.09537 36.4869 8.09728 36.4869 8.09728V6.28292L37.81 6.28283ZM38.1603 11.8142C37.8548 11.8142 37.0682 11.8171 36.4869 11.8195V9.46442C36.6771 9.46369 38.1603 9.46215 38.1603 9.46215C38.8088 9.46215 39.3363 9.98971 39.3363 10.6382C39.3363 11.2867 38.8088 11.8142 38.1603 11.8142Z"
//                           fill="#074C3E"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_1417_1496">
//                           <rect width="46" height="46" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                   </div>
//                   <div className="card__content">
//                     <h4 className="card__title font-space-grotesk">
//                       <button onClick={() => setShowModal(!showModal)}>
//                         Free Consultation
//                       </button>
//                     </h4>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[30px] max-w-full">
//               <div className="feature">
//                 <div className="card card--custom">
//                   <div className="card__icon">
//                     <svg
//                       width="46"
//                       height="46"
//                       viewBox="0 0 46 46"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M35.2188 22.6406H31.1866C30.2428 22.6564 30.2407 24.0616 31.1866 24.0781H35.2188C36.8043 24.0781 38.0938 25.3676 38.0938 26.9531V32.7031H33.0625C32.8719 32.7031 32.6891 32.7788 32.5543 32.9136C32.4195 33.0484 32.3438 33.2313 32.3438 33.4219V34.8594C32.2999 36.7518 29.5191 36.7583 29.4688 34.8594V33.4219C29.4688 33.2313 29.393 33.0484 29.2582 32.9136C29.1234 32.7788 28.9406 32.7031 28.75 32.7031H23.7188C23.7029 31.758 22.2971 31.7587 22.2812 32.7031H17.9688C18.4122 27.9227 11.7774 27.9277 12.2188 32.7031H7.90625V26.9531C7.90625 25.3676 9.19569 24.0781 10.7812 24.0781H14.8134C15.0041 24.0781 15.1869 24.0024 15.3217 23.8676C15.4565 23.7328 15.5322 23.55 15.5322 23.3594C15.5322 23.1688 15.4565 22.9859 15.3217 22.8511C15.1869 22.7163 15.0041 22.6406 14.8134 22.6406H10.7812C8.40291 22.6406 6.46875 24.5748 6.46875 26.9531V39.8906C6.46875 42.269 8.40291 44.2031 10.7812 44.2031H35.2188C37.5971 44.2031 39.5312 42.269 39.5312 39.8906V26.9531C39.5312 24.5748 37.5971 22.6406 35.2188 22.6406ZM22.2812 42.7656H10.7812C9.19569 42.7656 7.90625 41.4762 7.90625 39.8906V34.1406H12.9375C13.1281 34.1406 13.3109 34.0649 13.4457 33.9301C13.5805 33.7953 13.6562 33.6125 13.6562 33.4219V31.9844C13.703 30.0912 16.4845 30.0876 16.5312 31.9844V33.4219C16.5312 33.6125 16.607 33.7953 16.7418 33.9301C16.8766 34.0649 17.0594 34.1406 17.25 34.1406H22.2812V35.5781C17.5008 35.1397 17.5052 41.7738 22.2812 41.3281V42.7656ZM38.0938 39.8906C38.0938 41.4762 36.8043 42.7656 35.2188 42.7656H23.7188V40.6094C23.7188 40.4188 23.643 40.2359 23.5082 40.1011C23.3734 39.9663 23.1906 39.8906 23 39.8906H21.5625C20.7862 39.9086 20.1106 39.2222 20.125 38.4531C20.125 37.6603 20.7697 37.0156 21.5625 37.0156H23C23.1906 37.0156 23.3734 36.9399 23.5082 36.8051C23.643 36.6703 23.7188 36.4875 23.7188 36.2969V34.1406H28.0312C27.5943 38.9232 34.2276 38.9167 33.7812 34.1406H38.0938V39.8906Z"
//                         fill="#074C3E"
//                       />
//                       <path
//                         d="M16.675 19.6815C15.5883 20.5491 15.5343 22.4307 16.5729 23.3594C14.9637 24.8472 16.1115 27.72 18.3281 27.6719H19.4062C19.5759 32.43 26.4263 32.4257 26.5937 27.6719H27.6719C29.8892 27.7207 31.0356 24.8472 29.4271 23.3594C30.4657 22.43 30.4117 20.5491 29.3243 19.6815C36.657 13.7971 32.4307 1.79616 23 1.79688C13.57 1.79616 9.34375 13.7986 16.6764 19.6815H16.675ZM23 29.8281C21.8112 29.8281 20.8437 28.8607 20.8437 27.6719H25.1562C25.1562 28.8607 24.1888 29.8281 23 29.8281ZM27.6719 26.2344H18.3281C16.9143 26.2099 16.9093 24.1033 18.3281 24.0781H27.6719C29.0857 24.1026 29.0907 26.2092 27.6719 26.2344ZM27.6719 22.6406H18.3281C16.9143 22.6162 16.9093 20.5095 18.3281 20.4844H27.6719C29.0857 20.5088 29.0907 22.6155 27.6719 22.6406ZM21.2146 14.3592C22.1346 14.8451 23.8647 14.8451 24.7847 14.3642L23.8488 19.0469H22.1512L21.2146 14.3592ZM23 3.23437C31.51 3.26312 34.845 14.3843 27.7315 19.0526C27.7114 19.0526 27.6927 19.0469 27.6719 19.0469H25.3144L26.5794 12.719C26.6113 12.5547 26.5849 12.3843 26.5047 12.2374C26.4245 12.0904 26.2956 11.976 26.1402 11.9138C25.9847 11.8517 25.8125 11.8457 25.6531 11.8969C25.4937 11.9481 25.3571 12.0533 25.2669 12.1943C25.2382 12.2389 24.5374 13.2969 23 13.2969C21.4784 13.2969 20.7589 12.2331 20.7323 12.1936C20.6424 12.052 20.5059 11.9463 20.3462 11.8948C20.1866 11.8433 20.014 11.8493 19.8583 11.9117C19.7026 11.974 19.5737 12.0889 19.4937 12.2363C19.4138 12.3837 19.3879 12.5545 19.4206 12.719L20.6856 19.0469H18.3281C18.3073 19.0469 18.2886 19.0526 18.2685 19.0526C11.1514 14.3807 14.495 3.26169 23 3.23437Z"
//                         fill="#074C3E"
//                       />
//                       <path
//                         d="M33.7554 6.48885L35.3769 5.64073C34.8802 7.59932 35.5436 9.9942 37.089 11.2434C35.4466 12.5688 34.8227 15.1519 35.4646 17.1846L33.6584 16.5542C32.7657 16.2559 32.2963 17.5856 33.1854 17.9112L36.6175 19.1094C37.2521 19.3538 37.858 18.5495 37.4354 18.0075C36.054 16.2466 36.5765 12.7628 38.7256 11.9082C39.3099 11.6912 39.3113 10.7942 38.7256 10.5785C36.5758 9.72323 36.0547 6.23945 37.4354 4.47851C37.8882 3.89632 37.1637 3.05323 36.5204 3.41907L33.0884 5.21595C32.2582 5.65798 32.9195 6.92082 33.7554 6.48885ZM7.27449 11.9082C9.42499 12.7643 9.94537 16.2459 8.56465 18.0075C8.47494 18.1315 8.42707 18.2808 8.42798 18.4337C8.4289 18.5867 8.47856 18.7354 8.56975 18.8583C8.66093 18.9811 8.7889 19.0717 8.93507 19.1168C9.08124 19.162 9.238 19.1594 9.38258 19.1094L12.8146 17.9112C13.7008 17.5849 13.2387 16.2588 12.3417 16.5542L10.5347 17.1846C11.1773 15.1519 10.5534 12.5688 8.91108 11.2434C10.4564 9.9942 11.1198 7.59932 10.6231 5.64001L12.2446 6.48885C13.0877 6.91435 13.7418 5.66732 12.9116 5.21595L9.4789 3.41907C8.8349 3.0561 8.11112 3.89345 8.56465 4.47851C9.94608 6.23945 9.42427 9.72323 7.27449 10.5778C6.69015 10.7934 6.68871 11.6926 7.27449 11.9082Z"
//                         fill="#074C3E"
//                       />
//                     </svg>
//                   </div>
//                   <div className="card__content">
//                     <h4 className="card__title font-space-grotesk">
//                       <button>Connect Us</button>
//                     </h4>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//             </div>
//           </div>
//         </section>
//       </div>
//       {submitModal && (
//         <div className="modal-container">
//           <div className="modal-content">
//             <div className="p-5 text-center">
//               <CheckCircle
//                 size={18}
//                 color="green"
//                 className="stroke-1.5 mx-auto mt-3 h-16 w-16"
//               />
//               <div className="mt-4 text-base font-space-grotesk">Thank you for getting in touch with us! One of our experts will connect with you shortly to assist you further.</div>
//             </div>
//             <div className="px-5 pb-8 text-center">
//               <button
//                 data-tw-merge=""
//                 type="button"
//                 className="transition font-space-grotesk gradient-button duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary w-24"
//                 onClick={closeHandler}
//               >
//                 Okay
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <section className="wrapper gradient-bg bg-repeat bg-fixed bg-image section-frame xl:mx-[1.5rem] xl:min-h-[68vh] choose-height  xl:rounded-[1rem] lg:mx-[1.5rem] lg:rounded-[1rem] md:mx-[1.5rem] md:rounded-[1rem] ">
//         {/* <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-8 xl:pb-8 lg:pb-8 md:pb-8"> */}
//         <div className="container">
//           <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 mt-[-50px] items-center lg:mb-[8rem] xl:mb-[8rem] sm:mb-0">
//             <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full text-[#cacaca] xl:px-0 lg:px-0 mt-[50px]">
//               <div className="mb-5 flex custom-logo">
//                 <img
//                   className="logo-dark w-40 h-40"
//                   src={logoImage}
//                   alt="image"
//                   onError={() => setLogoImage(logo)}
//                 />
//               </div>
//               <h2 className="text-[calc(1.2rem_+_1.14vw)] font-bold leading-[1.2] xl:text-[1.8rem] mb-3 text-white font-space-grotesk">
//                 Why Choose Law Wheels?
//               </h2>
//               <p className="lead !text-[1.05rem] !leading-[1.55] !font-normal xl:pr-5 lg:pr-5 font-space-grotesk text-justify">
//                 Choose Law Wheels for expert legal solutions, personalized
//                 support, and a proven track record of delivering timely,
//                 effective outcomes across diverse legal challenges.
//               </p>
//             </div>
//             <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!order-2 xl:!ml-auto lg:!order-2 lg:!ml-auto xl:px-0 lg:px-0 mt-[50px]">
//               <div className="card !rounded-[0.8rem] xl:!mr-6 lg:!mr-6 !bg-[#e6e5f4]">
//                 <div className="card-body p-3 choose-padding">
//                   <div className="flex flex-row">
//                     <div>
//                       <span className="icon btn btn-block btn-lg !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem] btn-white pointer-events-none !mr-4">
//                         <span className="number text-[#605dba] font-space-grotesk">
//                           01
//                         </span>
//                       </span>
//                     </div>
//                     <div>
//                       <h3 className="!mb-1 text-[#605dba] font-space-grotesk">
//                         Compassionate Legal Guidance
//                       </h3>
//                       <p className="!mb-0 font-space-grotesk text-xs">
//                         We provide empathetic support throughout your divorce,
//                         ensuring care and understanding.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="card !rounded-[0.8rem] xl:!ml-16 lg:!ml-16 mt-6 !bg-[#fbe7f3]">
//                 <div className="card-body p-3 choose-padding">
//                   <div className="flex flex-row">
//                     <div>
//                       <span className="icon btn btn-block btn-lg !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem] btn-white pointer-events-none !mr-4">
//                         <span className="number text-[#e668b3] font-space-grotesk">
//                           02
//                         </span>
//                       </span>
//                     </div>
//                     <div>
//                       <h3 className="!mb-1 text-[#e668b3] font-space-grotesk">
//                         Expertise in Family Law
//                       </h3>
//                       <p className="!mb-0 font-space-grotesk text-xs">
//                         {/* Our skilled legal team handles mutual divorces
//                         precisely, ensuring smooth and accurate procedures. */}
//                         Our skilled legal team handles mutual divorces precisely
//                         and accurate procedures.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="card !rounded-[0.8rem] xl:!ml-14 lg:!ml-14 mt-6 !bg-[#e1f6f0]">
//                 <div className="card-body p-3 choose-padding">
//                   <div className="flex flex-row">
//                     <div>
//                       <span className="icon btn btn-block btn-lg !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem] btn-white pointer-events-none !mr-4">
//                         <span className="number text-[#45c4a0] font-space-grotesk">
//                           03
//                         </span>
//                       </span>
//                     </div>
//                     <div>
//                       <h3 className="!mb-1 text-[#45c4a0] font-space-grotesk">
//                         Efficient and Confidential
//                       </h3>
//                       <p className="!mb-0 font-space-grotesk text-xs">
//                         {/* We safeguard your privacy and manage your case
//                         effectively, minimizing court appearances and stress. */}
//                         We safeguard your privacy and minimizing court
//                         appearances and stress.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="card !rounded-[0.8rem] xl:!mr-6 lg:!mr-6 mb-8  mt-6 !bg-[#e6e5f4]">
//                 <div className="card-body p-3 choose-padding">
//                   <div className="flex flex-row">
//                     <div>
//                       <span className="icon btn btn-block btn-lg !shadow-[rgba(30,34,40,0.02)_0_2px_1px,rgba(30,34,40,0.02)_0_4px_2px,rgba(30,34,40,0.02)_0_8px_4px,rgba(30,34,40,0.02)_0_16px_8px,rgba(30,34,40,0.03)_0_32px_16px] !rounded-[0.8rem] btn-white pointer-events-none !mr-4">
//                         <span className="number text-[#605dba] font-space-grotesk">
//                           04
//                         </span>
//                       </span>
//                     </div>
//                     <div>
//                       <h3 className="!mb-1 text-[#605dba] font-space-grotesk">
//                         Custom Legal Solutions
//                       </h3>
//                       <p className="!mb-0 font-space-grotesk text-xs">
//                         We create customized agreements that fit your unique
//                         needs, ensuring fair outcomes for both parties.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="wrapper">
//         <div className="container pt-4 xl:!pt-[2rem] lg:!pt-[2rem] md:!pt-[2rem] sm:!pt-[2rem] lg:mb-5 relative">
//         <h1 className="text-xl font-bold font-space-grotesk">
//         Not every divorce needs to be bitter - Choose Mutual Respect.
//                   </h1>
//           <div className="card !bg-[#eaebea] mb-10 mt-10">
//             <div className="card-body xl:!p-[2.4rem] lg:!p-[2.5rem] md:!p-[2.5rem] xxl:!py-24 p-[20px] !relative">
//               <div className="absolute hidden lg:block xl:block mutual-container">
//                 <figure className="m-0 p-0">
//                   <img
//                     className="w-full max-w-full !h-auto"
//                     src={mutualImage}
//                     onError={() => setMutualImage(mutualDivorce)}
//                     alt="image"
//                   />
//                 </figure>
//               </div>

//               <div className="flex flex-wrap mx-[-10px]">
//                 <div className="lg:w-8/12 xl:w-8/12 w-full flex-[0_0_auto] px-[15px] xl:px-[15px]">
//                   <p className="text-base font-bold font-space-grotesk">
//                     What is Mutual Divorce?
//                   </p>
//                   <div>
//                     <div className="info p-0">
//                       <p className="!mb-1 text-[.8rem] !leading-[1.5] font-space-grotesk">
//                         Mutual divorce is a legal process where both spouses
//                         agree to dissolve their marriage amicably. It is one of
//                         the most straightforward and conflict-free ways to end a
//                         marriage, as both parties cooperate on the terms of
//                         separation, including child custody, alimony, and
//                         property division. With mutual consent, the divorce
//                         process becomes quicker, more cost-effective, and less
//                         emotionally taxing.{" "}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Service />
//           {/* <div className="flex flex-col items-center">
//             <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] xl:!px-12 font-space-grotesk text-center">
//               Mutual Divorce
//             </h3>
//             <div className="w-full max-w-4xl mx-auto text-center">
//               <TabMenu tabs={tabs} />
//             </div>
//           </div> */}
//         </div>
//       </section>
//       <section className="wrapper">
//         <div className="container pt-5 xl:!pt-[2rem] lg:!pt-[2rem] md:!pt-[2rem] sm:!pt-[2rem]  relative">
//           <div className="flex flex-col items-center mb-16">
//             <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] xl:!px-12 font-space-grotesk text-center">
//               Child Custody
//             </h3>
//             <h3 className="xl:text-base font-bold !leading-[1.25] tracking-[-0.03em] xl:!px-12 font-space-grotesk text-center">
//               Prioritizing Your Child’s Well-Being
//             </h3>
//           </div>
//           <div className="card !bg-[#eaebea] mb-10">
//             <div className="card-body xl:!p-[2.4rem] lg:!p-[2.5rem] md:!p-[2.5rem] xxl:!py-24 p-[20px] !relative">
//               <div className="absolute hidden lg:block xl:block child-container">
//                 <figure className="m-0 p-0">
//                   <img
//                     className="w-full max-w-full !h-auto"
//                     src={childImage}
//                     onError={() => setChildImage(childCustody)}
//                     alt="image"
//                   />
//                 </figure>
//               </div>

//               <div className="flex flex-wrap mx-[-10px]">
//                 <div className="lg:w-8/12 xl:w-8/12 w-full flex-[0_0_auto] px-[15px] xl:px-[15px]">
//                   <p className="text-sm font-bold font-space-grotesk">
//                     Compassionate and expert legal guidance to navigate child
//                     custody matters, ensuring the best interests of your child
//                     come first.
//                   </p>
//                   <div>
//                     <div className="info p-0">
//                       <p className="!mb-1 text-[.8rem] !leading-[1.5] font-space-grotesk">
//                         Child custody can be one of the most challenging aspects
//                         of a divorce. At Law Wheels, we understand the emotional
//                         complexities involved and prioritize the well-being of
//                         your children above all else. Our experienced legal team
//                         is dedicated to helping parents reach amicable
//                         agreements that foster a supportive and stable
//                         environment for their children.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="wrapper !bg-[#ffffff]">
//         <div className="container py-[2.5rem] xl:!py-[2rem] lg:!py-[2rem] md:!py-[2rem]">
//           <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-40px] mb-[4.5rem] xl:mb-[7rem] lg:mb-[7rem] md:mb-[7rem]">
//             <div className="md:w-6/12 lg:w-4/12 xl:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[40px]">
//               <div className="flex flex-row">
//                 <div>
//                   <div className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#54a8c7] text-aqua !mr-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 512 512"
//                     >
//                       <circle
//                         className="lineal-fill"
//                         cx="283.8"
//                         cy="283.8"
//                         r="143"
//                       />
//                       <path
//                         className="lineal-stroke"
//                         d="M283.8 441.8c-87.1 0-158-70.9-158-158s70.9-158 158-158 158 70.9 158 158-70.9 158-158 158zm0-286.1c-70.7 0-128.1 57.3-128.1 128.1S213 411.9 283.8 411.9s128.1-57.3 128.1-128.1c-.1-70.7-57.4-128-128.1-128.1z"
//                       />
//                       <path
//                         className="lineal-fill"
//                         d="M283.8 210.5c40.5 0 73.3 32.8 73.3 73.3s-32.8 73.3-73.3 73.3-73.3-32.8-73.3-73.3"
//                       />
//                       <path
//                         className="lineal-stroke"
//                         d="M283.8 372.1c-48.7-.1-88.2-39.5-88.2-88.3.2-8.2 7.1-14.8 15.3-14.5 7.9.2 14.3 6.6 14.5 14.5 0 32.2 26.1 58.4 58.4 58.4s58.4-26.1 58.4-58.4-26.1-58.4-58.4-58.4c-8.2-.2-14.8-7.1-14.5-15.3.2-7.9 6.6-14.3 14.5-14.5 48.7-.5 88.7 38.6 89.2 87.3s-38.6 88.7-87.3 89.2h-1.9z"
//                       />
//                       <path
//                         className="lineal-fill"
//                         d="M107.9 55.1l-5.3 47.5-47.5 5.3-40.2-40.1 52.9-52.9z"
//                       />
//                       <path
//                         className="lineal-stroke"
//                         d="M283.8 55.7c-55.3 0-108.8 20.1-150.4 56.7l-15.2-15.2 4.5-40.4c.5-4.5-1.1-9-4.3-12.2L78.3 4.4c-5.8-5.8-15.3-5.8-21.1 0L4.4 57.2c-5.8 5.8-5.8 15.3 0 21.1l40.1 40.1c2.8 2.8 6.6 4.4 10.6 4.4.5 0 1.1 0 1.6-.1l40.4-4.5 15.2 15.2c-36.6 41.5-56.7 95-56.7 150.4C55.7 409.6 158 512 283.8 512c66.2 0 129.1-28.7 172.4-78.7 5.6-6.1 5.1-15.6-1-21.1s-15.6-5.1-21.1 1l-.5.5c-37.7 43.4-92.3 68.4-149.8 68.4-109.3 0-198.3-89-198.3-198.3 0-47.4 17-93.3 48-129.2l140.2 140.2c5.8 5.8 15.3 5.8 21.1 0s5.8-15.3 0-21.1L154.6 133.5c35.9-31 81.8-48 129.2-48 109.4 0 198.3 89 198.3 198.3 0 8.3 6.7 14.9 14.9 14.9s14.9-6.7 14.9-14.9C512 158 409.6 55.7 283.8 55.7zM36.1 67.8l31.7-31.7 24.5 24.5-3.2 28.5-28.5 3.2-24.5-24.5z"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="!mb-1 !text-[1rem] !leading-[1.45] font-space-grotesk">
//                     Understanding Your Needs
//                   </h4>
//                   <p className="!mb-0 font-space-grotesk">
//                     We listen carefully to understand your family's unique
//                     dynamics and work to develop a custody plan that reflects
//                     your child's best interests and maintains their routines and
//                     stability.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="md:w-6/12 lg:w-4/12 xl:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[40px]">
//               <div className="flex flex-row">
//                 <div>
//                   <div className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#e2626b] text-red !mr-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 316.5 409.6"
//                     >
//                       <path
//                         className="lineal-stroke"
//                         d="M158.2 409.6c-59.4 0-107.5-48.2-107.5-107.5S99 194.6 158.3 194.6s107.5 48.2 107.5 107.5c0 20-5.6 39.6-16.1 56.6-3.4 5.5-10.6 7.1-16 3.7s-7.1-10.6-3.7-16c24.4-39.5 12.2-91.3-27.3-115.8S111.3 218.5 86.8 258s-12.2 91.3 27.3 115.8c22.5 13.9 50.2 16.4 74.8 6.8 6-2.3 12.7.6 15.1 6.6 2.3 6-.6 12.7-6.6 15.1-12.5 4.8-25.8 7.3-39.2 7.3z"
//                       />
//                       <path
//                         className="lineal-fill"
//                         d="M158.2 206.2c19.9 0 39.4 6.2 55.6 17.8l88.1-152.5c4.6-8 3.7-18-2.2-25l-23-27.1c-4.1-4.9-10.2-7.7-16.6-7.7H56.4c-6.4 0-12.5 2.8-16.6 7.7l-23 27.2c-6 7-6.9 17-2.2 25l88 152.4c16.2-11.6 35.7-17.8 55.6-17.8zm73.4-134l-73.3 127-73.4-127h146.7z"
//                       />
//                       <path
//                         className="lineal-stroke"
//                         d="M213.8 235.6c-2.4 0-4.8-.8-6.8-2.2-29.2-20.8-68.5-20.8-97.7 0-5.2 3.7-12.5 2.5-16.2-2.7l-.6-.9-88-152.5c-7-12.2-5.7-27.5 3.4-38.3l23-27.2C37.2 4.3 46.6 0 56.4 0h203.7c9.8 0 19.2 4.3 25.5 11.8l23 27.1c9.1 10.8 10.5 26.1 3.4 38.3l-88.1 152.5c-1.6 2.8-4.4 4.9-7.6 5.6-.8.2-1.6.3-2.5.3zM56.4 23.3c-3 0-5.8 1.3-7.8 3.6L25.7 54c-2.8 3.3-3.2 7.9-1 11.7l82.1 142c11.2-6.1 23.4-10.2 36-12.1L74.8 78c-3.2-5.6-1.3-12.7 4.3-15.9 1.8-1 3.8-1.6 5.8-1.6h146.7c6.4 0 11.6 5.2 11.6 11.7 0 2-.5 4-1.6 5.8l-67.9 117.7c12.6 1.8 24.8 5.9 36 12.1l82-142c2.1-3.7 1.7-8.4-1-11.6l-23-27.2c-1.9-2.3-4.8-3.6-7.7-3.6l-203.6-.1zm48.7 60.5l53.2 92.1 53.2-92.1H105.1zm45.1 192.9l-4.4 2.7c-1.1.8-2.4 1.2-3.8 1.2-4.4 0-7.4-4.7-7.4-9.4-.1-3.3 1.6-6.3 4.4-8l20-12.1c1.3-.8 2.9-1.1 4.4-1.1 4.8 0 10.4 2.9 10.4 7.4v96.2c0 4.9-5.9 7.3-11.8 7.3s-11.8-2.4-11.8-7.3v-76.9z"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="!mb-1 !text-[1rem] !leading-[1.45] font-space-grotesk">
//                     Customized Custody Agreements
//                   </h4>
//                   <p className="!mb-0 font-space-grotesk">
//                     {" "}
//                     Whether you’re seeking joint custody or sole custody, we
//                     craft agreements that align with your child’s needs,
//                     ensuring that both parents remain active participants in
//                     their child’s life.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="md:w-6/12 lg:w-4/12 xl:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[40px]">
//               <div className="flex flex-row">
//                 <div>
//                   <div className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#d16b86] text-pink !mr-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 409.6 409.6"
//                     >
//                       <path
//                         className="lineal-stroke"
//                         d="M204.8 409.6C91.9 409.6 0 317.7 0 204.8c0-49.9 18.2-98.1 51.2-135.5 4.4-5 12-5.5 17-1.1s5.5 12 1.1 17c-29.1 33-45.2 75.5-45.2 119.5 0 99.6 81.1 180.7 180.7 180.7s180.7-81.1 180.7-180.7S304.4 24.1 204.8 24.1c-27.3-.1-54.2 6.1-78.7 18-6 2.9-13.2.4-16.1-5.6-2.9-6-.4-13.2 5.6-16.1C143.4 6.9 173.9-.1 204.8 0c112.9 0 204.8 91.9 204.8 204.8s-91.9 204.8-204.8 204.8z"
//                       />
//                       <path
//                         className="lineal-fill"
//                         d="M349.4 204.8c0 79.8-64.7 144.6-144.6 144.6S60.2 284.6 60.2 204.8 125 60.2 204.8 60.2 349.4 125 349.4 204.8z"
//                       />
//                       <path
//                         className="lineal-stroke"
//                         d="M204.8 361.4c-86.4 0-156.6-70.2-156.6-156.6S118.4 48.2 204.8 48.2s156.6 70.2 156.6 156.6-70.2 156.6-156.6 156.6zm0-289.1c-73.1 0-132.5 59.4-132.5 132.5s59.4 132.5 132.5 132.5 132.5-59.5 132.5-132.5S277.9 72.3 204.8 72.3z"
//                       />
//                       <path
//                         className="lineal-stroke"
//                         d="M200.9 246.7c-8.8 0-17.2-3.5-23.5-9.7L145 204.5c-4.7-4.7-4.7-12.3 0-17s12.3-4.7 17 0l32.5 32.5c3.6 3.5 9.3 3.5 12.8 0l49.8-49.9c4.7-4.7 12.3-4.7 17 0s4.7 12.3 0 17L224.4 237c-6.2 6.2-14.7 9.7-23.5 9.7z"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="!mb-1 !text-[1rem] !leading-[1.45] font-space-grotesk">
//                     Mediation and Negotiation
//                   </h4>
//                   <p className="!mb-0 font-space-grotesk">
//                     {" "}
//                     We aim to reduce conflict through mediation and negotiation,
//                     helping you reach a custody arrangement that is fair,
//                     balanced, and amicable, minimizing the emotional toll on
//                     your family.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="md:w-6/12 lg:w-4/12 xl:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[40px]">
//               <div className="flex flex-row">
//                 <div>
//                   <div className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#747ed1] text-purple !mr-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 409.6 356.2"
//                     >
//                       <path
//                         className="lineal-fill"
//                         d="M265.2 180.7H144.4v-17.6c0-33.3 27-60.4 60.4-60.4s60.4 27 60.4 60.4v17.6z"
//                       />
//                       <path
//                         className="lineal-stroke"
//                         d="M265.2 191.7H144.4c-6.1 0-11.1-5-11.1-11.1V163c-.5-39.5 31.1-71.8 70.6-72.3s71.8 31.1 72.3 70.6v19.3c0 6.2-4.9 11.1-11 11.1zm-109.7-22.1h98.6v-6.5c.4-27.2-21.4-49.6-48.6-50s-49.6 21.4-50 48.6v7.9z"
//                       />
//                       <path
//                         className="lineal-fill"
//                         d="M250.4 56.7c0 25.2-20.4 45.6-45.6 45.6s-45.6-20.4-45.6-45.6 20.4-45.6 45.6-45.6c25.2 0 45.6 20.4 45.6 45.6z"
//                       />
//                       <path
//                         className="lineal-stroke"
//                         d="M204.8 113.3c-31.3 0-56.7-25.4-56.7-56.7S173.5-.1 204.8-.1s56.7 25.4 56.7 56.7c-.1 31.3-25.4 56.7-56.7 56.7zm0-91.2c-19.1 0-34.5 15.4-34.5 34.5s15.4 34.5 34.5 34.5 34.5-15.4 34.5-34.5c0-19-15.5-34.4-34.5-34.5zm193.7 334.1H296.8c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.7c-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.4-6 2.3-11.9 8.3-13.3 5.8-1.4 11.7 2.2 13.2 8 1.2 4.9 1.8 9.9 1.8 14.9v14.8c0 6.1-4.9 11.1-11.1 11.1z"
//                       />
//                       <path
//                         className="lineal-stroke"
//                         d="M347.6 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.2 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.3-27.3 27.4 0 15.1 12.3 27.3 27.4 27.3S375 256 375 241c0-15.1-12.3-27.3-27.4-27.4zM112.8 356.2H11.1c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1.2 10.9 5.3 10.7 11.4-.2 5.9-4.9 10.6-10.7 10.7-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.5-5.9 2.2-11.9 8.1-13.4s11.9 2.2 13.4 8.1c1.2 4.9 1.8 9.9 1.8 14.9v14.8c.1 6.1-4.9 11.1-11.1 11.1.1 0 .1 0 0 0z"
//                       />
//                       <path
//                         className="lineal-stroke"
//                         d="M61.9 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.1 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.2-27.3 27.4 0 15.1 12.2 27.4 27.4 27.4 15.1 0 27.3-12.2 27.3-27.3 0-15.2-12.3-27.4-27.4-27.5zm142.9 72.1c-6.1 0-11.1-5-11.1-11.1v-56.4c-.2-6.1 4.6-11.2 10.7-11.4 6.1-.2 11.2 4.6 11.4 10.7v57.1c.1 6.2-4.9 11.1-11 11.1z"
//                       />
//                       <path
//                         className="lineal-stroke"
//                         d="M279.5 285.7H130.1c-6.1.2-11.2-4.6-11.4-10.7s4.6-11.2 10.7-11.4h150.2c6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.8z"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="!mb-1 !text-[1rem] !leading-[1.45] font-space-grotesk">
//                     Legal Advocacy in Court
//                   </h4>
//                   <p className="!mb-0 font-space-grotesk">
//                     {" "}
//                     If an amicable agreement cannot be reached, our team is
//                     prepared to advocate fiercely for your parental rights in
//                     court, presenting a compelling case to ensure a favorable
//                     outcome for you and your child.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
    

//       <div className="pt-3 lg:pt-10 xl:pt-10 xxl:pt-20">
//         <FAQ />
//       </div>
//       <FreeConsultation showModal={showModal} setShowModal={setShowModal} />
//       <Footer />
      
//     </>
//   );
// };

// export default MutualDivorceLandingPage;



import React from "react";

const MutualDivorceLandingPage = () => {
  const services = [
    {
      title: "Customer Support",
      description:
        "Provide informative articles, guides, and resources to educate users about different types of loans",
      icon: "👩‍💼", // Placeholder for actual icon
    },
    {
      title: "Loan Reviews",
      description:
        "Provide comprehensive and unbiased reviews of various types of loans, including personal loans",
      icon: "⭐", // Placeholder for actual icon
    },
    {
      title: "Loan Comparison",
      description:
        "Develop interactive tools or tables that allow users to compare different loan options side by side",
      icon: "📊", // Placeholder for actual icon
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 py-10">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white border border-[#e5f0ed] shadow-md rounded-lg  text-center w-[300px] sm:w-[280px] md:w-[300px] xl:w-[340px]"
        >
        <div className="bg-[#f5fbf7] m-2 rounded-lg">
          <div className="flex justify-center mb-4">
            <span className="bg-white p-4 rounded-full shadow-md text-4xl">
              {service.icon}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-[#1f2937] mb-3">
            {service.title}
          </h3>
          <p className="text-sm text-[#6b7280] mb-6">{service.description}</p>
          <div className="flex justify-center">
            <button className="bg-white p-2 rounded-full shadow-md hover:scale-105 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#047857]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.5-7.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-2.793l4.146 4.146a.5.5 0 01-.708.708L10 12.707V15.5a.5.5 0 01-1 0v-4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default MutualDivorceLandingPage;

