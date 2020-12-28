import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';
import { portfolio } from './project_descriptions';
import qtdemo from '../../jars/McGillPhys19.jar';

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


export default function Portfolio() {
    const classes = useStyles();
    return (
        <div className={classes.restrict} id="b_wrapper">
            <h1 className={classes.primaryTitle}>Portfolio Website</h1>
            <h5 className={classes.subtitle}>Personal Project</h5>
            <Divider/>
            <h2 className={classes.secondaryTitle}>Purpose</h2>
            <Typography className={classes.text} variant="body1" component="p">
                {portfolio.purpose}
            </Typography>
            {/* <img src={qt} alt="" className={classes.image}/> */}
            <h2 className={classes.secondaryTitle}>Underlying Principles &amp; Technology</h2>
            <Typography className={classes.text} variant="body1" component="p">
                {portfolio.upt}
            </Typography>
            <h2 className={classes.secondaryTitle}>Challenges</h2>
            <Typography className={classes.text} variant="body1" component="p">
                {portfolio.challenges}
            </Typography>
            <h2 className={classes.secondaryTitle}>Takeaways &amp; Outcomes</h2>
            <Typography className={classes.text} variant="body1" component="p">
                {portfolio.outcomes}
            </Typography>
            <h2 className={classes.secondaryTitle}>Try It Yourself</h2>
            <p className={classes.text}>You can download the <code>jar</code> file <a href={qtdemo} download>here</a>. You can also see the hackathon submission page <a href="https://devpost.com/software/quantum-computer-simulation">here</a>.</p>
        </div>
    )
}