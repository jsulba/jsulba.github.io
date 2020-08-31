import React from 'react';
import Navbar from './navbar';
import { Switch, Route } from 'react-router-dom';
import Welcome from './welcome';
import AboutMe from './about_me';
import Projects from './projects';
import Blog from './blog';


export default function App() {

    return(
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/about_me/" component={AboutMe} />
                <Route path="/projects/"component={Projects} />
                <Route path="/blog/" component={Blog} />
            </Switch>
        </div>
        );
}