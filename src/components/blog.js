import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import load from '../assets/loading.png';
import { Typography, Card, CardMedia, CardContent, Grid, Divider } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 300,
    maxWidth: "100%",
    backgroundColor: "rgba(240, 240, 240, 0.815)"
  },
  cardTitle: {
    fontSize: "1.1em",
  },
  cover: {
    width: "100%",
  },
  restrict: {
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

export default function Blog() {
    const classes = useStyles();
    return(
      <div id="b_wrapper">
        <div id="posts">
          <h1 className={classes.title}>Posts</h1>
          <Divider />
          <h5 className={classes.subtitle}><span><img src={load} alt={""} className={classes.loading}></img></span>Jose is trying his best...</h5>
          {/* <Grid className={classes.restrict} spacing={5} container justify="flex-start" alignItems="center">
            {projects.map((content) => (
              <Grid item key={content.title} xs={4}>
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
                </Card>
              </Grid>
            ))}
          </Grid> */}
        </div>
      </div>
    );
}
