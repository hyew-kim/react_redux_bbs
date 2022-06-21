import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainView from "./pages/Main/MainView";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import "./App.css"
// import SignIn from "./pages/SignIn/SignIn";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainView />} />
            {/* <Route path="/" element={<MainView />} /> */}
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
