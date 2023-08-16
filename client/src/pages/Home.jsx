import React from "react";
import Form from "../components/Form";
import Benefits from "../components/Benefits";
import WDprocess from "../components/WDprocess";
import Services from "../components/Services";
import "../pages/Home.css";

//Homepage
const Home = () => {
  return (
    <div className="container">
      <div className="home w-[100vw] xl:flex">
        <div className="left shadow-gray-900 bg-opacity-80 m-0 h-[88vh] w-[96vw] flex-col overscroll-contain  bg-sky-950 shadow-2xl sm:pt-[7rem] xl:w-[60vw]">
          <div className="relative left-[1rem] box-content  flex h-96 w-[15rem] snap-center flex-col justify-center space-y-5 pb-10 pt-[2rem] text-white sm:left-[5rem] lg:left-[10rem]  xl:left-[3rem] xl:w-[45rem] 2xl:left-[13rem] ">
            <h1 className="overflow-contain font-poppins w-[20rem] text-5xl font-semibold sm:w-[40rem] sm:text-6xl xl:w-[45rem]">
              Let's build your website!
            </h1>
            <h5 className="w-[20rem] pt-5 text-left text-lg font-normal md:w-[45rem] ">
              We are Pixel City a group of Creative, Resilient and Resourceful
              <br />
              Web Developers from the Philippines.
            </h5>
          </div>
          <button className="sm:ml-[10rem]] ml-[7rem] items-center justify-center border-[1px] border-cyan-900 bg-green-600 p-4 font-medium text-white shadow-2xl duration-200 ease-in hover:cursor-pointer hover:border-cyan-600 hover:bg-sky-950 md:ml-[35rem] font-poppins">
            KNOW MORE
          </button>
        </div>

        <div className="right bg-neutral xl:w-[40vw] h-[90vh] object-center items-center">
          <div className="form-outer place-content-center relative top-[7rem] box-content flex flex-col items-center text-center">
            <h1 className="text-3xl font-poppins font-black md:text-4xl  drop-shadow-[0_50px_40px_rgba(0,0,0,1)]">
              Tell us about your company?
            </h1>

            <div className="form pt-[4rem]">
              {/* //Inquiry Form component*/}
              <Form />
            </div>
          </div>
        </div>
      </div>
      <div className="benefits flex flex-col pt-10  mt-10 mb-10 m-auto w-[100vw] justify-center text-center align-center">
        <div className="md:text-[3rem] text-[1.5rem] font-bold pb-[3rem] text-inherit drop-shadow-[0_50px_40px_rgba(0,0,0,1)]">
          Benefits of having your own Website
        </div>
        <div>
          <Benefits />
        </div>
      </div>
      <div className="pt-10 w-[100vw]">
        <WDprocess />
      </div>
      <div>
        <Services />
      </div>
    </div>
  );
};
export default Home;
