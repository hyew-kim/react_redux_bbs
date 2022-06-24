import React from "react";
import HomeHeader from "../components/Home/HomeHeader";
import ArticleList from "../components/Article/ArticleList";
import TagList from "../components/Article/TagList";

export default function HomePage() {
  return (
    <>
      <HomeHeader />
      <ArticleList />
      <TagList />
    </>
  );
}
