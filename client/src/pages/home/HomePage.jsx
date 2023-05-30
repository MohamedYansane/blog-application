import React from "react";
import { MainLayout } from "../../components/mainlayout/MainLayout";
import { Hero } from "../container/Hero";
import { Articles } from "../container/Articles";
import { CTA } from "../container/CTA";

export const HomePage = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <Articles />
        <CTA />
      </MainLayout>
    </>
  );
};
