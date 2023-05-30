import React from "react";
import { Link } from "react-router-dom";
export const BreadCrumbs = ({ data = [] }) => {
  return (
    <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap">
      {data.map((item, index) => (
        <div className="text-dark  opacity-70 text-xs md:text-sm" key={index}>
          <Link to={item.link}>{item.name}</Link>
          {/** pour Home / Blog / Article
           * si l'index != data.length -1 you've to render my span
           */}
          {index !== data.length - 1 && <span className="px-3">/</span>}
        </div>
      ))}
    </div>
  );
};
