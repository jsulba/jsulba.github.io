import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Divider, GridList, GridListTile, ButtonGroup, Button, createMuiTheme } from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { grey } from '@material-ui/core/colors';
import { paragraphs, about_images } from './info_objects';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "5%",
    maxWidth: "100%",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "0.9em",
    paddingRight: "2em",
    fontWeight: 600
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
  },
  footer: {
    marginTop: "5em",
    paddingTop: "2em",
    paddingBottom: "1em",
    backgroundImage: "linear-gradient(rgba(13, 15, 128, 0.781), rgb(9, 13, 226), rgba(7, 9, 128, 0.881))",
    width: "100%",
    minHeight: "100px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
    color: "white"
  },
  footerButtonGroup: {
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",
    overflow: "hidden",
  },
  footerButton: {
    color: "white",
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: grey
  }
});

export default function AboutMe() {
  const classes = useStyles();
  return (
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
            {/* empty spacer */}
          </Grid>
        </Grid>
      ))}
      <div id="footer" className={classes.footer}>
        <ButtonGroup className={classes.footerButtonGroup} variant="text">
          <a className={classes.link} href="https://github.com/jsulba" target="_blank" rel="noreferrer"><Button theme={theme}><GitHubIcon className={classes.footerButton} /></Button>Github</a>
          <a className={classes.link} href="https://www.linkedin.com/in/jose-ale-fernandez/" target="_blank" rel="noreferrer"><Button theme={theme}><LinkedInIcon className={classes.footerButton} /></Button>LinkedIn</a>
          <a className={classes.link} href="https://scsconcordia.com/" target="_blank" rel="noreferrer"><Button ><OpenInNewIcon className={classes.footerButton} /></Button>SCS Website</a>
        </ButtonGroup>
      </div>
    </div>
  );
}