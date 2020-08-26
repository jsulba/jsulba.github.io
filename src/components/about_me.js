import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Divider, GridList, GridListTile } from '@material-ui/core';
import paragraphs from './about_me_txt';
import forest from '../assets/20200725_155849.jpg';
import nike from '../assets/20200327_224231.jpg';
import voyageur from '../assets/20191011_174349_HDR.jpg';
import expo from '../assets/20200328_000556.jpg';
import feet from '../assets/20200613_200809.jpg';
import board from '../assets/20200816_171612.jpg';
import frisbee from '../assets/Screenshot_20200825-224033_Video Player.jpg';

const images = [nike, board, expo, frisbee, feet];

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: "5%",
      maxWidth: "100%",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      textAlign: "left",
    },
    text: {
      lineHeight: "2em",
    },
    par: {
      padding: "15px",
    },
    paper: {
      color: "white",
      backgroundColor: "rgba(45, 17, 121, 0.815)"
      // backgroundColor: "rgba(240, 240, 240, 0.815)"
    },
    barImages: {
      height: "500px",
      overflow: "hidden",
    },
    bar: {
      overflow: "hidden",
      height: "500px",
      boxShadow: "0px 0px 5px grey",
    }
}));

export default function AboutMe() {
    const classes = useStyles();
    return(
      <div>
        <div className="overlay"></div>
        <GridList className={classes.bar} spacing={0} cols={images.length} cellHeight={500} alignItems="flex-start">
          {images.map((im) => (
            <GridListTile cols={1}>
              <img src={im} alt="" className={classes.barImages} />
            </GridListTile>
          ))}
        </GridList>
        <Divider />
        {paragraphs.map((par) => (
          <Grid container className={classes.root} spacing={5} justify="center" alignItems="flex-start">
            <Grid item xs={3}>
              Image or icon
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <div className={classes.par}>
                  <h3 className={classes.title}>{par.title}</h3>
                  <Divider />
                  <p className={classes.text}>{par.text}</p>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={3}>
            </Grid>
          </Grid>
        ))}
      </div>
    );
}
