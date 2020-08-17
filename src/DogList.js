import React, { Component } from "react";
import "./DogList.css";
import { Link } from "react-router-dom";
class DogList extends Component {
  render() {
    return (
      <div className="DogList">
        <h1 className="display-1 text-center">Dog List</h1>
        <div className="row">
          {this.props.dogs.map((d) => (
            <div className="Dog col-lg-4 text-center" key={d.name}>
              <Link to={`./${d.name}`}>
                <img src={d.src} alt={d.name}></img>
                <h3>{d.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DogList;
