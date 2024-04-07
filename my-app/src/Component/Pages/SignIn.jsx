import { React } from "react";
import style from "./style.module.css";
import CustomButton from "../CustomButton/CustomButton";
import  { useForm } from "react-hook-form";




export const  MyForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign In</h1>
      <p>
        Don't have an account? <a href="#">Sign up</a>
      </p>
      <label>Email address</label>
      <input
        type="text"
        placeholder="Email address"
        {...register("email")} // Changed to lowercase and removed space
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="Password"
        {...register("password")} // Changed to lowercase and removed space
      />
      <input type="submit" value="Continue" />{" "}
      {/* Changed to input type="submit" */}
    </form>
  );
};


// export const MyForm = () => {
 
//   return (
//     <form className={style.heading}>
//       <h1>Sign In</h1>
//       <p>
//         Don't have an account? <a href="#">Sign up</a>
//       </p>

//       <label>Email address</label>
//       <input className={style.emailInput} type="text" placeholder="Email address" />
//       <label className={style.password}>Password</label>
//       <input className={style.input} type="password" placeholder="Password" />

//       <div>
//         <CustomButton className={style.primarybutton}>Continue</CustomButton>
//       </div>
//     </form>
//   );
// };

// export const Form = () => {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };
//   <form onSubmit={handleSubmit(onSubmit)}>
//     <h1>Sign In</h1>
//     <p>
//       Don't have an account? <a href="#">Sign up</a>
//     </p>s
//     <label>Email address</label>
//     <input
//       type="text"
//       placeholder="Email address"
//       {...register("Email address")}
//     />
//     <label>Password</label>
//     <input type="password" placeholder="Password" {...register("Password")} />
//     <button {...register("Password")}>Continue</button>
//   </form>;
// };





