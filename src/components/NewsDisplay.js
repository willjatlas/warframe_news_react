
const NewsDisplay = ({platform,currentNews})=>{

    if(!currentNews) return null;

    return(
        <div id="news-display">
            <h2>{platform} News</h2>
            <ul>
                {currentNews.map((element)=>{
                    return(
                        <li>
                            {element.eta}: -
                            <b>{element.message}</b>
                            <br></br>
                            <a id="links" href={element.link}>
                                {element.link}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    );

}

export default NewsDisplay;