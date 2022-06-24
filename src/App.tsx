import React from "react";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyles from "./styles/GlobalStyles";
import Routing from "./Routing";

// import SignIn from "./pages/SignIn/SignIn";
function App() {
  return (
    <>
      {/* <Counter /> */}
      <GlobalStyles />
      <Navbar />
      <Routing />
    </>
  );
}

export default App;
