import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Card, CardContent, CardActions, Typography, Button, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import forest from '../assets/20200725_155849.jpg';
import nike from '../assets/20200327_224231.jpg';
import voyageur from '../assets/20191011_174349_HDR.jpg';
import expo from '../assets/20200328_000556.jpg';
import feet from '../assets/20200613_200809.jpg';
import board from '../assets/20200816_171612.jpg';
import frisbee from '../assets/Screenshot_20200825-224033_Video Player.jpg';
import jq from '../assets/jquery.png';
import jqui from '../assets/jqui.png';
import ang from '../assets/angular.png';
import react from '../assets/react.png'; 
import java from 'programming-languages-logos/src/java/java_64x64.png';
import html from 'programming-languages-logos/src/html/html_64x64.png';
import css from 'programming-languages-logos/src/css/css_64x64.png';
import js from 'programming-languages-logos/src/javascript/javascript_64x64.png';
import ts from 'programming-languages-logos/src/typescript/typescript_64x64.png';
import py from 'programming-languages-logos/src/python/python_64x64.png';
import php from 'programming-languages-logos/src/php/php_64x64.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: "100%",
      margin: "0px"
    },
    card: {
      minWidth: 200,
      maxWidth: 250,
    },
    cardHolder: {
      flexGrow: 1,
      maxWidth: "100%",
      marginTop: "3%",
      marginBottom: "3%",
    },
    cardTitle: {
      fontSize: "1.1em",
    },
    div: {
      marginBottom: "2%",
      marginTop: "5%",
    },
    gallery: {
      marginTop: "2%",
    },
    logo: {
      marginLeft: "33px"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    welcomeTitle: {
      marginTop: "8%",
      fontWeight: 200,
      fontSize: "3em",
      textAlign: "center",
    },
    welcomeSubTitle: {
      marginTop: "15px",
      marginBottom: "5%",
      fontWeight: 200,
      fontSize: "1.0em",
      textAlign: "center",
      fontStyle: "italic"
    },
    image: {
      padding: "5px",
      width: "98%",
      height: "400px",
      display: "block",
      margin: "auto",
      overflow: "hidden",
    },
    restrict: {
      maxWidth: "100%",
    },
    toolset: {
      backgroundImage: "linear-gradient(rgba(62, 121, 247, 0.781), rgb(9, 13, 226), rgba(62, 121, 247, 0.781))",
      marginTop: "5%",
      marginBottom: "3%",
      paddingTop: "1.5em",
      paddingBottom: "1.5em",
      color: "white",
    },
    title: {
      marginTop: "10px",
      marginBottom: "1.5em",
      fontSize: "1.5em",
      textAlign: "center",
      fontWeight: 400,
    },
}));

const cards = [
  {cat: "About Me", title: "Software Student", desc: "Pursuing a Bachelor of Computer Science at Concordia University."},
  {cat: "Projects", title: "Quantum Sim", desc: "A simulation for a quantum computer."},
  {cat: "Projects", title: "Portfolio", desc: "The making of this very same app."}
];

const extractPath = (name) => {
  return "/" + (name.toLowerCase()).replace(" ", "_");
};

export default function Welcome() {
    const classes = useStyles();
    return(
      <div>
        <div id="welcome">
          <h2 className={classes.welcomeTitle}>Take a look around and get to know me!</h2>
          <p className={classes.welcomeSubTitle}>"Isn't it funny how day by day, nothing seems to change? Yet when you look back, everything is different"...</p>
        </div>
        <div className={classes.toolset}>
          <h3 className={classes.title}>Software Skills</h3>
          <Grid id="techStack" container justify="space-around" spacing={1} className={classes.restrict}>
            <Grid item xs className={classes.logo}><img src={java} alt={""} /></Grid>
            <Grid item xs className={classes.logo}><img src={js} alt={""} /></Grid>
            <Grid item xs className={classes.logo}><img src={html} alt={""} /></Grid>
            <Grid item xs className={classes.logo}><img src={css} alt={""} /></Grid>
            <Grid item xs className={classes.logo}><img src={ts} alt={""} /></Grid>
            <Grid item xs className={classes.logo}><img src={py} alt={""} /></Grid>
            <Grid item xs className={classes.logo}><img src={php} alt={""} /></Grid>
            <Grid item xs className={classes.logo}><img src={react} alt={""} /></Grid>
            <Grid item xs className={classes.logo}><img src={ang} alt={""} /></Grid>
            <Grid item xs className={classes.logo}><img src={jq} alt={""} /></Grid>
            <Grid item xs className={classes.logo}><img src={jqui} alt={""} /></Grid>
          </Grid>
        </div>
        <div className={classes.cardHolder}>
        <h3 className={classes.title}>Featured</h3>
          <Grid className={classes.restrict} container spacing={2} justify="center" alignItems="center">
            {cards.map((content) => (
              <Grid item key={content.title}>
                <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                    {content.cat}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {content.title}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {content.desc}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={extractPath(content.cat)}>
                    <Button size="small">Read More &gt;</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            ))}
          </Grid>
        </div>
        <Divider />
        <div className={classes.gallery}>
          <h3 className={classes.title}>Gallery</h3>
          <Grid container className={classes.root} spacing={3} justify="space-evenly" alignItems="flex-end">
            <Grid item xs={6} >
              <Paper><img id="forestImage" src={forest} className={classes.image} alt={""} /></Paper>
            </Grid>
            <Grid item xs >
              <Paper><img src={feet} className={classes.image} alt={""} /></Paper>
            </Grid>
            <Grid item xs >
              <Paper><img src={frisbee} className={classes.image} alt={""} /></Paper>
            </Grid>
          </Grid>
          <Grid container className={classes.root} spacing={3} justify="space-around" alignItems="stretch">
            <Grid item xs={5} >
              <Paper><img id="sunsetVoyageur" src={voyageur} className={classes.image} alt={""} /></Paper>
            </Grid>
            <Grid item xs >
              <Paper><img src={nike} className={classes.image} alt={""} /></Paper>
            </Grid>
            <Grid item xs >
              <Paper><img src={expo} className={classes.image} alt={""} /></Paper>
            </Grid>
          </Grid>
          <Grid container className={classes.root} spacing={3} justify="center">
          <Grid item xs={8} >
              <Paper><img id="skateboard" src={board} className={classes.image} alt={""} /></Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
}