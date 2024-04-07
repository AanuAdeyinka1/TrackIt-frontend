
import style from "./verify.module.css"
import { BsArrowLeft } from "react-icons/bs";
import  CustomButton  from "../CustomButton/CustomButton";


import React, { useState } from "react";

const VerifyWithOTP = () => {
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(false);

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make a request to your backend to verify the OTP
    // For the sake of simplicity, let's assume OTP is "1234"
    if (otp === "1234") {
      setVerified(true);
      alert("OTP Verified!");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div>
      <div className={style.title}>
        <h1>
          <BsArrowLeft /> &nbsp;&nbsp;&nbsp;&nbsp; Verify your account
        </h1>
      </div>
      {!verified ? (
        <form onSubmit={handleSubmit}>
          <label className={style.label}>
            Enter OTP:
            <input
              type="text"
              value={otp}
              onChange={handleChange}
              maxLength="4"
            />
          </label>
          <CustomButton className={style.primarybutton}>Verify</CustomButton>
        </form>
      ) : (
        <p>OTP has been verified successfully.</p>
      )}
    </div>
  );
};

export default VerifyWithOTP;



// import React, { useState } from "react";

// export const VerifyWithOTP = () => {
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [verified, setVerified] = useState(false);

//   const handleChange = (index, value) => {
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && otp[index] === "") {
//       // Move to previous input box if backspace is pressed and current input is empty
//       if (index > 0) {
//         const newOtp = [...otp];
//         newOtp[index - 1] = "";
//         setOtp(newOtp);
//         document.getElementById(`otpInput${index - 1}`).focus();
//       }
//     } else if (
//       (e.key === "ArrowLeft" || e.key === "ArrowRight") &&
//       e.target.selectionStart === 0 &&
//       index > 0
//     ) {
//       // Move to previous input box if left arrow is pressed at the beginning of the current input box
//       if (e.key === "ArrowLeft") {
//         document.getElementById(`otpInput${index - 1}`).focus();
//       }
//       // Move to next input box if right arrow is pressed at the end of the current input box
//       else if (
//         e.key === "ArrowRight" &&
//         e.target.selectionStart === 0 &&
//         index < otp.length - 1
//       ) {
//         document.getElementById(`otpInput${index + 1}`).focus();
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const otpValue = otp.join("");
//     // Here you would typically make a request to your backend to verify the OTP
//     // For the sake of simplicity, let's assume OTP is "1234"
//     if (otpValue === "1234") {
//       setVerified(true);
//       alert("OTP Verified!");
//     } else {
//       alert("Invalid OTP. Please try again.");
//       setOtp(["", "", "", ""]);
//       document.getElementById("otpInput0").focus();
//     }
//   };

//   return (
//     <div>
      // <div className={style.title}>
      //   <h1>
      //     <BsArrowLeft /> &nbsp;&nbsp;&nbsp;&nbsp; Verify your account
      //   </h1>
      // </div>
//       {!verified ? (
//         <form onSubmit={handleSubmit}>
//           <div className={style.otpInputs}>
//             {" "}
//             {otp.map((digit, index) => (
//               <input
//                 className={style.otp}
//                 key={index}
//                 id={`otpInput${index}`}
//                 type="text"
//                 maxLength="1"
//                 value={digit}
//                 onChange={(e) => handleChange(index, e.target.value)}
//                 onKeyDown={(e) => handleKeyDown(e, index)}
//               />
//             ))}
//           </div>
          // <CustomButton className={style.primarybutton}>Verify</CustomButton>
         
//         </form>
//       ) : (
//         <p>OTP has been verified successfully.</p>
//       )}
//     </div>
//   );
// };





// // export const VerifyWithOTP = () => {
 

// //   return (
// //     <div>
        
// //         <form>
// //           <label>
// //             Enter OTP:
// //             <input type="text" value="" maxLength="4" />
// //           </label>
// //           <button type="submit">Verify</button>
// //         </form>
      
// //     </div>
// //   );
// // };





// export const VerifyWithOTP = () => {
//   const [otp, setOtp] = useState("");
//   const [verified, setVerified] = useState(false);
//   const otpInputRef = useRef(null);

//   const handleChange = (e) => {
//     setOtp(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically make a request to your backend to verify the OTP
//     // For the sake of simplicity, let's assume OTP is "1234"
//     if (otp === "1234") {
//       setVerified(true);
//       alert("OTP Verified!");
//     } else {
//       alert("Invalid OTP. Please try again.");
//     }
//   };

//   return (
//     <div>
//       {!verified ? (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Enter OTP:
//             <input
//               type="text"
//               value={otp}
//               onChange={handleChange}
//               maxLength="4"
//               ref={otpInputRef}
//             />
//           </label>
//           <button type="submit">Verify</button>
//         </form>
//       ) : (
//         <p>OTP has been verified successfully.</p>
//       )}
//     </div>
//   );
// };


