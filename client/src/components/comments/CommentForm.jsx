import React from "react";
import { useState } from "react";

export const CommentForm = ({
  btnLabel,
  formSubmitHandler,
  formCancelHandler = null,
  initialText = "",
}) => {
  const [value, setValue] = useState(initialText);
  const submitHandler = (e) => {
    e.preventDefault();
    {
      /** this form submit handler is to display user comments section 
      by default it inside comments folder data after we'll handle with our backend   */
    }
    formSubmitHandler(value);
    setValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col border border-[#76AEFF] items-end rounded-lg py-2 px-1.5 md:px-4 lg:px-4">
        <textarea
          className="w-full focus:outline-none bg-transparent placeholder:text-xs md:placeholder:text-base lg:placeholder:text-base"
          placeholder="leave your comment here ..."
          rows="5"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex  gap-y-2 items-center gap-x-2 pt-2 flex-col-reverse md:flex-row lg:flex-row">
          {formCancelHandler && (
            <>
              <button
                onClick={formCancelHandler}
                className="px-5 py-2.5 text-sm md:text-base lg:text-base rounded-lg border border-red-500 text-red-500">
                cancel
              </button>
            </>
          )}
          <button
            type="submit"
            className="px-5 py-2.5 rounded-lg bg-primary text-sm md:text-base lg:text-base text-white">
            {btnLabel}
          </button>
        </div>
      </div>
    </form>
  );
};
