import React, { Component } from 'react';
import data from './resume';
import './Background.css';


class Background extends Component {

    render() {
      return (
        <div>
          <div>
            <i></i>
            <h2 className="c-heading">ABOUT</h2>
            <p>{data.basics.summary}</p>
          </div>
          <div>
            <i></i>
            <h2 className="c-heading">Work Experience</h2>

            {data.skills.map(skill => (
              <div key={skill.name.toString()}>
                <h5>{skill.name}</h5>
                {
                  skill.keywords.map(keyword => (
                    <span>{keyword}</span>
                  ))
                }
              </div>
            ))}
          </div>
          <div>
            <i></i>
            <h2 className="c-heading">Education</h2>
            {data.education.map(edu => (
              <div key={edu.location.toString()}>
                <p>{edu.institution}, {edu.area}</p>
                <p>{edu.location}</p>
                <span key={edu.startDate.toString()}>{edu.startDate} - {edu.endDate}</span>
              </div>
            ))}
          </div>


        </div>
      );
    }
  }

  export default Background;
