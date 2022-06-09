import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Counter } from "./components/Counter";
import MainView from "./pages/Main/MainView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Navbar />
        <MainView />
      </header>
    </div>
  );
}

export default App;
