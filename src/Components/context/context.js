import { createContext, useState } from "react";

export const EventValues = createContext();

export const EventValuesContext = ({ children }) => {
  const [mode, setMode] = useState("false");
  const [screenSize, setScreenSize] = useState(undefined);

  const toggleTheme = (mode) => {
    if (mode === "false") {
      setMode("true");
      localStorage.setItem("mode", "true");
    } else {
      setMode("false");
      localStorage.setItem("mode", "false");
    }
  };

  return (
    <EventValues.Provider
      value={{ screenSize, setScreenSize, toggleTheme, mode, setMode }}
    >
      {children}
    </EventValues.Provider>
  );
};
