import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="justify-center items-center w-screen min-h-[60vh] lg:pt-14">
      <div class="text-center ">
      <h1 className='text-center text-sm'>MERN Stack | Java && Spring MVC</h1>
        <div class="fs-3 fw-light text-muted">I can help your business to</div>
        <h1 class="display-3 p-1 fw-bolder">
          <span class="text-gradient d-inline">Get online and grow fast</span>
        </h1>
        <div class="d-grid gap-3 p-4 d-sm-flex justify-content-sm-center mb-3 lg:pt-5">
          <a
            class="btn btn-primary  btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
            href="/resume.pdf"
            download="resume.pdf"
          >
            Resume
          </a>
          <a
            class="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
            href="https://github.com/Mugisha-Samuella"
          >
            Projects
          </a>
        </div>
      </div>
      <div>
        <Image />
      </div>
    </div>
  );
};

export default Hero;
