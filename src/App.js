import './App.css';
import {useState} from "react";
import NavDisplay from "./components/NavDisplay"

function App() {

  const [platform, setPlatform] = useState("");

  return (
    <>
      <NavDisplay />
    </>
  );

};

export default App;
