import React, { Component } from "react";
import "./DogList.css";
import { Link } from "react-router-dom";
class DogList extends Component {
  render() {
    return (
      <div className="DogList">
        <h1 className="display-1 text-center my-4">Dog List</h1>
        <div className="row">
          {this.props.dogs.map((d) => (
            <div className="Dog col-lg-4 text-center" key={d.name}>
              <img src={d.src} alt={d.name}></img>
              <Link className="underline" to={`./${d.name}`}>
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
