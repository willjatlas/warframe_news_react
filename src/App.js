import './App.css';
import {useState, useEffect} from "react";
import NavDisplay from "./components/NavDisplay";
import NewsDisplay from './components/NewsDisplay';

const App = ()=> {

  const [platform, setPlatform] = useState("PC");
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
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <>
      <NavDisplay handleButton={handleButton}/>
      <NewsDisplay platform={platform} newsItems={newsItems} />
    </>
    
  );

};

export default App;
