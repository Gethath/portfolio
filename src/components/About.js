import React from 'react';
import '../styles/about.scss'

const About = (props) => {
    return (
        <div className="about">
            <div className="about__title-wraper"><h2 className="about__title">Who is this guy?</h2></div>
            <div className="about__img-wraper"><img src={props.imgUrl} alt="Daniel Kosk author of this page" className="about__photo-mobile-mini"></img></div>
            <p className="about__paragraph">Hi, I am <span className="about__highlight">Daniel Kosk</span>, for about a year I am learning about <span className="about__highlight">front-end</span> technologies. I want to start working with pros to <span className="about__highlight">elevate my knownlage</span> to the next level.</p>
        </div>
        );
}

export default About;