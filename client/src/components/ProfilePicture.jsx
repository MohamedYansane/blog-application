import React, { useState } from "react";
import { AddAPhoto, CameraAltOutlined } from "@mui/icons-material";
import { stables } from "./constants";
import { CropEasy } from "./crop/CropEasy";
import { createPortal } from "react-dom";

export const ProfilePicture = ({ avatar }) => {
  const [openCrop, setOpenCrop] = useState(false);
  const [photo, setPhoto] = useState(false);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setPhoto({ url: URL.createObjectURL(file), file: file });
    //on i set the photo i want to setOpenCrop to true
    setOpenCrop(true);
    console.log(openCrop);
  };
  return (
    <>
      {/**i'm gonna condition my CropEasy component bcause it a popup
       * and we want to render our cropEasy somewhere else
       * so we've to use createPortal from react dom
       */}
      {openCrop &&
        createPortal(
          <CropEasy photo={photo} setOpenCrop={setOpenCrop} />,
          document.getElementById("portal")
        )}
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
          <input
            type="file"
            className="sr-only"
            id="profilePicture"
            onChange={handleFileChange}
          />
        </div>
        <button
          type="button"
          className="border border-red-500 rounded-lg px-4 py-2 text-red-500"
        >
          Delete
        </button>
      </div>
    </>
  );
};
