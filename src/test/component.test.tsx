import React from "react";
import { render } from "@testing-library/react";
import HomeHeader from "../components/Home/HomeHeader";
import HomeMain from "../components/Home/HomeMain";

describe("Home page test", () => {
  test("Home header test", () => {
    const { getByText } = render(<HomeHeader />);
    const $h2 = getByText(/Conduit/i);
    const $p = getByText(/Share your knowledge/i);
    expect($h2).toBeInTheDocument();
    expect($p).toBeInTheDocument();
  });

  test("Home content test", () => {
    const { getByTestId, getByText } = render(<HomeMain />);
    const $category = getByTestId(/category/i);
    const $article = getByTestId(/article/i);
    const $tag = getByTestId(/tag/i);
    expect($category).toBeInTheDocument();
    expect($article).toBeInTheDocument();
    expect($tag).toBeInTheDocument();
  });
});

describe("Article page test", () => {});
