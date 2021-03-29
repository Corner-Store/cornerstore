import React, { Component } from "react";
import "../layoutMain.css";

class DisplayBusinesses extends Component {
  render() {
    return (
      <div>
        <span />
        <div className="container">
          {this.props.results.map((data, index) => (
            <div key={index}>
              <div className="businesses-container">
                <p>{data[0]}</p>
                <p>{data[1]}</p>
              </div>
              <span />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default DisplayBusinesses;
