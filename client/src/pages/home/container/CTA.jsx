import React from "react";
import images from "../../../assets/images/Images";

export const CTA = () => {
  return (
    <>
      <svg
        className="w-full h-auto max-h-40 translate-y-[1px]"
        viewBox="0 0 2160 263"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Wave"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
          fill="#0D2436"
        />
      </svg>

      <section className="relative bg-dark-hard px-5 ">
        <div className="container grid grid-cols-12 md:pb-20 mx-auto py-10 lg:place-items-center lg:pt-10 lg:pb-0">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="text-white  font-bold text-xl md:text-3xl md:leading-normal md:text-center lg:text-left">
              Get our stories delivered From us to your inbox weekly.
            </h2>
            <div className="md:flex md:space-y-0  md:space-x-2 md:w-full w-full max-w-[494px] space-y-3 mx-auto mt-12 lg:mx-0">
              <input
                type="email"
                name=""
                id=""
                placeholder="Your email"
                className="w-full border placeholder:font-bold placeholder:text-hero-search-input focus:outline-none px-4 py-3 rounded-lg"
              />
              <button
                type="submit"
                className="bg-primary py-3 text-white font-bold rounded-lg  w-full text-center md:w-fit md:whitespace-nowrap md:px-2"
              >
                Get started
              </button>
            </div>
            <p className="text-hero-gray italic text-sm leading-7 md:text-center md:text-base md:mt-5 lg:text-left">
              <span className="font-bold text-[#B3BAC5] text-base italic md:not-italic md:font-normal md:text-hero-search-input">
                Get a response tomorrow{" "}
              </span>
              if you submit by 9pm today. If we received after 9pm will get a
              reponse the following day.
            </p>
            {/**for tablet side and large screens*/}
          </div>
          <div className="col-span-12 hidden mb-[70px] md:block md:order-first lg:order-last lg:col-span-6">
            <div className="w-3/4 mx-auto relative">
              <div className="w-1/2 h-1/2 bg-[#FC5A5A] rounded-lg absolute top-[10%] -right-[8%]" />
              <div className="bg-[#E5EAF4] opacity-[.06] w-1/2 h-1/2  rounded-lg absolute bottom-[10%] -left-[8%]" />
              <div className="rounded-xl w-full bg-white z-[1] relative ">
                <div className="img-container p-2">
                  <img
                    src={images.fb_message}
                    alt="title"
                    srcSet=""
                    className="w-full object-cover object-center md:h-52 h-auto lg:h-48 xl:h-60 rounded-xl"
                  />
                </div>

                <div className="card p-5">
                  <h2 className="card-title font-bold md:text-2xl text-xl text-dark-soft">
                    The best aticles every week
                  </h2>
                  <p className="text-sm mt-3 md:text-lg text-hero-search-input">
                    Our insurance plans offers are priced the same everywhere
                    else.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
