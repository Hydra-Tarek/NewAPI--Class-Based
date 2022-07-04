import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";

export class Newsitems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date,source} = this.props;
    return (
      <div>
        <div className="card my-3" style={{ width: "18rem" }}>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://i.ytimg.com/vi/9W2zPbH0JC0/hqdefault.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"88%", zindex:"1"}}>
              {source}
            </span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitems;
