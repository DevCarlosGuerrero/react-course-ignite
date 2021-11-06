// Components
import GlobalStyles from "./components/GlobalStyles";
import { Routes, Route } from "react-router";
// Pages
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path={"/*"} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
