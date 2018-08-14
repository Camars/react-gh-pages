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
            <h2 className="c-heading">Skills</h2>
            <div className="skills-container">
              {data.skills.map(skill => (
                <div className="skills" key={skill.name.toString()}>
                  <p><strong>{skill.name}</strong></p>
                  {
                    skill.keywords.map(keyword => (
                      <button className="c-skill" disabled>{keyword}</button>
                    ))
                  }
                </div>
              ))}
            </div>
          </div>

          <div>
            <i></i>
            <h2 className="c-heading">Work Experience</h2>
            {data.work.map(job => (
              <div key={job.company.toString()} className="jobs">
                <p className="job-company"><strong>{job.company}, {job.website}</strong></p>
                <small className="start-end">{job.startDate}-{job.endDate}</small>
                <p>{job.summary}</p>
                <ul>
                {
                  job.highlights.map(highlight => (
                    <li>{highlight}</li>
                  ))
                }
                </ul>
              </div>
            ))}
          </div>

          <div>
            <i></i>
            <h2 className="c-heading">Education</h2>
            {data.education.map(edu => (
              <div className="education" key={edu.location.toString()}>
                <p>{edu.institution}: {edu.area}</p>
                <p>{edu.location}</p>
                <small className="start-end" key={edu.startDate.toString()}>
                  {edu.startDate} - {edu.endDate}
                </small>
              </div>
            ))}
          </div>


        </div>
      );
    }
  }

  export default Background;
