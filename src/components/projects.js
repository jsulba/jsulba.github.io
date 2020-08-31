import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import load from '../assets/loading.png';
import conc from '../assets/concordia.jpg';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Typography, Card, CardMedia, CardContent, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    stats: {
      flexGrow: 1,
      backgroundImage: "linear-gradient(to bottom right, rgba(62, 121, 247, 0.781), rgb(9, 13, 226))",
      paddingTop: "5%",
      paddingLeft: "20px",
      paddingRight: "20px",
      color: "white",
    },
    card: {
      minWidth: 800,
      maxWidth: "100%",
    },
    cardHolder: {
      flexGrow: 1,
      maxWidth: "100%",
      marginTop: "3%",
      paddingBottom: "3%",
    },
    cardTitle: {
      fontSize: "1.1em",
    },
    cont: {
      maxWidth: "100%",
      background: "none",
    },
    cover: {
      width: "100%",
    },
    loading: {
      width: "1em",
      height: "1em",
      paddingRight: "5px",
      position: "relative",
      top: "2px"
    },
    restrict: {
      maxWidth: "100%",
      paddingBottom: "5%",
      marginLeft: "auto",
      marginRight: "auto"
    },
    table: {
      maxWidth: "94%",
      color: "white",
      marginLeft: "30px"
    },
    title: {
      fontWeight: 300,
      marginBottom: "0px",
      marginTop: "2%"
    },
    summary: {
      width: "100%",
      textAlign: "center",
      fontWeight: 300,
      marginTop: "4em",
      paddingBottom: "3em"
    },
    subtitle: {
      fontWeight: 300,
      marginTop: "3px",
      opacity: 0.8,
      fontStyle: "italic",
      paddingLeft: "5px"
    }
}));

const rows = [
  {project: "Quantum Sim", type: "Simulation", tech: "Java, JavaFX", team: "4", mot: "Hackathon Project"},
  {project: "Soultunes", type: "Applet", tech: "Java, JavaFX, Web APIs", team: "4", mot: "Hackathon Project"},
  {project: "Physics Mini Games", type: "Game", tech: "Java, JavaFX", team: "4", mot: "School Project"},
];

const cards = [
  {cat: "Simulation", title: "Quantum Sim", desc: "A simulation for a quantum computer...", img: conc},
  {cat: "Applet", title: "Soultunes", desc: "App for listening to tunes based on the weather...", img: conc},
  {cat: "Game", title: "Physics Mini Games", desc: "A game for teaching physics...", img: conc}
];

export default function Projects() {
    const classes = useStyles();
    return(
      <div id="wrapper">
        <div id="dataBanner" className={classes.stats}>
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
        </div>
        <div id="projects">
          {cards.map((content) => (
            <Grid className={classes.restrict} container justify="center" alignItems="center">
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
                  <CardMedia component="img" image={content.img} className={classes.cover} />
                </Card>
              </Grid>
            </Grid>
          ))}
        </div>
      </div>
    );
}
