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

export default function Blog() {
    const classes = useStyles();
    return(
      <div>
        Blog!
      </div>
    );
}
