import React from "react";
import images from "../../assets/images/Images";
import {
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaTelegramPlane, FaHeart } from "react-icons/fa";

export const Footer = () => {
  return (
    <section className="bg-dark-hard -translate-y-[1px]   ">
      <footer className="container grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-10 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10 ">
        <div className="col-span-5 order-1 md:col-span-4 lg:col-span-2 ">
          <h3 className="text-hero-search-input font-bold md:text-lg">
            Product
          </h3>
          <ul className="text-[#959EAD] mt-5 space-y-3">
            <li className="text-hero-search-input text-sm md:text-base">
              <a href="/">LandingPage</a>
            </li>
            <li className="text-hero-search-input text-sm md:text-base">
              <a href="/">Features</a>
            </li>
            <li className="text-hero-search-input text-sm md:text-base">
              <a href="/">Documentation</a>
            </li>
            <li className="text-hero-search-input text-sm whitespace-nowrap">
              <a href="/">Referral Program</a>
            </li>
            <li className="text-hero-search-input text-sm md:text-base">
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 order-3 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto ">
          <h3 className="text-hero-search-input font-bold md:text-lg">
            Company
          </h3>
          <ul className="text-[#959EAD] mt-5 space-y-3 ">
            <li className="text-hero-search-input text-sm md:text-base">
              <a href="/">About</a>
            </li>
            <li className="text-hero-search-input text-sm md:text-base">
              <a href="/">Terms</a>
            </li>
            <li className="text-hero-search-input text-sm md:text-base">
              <a href="/">Privacy Policy</a>
            </li>
            <li className="text-hero-search-input text-sm md:text-base">
              <a href="/">Careers</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 order-2 md:col-span-4 lg:col-span-2 ">
          <h3 className="text-hero-search-input font-bold md:text-lg">
            Services
          </h3>
          <ul className="text-[#959EAD] mt-5 space-y-3">
            <li className="text-hero-search-input text-sm md:text-base">
              <a href="/">Documentation</a>
            </li>
            <li className="text-hero-search-input text-sm md:text-base">
              <a href="/">Design</a>
            </li>
            <li className="text-hero-search-input text-sm md:text-base">
              <a href="/">Themes</a>
            </li>
            <li className="text-hero-search-input text-sm md:text-base">
              <a href="/">Illustrations</a>
            </li>
            <li className="text-hero-search-input text-sm md:text-base">
              <a href="/">UI Kit</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 order-4 md:col-span-4 lg:col-span-2 ">
          <h3 className="text-hero-search-input font-bold md:text-lg">More</h3>
          <ul className="text-[#959EAD] mt-5 space-y-3">
            <li className="text-hero-search-input text-sm md:text-base">
              <a href="/">Documentation</a>
            </li>
            <li className="text-hero-search-input text-sm md:text-base">
              <a href="/">License</a>
            </li>
            <li className="text-hero-search-input text-sm md:text-base">
              <a href="/">Changelog</a>
            </li>
          </ul>
        </div>
        <div className="order-5 col-span-10 md:col-span-4 md:order-first lg:col-span-2 ">
          {/** tric to chabge image color to white
           *  don't want to make my server heavier
           * brightness make it black invert white  */}
          <img
            src={images.logo}
            alt="logo"
            className="brightness-0 invert mx-auto md:mx-0"
          />
          <p className="my:mr-10 text-sm text-[#5A7184] text-center md:text-left mt-4 mr-6 md:text-base ">
            Build a modern and creative website with yansane
          </p>
          <ul className="flex justify-center items-center md:justify-start md:items-start mt-5 space-x-4 text-gray-300">
            <li>
              <a href="/">
                <AiFillTwitterSquare className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillYoutube className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaFacebook className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillInstagram className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaTelegramPlane className="w-6 h-auto" />
              </a>
            </li>
          </ul>
        </div>
        <div className="heart-div hidden  md:flex flex-col items-center md:col-span-12 space-y-3 order-6 mx-auto lg:col-span-10">
          <FaHeart className="text-primary w-6 h-auto" />
          <p className="text-base font-bold italic text-[#5A7184]">
            Copyright © 2023. SMY with love.
          </p>
        </div>
      </footer>
    </section>
  );
};
