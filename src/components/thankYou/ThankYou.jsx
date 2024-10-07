import React from "react";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <header className="site-header">
        <h1 className="site-header__title text-4xl font-bold mb-8 font-space-grotesk">
          THANK YOU!
        </h1>
      </header>

      <div className="main-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-green-700 mx-auto mb-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M5 13l4 4L19 7"
          />
        </svg>

      
        <p className="main-content__body text-sm  font-space-grotesk leading-relaxed max-w-lg mx-auto">
          Your mutual divorce form has been successfully submitted. 
       
          <br />
         If you have any questions or need further assistance, feel free to contact
          us.
        </p>

        <p className="mt-6 text-sm font-space-grotesk">
          We appreciate your cooperation during this process.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
