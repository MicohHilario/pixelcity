import React from "react";

//picture
import bootstrap from "../assets/picture/bootstrap.png";
import express from "../assets/picture/express.png";
import js from "../assets/picture/js.png";
import mongodb from "../assets/picture/mongodb.png";
import mysql from "../assets/picture/mysql.png";
import nodejs from "../assets/picture/nodejs.png";
import postgres from "../assets/picture/postgres.png";
import react from "../assets/picture/react.png";
import tailwind from "../assets/picture/tailwind.png";
import typescript from "../assets/picture/typescript.png";
import aws from "../assets/picture/aws.png";

const WDprocess = () => {
  return (
    <div className=" text-center p-10 w-[100vw] bg-opacity-80 bg-sky-950">
      <div className=" text-3xl font-bold font-poppins p-5 text-white">
        Our Process
      </div>
      <div className="grid gap-4 place-items-center 2xl:grid-cols-5 lg:grid-cols-3 pt-5 ">
        <div className="font-poppins backdrop-blur-sm bg-white/10 xl:w-[350px] w-[18rem] text-lg font-semibold text-white h-[13rem]  pt-10  p-2">
          Gathering Information.
          <div className=" font-thin text-[.8rem] pt-5">
            This all about communicating and knowing what the client's needs and
            wants for their website.
          </div>
        </div>
        <div className=" font-poppins backdrop-blur-sm bg-white/10 xl:w-[350px] w-[18rem] bg-gradient-to-t  text-lg font-semibold text-white h-[13rem]  pt-10 p-2 ">
          Planning and Design.
          <div className=" font-thin text-[.8rem] pt-5">
            This is a very crucial part of the entire process. After taking all
            information, this is where the information is used to create a
            website that will suit the client.
          </div>
        </div>
        <div className=" font-poppins backdrop-blur-sm bg-white/10 xl:w-[350px] w-[18rem] bg-gradient-to-t  text-lg font-semibold text-white h-[13rem]  pt-10 p-2 ">
          Development.
          <div className=" font-thin text-[.8rem] pt-5">
            Through programming and coding, it's time to build the website and
            execute the design and plans that were agreed upon.
          </div>
        </div>
        <div className=" font-poppins backdrop-blur-sm bg-white/10 xl:w-[350px] w-[18rem] bg-gradient-to-t  text-lg font-semibold text-white h-[13rem]  pt-10 p-2 ">
          Test.
          <div className=" font-thin text-[.8rem] pt-5">
            Making sure that the website is completely functional and
            responsive.
          </div>
        </div>
        <div className=" font-poppins backdrop-blur-sm bg-white/10 xl:w-[350px] w-[18rem] bg-gradient-to-t  text-lg font-semibold text-white h-[13rem]  pt-10 p-2 ">
          Launch.
          <div className=" font-thin text-[.8rem] pt-5">
            After the test, next is to let everyone know about your business or
            website is online.
          </div>
        </div>
      </div>
      <div className=" md:flex md:w-[100vw] items-center justify-center md:p-10 pt-[6rem] ">
        <div className="md:border-r-[1px] md:text-right font-poppins md:p-6 font-bold text-white text-[2rem] backdrop-blur-sm bg-white/10">
          Technologies <br /> we <br /> use.
        </div>
        <div className="grid grid-cols-4 gap-5  p-1">
          <img className="w-[3rem] place-self-center" src={react} alt="" />
          <img className="w-[3rem] place-self-center" src={nodejs} alt="" />
          <img className="w-[3rem] place-self-center" src={typescript} alt="" />
          <img className="w-[3rem] place-self-center" src={js} alt="" />
          <img className="w-[3rem] place-self-center" src={express} alt="" />
          <img className="w-[3rem] place-self-center" src={mongodb} alt="" />
          <img className="w-[3rem] place-self-center" src={mysql} alt="" />
          <img className="w-[3rem] place-self-center" src={postgres} alt="" />
          <img className="w-[3rem] place-self-center" src={bootstrap} alt="" />
          <img className="w-[3rem] place-self-center" src={tailwind} alt="" />
          <img className="w-[3rem] place-self-center" src={aws} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WDprocess;
