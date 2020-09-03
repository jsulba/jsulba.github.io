import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Divider, GridList, GridListTile } from '@material-ui/core';
import { paragraphs, about_images } from './info_objects';

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
      fontWeight: 300
    },
    text: {
      lineHeight: "2.5em",
    },
    par: {
      padding: "15px",
    },
    barImages: {
      height: "500px",
      overflow: "hidden",
    },
    bar: {
      overflow: "hidden",
      height: "500px",
    },
    sideIcon: {
      width: "64px",
      height: "64px",
      float: "right",
      marginTop: "1em"
    },
    sideImage: {
      maxWidth: "95%",
      height: "90%",
      marginTop: "25%"
    }
}));

export default function AboutMe() {
    const classes = useStyles();
    return(
      <div>
        <div className="overlay"></div>
        <GridList className={classes.bar} spacing={0} cols={about_images.length} cellHeight={500} alignItems="flex-start">
          {about_images.map((im) => (
            <GridListTile cols={1}>
              <img src={im} alt="" className={classes.barImages} />
            </GridListTile>
          ))}
        </GridList>
        <Divider />
        {paragraphs.map((par) => (
          <Grid container className={classes.root} spacing={5} justify="center" alignItems="flex-start">
            <Grid item xs={3} justify="center">
              <img src={par.images[0]} alt={""} className={classes.sideIcon} />
            </Grid>
            <Grid item xs={7}>
              <div className={classes.par}>
                <h3 className={classes.title}>{par.title}</h3>
                <Divider />
                <p className={classes.text}>{par.text}</p>
              </div>
            </Grid>
            <Grid item xs={2}>
              
            </Grid>
          </Grid>
        ))}
      </div>
    );
}

{/* <img src={par.images[1]} alt={""} className={classes.sideImage} /> */}