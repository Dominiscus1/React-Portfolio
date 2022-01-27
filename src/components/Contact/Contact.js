import React from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'

function Contact() {
    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm('service_xznycwv', 'template_hxlo4ib', e.target, 'user_yCXvwqJ17LetBZjQtklAi')
        .then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
        e.target.reset()
    }
    return (
        <div className='contact component__space container' id='Contact'>
            <div className='row'>
                <div className='col__2'>
                    <div className='contact__box'>
                        <div className='contact__meta'>
                            <h1 className='contact__text align__item__center maroon'>Contact Me</h1>
                            <p className='contact__text  maroon'>Want to ask me some questions about my work?</p>
                            <p className='contact__text  maroon'>Contact me via email <strong>Tony6776a@gmail.com</strong></p>
                            <div className='input__box maroon'>
                                <form className='row' onSubmit={sendEmail}>
                                <input type='text' className='contact name' placeholder='Your name *' name='name'/>
                                <input type='email' className='contact email' placeholder='Your email *' name='email'/>
                                <input type='text' className='contact subject' placeholder='Write a subject *' name='subject'/>
                                <textarea name='message' id='message' placeholder='Write your message *'name='message'></textarea>
                                <button className='btn contact pointer teal' type='submit' value='Send Message'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
