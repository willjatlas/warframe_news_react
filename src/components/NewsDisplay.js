import NewsItem from "./NewsItem"

const NewsDisplay = ({platform,newsItems})=>{

    if(!newsItems) return null;

    return(
        <div id="news-display">
            <h2>{platform} News</h2>
            <ul>
                {newsItems.map((element)=>{
                    return(
                        <li>{element.asString}</li>
                    )
                })}
            </ul>
        </div>
    );

}

export default NewsDisplay;