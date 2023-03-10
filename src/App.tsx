import React from "react";
import { Main } from "views";
import { Header } from "components";
import GlobalState from "./global/GlobalState";

function App() {
  return (
    <GlobalState>
      <div className="h-screen w-full relative bg-dark_blue flex flex-col">
        <Header />
        <Main />
      </div>
    </GlobalState>
  );
}

export default App;
