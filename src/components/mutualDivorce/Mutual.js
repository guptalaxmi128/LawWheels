import React, { useEffect, useState } from "react";
import { CircleAlert } from "lucide-react";
import Navbar from "../navbar/Navbar";
import DivorceSection from "./DivorceSection";
import MutualDivorceForm from "./MutualDivorceForm";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";

const Mutual = () => {
  const navigate=useNavigate();
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const cancelHandler =()=>{
    setShowModal(false);
    navigate("/")
  }
  return (
    <div>
      {showModal && (
        <div className="modal-container">
          <div className="modal-content">
            <div className="p-5 text-center">
              <CircleAlert
                size={18}
                color="orange"
                className="stroke-1.5 mx-auto mt-3 h-16 w-16"
              />
              <div className=" text-3xl font-space-grotesk">Are you sure?</div>

              <div className="mt-2 text-slate-500 font-space-grotesk font-sm">
                By submitting this form, you consent to the collection, storage,
                and processing of your personal information for the purpose of
                processing your divorce application. Your information will be
                handled in accordance with our privacy policy. You can withdraw
                your consent at any time by contacting us.
              </div>
            </div>
            <div className="px-5 pb-8 text-center">
              <button
                data-tw-merge=""
                type="button"
                onClick={cancelHandler}
                className="transition font-space-grotesk duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 mr-1 w-24"
              >
                Cancel
              </button>
              <button
                data-tw-merge=""
                type="button"
                className="transition font-space-grotesk gradient-button duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary w-24"
                onClick={() => setShowModal(false)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="pb-8 bg-orange-50 ">
        <Navbar />
      </div>
      <div className="pb-20">
        <DivorceSection />
      </div>
      <MutualDivorceForm />
      <Footer />
    </div>
  );
};

export default Mutual;
