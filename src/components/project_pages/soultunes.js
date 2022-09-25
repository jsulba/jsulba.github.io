import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';
import { soultunes } from './project_descriptions';

const useStyles = makeStyles((theme) => ({
  restrict: {
    maxWidth: "60%",
    paddingBottom: "1.5em",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "30px",
    paddingTop: "2em"
  },
  applet: {
    width: 400,
    height: 200
  },
  image: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "3em",
    display: "block",
    marginTop: "2em",
    height: "100%",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "3px 4px #c9c9c9"
  },
  primaryTitle: {
    fontWeight: 300,
    marginBottom: "0em",
    paddingBottom: "0em"
  },
  secondaryTitle: {
    fontWeight: 500,
    color: "#373738",
    marginBottom: "0.5em",
  },
  subtitle: {
    fontWeight: 300,
    color: "#605f60",
    marginTop: "0.25em",
    marginBottom: "0.5em",
  },
  text: {
    lineHeight: "2.0em",
    fontWeight: 300
  }
}))


export default function Soultunes() {
  const classes = useStyles();
  return (
    <div className={classes.restrict} id="b_wrapper">
      <h1 className={classes.primaryTitle}>Soultunes Music App</h1>
      <h5 className={classes.subtitle}>ConUHacks V Hackathon 2020 Project</h5>
      <Divider />
      <h2 className={classes.secondaryTitle}>Purpose</h2>
      <Typography className={classes.text} variant="body1" component="p">
        {soultunes.purpose}
      </Typography>
      {/* <img src={qt} alt="" className={classes.image}/> */}
      <h2 className={classes.secondaryTitle}>Underlying Principles &amp; Technology</h2>
      <Typography className={classes.text} variant="body1" component="p">
        {soultunes.upt}
      </Typography>
      <h2 className={classes.secondaryTitle}>Challenges</h2>
      <Typography className={classes.text} variant="body1" component="p">
        {soultunes.challenges}
      </Typography>
      <h2 className={classes.secondaryTitle}>Takeaways &amp; Outcomes</h2>
      <Typography className={classes.text} variant="body1" component="p">
        {soultunes.outcomes}
      </Typography>
      <h2 className={classes.secondaryTitle}>Try It Yourself</h2>
      <p className={classes.text}>You can see the hackathon submission page <a href="https://devpost.com/software/soul-tunes" target="_blank" rel="noreferrer">here</a>.</p>
    </div>
  )
}