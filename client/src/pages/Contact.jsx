import React from "react";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div className="flex flex-col w-[100vw]">
      <div className=" bg-sky-950 bg-opacity-80 w-[100vw] p-10">
        <div className="text-center text-white font-bold text-[4rem]">
          Connect with us and have your site done!!
        </div>
        <div className="flex justify-center">
          <Form />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Contact;
