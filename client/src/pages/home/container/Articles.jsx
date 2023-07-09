import React from "react";
import { ArticleCard } from "../../../components/article-card/ArticleCard";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
export const Articles = () => {
  return (
    <section className="flex flex-col container mx-auto  px-5  py-10">
      {/** md:w-[calc(50%)] that means it must fit 50% its space  */}
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)] " />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)] " />
      </div>
      <button className="flex items-center gap-x-2 mx-auto text-primary border-[3px] border-primary px-6 py-3 rounded-lg ">
        <ArrowRightAltOutlinedIcon className="" />
        <span className="">More articles</span>
      </button>
    </section>
  );
};
