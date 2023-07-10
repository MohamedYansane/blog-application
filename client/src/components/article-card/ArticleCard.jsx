import React from "react";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import images from "../../assets/images/Images";
export const ArticleCard = ({ className }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
    >
      <img
        src={images.computer}
        alt="title"
        srcSet=""
        className="w-full object-cover object-center md:h-52 h-auto lg:h-48 xl:h-60"
      />

      <div className="card p-5">
        <h2 className="card-title font-bold md:text-2xl text-xl text-dark-soft">
          Future of Work
        </h2>
        <p className="text-sm mt-3 md:text-lg text-hero-search-input">
          Majority of peole will work in jobs that don’t exist today.
        </p>
        <div className="card-info flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={images.commentpic}
              alt="profile"
              className="w-9 h-9 md:w-10 md:h-10"
            />
            <div className="user-info flex flex-col">
              <h4 className="font-bold italic text-sm font-opensans  text-dark-soft">
                Mohamed Yansane
              </h4>
              <div className="user-status flexx items-center gap-x-2">
                <span className="bg-[#36B37E] w-fit bg-opacity-20 p-0.5 rounded-full">
                  <CheckOutlinedIcon className="w-1.5 h-1.5 text-[#36B37E]" />
                </span>
                <span className="italic text-xs md:text-md font-opensans text-hero-search-input">
                  Verified writer
                </span>
              </div>
            </div>
          </div>
          <span className="font-semibold font-opensans md:text-base text-hero-search-input italic text-sm ">
            19 may
          </span>
        </div>
      </div>
    </div>
  );
};
