import './App.css';
import {useState, useEffect} from "react";
import NavDisplay from "./components/NavDisplay";
import NewsDisplay from './components/NewsDisplay';

const App = ()=> {

  const [platform, setPlatform] = useState("PC");
  const [newsItems, setNewsItems] = useState([]);
  const [currentNews, setCurrentNews] = useState([]);

  const fetchNewsData = ()=>{

    const platforms = ["pc", "ps4", "xb1", "swi"];
    let element;

    for (element of platforms){
      fetch(`https://api.warframestat.us/${element}/news`)
        .then ((response)=>response.json())
        .then ((jsonData)=>setNewsItems(newsItems => [...newsItems, jsonData]));
        console.log(element)
    };
      
  };

  const handleButton = (event)=>{
      setPlatform(event.target.value)
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  useEffect(()=>{

    if(platform === "PC"){
      setCurrentNews(newsItems[0])
    }
    else if(platform === "PS4"){
      setCurrentNews(newsItems[1])
    }
    else if(platform === "Xbox1"){
      setCurrentNews(newsItems[1])
    }
    else if(platform === "Switch"){
      setCurrentNews(newsItems[1])
    }

  },[platform]);

  return (
    <>
      <NavDisplay handleButton={handleButton}/>
      <NewsDisplay platform={platform} currentNews={currentNews} />
    </>
    
  );

};

export default App;
