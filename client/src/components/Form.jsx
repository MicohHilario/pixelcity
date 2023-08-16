import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";

const Form = () => {
  //to check form State
  // const form = useForm();
  // const { register, control, handleSubmit, formState } = form;
  // const { errors } = formState;

  // const onSubmit = (data) => {
  //   console.log("form submitted", data);
  // };

  //To connect to database
  const [cName, setCName] = useState("");
  const [loc, setLoc] = useState("");
  const [num, setNum] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5555/api/submitted", {
        cname: cName,
        loc: loc,
        num: num,
        email: email,
      })
      .then(() => {
        console.log("User Submitted");
      });
  };

  return (
    <div>
      <form onSubmit={submitForm} className="p-5" method="POST">
        <div className="input pb-7">
          <input
            onChange={(e) => {
              setCName(e.target.value);
            }}
            name="cname"
            className="userInput relative h-[3rem] w-[20rem] border-[1px] pl-[.5rem] outline-none focus:border-sky-900 focus:outline-0 focus:ring-1   focus:ring-sky-500 lg:w-[32rem] rounded-none"
            type="text"
            placeholder=" &#xe0e3; Company name"
            style={{ fontFamily: "unset", fontWeight: 500 }}
            // id="name"
            // {...register("name", { required: "This field is required" })}
          />
          {/* <p className=" text-red-600 text-start text-xs pt-2">
            {errors.name?.message}
          </p> */}
        </div>

        <div className="input pb-7">
          <input
            onChange={(e) => {
              setLoc(e.target.value);
            }}
            name="loc"
            className="userInput relative h-[3rem] w-[20rem] border-[1px] pl-[.5rem] shadow-2xl outline-none focus:border-sky-900 focus:outline-0 focus:ring-1 focus:ring-sky-500 lg:w-[32rem] rounded-none"
            type="text"
            placeholder=" &#xe0e3; Location"
            style={{ fontFamily: "unset", fontWeight: 500 }}
            // id="location"
            // {...register("location", { required: "This field is required" })}
          />
          {/* <p className=" text-red-600 text-start text-xs pt-2">
            {errors.location?.message}
          </p> */}
        </div>

        <div className="input pb-7">
          <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
            name="num"
            className="userInput relative h-[3rem] w-[20rem] border-[1px] pl-[.5rem] shadow-2xl outline-none  focus:border-sky-900 focus:outline-0 focus:ring-1 focus:ring-sky-500 lg:w-[32rem] rounded-none "
            type="number"
            placeholder=" &#xe0e3; Contact Number"
            style={{ fontFamily: "unset", fontWeight: 500 }}
          />
          {/* <p className=" text-red-600 text-start text-xs pt-2">
            {errors.number?.message}
          </p> */}
        </div>

        <div className="input pb-10">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            className="userInput md:[33-rem] relative h-[3rem] w-[20rem] border-[1px] pl-[.5rem] shadow-2xl outline-none  focus:border-sky-900 focus:outline-0 focus:ring-1 focus:ring-sky-500 lg:w-[32rem] rounded-none "
            type="email"
            placeholder=" &#xe0e3; Email Address"
            style={{ fontFamily: "unset", fontWeight: 500 }}
            id="email"
            // {...register("email", {
            //   required: "This field is required",
            //   pattern: {
            //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
            //     message: "Invalid email address",
            //   },
            // })}
          />
          {/* <p className=" text-red-600 text-start text-xs pt-2">
            {errors.email?.message}
          </p> */}
        </div>

        <button
          // onClick={() => {
          //   navigate("/quote");
          // }}
          className="h-[3rem] w-[7rem]   border-[1px] border-green-600 text-center bg-green-600  font-medium text-white shadow-2xl duration-200 ease-in hover:cursor-pointer hover:border-cyan-600 hover:bg-transparent hover:text-black"
          type="submit"
        >
          GET A QUOTE
        </button>
      </form>
      {/* <DevTool control={control} /> */}
    </div>
  );
};

export default Form;
