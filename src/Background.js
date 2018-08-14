import React, { Component } from "react";
import data from "./resume";
import "./Background.css";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(17)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    marginLeft: "auto"
  },
  summary: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: "400"
  },
  list: {
    margin: "0 15px"
  }
});

class Background extends Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div>
        <div>
          <i />
          <h2 className="c-heading">ABOUT</h2>
          <p>{data.basics.summary}</p>
        </div>

        <div>
          <i />
          <h2 className="c-heading">Skills</h2>
          <div className="skills-container">
            {data.skills.map((skill, i) => (
              <div className="skills" key={i}>
                <p>
                  <strong>{skill.name}</strong>
                </p>
                {skill.keywords.map((keyword, i) => (
                  <button className="c-skill" disabled key={i}>
                    {keyword}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div>
          <i />
          <h2 className="c-heading">Work Experience</h2>
          {data.work.map((job, i) => (
            <ExpansionPanel
              expanded={expanded === `panel${i}`}
              onChange={this.handleChange(`panel${i}`)}
              key={i}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  <strong>{job.company}</strong>
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  <small className="start-end">
                    {job.startDate} - {job.endDate}
                  </small>
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div>
                  <p className={classes.summary}>{job.summary}</p>
                  <ul>
                    {job.highlights.map((highlight, i) => (
                      <li className={classes.list} key={i}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
        </div>

        <div>
          <i />
          <h2 className="c-heading">Education</h2>
          {data.education.map((edu, i) => (
            <div className="education" key={i}>
              <p>
                {edu.institution}: {edu.area}
              </p>
              <p>{edu.location}</p>
              <small className="start-end">
                {edu.startDate} - {edu.endDate}
              </small>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Background.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Background);
