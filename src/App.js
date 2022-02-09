import "./App.css";
import { Header } from "./components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CharGrid } from "./components/CharGrid";

const App = () => {
  const [chars, setChars] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const getChars = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );

      console.log(result.data);
      setChars(result.data);
      setIsLoad(false);
    };
    getChars();
  }, []);

  return (
    <div className="container">
      <Header />
      <CharGrid isLoad={isLoad} chars={chars} />
    </div>
  );
};

export default App;
