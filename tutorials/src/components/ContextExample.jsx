import { useContext } from "react";
import { ContextProvider, ThemeContext } from "../Context/ContextProvider";


function ContextExample() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      <h2>Context Example</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default function AppWithContext() {
  return (
    <ContextProvider>
      <ContextExample />
    </ContextProvider>
  );
}
