import React from "react";
import { MainLayout } from "../../components/mainlayout/MainLayout";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import images from "./../../assets/images/Images";
import { Link } from "react-router-dom";
import { SuggestedPosts } from "./container/SuggestedPosts";
import { CommentsContainer } from "./../../components/comments/CommentsContainer";
import { SocialShareButton } from "../../components/SocialShareButton";

export const ArticleDetail = () => {
  const breadCrumbData = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "Article", link: "blog/1" },
  ];

  const postData = [
    {
      _id: 1,
      image: images.computer,
      title: "Help children get better education",
      created_at: "22-06-2023 ",
    },
    {
      _id: 2,
      image: images.computer,
      title: "Help children get better education",
      created_at: "21-06-2023 ",
    },
    {
      _id: 3,
      image: images.computer,
      title: "Help children get better education",
      created_at: "20-06-2023 ",
    },
    {
      _id: 4,
      image: images.computer,
      title: "Help children get better education",
      created_at: "10-06-2023 ",
    },
  ];
  const tagsData = [
    "Medical",
    "Lifestyle",
    "Learn",
    "Healthy",
    "Foot",
    "Diet",
    "Education",
  ];
  return (
    <MainLayout>
      <section className="container mx-auto flex flex-col  px-5 py-10 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1 ">
          <BreadCrumbs data={breadCrumbData} />
          <img
            src={images.computer}
            className="rounded-xl w-full"
            alt="article-image"
          />
          <Link
            to="/blog?categor-selectedCategory "
            className="text-primary mt-4 inline-block md:text-base">
            EDUCATION
          </Link>
          <h1 className="text-xl font-medium  text-dark-hard md:text-[26px]">
            Help children get better education
          </h1>
          <p className="text-[18px] text-dark-soft ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
            euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
            Mattis pellentesque id nibh tortor id aliquet lectus proin. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Egestas purus
            viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
            euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
            euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
            Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
            faucibus et molestie ac feugiat sed lectus vestibulum.
          </p>
          {/** actually i'm accessing to loggedUser statically that's why i initialize with a */}
          <CommentsContainer className="mt-10" loggedUserId="a" />
        </article>
        <div className="">
          <SuggestedPosts
            header="Latest Article"
            posts={postData}
            tags={tagsData}
            className="mt-8 lg:mt-0 lg:max-w-xs"
          />
          <div className="mt-7">
            <h2 className="font-medium text-dark-hard mb-4 md:text-xl">
              Share on:
            </h2>
            {/**sometimes some url contained weird characters i want
             * to convert them to utf - 8 character format
             * the difference between encodedUri and encodeURIComponent
             * the first takes a full  valid complete url
             * the second is not
             */}

            <SocialShareButton
              url={encodeURI(
                "https://www.facebook.com/profile.php?id=100068953503494"
              )}
              title="facebook"
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
