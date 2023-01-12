import React, { useState, useEffect } from "react";

// interface State {
//   full_screen: Boolean;
// }

export const GlobalStateContext = React.createContext<any>(null);

const GlobalState = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [current_section, set_current_section] = useState<Number>(1);

  const [full_screen, set_full_screen] = useState(false);

  const state = {
    current_section,
    set_current_section,
    full_screen,
    set_full_screen,
  };

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
