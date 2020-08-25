import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import CreateIcon from '@material-ui/icons/Create';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';


// Styles for navbar
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
    },
}));

// Navigation component to be used in every view
export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [drawer, setDrawer] = React.useState(false);

    // Page: Welcome-0, AboutMe-1, Projects-2, Blog-3
    const [page, setPage] = React.useState(-1);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setDrawer(!drawer);
    };

    const handleClose = () => {
        setAnchorEl(null);
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
                    <ListItem button key={text}>
                        <Link to={determinePath(index)} className="link" onClick={(event) => {event.stopPropagation(); setDrawer(false); setPage(index)}}>
                            <ListItemIcon>{determineIcon(index)}</ListItemIcon>
                            <ListItemText primary={text} />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const classes = useStyles();

    return (
        <div id="wrapper" className={classes.root}>
            <Accordion expanded={drawer}>
                <AccordionSummary>
                <Toolbar className={classes.fullWidth}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon onClick={handleClick}/>
                    </IconButton>
                    <Typography variant="h6" className={classes.grow}>
                        {determinePage(page)}
                    </Typography>
                    <Typography className={classes.name}>
                        Jose Fernandez
                    </Typography>
                    <ButtonGroup variant="text">
                        <Link to="/"><Button color="inherit" onClick={(event) => {event.stopPropagation(); setPage(-1)}}><HomeIcon /></Button></Link>
                        <a href="https://github.com/jsulba"><Button color="inherit"><GitHubIcon /></Button></a>
                        <a href="https://www.linkedin.com/in/jose-ale-fernandez/"><Button color="inherit"><LinkedInIcon /></Button></a>
                    </ButtonGroup>
                </Toolbar>
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                    {list()}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}