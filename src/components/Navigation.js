import React from 'react';
import {NavLink} from 'react-router-dom'
import "../styles/navigation.scss"
// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const list= [
    {name:"about", path:"/", exact:true},
    {name:"skills", path:"/skills"},
    {name:"projects", path:"/projects"},
    {name:"contact", path:"/contact"},
]


const Navigation = () => {
    const menu= list.map(item=>(
        <li key={item.name} className="navigation__item">
            <NavLink to={item.path} className="navigation__link" activeClassName="navigation__link--active" exact={item.exact?item.exact:null}>{item.name}</NavLink>
        </li>
    ))
    return (
    <div className="navigation">
        <ul className="navigation__list">
            {menu}
        </ul>
        <div className="navigation__socials">
        <a href="https://www.linkedin.com/in/daniel-kosk-8269b91a5/" target="_blank" rel="noopener noreferrer" className="navigation__social-link"> <FontAwesomeIcon className="navigation__social-icon-li" icon={['fab', 'linkedin']} size="4x"/></a>
        <a href="https://github.com/Gethath" target="_blank" rel="noopener noreferrer" className="navigation__social-link"><FontAwesomeIcon className="navigation__social-icon-gh " icon={['fab', 'github']} size="4x"/></a>
         </div>
    </div>
     );
}

export default Navigation;