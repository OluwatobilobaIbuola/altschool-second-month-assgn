import { QueryClientProvider, QueryClient } from "react-query";
import { useContext, useEffect } from "react";
import { EventValues } from "./Components/context/context";
import { Pages } from "./Layout";
import { GlobalStyled } from "./Components/styles/GlobalStyled";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import "./Components/styles/App.css";
import { ErrorBoundary } from "./Components/ErrorMessage/ErrorBoundary";

function App() {
  const queryClient = new QueryClient();
  const { setMode, mode } = useContext(EventValues);
  const theme = {
    primary: "#702963",
    themeMode: mode === true || mode === "true" ? "#0d1117" : "#c9d1d9",
    themeModeTwo: mode === true || mode === "true" ? "#27272a" : "#e0e0e0",
    themeModeThree: mode === true || mode === "true" ? "#111" : "#d4d4d8",
    modeReverse: mode === true || mode === "true" ? "#c9d1d9" : "#0d1117",
    modeReverseTwo: mode === true || mode === "true" ? "#e0e0e0" : "#4a5964",
    modeReverseThree: mode === true || mode === "true" ? "#d4d4d8" : "#111",
    textMain: mode === true || mode === "true" ? "#c9d1d9" : "#24292f",
    secondary: "#18615b",
  };

  useEffect(() => {
    const mode = localStorage.getItem("mode");
    if (mode) {
      setMode(mode.toLowerCase());
    }
  }, []);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <GlobalStyled />
            <ErrorBoundary>
              <Pages />
            </ErrorBoundary>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
