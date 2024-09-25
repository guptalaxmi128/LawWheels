import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { CheckCircle } from "lucide-react";
import {
  addHeDetails,
  addRequiredDetails,
  addSheDetails,
} from "../../actions/mutualForm/mutualForm";
import Loader from "../../shared/Loader";

const MutualDivorceForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPerson, setSelectedPerson] = useState("she");
  const [showModal, setShowModal] = useState(false);
  const [submitModal, setSubmitModal] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);

  const openModal = () => {
    if (!hasSelected) {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSelectPerson = (person) => {
    setSelectedPerson(person);
    setHasSelected(true);
    closeModal();
  };

  const validationSchemaStep1 = Yup.object({
    // Validation schema for step 1
    husbandCity: Yup.string().required("City is required"),
    name: Yup.string().required("Name is required"),
    religion: Yup.string().required("Religion is required"),
    fathersName: Yup.string().required("Father's Name is required"),
    dob: Yup.date().required("Date of Birth is required"),
    contactNumber: Yup.string()
      .required("Contact Number is required")
      .matches(/^\d{10}$/, "Contact Number must be exactly 10 digits"),
      email: Yup.string()
    .email("Invalid email address")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please provide a valid email address."
    )
    .required("Please provide a valid email address."),
    residenceAddress: Yup.string().required("Residence Address is required"),
    presentAddress: Yup.string().required("Present Address is required"),
  });

  const validationSchemaStep2 = Yup.object({
    // Validation schema for step 2
    wifeCity: Yup.string().required("City is required"),
    wifeName: Yup.string().required("Name is required"),
    wifeReligion: Yup.string().required("Religion is required"),
    wifeFathersName: Yup.string().required("Father's Name is required"),
    wifeDob: Yup.date().required("Date of Birth is required"),
    wifeContactNumber: Yup.string()
      .required("Contact Number is required")
      .matches(/^\d{10}$/, "Contact Number must be exactly 10 digits"),
      wifeEmail: Yup.string()
      .email("Invalid email address")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please provide a valid email address."
      )
      .required("Please provide a valid email address."),
    wifeResidenceAddress: Yup.string().required(
      "Residence Address is required"
    ),
    wifePresentAddress: Yup.string().required("Present Address is required"),
  });

  const validationSchemaStep3 = Yup.object({
    // Validation schema for step 3
    marriageCity: Yup.string().required("City is required"),
    dateOfMarriage: Yup.date().required("Date of Marriage is required"),
    placeOfMarriage: Yup.string().required("Place of Marriage is required"),
    postMarriageAddress: Yup.string().required(
      "Post-marriage address is required"
    ),
    noOfChildren: Yup.string().required("Please select an option"),
    settlement: Yup.string().required("Please select an option"),
    assets: Yup.string().required("Please select an option"),
    litigations: Yup.string().required("Please select an option"),
    description: Yup.string().required("Comment is required"),
  });

  const handleSubmitStep1 = async (values) => {
    console.log("Step 1 values:", values);
    let heDetails = {
      he_mobileNumber: values.contactNumber,
      he_city: values.husbandCity,
      he_name: values.name,
      he_religion: values.religion,
      he_fatherName: values.fathersName,
      he_email: values.email,
      he_dateOfBirth: values.dob,
      he_residence_address: values.residenceAddress,
      he_present_address: values.presentAddress,
    };

    let sheDetails = {
      she_mobileNumber: values.wifeContactNumber,
      she_husbandCity: values.wifeCity,
      she_name: values.wifeName,
      she_religion: values.wifeReligion,
      she_fatherName: values.wifeFathersName,
      she_email: values.wifeEmail,
      she_dateOfBirth: values.wifeDob,
      she_residence_address: values.wifeResidenceAddress,
      she_present_address: values.wifePresentAddress,
    };

    if (id) {
      sheDetails = {
        ...sheDetails,
        divorceId: id,
      };
      heDetails = {
        ...heDetails,
        divorceId: id,
      };
    }

    try {
      setLoading(true);
      if (selectedPerson === "he") {
        const res = await dispatch(addHeDetails(heDetails));
        console.log("Add He Details Response:", res);
        setId(res.data.divorceId);
      } else {
        const res = await dispatch(addSheDetails(sheDetails));
        console.log("Add She Details Response:", res);
        setId(res.data.divorceId);
      }

      nextStep();
    } catch (error) {
      console.error("Error submitting step 1 details:", error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitStep2 = async (values) => {
    console.log("Step 2 values:", values);
    let heDetails = {
      he_mobileNumber: values.contactNumber,
      he_city: values.husbandCity,
      he_name: values.name,
      he_religion: values.religion,
      he_fatherName: values.fathersName,
      he_email: values.email,
      he_dateOfBirth: values.dob,
      he_residence_address: values.residenceAddress,
      he_present_address: values.presentAddress,
    };

    let sheDetails = {
      she_mobileNumber: values.wifeContactNumber,
      she_husbandCity: values.wifeCity,
      she_name: values.wifeName,
      she_religion: values.wifeReligion,
      she_fatherName: values.wifeFathersName,
      she_email: values.wifeEmail,
      she_dateOfBirth: values.wifeDob,
      she_residence_address: values.wifeResidenceAddress,
      she_present_address: values.wifePresentAddress,
    };

    if (id) {
      sheDetails = {
        ...sheDetails,
        divorceId: id,
      };
      heDetails = {
        ...heDetails,
        divorceId: id,
      };
    }

    try {
      setLoading(true);
      if (selectedPerson === "he") {
        const res = await dispatch(addSheDetails(sheDetails));
        console.log("Add She Details Response:", res);
        setId(res.data.divorceId);
      } else {
        const res = await dispatch(addHeDetails(heDetails));
        console.log("Add He Details Response:", res);
        setId(res.data.divorceId);
      }

      nextStep();
    } catch (error) {
      console.error("Error submitting step 2 details:", error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitStep3 = async (values) => {
    // console.log("Step 3 values:", values);
    const requiredDetails = {
      cityOfMarriage: values.marriageCity,
      marriage_date: values.dateOfMarriage,
      placeOfMarriage: values.placeOfMarriage,
      doYouHave_children: values.noOfChildren === "yes",
      is_maintenanceAlimony: values.settlement === "yes",
      is_settlementRegardingJointAssets: values.assets === "yes",
      any_pending_ligitations: values.litigations === "yes",
      comment: values.description,
      post_marriage_address: values.postMarriageAddress,
      id,
    };
    console.log(requiredDetails);
    try {
      setLoading(true);
      const res = await dispatch(addRequiredDetails(requiredDetails));
      console.log("Add Required Details Response:", res);
      setSubmitModal(true);
    } catch (error) {
      console.error("Error submitting step 3 details:", error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const closeHandler = () => {
    setSubmitModal(false);
    navigate("/process");
  };

  const stepsHe = [
    {
      title: "He's Details",
      subtitle: "Please fill in husband's details",
      fields: [
        {
          name: "husbandCity",
          label: "City where Husband belongs to",
          type: "text",
        },
        { name: "name", label: "Name", type: "text" },
        { name: "religion", label: "Religion", type: "text" },
        { name: "fathersName", label: "Father's Name", type: "text" },
        { name: "dob", label: "Date of Birth", type: "date" },
        { name: "contactNumber", label: "Contact Number", type: "text" },
        { name: "email", label: "Email", type: "email" },
        { name: "residenceAddress", label: "Residence Address", type: "text" },
        { name: "presentAddress", label: "Present Address", type: "text" },
      ],
      handleSubmit: handleSubmitStep1,
      validationSchema: validationSchemaStep1,
    },
    {
      title: "She's Details",
      subtitle: "Please fill in wife's details",
      fields: [
        { name: "wifeCity", label: "City where Wife belongs to", type: "text" },
        { name: "wifeName", label: "Name", type: "text" },
        { name: "wifeReligion", label: "Religion", type: "text" },
        { name: "wifeFathersName", label: "Father's Name", type: "text" },
        { name: "wifeDob", label: "Date of Birth", type: "date" },
        { name: "wifeContactNumber", label: "Contact Number", type: "text" },
        { name: "wifeEmail", label: "Email", type: "email" },
        {
          name: "wifeResidenceAddress",
          label: "Residence Address",
          type: "text",
        },
        { name: "wifePresentAddress", label: "Present Address", type: "text" },
      ],
      handleSubmit: handleSubmitStep2,
      validationSchema: validationSchemaStep2,
    },
    {
      title: "Required Details",
      subtitle: "Please fill in required details",
      fields: [
        {
          name: "marriageCity",
          label: "City in which you got married",
          type: "text",
        },
        { name: "dateOfMarriage", label: "Date of Marriage", type: "date" },
        {
          name: "placeOfMarriage",
          label: "Place of Marriage (Name of Banquet)",
          type: "text",
        },
        {
          name: "postMarriageAddress",
          label: "Post-marriage address",
          type: "text",
        },
        {
          name: "noOfChildren",
          label: "Do you have children",
          type: "select",
          options: ["yes", "no"],
        },
        {
          name: "settlement",
          label: "Need settlement regarding Maintenance",
          type: "select",
          options: ["yes", "no"],
        },
        {
          name: "assets",
          label: "Need settlement regarding joint assets",
          type: "select",
          options: ["yes", "no"],
        },
        {
          name: "litigations",
          label: "Any Pending Litigations between the parties?",
          type: "select",
          options: ["yes", "no"],
        },
        {
          name: "description",
          label: "Any Comment/Remarks For Your Lawyer",
          type: "textarea",
        },
      ],
      handleSubmit: handleSubmitStep3,
      validationSchema: validationSchemaStep3,
    },
  ];

  const stepsShe = [
    {
      title: "She's Details",
      subtitle: "Please fill in wife's details",
      fields: [
        { name: "wifeCity", label: "City where Wife belongs to", type: "text" },
        { name: "wifeName", label: "Name", type: "text" },
        { name: "wifeReligion", label: "Religion", type: "text" },
        { name: "wifeFathersName", label: "Father's Name", type: "text" },
        { name: "wifeDob", label: "Date of Birth", type: "date" },
        { name: "wifeContactNumber", label: "Contact Number", type: "text" },
        { name: "wifeEmail", label: "Email", type: "email" },
        {
          name: "wifeResidenceAddress",
          label: "Residence Address",
          type: "text",
        },
        { name: "wifePresentAddress", label: "Present Address", type: "text" },
      ],
      handleSubmit: handleSubmitStep1,
      validationSchema: validationSchemaStep2,
    },
    {
      title: "He's Details",
      subtitle: "Please fill in husband's details",
      fields: [
        {
          name: "husbandCity",
          label: "City where Husband belongs to",
          type: "text",
        },
        { name: "name", label: "Name", type: "text" },
        { name: "religion", label: "Religion", type: "text" },
        { name: "fathersName", label: "Father's Name", type: "text" },
        { name: "dob", label: "Date of Birth", type: "date" },
        { name: "contactNumber", label: "Contact Number", type: "text" },
        { name: "email", label: "Email", type: "email" },
        { name: "residenceAddress", label: "Residence Address", type: "text" },
        { name: "presentAddress", label: "Present Address", type: "text" },
      ],
      handleSubmit: handleSubmitStep2,
      validationSchema: validationSchemaStep1,
    },
    {
      title: "Required Details",
      subtitle: "Please fill in required details",
      fields: [
        {
          name: "marriageCity",
          label: "City in which you got married",
          type: "text",
        },
        { name: "dateOfMarriage", label: "Date of Marriage", type: "date" },
        {
          name: "placeOfMarriage",
          label: "Place of Marriage (Name of Banquet)",
          type: "text",
        },
        {
          name: "postMarriageAddress",
          label: "Post-marriage address",
          type: "text",
        },
        {
          name: "noOfChildren",
          label: "Do you have children",
          type: "select",
          options: ["yes", "no"],
        },
        {
          name: "settlement",
          label: "Need settlement regarding Maintenance",
          type: "select",
          options: ["yes", "no"],
        },
        {
          name: "assets",
          label: "Need settlement regarding joint assets",
          type: "select",
          options: ["yes", "no"],
        },
        {
          name: "litigations",
          label: "Any Pending Litigations between the parties?",
          type: "select",
          options: ["yes", "no"],
        },
        {
          name: "description",
          label: "Any Comment/Remarks For Your Lawyer",
          type: "textarea",
        },
      ],
      handleSubmit: handleSubmitStep3,
      validationSchema: validationSchemaStep3,
    },
  ];

  const handleStepSubmit = (values) => {
    if (selectedPerson === "he") {
      stepsHe[currentStep].handleSubmit(values);
    } else {
      stepsShe[currentStep].handleSubmit(values);
    }
  };

  console.log(selectedPerson);

  const totalSteps = selectedPerson === "he" ? stepsHe.length : stepsShe.length;

  const steps = selectedPerson === "he" ? stepsHe : stepsShe;

  const renderFormFields = (fields, errors, touched) => {
    // console.log("errors", errors);
    return fields.map((field, index) => (
      <div key={index} className="form-group">
        <label
          htmlFor={field.name}
          className="block text-sm font-medium text-gray-700 font-space-grotesk"
        >
          {field.label}
        </label>
        {field.type === "textarea" ? (
          <Field
            as="textarea"
            id={field.name}
            name={field.name}
            className=" form-control font-space-grotesk  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+2px)] min-h-[calc(2.5rem+_2px)] leading-[1.25]"
          />
        ) : field.type === "select" ? (
          <Field
            as="select"
            className=" form-control font-space-grotesk  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+2px)] min-h-[calc(2.5rem+_2px)] leading-[1.25]"
            id={field.name}
            name={field.name}
          >
            <option value="">Select</option>
            {field.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </Field>
        ) : (
          <Field
            type={field.type}
            className=" form-control font-space-grotesk  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+2px)] min-h-[calc(2.5rem+_2px)] leading-[1.25]"
            id={field.name}
            name={field.name}
            onClick={openModal}
          />
        )}

        {touched[field.name] && errors[field.name] && (
          <div className="mt-1 text-red-600 text-xs font-space-grotesk">
            {errors[field.name]}
          </div>
        )}
      </div>
    ));
  };

  const Stepper = ({ steps, currentStep }) => {
    return (
      <ol className="flex items-center justify-center mt-8 w-full p-3 lg:py-3 space-x-2 text-sm font-medium text-center text-gray-500 gradient-button dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`flex items-center ${
              index <= currentStep
                ? "text-white dark:text-white font-semibold"
                : ""
            }`}
          >
            <span
              className={`flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0 font-space-grotesk ${
                index <= currentStep
                  ? "border-blue-600 dark:border-blue-500"
                  : "border-gray-500 dark:border-gray-400"
              }`}
            >
              {index + 1}
            </span>
            <div className="text-xs font-space-grotesk">{step.title}</div>
            {index < steps.length - 1 && (
              <svg
                className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 12 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m7 9 4-4-4-4M1 9l4-4-4-4"
                />
              </svg>
            )}
          </li>
        ))}
      </ol>
    );
  };

  return (
    <div className="container pb-12">
      <div className="flex flex-wrap mx-[-15px] !mb-[4.5rem] md:!mb-24">
        <div className="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto mt-[-9rem]">
          <div className="card">
            <Formik
              initialValues={
                selectedPerson === "he"
                  ? getInitialValues(stepsHe[currentStep].fields)
                  : getInitialValues(stepsShe[currentStep].fields)
                // getInitialValues(steps[currentStep].fields)
              }
              validationSchema={
                selectedPerson === "he"
                  ? stepsHe[currentStep].validationSchema
                  : stepsShe[currentStep].validationSchema
              }
              onSubmit={handleStepSubmit}
            >
              {({ values, handleSubmit, errors, touched, reset }) => {
                return (
                  <Form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap mx-[-15px]">
                      <div className="xl:w-8/12 xl:!ml-[16.66666667%] lg:w-10/12 lg:!ml-[8.33333333%] w-full flex-[0_0_auto] px-[15px] max-w-full">
                        <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-3 !text-center">
                          <Stepper steps={steps} currentStep={currentStep} />
                        </h2>

                        <div className="mb-8 px-4">
                          <div className="text-xl font-bold font-space-grotesk">
                            {selectedPerson === "he"
                              ? stepsHe[currentStep].title
                              : stepsShe[currentStep].title}
                          </div>
                          <div className="text-sm text-slate-400 font-space-grotesk">
                            {selectedPerson === "he"
                              ? stepsHe[currentStep].subtitle
                              : stepsShe[currentStep].subtitle}
                          </div>
                        </div>
                        <div className="grid xl:grid-cols-2 lg:grid-cols-2  gap-4 sm:grid-cols-1 px-4">
                          {selectedPerson === "he"
                            ? renderFormFields(
                                stepsHe[currentStep].fields,
                                errors,
                                touched
                              )
                            : renderFormFields(
                                stepsShe[currentStep].fields,
                                errors,
                                touched
                              )}
                        </div>

                        <div className="flex justify-between mt-4 mb-8 px-4">
                          {currentStep > 0 && (
                            <button
                              type="button"
                              className="inline-flex gradient-button  font-space-grotesk items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                              onClick={prevStep}
                              disabled={currentStep === 0}
                            >
                              Previous
                            </button>
                          )}
                          <button
                            // disabled={isSubmitting}

                            type="submit"
                            className="inline-flex gradient-button font-space-grotesk items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            {loading ? (
                              <div className="flex items-center">
                                <Loader />
                                <span className="ml-2">
                                  {currentStep === totalSteps - 1
                                    ? "Submit"
                                    : "Next"}
                                </span>
                              </div>
                            ) : currentStep === totalSteps - 1 ? (
                              "Submit"
                            ) : (
                              "Next"
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <h2 className="text-lg font-bold">Select Who's Details</h2>
              <p className="text-sm text-gray-600">
                Please select whose details you want to fill first.
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                type="button"
                className="inline-flex gradient-button font-space-grotesk items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => handleSelectPerson("he")}
              >
                He
              </button>
              <button
                type="button"
                className="inline-flex gradient-button font-space-grotesk items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => handleSelectPerson("she")}
              >
                She
              </button>
            </div>
          </div>
        </div>
      )}

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

const getInitialValues = (fields) => {
  let initialValues = {};
  fields.forEach((field) => {
    initialValues[field.name] = "";
  });
  return initialValues;
};

export default MutualDivorceForm;
