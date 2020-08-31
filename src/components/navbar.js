import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, IconButton, Typography, List, ListItem, ListItemIcon, ListItemText, Accordion, AccordionSummary, AccordionDetails, Button, ButtonGroup, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon  from '@material-ui/icons/Menu';
import PersonIcon  from '@material-ui/icons/Person';
import CreateIcon from '@material-ui/icons/Create';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import HomeWorkIcon from '@material-ui/icons/HomeWork';


// Styles for navbar
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 99999,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    grow: {
        flexGrow: 1,
    },
    fullWidth: {
        width: "100%",
    },
    name: {
        flexGrow: 1,
        fontStyle: "italic",
        fontWeight: "lighter",
        position: "relative",
        left: "5%"
    },
}));

// Navigation component to be used in every view
export default function Navbar() {
    const [drawer, setDrawer] = React.useState(false);

    // Page: Welcome-0, AboutMe-1, Projects-2, Blog-3
    const [page, setPage] = React.useState(-1);

    const handleClick = (event) => {
        setDrawer(!drawer);
    };

    const determineIcon = (index) => {
        switch(index){
            case 0: return (<PersonIcon/>);
            case 1: return (<HomeWorkIcon/>);
            case 2: return (<CreateIcon/>);
        }
    }

    const determinePath = (index) => {
        switch(index){
            case 0: return "/about_me";
            case 1: return "/projects";
            case 2: return "/blog";
            default: return "/";
        }
    }

    const determinePage = (index) => {
        switch(index){
            case 0: return "About Me";
            case 1: return "Projects";
            case 2: return "Blog";
            default: return "Welcome";
        }
    }


    // This syntax is a arrow function but it uses parantheses because it is returning an object. If we used {} it would read as a statements and not an object.
    const list = () => (
        <div className={classes.fullWidth}>
            <List className={classes.grow}>
                {['About Me', 'Projects', 'Blog'].map((text, index) => (
                    <Link to={determinePath(index)} className="link" onClick={(event) => {event.stopPropagation(); setDrawer(false); setPage(index)}} key={text}>
                        <ListItem button key={text}>
                            <ListItemIcon>{determineIcon(index)}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion expanded={drawer}>
                <AccordionSummary>
                <Toolbar className={classes.fullWidth}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.grow}>
                        {/* {determinePage(page)} */}
                    </Typography>
                    <Typography className={classes.name}>
                        Jose Fernandez
                    </Typography>
                    <ButtonGroup variant="text">
                        <Link to="/"><Button color="inherit" onClick={(event) => {event.stopPropagation(); setPage(-1); setDrawer(false);}}><HomeIcon /></Button></Link>
                        <a href="https://github.com/jsulba"><Button color="inherit"><GitHubIcon /></Button></a>
                        <a href="https://www.linkedin.com/in/jose-ale-fernandez/"><Button color="inherit"><LinkedInIcon /></Button></a>
                    </ButtonGroup>
                </Toolbar>
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                    {list()}
                    <Divider />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}