import { Route, Router, Routes } from "react-router-dom";
import MainView from "./pages/Main/MainView";
import SignIn from "./pages/SignIn/SignIn";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainView />} />
      {/* <Route path="/" element={<MainView />} /> */}
      {/*<Route path="/sign-up" element={<SignUp />} />*/}
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}
