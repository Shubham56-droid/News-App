import React, { Component } from "react";
import breakingNews from "../images/breakingNews.jpg";

export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" id="cardContent">
          <img
            src={imageUrl}
            className="card-img-top"
            alt="News-Image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = breakingNews;
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
              style={{}}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
