import React from "react";
import { FaFacebookSquare, FaRedditAlien } from "react-icons/fa";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
export const SocialShareButton = ({ url, title }) => {
  return (
    <>
      <div className="flex justify-between w-full">
        {/** for sharing app we need their api for sharing
         * for fb for exemple
         */}
        <a
          href="https://www.facebook.com/profile.php?id=100068953503494"
          rel="noreferrer"
          target="_blank">
          <FaFacebookSquare className="text-[#3b5998] w-12 h-auto" />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${url}`}
          rel="noreferrer"
          target="_blank">
          <BsTwitter className="text-[#00acee] w-12 h-auto" />
        </a>{" "}
        <a
          href={`https:www.whatsapp.com/send/?text=${url}`}
          rel="noreferrer"
          target="_blank">
          <BsWhatsapp className="text-[#25D366] w-12 h-auto" />
        </a>{" "}
        <a
          href={`https://www.reddit.com/submit?url=${url}&title=${title}`}
          rel="noreferrer"
          target="_blank">
          <FaRedditAlien className="text-[#ff4500] w-12 h-auto" />
        </a>
      </div>
    </>
  );
};
