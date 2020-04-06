import React, { Component } from 'react';
import '../styles/App.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navigation from './Navigation';
import Section from './Section'
import Header from './Header'

library.add(fab)
class App extends Component {

  state = {
    width:1024,
    imgUrl:"",
   }
componentDidMount() {
  this.updateWindowWidth();
  window.addEventListener("resize", this.updateWindowWidth.bind(this));
  window.addEventListener("resize", this.setImgUrl.bind(this));
}

componentWillUnmount() {
  window.removeEventListener("resize", this.updateWindowWidth.bind(this));
  window.removeEventListener("resize", this.bind(this));
}

updateWindowWidth(){
  this.setState({ width: window.innerWidth});
  this.setImgUrl();
}

setImgUrl(){
  if (this.state.width<370){
    this.setState({
      imgUrl:`${require('../img/img-mobile-mini.jpg')}`})}
    else if (this.state.width>370&&this.state.width<760){
      this.setState({
       imgUrl:`${require('../img/img-mobile.jpg')}`})}
    else if (this.state.width>760&&this.state.width<1024){
      this.setState({
         imgUrl:`${require('../img/img-tablet.jpg')}`})}
   else{
     this.setState({
       imgUrl:`${require('../img/img-desktop.jpg')}`})}

}


  render() {
    const date=new Date().getFullYear();

    return (
      <Router basename={process.env.PUBLIC_URL}>
      <div className="App" >
          <header><Header/></header>
          <nav><Navigation/></nav>
          <section><Section imgUrl={this.state.imgUrl}/></section>
          <footer className="footer"><p className="footer__paragraph">By Daniel Kosk <span className="footer__highlight">{date}©</span></p>
          <div className="footer__socials">
          <a href="https://www.linkedin.com/in/daniel-kosk-8269b91a5/" target="_blank" rel="noopener noreferrer" className="footer__social-link"> <FontAwesomeIcon className="footer__social-icon-li" icon={['fab', 'linkedin']} size="2x"/></a>
          <a href="https://github.com/Gethath" target="_blank" rel="noopener noreferrer" className="footer__social-link"><FontAwesomeIcon className="footer__social-icon-gh " icon={['fab', 'github']} size="2x"/></a>
           </div></footer>
      </div>
      </Router>
    );
  }
}

export default App;
