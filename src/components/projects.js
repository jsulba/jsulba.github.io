import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardMedia, CardContent, Grid, Divider, CardActions, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { projects } from "./info_objects";


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
      height: "300px"
    },
    restrict: {
      maxWidth: "100%",
      paddingBottom: "1.5em",
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop: "2em"
    },
    title: {
      fontWeight: 300,
      marginBottom: "0.5em",
    }
}));

const extractPath = (name) => {
  return "/projects/" + (name.toLowerCase()).replace(/\s/g, "_");
};

export default function Projects() {
    const classes = useStyles();
    return(
      <div id="p_wrapper">
        <div id="featured">
          <h1 className={classes.title}>Featured</h1>
          <Divider />
          <Grid className={classes.restrict} spacing={5} container justify="flex-start" alignItems="center">
            {projects.map((content) => {
              if(content.feat){
                return(
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
                      <CardActions>
                        <Link to={extractPath(content.title)}>
                          <Button size="small">Read More &gt;</Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              }
            })
            }
          </Grid>
        </div>
        <div id="projects">
          <h1 className={classes.title}>All Projects</h1>
          <Divider />
          <Grid className={classes.restrict} spacing={5} container justify="flex-start" alignItems="center">
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

{/* <div id="dataBanner" className={classes.stats}>
          <h1 className={classes.title}>Summary</h1>
          <h5 className={classes.subtitle}><span><img src={load} alt={""} className={classes.loading}></img></span>Jose is trying his best...</h5>
          <div>
            <TableContainer className={classes.cont}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Project</TableCell>
                    <TableCell align="right">Type</TableCell>
                    <TableCell align="right">Technologies</TableCell>
                    <TableCell align="right">Team Size</TableCell>
                    <TableCell align="right">Motivation</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.project}>
                      <TableCell component="th" scope="row">
                        {row.project}
                      </TableCell>
                      <TableCell align="right">{row.type}</TableCell>
                      <TableCell align="right">{row.tech}</TableCell>
                      <TableCell align="right">{row.team}</TableCell>
                      <TableCell align="right">{row.mot}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div id="summary" className={classes.summary}>
            <Typography>
              <span>Active: 0</span>
              <span>Total: 3</span>
            </Typography>
          </div>
        </div> */}