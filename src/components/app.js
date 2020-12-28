import React from 'react';
import Navbar from './navbar';
import { Switch, Route } from 'react-router-dom';
import Welcome from './welcome';
import AboutMe from './about_me';
import Projects from './projects';
import Blog from './blog';
import QuantumSim from './project_pages/quantum_sim';
import Soultunes from './project_pages/soultunes';
import Portfolio from './project_pages/portfolio';
import PhysicsMG from './project_pages/pm_games';


export default function App() {

    return(
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/about_me/" component={AboutMe} />
                <Route exact path="/projects/"component={Projects} />
                <Route path="/blog/" component={Blog} />
                <Route path="/projects/portfolio_website/" component={Portfolio} />
                <Route path="/projects/quantum_sim/" component={QuantumSim} />
                <Route path="/projects/physics_mini_games/" component={PhysicsMG} />
                <Route path="/projects/soultunes/" component={Soultunes} />
            </Switch>
        </div>
        );
}