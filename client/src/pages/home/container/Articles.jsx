import React from "react";
import { ArticleCard } from "../../../components/article-card/ArticleCard";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
/*for pulling out a data from a store we have to use useSelector */
/**and to dispatch an anction we've to use useDispatch */
//import { useSelector, useDispatch } from "react-redux";
//we gonna import the changeCount from countActions file
//import { changeCount } from "../../../store/actions/countActions";
export const Articles = () => {
  //we're giving the entire state to our selector and then our
  //reducer called count
  /*const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const countChangeHandler = (type) => {
    dispatch(changeCount(type));
  };*/
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
      {/* counter div <div className="mt-2 flex items-center gap-x-5">
        <button onClick={() => countChangeHandler("DECREASE")}>Decrease</button>
        {count.number}
        <button onClick={() => countChangeHandler("INCREASE")}>Increase</button>
  </div>*/}
    </section>
  );
};
