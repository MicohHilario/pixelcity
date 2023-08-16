import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="Services font-poppins grid xl:grid-flow-col justify-center gap-8 w-[100vw] p-10">
      <div className="pt-8">
        <div className=" shadow-2xl rounded-2xl bg-slate-100 w-[350px] h-[30rem]">
          <div className="p-3 font-semibold">Basic</div>
          <div className="p-2 text-center text-[3rem] font-extrabold">$899</div>
          <button className="relative rounded-md left-[.6rem] w-[330px] h-[3rem] border-[1px] border-green-600 bg-green-600 font-medium text-white shadow-2xl duration-200 ease-in hover:cursor-pointer hover:border-cyan-600 hover:bg-transparent hover:text-black">
            Choose plan
          </button>
          <ul className="grid gap-5 p-7">
            <li>
              <FontAwesomeIcon
                className="pr-1 text-sky-600"
                icon={faCheckCircle}
              />
              Design and Development
            </li>
            <li>
              <FontAwesomeIcon
                className="pr-1 text-sky-600"
                icon={faCheckCircle}
              />
              up to 5 pages
            </li>
            <li>
              <FontAwesomeIcon
                className="pr-1 text-sky-600"
                icon={faCheckCircle}
              />
              Cloud Storage
            </li>
            <li>
              <FontAwesomeIcon
                className="pr-1 text-sky-600"
                icon={faCheckCircle}
              />
              1 team Member
            </li>
            <li>
              <FontAwesomeIcon
                className="pr-1 text-sky-600"
                icon={faCheckCircle}
              />
              API
            </li>
            <li>
              <FontAwesomeIcon
                className="pr-1 text-sky-600"
                icon={faCheckCircle}
              />
              SSL
            </li>
          </ul>
        </div>
      </div>
      <div className=" shadow-2xl rounded-2xl bg-slate-100 w-[350px] h-[30rem]">
        <div className="p-3 font-semibold">Recommended</div>
        <div className="p-2 text-center text-[3rem] font-extrabold">$1,499</div>
        <button className="relative rounded-md left-[.6rem] w-[330px] h-[3rem] border-[1px] border-green-600 bg-green-600 font-medium text-white shadow-2xl duration-200 ease-in hover:cursor-pointer hover:border-cyan-600 hover:bg-transparent hover:text-black">
          Choose plan
        </button>
        <ul className="grid gap-5 p-7">
          <li>
            <FontAwesomeIcon
              className="pr-1 text-sky-600"
              icon={faCheckCircle}
            />
            Design and Development
          </li>
          <li>
            <FontAwesomeIcon
              className="pr-1 text-sky-600"
              icon={faCheckCircle}
            />
            10-15 pages
          </li>
          <li>
            <FontAwesomeIcon
              className="pr-1 text-sky-600"
              icon={faCheckCircle}
            />
            Cloud Storage
          </li>
          <li>
            <FontAwesomeIcon
              className="pr-1 text-sky-600"
              icon={faCheckCircle}
            />
            2 team Members
          </li>
          <li>
            <FontAwesomeIcon
              className="pr-1 text-sky-600"
              icon={faCheckCircle}
            />
            API
          </li>
          <li>
            <FontAwesomeIcon
              className="pr-1 text-sky-600"
              icon={faCheckCircle}
            />
            SSL
          </li>
        </ul>
      </div>

      <div className="pt-8">
        <div className=" shadow-2xl rounded-2xl bg-slate-100 w-[350px] h-[30rem]">
          <div className="p-3 font-semibold">Ecommerce</div>
          <div className="p-2 text-center text-[3rem] font-extrabold">
            $1,099<span className=" text-sm">/mon.</span>
          </div>
          <button className="relative rounded-md left-[.6rem] w-[330px] h-[3rem] border-[1px] border-green-600 bg-green-600 font-medium text-white shadow-2xl duration-200 ease-in hover:cursor-pointer hover:border-cyan-600 hover:bg-transparent hover:text-black">
            Choose plan
          </button>
          <ul className="grid gap-5 p-7">
            <li>
              <FontAwesomeIcon
                className="pr-1 text-sky-600"
                icon={faCheckCircle}
              />
              Design and Development
            </li>
            <li>
              <FontAwesomeIcon
                className="pr-1 text-sky-600"
                icon={faCheckCircle}
              />
              Unlimited
            </li>
            <li>
              <FontAwesomeIcon
                className="pr-1 text-sky-600"
                icon={faCheckCircle}
              />
              Cloud Storage
            </li>
            <li>
              <FontAwesomeIcon
                className="pr-1 text-sky-600"
                icon={faCheckCircle}
              />
              4 team Members
            </li>
            <li>
              <FontAwesomeIcon
                className="pr-1 text-sky-600"
                icon={faCheckCircle}
              />
              API
            </li>
            <li>
              <FontAwesomeIcon
                className="pr-1 text-sky-600"
                icon={faCheckCircle}
              />
              SSL
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col w-[340px] xl:w-full content-center justify-center">
        <div className="text-center text-xl p-5 font-poppins font-semibold">
          Start and Grow your business with us as we provide your business with
          our best suppport and services.
        </div>
        <button className=" self-center h-[3rem] w-[7rem]  border-[1px] border-green-600 bg-green-600 font-medium text-white shadow-2xl duration-200 ease-in hover:cursor-pointer hover:border-cyan-600 hover:bg-transparent hover:text-black">
          Click here
        </button>
      </div>
    </div>
  );
};

export default Services;
