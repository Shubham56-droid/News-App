import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "BBC Sport",
      title: "ECB bars transgender women from women's cricket",
      description:
        "The England and Wales Cricket Board (ECB) bar transgender women from women's cricket with immediate effect.",
      url: "https://www.bbc.com/sport/cricket/articles/c0l0rje87y5o",
      urlToImage:
        "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/eb7a/live/5c0f70d0-6139-11ee-ac8c-9d18dbc280ea.png",
      publishedAt: "2025-05-02T10:42:40Z",
      content:
        "Transgender women have been barred from competing in all levels of women's cricket with immediate effect, the England and Wales Cricket Board (ECB) has announced.\r\nIn an update to its transgender reg… [+361 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "Stephan Shemilt",
      title: "McCullum calls on England to improve 'humility'",
      description:
        "England men's cricket team do not want to feel out of touch with their fans, says head coach Brendon McCullum.",
      url: "https://www.bbc.com/sport/cricket/articles/clygg3pe6jeo",
      urlToImage:
        "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/aa41/live/342ac6b0-3580-11f0-9b2c-138cad92aeb3.jpg",
      publishedAt: "2025-05-20T14:04:07Z",
      content:
        "Allied to the inconsistent results are the perception of the England team and some of the comments they make in the media.\r\nDuring the Champions Trophy they were criticised for not training enough by… [+1364 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "Matthew Henry",
      title: "PSL considering postponing rest of season",
      description:
        "The Pakistan Super League is considering postponing the remainder of its season amid the ongoing tensions between India and Pakistan.",
      url: "https://www.bbc.com/sport/cricket/articles/cr4z023edyko",
      urlToImage:
        "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/df25/live/4a2103c0-2c0d-11f0-8da1-ad2bbee6cda5.jpg",
      publishedAt: "2025-05-08T17:27:22Z",
      content:
        "James Vince, Chris Jordan, Tom Curran, David Willey, Sam Billings, Luke Wood and Tom Kohler-Cadmore are the English players involved in the PSL, while there are also English coaches at various franch… [+2312 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "Stephan Shemilt",
      title: "IPL suspended for one week over safety concerns",
      description:
        "The Indian Premier League is suspended for one week amid the ongoing tensions between India and neighbouring Pakistan.",
      url: "https://www.bbc.com/sport/cricket/articles/c753n4ngd0ko",
      urlToImage:
        "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/eb7a/live/5c0f70d0-6139-11ee-ac8c-9d18dbc280ea.png",
      publishedAt: "2025-05-09T09:21:32Z",
      content:
        "The Indian Premier League has been suspended for one week amid the ongoing tensions between India and neighbouring Pakistan.\r\nOvernight, India accused Pakistan of attacking three of its military base… [+1786 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount(){
      let url = "https://newsapi.org/v2/everything?q=cricket&apiKey=d4cd009f09ab49eeb7af0264dc5d6523";
      let data = await fetch(url);
      console.log(data);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div className="container my-3">
        <h1><span>Top</span> Headlines</h1>

        <div>
          {this.state.articles.filter((ele)=>{return ele.description}).map((element) => {
            return (
              <div className="newsContainer" key={element.url}>
                <NewsItems
                  title={element.title?element.title.slice(0,60):"Headline Coming Soon"}
                  description={element.description?element.description.slice(0,80):"This article covers an important development. Click below to read the full story and stay informed."}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
