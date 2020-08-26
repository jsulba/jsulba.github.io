import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, GridList, GridListTile, Divider } from '@material-ui/core';
import forest from '../assets/20200725_155849.jpg';
import nike from '../assets/20200327_224231.jpg';
import voyageur from '../assets/20191011_174349_HDR.jpg';
import expo from '../assets/20200328_000556.jpg';
import feet from '../assets/20200613_200809.jpg';
import board from '../assets/20200816_171612.jpg';
import frisbee from '../assets/Screenshot_20200825-224033_Video Player.jpg';
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
    div: {
      marginBottom: "20px",
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
      maxWidth: "95%",
      maxHeight: "95%",
      display: "block",
      margin: "auto",
    },
    title: {
      marginTop: "10px",
      marginBottom: "1.5em",
      fontSize: "1.5em",
      textAlign: "center",
    },
}));

export default function Welcome() {
    const classes = useStyles();
    return(
      <div>
        <h2 className={classes.welcomeTitle}>Take a look around and get to know me!</h2>
        <p className={classes.welcomeSubTitle}>"Isn't funny how day by day, nothing seems to change? Yet when you look back, everything is different"...</p>
        <Divider className={classes.div}/>
        <div>
          <h3 className={classes.title}>Technical Toolset</h3>
          <Grid id="techStack" container justify="center" spacing={1}>
            <Grid item xs={1}><img src={java} /></Grid>
            <Grid item xs={1}><img src={js} /></Grid>
            <Grid item xs={1}><img src={html} /></Grid>
            <Grid item xs={1}><img src={css} /></Grid>
            <Grid item xs={1}><img src={ts} /></Grid>
            <Grid item xs={1}><img src={py} /></Grid>
            <Grid item xs={1}><img src={php} /></Grid>
          </Grid>
        </div>
        <Divider className={classes.div}/>
        <Grid container className={classes.root} spacing={3} justify="space-evenly" alignItems="stretch">
          <Grid item xs={6} >
            <Paper><img src={forest} className={classes.image} alt={""} /></Paper>
          </Grid>
          <Grid item xs={3} >
            <Paper><img src={feet} className={classes.image} alt={""} /></Paper>
          </Grid>
          <Grid item xs={3} >
            <Paper><img src={frisbee} className={classes.image} alt={""} /></Paper>
          </Grid>
        </Grid>
        <Grid container className={classes.root} spacing={3} justify="space-around" alignItems="center">
          <Grid item xs={3} >
            <Paper><img src={nike} className={classes.image} alt={""} /></Paper>
          </Grid>
          <Grid item xs={6} >
            <Paper><img src={voyageur} className={classes.image} alt={""} /></Paper>
          </Grid>
          <Grid item xs={3} >
            <Paper><img src={expo} className={classes.image} alt={""} /></Paper>
          </Grid>
        </Grid>
        <Grid container className={classes.root} spacing={3} justify="flex-end" alignItems="stretch">
        <Grid item xs >
            <Paper><img src={board} className={classes.image} alt={""} /></Paper>
          </Grid>
        </Grid>
      </div>
    );
}