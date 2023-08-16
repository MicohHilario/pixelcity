import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black pt-10 ">
      <div className="grid md:grid-cols-4 justify-center place-content-center text-xs gap-5 ">
        <div className="logo flex-1 ">
          <div className="h-[5rem] text-3xl content-center font-bold font-poppins after:w-56 text-white text-center border-white md:border-r-[1px] ">
            pixelcity.
          </div>
        </div>
        <div className="text-white flex flex-col h-[5rem] border-white md:border-r-[1px]">
          <a className=" hover:text-cyan-600" href="/">
            Privacy
          </a>
          <a className=" hover:text-cyan-600" href="/">
            Terms and Condition
          </a>
          <a className=" hover:text-cyan-600" href="/">
            Careers
          </a>
          <a className=" hover:text-cyan-600" href="/">
            Partners
          </a>
        </div>
        <div className="text-white h-[5rem] border-white md:border-r-[1px]">
          <h6>Contact us:</h6>
          <h6>+63 926 640 8825</h6>
          <h6>0199-999</h6>
          <h6>Asoy Compound, Boulevard, May-Iba Teresa, Rizal</h6>
        </div>
        <div className="]">
          <iframe
            className="md:w-[20vw] p-1"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d585.1905131437612!2d121.21052361749749!3d14.564578021881399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c1a719320ef7%3A0xf2ff03b8c0529a95!2sAsoy%20Compound%2C%20Boulevard%2C%20May-Iba!5e0!3m2!1sen!2sph!4v1690327792488!5m2!1sen!2sph"
          ></iframe>
        </div>
      </div>
      <div className=" text-center font-thin text-white">
        Pixel City © 2023
      </div>
    </div>
  );
};

export default Footer;
