import React, { Component } from 'react';
import '../styles/contact.scss'


class Contact extends Component {
    state = {  }
    render() {
        return (
            <div className="contact">
                <div className="contact__text-wraper"><h2 className="contact__title">Contact me</h2>
                <p className="contact__paragraph">If You have any questions or offers please write to me <br/> I will surely answear as soon as possible </p></div>
                <form action="" className="contact__form">
                    <input type="text" placeholder="Name" className="contact__input" />
                    <input type="email" placeholder="E-mail" className="contact__input" />
                    <textarea name="Your message" id="msgMe" cols="30" rows="10"  placeholder="Your message" className="contact__message contact__input" ></textarea>
                    <div className="contact__btn-wraper"><button className="contact__send-btn">Send</button></div>
                </form>
            </div>
         );
    }
}

export default Contact;