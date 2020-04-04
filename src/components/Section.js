import React from 'react';
import {Route} from 'react-router-dom'

import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"
const Section = () => {
    return (
        <>
            <Route path="/" exact component={About}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
        </>
     );
}

export default Section