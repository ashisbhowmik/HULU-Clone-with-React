import "./App.css";
import React, { useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import requests from "./requests";
function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* Navbar */}
      <Nav setSelectedOption={setSelectedOption} />
      {/* Results of movies */}
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
