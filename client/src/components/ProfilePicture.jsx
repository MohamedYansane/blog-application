import React from "react";
import { AddAPhoto, CameraAltOutlined } from "@mui/icons-material";
import { stables } from "./constants";

export const ProfilePicture = ({ avatar }) => {
  return (
    <div className="w-full flex items-center gap-x-4 justify-end">
      <div className="relative w-20 h-20 rounded-full outline outline-1 outline-offset-2 outline-primary overflow-hidden">
        {/**for the avatar i'm gonna create a stable file inside the constant folder*/}
        <label
          htmlFor="profilePicture"
          className="cursor-pointer absolute inset-0 rounded-full bg-transparent"
        >
          {avatar ? (
            <img
              src={stables.UPLOAD_FOLDER_BASE_URL + avatar}
              alt="profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-blue-50/50 flex justify-center items-center">
              <AddAPhoto className="w-7 h-auto text-primary" />
            </div>
          )}
          {/**this result will be stables.UPLOAD_FOLDER_BASE_URL + avatar
           * http://localhost:5000/uploads/imageName.jpg */}
        </label>
        <input type="file" className="sr-only" id="profilePicture" />
      </div>
      <button
        type="button"
        className="border border-red-500 rounded-lg px-4 py-2 text-red-500"
      >
        Delete
      </button>
    </div>
  );
};
