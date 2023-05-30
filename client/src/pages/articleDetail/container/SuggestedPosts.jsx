import React from "react";
import { Link } from "react-router-dom";
export const SuggestedPosts = ({ className, header, posts, tags = [] }) => {
  return (
    <div
      className={`w-full rounded-lg p-4 mt-5 ${className} shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]`}>
      <h2 className="font-medium text-dark-hard text-base md:text-xl">
        {header}
      </h2>
      <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
        {posts.map((post) => (
          <div
            className="flex space-x-3 flex-nowrap items-center"
            key={post._id}>
            <img
              src={post.image}
              alt="article image"
              className="aspect-square object-cover rounded-lg w-1/5"
            />
            <div className="flex flex-col">
              <h3 className="text-sm text-dark-hard font-medium md:text-base lg:text-lg">
                {post.title}
              </h3>
              <span className="text-[10px] opacity-60 text-hero-search-input ">
                {
                  /*new Date(post.createdAt).toLocaleString("en US",
                  {day:"numeric",month:"short", year:"numeric"});*/
                  post.created_at
                }
              </span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-dark-hard font-medium text-base mt-8 md:text-xl">
        Tags
      </h2>
      <div className="flex flex-wrap gap-x-2 gap-y-3 mt-4">
        {tags.length !== 0 &&
          tags.map((tag, index) => (
            <Link
              to="/"
              key={index}
              className="inline-block rounded-md px-3 py-1.5 bg-primary text-xs text-white md:text-sm">
              {tag}
            </Link>
          ))}
      </div>
    </div>
  );
};
