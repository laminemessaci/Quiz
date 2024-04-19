import React, { createContext, useContext } from "react";

import { coffeeTheme, newTheme } from "./themes";

/* Get Theme depending on target */
export const getTheme = () => {
  return coffeeTheme;
};

const ThemeContext = createContext(getTheme());

const ThemeProvider = ({ children }) => (
  <ThemeContext.Provider value={getTheme()}>{children}</ThemeContext.Provider>
);

export const withTheme = (Component) =>
  function wrapperComponent(props) {
    const themeDataContext = useContext(ThemeContext);

    return (
      <ThemeContext.Consumer>
        {() => <Component {...props} theme={themeDataContext} />}
      </ThemeContext.Consumer>
    );
  };

export const useTheme = () => useContext(ThemeContext);

export const theme = () => getTheme();

export default ThemeProvider;
