import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';
import { physics_mg } from './project_descriptions';
import cc from '../../assets/physics_mini_games.JPG';
import ps from '../../assets/shoot.png';
import mol from '../../assets/mirrors.png';

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
    maxWidth: "75%",
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


export default function PhysicsMG() {
  const classes = useStyles();
  return (
    <div className={classes.restrict} id="b_wrapper">
      <h1 className={classes.primaryTitle}>Physics Mini Games App</h1>
      <h5 className={classes.subtitle}>Vanier End of Degree Project</h5>
      <Divider />
      <h2 className={classes.secondaryTitle}>Purpose</h2>
      <Typography className={classes.text} variant="body1" component="p">
        {physics_mg.purpose}
        <br />
        Here are the images for each game (in order).
      </Typography>
      <img src={cc} alt="" className={classes.image} />
      <img src={ps} alt="" className={classes.image} />
      <img src={mol} alt="" className={classes.image} />
      <h2 className={classes.secondaryTitle}>Underlying Principles &amp; Technology</h2>
      <Typography className={classes.text} variant="body1" component="p">
        {physics_mg.upt}
      </Typography>
      <h2 className={classes.secondaryTitle}>Challenges</h2>
      <Typography className={classes.text} variant="body1" component="p">
        {physics_mg.challenges}
      </Typography>
      <h2 className={classes.secondaryTitle}>Takeaways &amp; Outcomes</h2>
      <Typography className={classes.text} variant="body1" component="p">
        {physics_mg.outcomes}
      </Typography>
    </div>
  )
}