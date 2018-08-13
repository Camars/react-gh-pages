import React, { Component } from 'react';
import data from './resume';
import './Personal.css';


class Personal extends Component {
  render() {
    const hundop = "100%"
    return (
      <div className="p-container">
        <div className="top">
          <img src="https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/26116183_1564734120287810_8598511870411830897_o.jpg?_nc_cat=0&oh=1f89ebcb0e5e23eb004d7af1cd1c034e&oe=5C1090AE"
            alt="" style={{ width: hundop }} />
          <p>{data.basics.name}</p>
          <p>{data.basics.label}</p>
        </div>

        <div className="bottom">
          <p>{data.basics.location.city}, {data.basics.location.region}</p>
          <p>{data.basics.phone}</p>
          <p>{data.basics.email}</p>
          <a href="{data.basics.website}">{data.basics.website}</a>
        </div>
      </div>
    );
  }
}

export default Personal;
