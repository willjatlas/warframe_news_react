import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useState, useEffect} from "react";
import NavDisplay from "./components/NavDisplay";
import Home from "./components/Home";
import NewsItem from './components/NewsItem';

const App = ()=> {

  const [platform, setPlatform] = useState("");
  const [newsItems, setNewsItems] = useState([]);

  const fetchNewsData = ()=>{

    const platforms = ["pc", "ps4", "xb1", "swi"];
    let element;

    for (element of platforms){
      fetch(`https://api.warframestat.us/${element}/news`)
        .then ((response)=>response.json())
        .then ((jsonData)=>setNewsItems([...jsonData]));
    };
      
  };

  const handleButton = (event)=>{
      setPlatform(event.target.value)
  }

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <Router>
      <>
        <NavDisplay handleButton = {handleButton}/> 
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </>
    </Router>
  )

};

export default App;
