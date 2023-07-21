import React from "react";
import { stables } from "../constants";

export const ProfilePicture = ({ avatar }) => {
  return (
    <div className="w-full flex items-center gap-x-4">
      <div className="">
        {/**for the avatar i'm gonna create a stable file inside the constant folder*/}
        <label htmlFor="">
          {avatar ? (
            <img src={stables.UPLOAD_FOLDER_BASE_URL + avatar} alt="profile" />
          ) : (
            <div className=""></div>
          )}
          {/**this result will be stables.UPLOAD_FOLDER_BASE_URL + avatar
           * http://localhost:5000/uploads/imageName.jpg */}
        </label>
        <input type="file" className="sr-only" />
      </div>
      <button type="button">Delete</button>
    </div>
  );
};
