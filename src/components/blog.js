import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import load from '../assets/loading.png';
import { Typography, Card, CardMedia, CardContent, Grid, Divider, CardActions, Button } from '@material-ui/core';
import { projects } from "./info_objects";
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 300,
    maxWidth: "100%",
    backgroundColor: "rgba(240, 240, 240, 0.815)",
    marginBottom: "2em",
    boxShadow: "2px 5px #c9c9c9"
  },
  cardTitle: {
    fontSize: "1.1em",
  },
  cover: {
    width: "100%",
    height: "400px"
  },
  restrict: {
    maxWidth: "60%",
    paddingBottom: "1.5em",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "30px",
    paddingTop: "2em"
  },
  restrictGrid: {
    maxWidth: "100%",
    paddingBottom: "1.5em",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "2em"
  },
  loading: {
    width: "1em",
    height: "1em",
    paddingRight: "5px",
    position: "relative",
    top: "2px"
  },
  title: {
    fontWeight: 300,
    marginBottom: "0.5em",
  },
}));

const extractPath = (name) => {
  return "/blog/" + (name.toLowerCase()).replace(/\s/g, "_");
};

export default function Blog() {
    const classes = useStyles();
    return(
      <div className={classes.restrict} id="b_wrapper">
        <div id="posts">
          <h1 className={classes.title}>Posts</h1>
          <Divider />
          {/* <h5 className={classes.subtitle}><span><img src={load} alt={""} className={classes.loading}></img></span>Jose is trying his best...</h5> */}
          <h5><span><img src={load} alt={""} className={classes.loading}></img></span>The posts below are not actual blog posts, just placeholders for now.</h5>
          <Grid className={classes.restrictGrid} container justify="flex-start" alignItems="center">
            {projects.map((content) => (
              <Grid item key={content.title} xs={12}>
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
                  <CardMedia component="img" image={content.img} className={classes.cover} />
                  <CardActions>
                    <Link to={extractPath(content.title)}>
                      <Button size="small">Read More &gt;</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
}
