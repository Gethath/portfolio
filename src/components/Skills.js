import React from 'react';
import '../styles/skills.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const items=[
    {id:"HTML", icon:'html5', text:"Good knownlage about semantic tags", acronyme:true},
    {id:'CSS', icon:'css3-alt', text:"Grid, flexbox, SCSS with BEM methodology",acronyme:true},
    {id:'JavaScript', icon:'js', text:"ES6, basic knownlage about OOP"},
    {id:'React', icon:'react', text:"CRA, components life cycle, basics of hooks"},
    {id:'GIT', icon:'git', text:"Few basic commands, but I want to learn more soon",acronyme:true },
]


const Skills = () => {

    const skills= items.map(item=>(
        <li className="skills__item"><FontAwesomeIcon className={`skills__icon ${item.id.toLowerCase()}`} icon={['fab', `${item.icon}`]} /><div className="skills__screen">{item.acronyme? <abbr className="skills__skill-name">{item.id}</abbr>:<span className="skills__skill-name">{item.id}</span>}<p className="skills__skill-text">{item.text}</p></div></li>
    ))
    return ( <div className='skills'>
                <div className="skills__titlewraper"><h2 className="skills__title">Skills</h2></div>
            <ul className="skills__list">
                    {skills}
            </ul>
    </div> );
}

export default Skills;