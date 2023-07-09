import React from "react";
import "./hero.scss";
import { SearchOutlined } from "@mui/icons-material";
import images from "../../../assets/images/Images";
export const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col px-5 py-10 lg:flex-row bg-white">
      <div className="hero-container mt-7 lg:w-1/2">
        <h1 className="font-jetbrain text-center hero-title  text-dark-soft text-3xl md:text-4xl lg:text-left lg:max-w-[540px] lg:text-3xl xl:text-5xl">
          Read the most interesting articles
        </h1>
        <p className="text-hero-gray mt-4 md:text-xl lg:text-left lg:text-base xl:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="searh-bar relative lg:mt-6 xl:mt-10  mt-10   gap-y-2.5 lg:flex-row">
          <div className="flex relative items-center ">
            <SearchOutlined className="absolute w-6 h-6 text-hero-search-input left-3 " />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search article"
              className="placeholder:font-bold rounded-lg pl-12  pr-3 w-full py-3 placeholder:text-hero-search-input font-semibold text-dark-soft shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4"
            />
          </div>
          <button
            type="submit"
            className="bg-hero-primary w-full text-center text-white p-3 font-semibold rounded-lg  md:absolute md:right-2 md:top-1/2 md:w-fit md:-translate-y-1/2 md:py-2"
          >
            Search
          </button>
        </div>
        <div className="tags mt-4 lg:items-start lg:flex-row lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="text-hero-search-input lg:text-sm xl:text-base font-semibold italic">
            Popular Tags:
          </span>
          <ul className="tags-items lg:text-sm xl:text-base gap-x-2.5 gap-y-2.5 mt-3">
            <li className="tags-item rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold italic">
              User Interfaces
            </li>
            <li className="tags-item rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold italic">
              User Experience
            </li>
            <li className="tags-item rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold italic">
              Design
            </li>
          </ul>
        </div>
      </div>
      <div className="hero-image hidden lg:block">
        <img src={images.heroImg} alt="users are reading articles" />
      </div>
    </section>
  );
};
