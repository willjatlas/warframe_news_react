import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react";
import {useState} from "react";
import NavDisplay from "./components/NavDisplay";
import Home from "./components/Home";
import NewsItem from './components/NewsItem';

const App = ()=> {

  const [platform, setPlatform] = useState("");

  const handleButton = (event)=>{
      setPlatform(event.target.value)
  }

  return (
    <>
      <NavDisplay handleButton = {handleButton}/> 
      <NewsItem />
    </>
  )

};

export default App;
