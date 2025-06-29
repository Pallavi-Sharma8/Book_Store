import React from "react";
import banner from "/banner.png";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 mt-15 md:mt-40 order-2 md:order-1">
          <div className="space-y-10">
            <h1 className="text-4xl text-bold ">
              {" "}
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday !!!</span>
            </h1>
            <p className="text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden ">
              Enter valid email address
            </div>
          </div>
          <Link to={"/courses"}>
            <button className="btn btn-secondary mb-10">Get Started</button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 mt-15 md:mt-12 order-1 ">
          <img src={banner}></img>
        </div>
      </div>
    </>
  );
}

export default Banner;
