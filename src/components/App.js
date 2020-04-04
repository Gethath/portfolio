import React from 'react';
import '../styles/App.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navigation from './Navigation';
import Section from './Section'
import Header from './Header'

library.add(fab)

function App() {
  const date=new Date().getFullYear();

  return (
    <Router>
    <div className="App">
        <header><Header/></header>
        <nav><Navigation/></nav>
        <section><Section/></section>
        <footer className="footer"><p className="footer__paragraph">By Daniel Kosk <span className="footer__highlight">{date}©</span></p>
        <div className="footer__socials">
        <a href="https://www.linkedin.com/in/daniel-kosk-8269b91a5/" target="_blank" rel="noopener noreferrer" className="footer__social-link"> <FontAwesomeIcon className="footer__social-icon-li" icon={['fab', 'linkedin']} size="2x"/></a>
        <a href="https://github.com/Gethath" target="_blank" rel="noopener noreferrer" className="footer__social-link"><FontAwesomeIcon className="footer__social-icon-gh " icon={['fab', 'github']} size="2x"/></a>
         </div></footer>
    </div>
    </Router>
  );
}

export default App;
