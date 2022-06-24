import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import SignIn from "./pages/SignIn/SignIn";
import styled from "styled-components";

const Main = styled.main`
  min-height: calc(100vh - 100px);
`;

export default function Routing() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article" element={<ArticlePage />} />
        {/*<Route path="/sign-up" element={<SignUp />} />*/}
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Main>
  );
}
