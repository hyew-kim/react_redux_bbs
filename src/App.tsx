import React from "react";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyles from "./styles/GlobalStyles";
import Routing from "./Routing";

// import SignIn from "./pages/SignIn/SignIn";
function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <GlobalStyles />
      <Navbar />
      <Routing />
    </div>
  );
}

export default App;
