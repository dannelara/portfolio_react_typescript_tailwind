import React from "react";
import { Header, Main } from "./components";

function App() {
  return (
    <div className="h-screen w-full relative bg-black flex flex-col">
      <Header />
      <Main />
    </div>
  );
}

export default App;
