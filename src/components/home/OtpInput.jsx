import { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 6, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    // Move to next input if current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    // optional
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="otpContainer">
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            type="text"
            ref={(input) => (inputRefs.current[index] = input)}
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            // className="otpInput form-control relative block w-full text-[.75rem] font-medium bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s]  focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0  m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)]"
            className="otpInput text-[.75rem] font-medium bg-[#fefefe]   border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)"
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
