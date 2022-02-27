import React from "react";
import { ThemeProvider } from "styled-components";
import usePersistedState from "./utils/hooks/usePersistedState";
import { QueryClientProvider, QueryClient } from "react-query";
// import "./App.css";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyle from "./styles/global";
// import DigitalRainEffect from "./components/DigitalRainEffect";
import Header from "./components/Header";
import Tabelinha from "./components/Tabelinha";

const App = () => {
  const queryClient = new QueryClient();
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} />
          <Tabelinha theme={theme.title} />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
