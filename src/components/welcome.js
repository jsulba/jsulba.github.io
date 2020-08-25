import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

export default function Welcome() {
    const classes = useStyles();
    return(
      <div>
        <img src="../assets/20200725_155849.jpg"></img>
        <h2>Take a look around and get to know me!</h2>
      </div>
    );
}
