import React, { useContext, useEffect } from "react";

//Npm imports
import { Router, LocationProvider } from "@reach/router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Consts/GlobalStyle";

//Component imports
import HomePage from "./Components/HomePage/HomePage";
import MainShowCase from "./Components/MainShowCase/MainShowCase";

//Const imports
import lightTheme, { darkTheme } from "./Consts/Theme";
import { Paths } from "./Consts/Paths";

// context imports
import { GlobalContext } from "./Context/GlobalContext";
//context provider
// import { GlobalContextProvider } from "./Context/GlobalContext";
import ComponentDetails from "./Components/ComponentDetails/ComponentDetails";
import MyItems from "./Components/MyItems/MyItems";
import { dark } from "@material-ui/core/styles/createPalette";

function App() {
  const { darkMode } = useContext(GlobalContext);

  return (
    <div className="App">
      <LocationProvider>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Router>
            <HomePage path={Paths.paths.homePage} />
            <MainShowCase
              path={Paths.paths.main.replace(
                "{COMPONENT}",
                ":currentComponent"
              )}
            ></MainShowCase>
            <ComponentDetails
              path={Paths.paths.details
                .replace("{COMPONENT}", ":currentComponent")
                .replace("{DETAILS}", ":componentDetails")}
            />
            <MyItems path={Paths.paths.myItems} />
          </Router>
        </ThemeProvider>
      </LocationProvider>
    </div>
  );
}

export default App;
