import React from "react";
import { Header, Main } from "./components";
import GlobalState from "./global/GlobalState";

function App() {
  return (
    <GlobalState>
      <div className="h-screen w-full relative bg-black flex flex-col">
        <Header />
        <Main />
      </div>
    </GlobalState>
  );
}

export default App;
