(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{25:function(e,a,t){e.exports=t(48)},30:function(e,a,t){},31:function(e,a,t){},37:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){e.exports=t.p+"static/media/img-mobile-mini.44e58fcb.jpg"},45:function(e,a,t){e.exports=t.p+"static/media/img-mobile.220aef06.jpg"},46:function(e,a,t){e.exports=t.p+"static/media/img-tablet.340275d3.jpg"},47:function(e,a,t){e.exports=t.p+"static/media/img-desktop.58a075ec.jpg"},48:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(21),i=t.n(c),o=(t(30),t(12)),r=t(13),s=t(14),m=t(15),u=(t(31),t(9)),p=t(10),h=t(24),_=t(6),d=(t(37),[{name:"about",path:"/",exact:!0},{name:"skills",path:"/skills"},{name:"projects",path:"/projects"},{name:"contact",path:"/contact"}]),g=function(){var e=d.map((function(e){return l.a.createElement("li",{key:e.name,className:"navigation__item"},l.a.createElement(u.b,{to:e.path,className:"navigation__link",activeClassName:"navigation__link--active",exact:e.exact?e.exact:null},e.name))}));return l.a.createElement("div",{className:"navigation"},l.a.createElement("ul",{className:"navigation__list"},e),l.a.createElement("div",{className:"navigation__socials"},l.a.createElement("a",{href:"https://www.linkedin.com/in/daniel-kosk-8269b91a5/",target:"_blank",rel:"noopener noreferrer",className:"navigation__social-link"}," ",l.a.createElement(_.a,{className:"navigation__social-icon-li",icon:["fab","linkedin"],size:"4x"})),l.a.createElement("a",{href:"https://github.com/Gethath",target:"_blank",rel:"noopener noreferrer",className:"navigation__social-link"},l.a.createElement(_.a,{className:"navigation__social-icon-gh ",icon:["fab","github"],size:"4x"}))))},f=t(7),E=(t(40),function(e){return l.a.createElement("div",{className:"about"},l.a.createElement("div",{className:"about__title-wraper"},l.a.createElement("h2",{className:"about__title"},"Who is this guy?")),l.a.createElement("div",{className:"about__img-wraper"},l.a.createElement("img",{src:e.imgUrl,alt:"Daniel Kosk author of this page",className:"about__photo-mobile-mini"})),l.a.createElement("p",{className:"about__paragraph"},"Hi, I am ",l.a.createElement("span",{className:"about__highlight"},"Daniel Kosk"),", for about a year I am learning about ",l.a.createElement("span",{className:"about__highlight"},"front-end")," technologies. I want to start working with pros to ",l.a.createElement("span",{className:"about__highlight"},"elevate my knownlage")," to the next level."))}),b=(t(41),[{id:"HTML",icon:"html5",text:"Good knownlage about semantic tags",acronyme:!0},{id:"CSS",icon:"css3-alt",text:"Grid, flexbox, SCSS with BEM methodology",acronyme:!0},{id:"JavaScript",icon:"js",text:"ES6, basic knownlage about OOP"},{id:"React",icon:"react",text:"CRA, components life cycle, basics of hooks"},{id:"GIT",icon:"git",text:"Few basic commands, but I want to learn more soon",acronyme:!0}]),k=function(){var e=b.map((function(e){return l.a.createElement("li",{className:"skills__item"},l.a.createElement(_.a,{className:"skills__icon ".concat(e.id.toLowerCase()),icon:["fab","".concat(e.icon)]}),l.a.createElement("div",{className:"skills__screen"},e.acronyme?l.a.createElement("abbr",{className:"skills__skill-name"},e.id):l.a.createElement("span",{className:"skills__skill-name"},e.id),l.a.createElement("p",{className:"skills__skill-text"},e.text)))}));return l.a.createElement("div",{className:"skills"},l.a.createElement("div",{className:"skills__titlewraper"},l.a.createElement("h2",{className:"skills__title"},"Skills")),l.a.createElement("ul",{className:"skills__list"},e))},v=function(){return l.a.createElement("div",null,"My projects")},w=(t(42),function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={},e}return Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"contact"},l.a.createElement("div",{className:"contact__text-wraper"},l.a.createElement("h2",{className:"contact__title"},"Contact me"),l.a.createElement("p",{className:"contact__paragraph"},"If You have any questions or offers please write to me ",l.a.createElement("br",null)," I will surely answear as soon as possible ")),l.a.createElement("form",{action:"",className:"contact__form"},l.a.createElement("input",{type:"text",placeholder:"Name",className:"contact__input"}),l.a.createElement("input",{type:"email",placeholder:"E-mail",className:"contact__input"}),l.a.createElement("textarea",{name:"Your message",id:"msgMe",cols:"30",rows:"10",placeholder:"Your message",className:"contact__message contact__input"}),l.a.createElement("div",{className:"contact__btn-wraper"},l.a.createElement("button",{className:"contact__send-btn"},"Send"))))}}]),t}(n.Component)),N=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{path:"/",exact:!0,render:function(){return l.a.createElement(E,{imgUrl:e.imgUrl})}}),l.a.createElement(f.a,{path:"/skills",component:k}),l.a.createElement(f.a,{path:"/projects",component:v}),l.a.createElement(f.a,{path:"/contact",component:w}))},y=(t(43),function(){return l.a.createElement("h1",{className:"slogan"},l.a.createElement("span",{className:"slogan__color"}," welcome")," to Daniel's ",l.a.createElement("span",{className:"slogan__color"},"portfolio"))});p.b.add(h.a);var x=function(e){Object(m.a)(n,e);var a=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var t=arguments.length,l=new Array(t),c=0;c<t;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={imgUrl:""},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.setImgUrl(),window.addEventListener("resize",this.setImgUrl.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setImgUrl.bind(this))}},{key:"updateWindowWidth",value:function(){this.setState({width:window.innerWidth})}},{key:"setImgUrl",value:function(){window.innerWidth<370?this.setState({imgUrl:"".concat(t(44))}):window.innerWidth>370&&window.innerWidth<760?this.setState({imgUrl:"".concat(t(45))}):window.innerWidth>760&&window.innerWidth<1024?this.setState({imgUrl:"".concat(t(46))}):this.setState({imgUrl:"".concat(t(47))})}},{key:"render",value:function(){var e=(new Date).getFullYear();return l.a.createElement(u.a,{basename:"/portfolio"},l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement(y,null)),l.a.createElement("nav",null,l.a.createElement(g,null)),l.a.createElement("section",null,l.a.createElement(N,{imgUrl:this.state.imgUrl})),l.a.createElement("footer",{className:"footer"},l.a.createElement("p",{className:"footer__paragraph"},"By Daniel Kosk ",l.a.createElement("span",{className:"footer__highlight"},e,"\xa9")),l.a.createElement("div",{className:"footer__socials"},l.a.createElement("a",{href:"https://www.linkedin.com/in/daniel-kosk-8269b91a5/",target:"_blank",rel:"noopener noreferrer",className:"footer__social-link"}," ",l.a.createElement(_.a,{className:"footer__social-icon-li",icon:["fab","linkedin"],size:"2x"})),l.a.createElement("a",{href:"https://github.com/Gethath",target:"_blank",rel:"noopener noreferrer",className:"footer__social-link"},l.a.createElement(_.a,{className:"footer__social-icon-gh ",icon:["fab","react"],size:"2x"}))))))}}]),n}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.45b82c93.chunk.js.map