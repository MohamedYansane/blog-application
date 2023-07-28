import React, { useState } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./cropImage";
export const CropEasy = ({ photo, setOpenCrop }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  // 1 mean it 100%
  const [cropAreaPixels, setcropAreaPixels] = useState(null);
  const [zoom, setZoom] = useState(1);
  /**i'm giving z-1000 cause i want my div to be above the
    other element. The inset with rhe bg/50 is like i'm setting the transparence   */
  const handleCropComplete = (cropArea, cropAreaPixels) => {
    setcropAreaPixels(cropAreaPixels);
  };
  const handleCropImage = async () => {
    try {
      //getCroppedImg come from cropImage.js we import it
      const croppedImage = await getCroppedImg(photo?.url, cropAreaPixels);
      const file = new File([croppedImage.file], `${photo?.file?.name}`, {
        type: photo?.file?.type,
      });
      const frmData = new FormData();
      //in our postman our key for picture is profilePicture
      frmData.append("profilePicture", file);
    } catch (error) {}
  };
  return (
    <div className="fixed z-[1000] inset bg-black/50 flex justify-center p-5 overflow-auto">
      <div className="bg-white h-fit w-full sm:max-w[350px] p-5 rounded-lg">
        <h2 className="font-semibold text-dark-hard mb-2">Crop Image</h2>
        <div className="relative w-full aspect-square rounded-lg overflow-hidden">
          {/**Then we import our cropper component from easy crop
           * i'm giving the aspect 1 cause o want my picture to be in square shape
           */}
          <Cropper
            image={photo?.url}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onZoomChange={setZoom}
            onCropChange={setCrop}
            onCropComplete={handleCropComplete}
          />
        </div>
        <div className="">
          {/**We ve to show the zoom percentage */}
          <label
            htmlFor="zoomRange"
            className="block mt-2 mb-0.5 text-sm font-medium text-gray-900"
          >
            Zoom: {`${Math.round(zoom * 100)}%`}
          </label>
          <input
            type="range"
            id="zoomRange"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onchange={(e) => setZoom(e.target.value)}
            className="w-full h1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm"
          />
        </div>
        <div className="flex justify-between gap-2 flex-wrap">
          <button
            onclick={setOpenCrop(false)}
            className="px-5 py-2.5 rounded-lg text-red-500 border border-red-500 text-sm disabled:opacity-70"
          >
            Cancel
          </button>
          <button
            onclick={handleCropImage}
            className="px-5 py-2.5 rounded-lg text-blue-500  bg-blue-500 text-sm disabled:opacity-70"
          >
            Crop & Upload
          </button>
        </div>
      </div>
    </div>
  );
};
