import logo from "./logo.svg";
import "./App.css";
import ThemeDisplay from "./ThemeDisplay";
import ThemeProvider from "./ThemeProvider";

function App() {
  return (
    <div className="App">
      <h1>Helloo</h1>
      <ThemeProvider>
        <ThemeDisplay />
      </ThemeProvider>
    </div>
  );
}

export default App;
