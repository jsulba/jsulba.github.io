import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Card, CardContent, CardActions, CardMedia, Typography, Button, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import forest from '../assets/20200725_155849.jpg';
import nike from '../assets/20200327_224231.jpg';
import voyageur from '../assets/20191011_174349_HDR.jpg';
import expo from '../assets/20200328_000556.jpg';
import feet from '../assets/20200613_200809.jpg';
import board from '../assets/20200816_171612.jpg';
import frisbee from '../assets/Screenshot_20200825-224033_Video Player.jpg';
import { toolset, featured } from './info_objects';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: "100%",
      margin: "0px",
    },
    card: {
      minWidth: 250,
      width: 350,
      maxWidth: 350,
      height: 400,
      backgroundColor: "rgba(240, 240, 240, 0.815)"
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
    content: {
      height: "130px"
    },
    cover: {
      width: "100%",
      height: "190px"
    },
    desc: {
      paddingTop: "1em"
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
      backgroundImage: "linear-gradient(rgba(7, 9, 128, 0.881), rgb(9, 13, 226), rgba(13, 15, 128, 0.781))",
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

const extractPath = (name) => {
  return "/" + (name.toLowerCase()).replace(" ", "_");
};

export default function Welcome() {
    const classes = useStyles();
    return(
      <div>
        <div id="welcome">
          <h2 className={classes.welcomeTitle}>Take a look around and get to know me!</h2>
          <p className={classes.welcomeSubTitle}>"Isn't it funny how day by day, nothing seems to change? Yet when you look back, everything is different..."</p>
        </div>
        <div className={classes.toolset}>
          <h3 className={classes.title}>Software Skills</h3>
          <Grid id="techStack" container justify="space-around" spacing={1} className={classes.restrict}>
            {toolset.map((im) => (
              <Grid item xs className={classes.logo}>
                <img src={im} alt={""}/>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className={classes.cardHolder}>
        <h3 className={classes.title}>Featured</h3>
          <Grid className={classes.restrict} container spacing={6} justify="center" alignItems="stretch">
            {featured.map((content) => (
              <Grid item key={content.title}>
                <Card className={classes.card}>
                <CardContent className={classes.content}>
                  <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                    {content.cat}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {content.title}
                  </Typography>
                  <Typography variant="body2" component="p" className={classes.desc}>
                    {content.desc}
                  </Typography>
                </CardContent>
                <CardMedia component="img" image={content.img} className={classes.cover} />
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
          {/* <Grid container className={classes.root} spacing={3} justify="center">
          <Grid item xs={8} >
              <Paper><img id="skateboard" src={board} className={classes.image} alt={""} /></Paper>
            </Grid>
          </Grid> */}
        </div>
      </div>
    );
}