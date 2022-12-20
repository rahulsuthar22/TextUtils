import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <>
      {/* <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

        <Routes>
          <Route exact path="/" element={<TextForm mode={mode} />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </Router> */}

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <TextForm mode={mode} />
    </>
  );
}

export default App;
