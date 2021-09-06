import React from 'react'
import ContactItem from '../Components/ContactItem'
import phone from '../img/phone.svg';
import email from '../img/email.svg';
import location from '../img/location.svg';
import Title from '../Components/Title'

function ContactPage() {
    return (
      <div>
          <div className="title">
            <Title title={'About Me'} span={'About Me'} />
          </div>
          <div className="ContactPage">
           <div className="map-sect">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2026232.7160259252!2d7.587976508581123!3d7.299191362380936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105af4786063f635%3A0x241f799ebc348ae!2sBenue!5e0!3m2!1sen!2sng!4v1628499495388!5m2!1sen!2sng" frameBorder="0" width="600" height="450" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0" loading="lazy"></iframe> 
           </div>
           <div className="contact-sect">
               <ContactItem icon={phone} text1={'+2348052624889'}text2={'+23452624448'} title={'Phone'}/>
               <ContactItem icon={email} text1={'loremimpsu@gmail.com'}text2={'abyyyryy@gmail.com'} title={'Email'}/>
               <ContactItem icon={location} text1={'whutehouse london'}text2={'24 Akilowoye street'} title={'Address'}/>
            </div>
           </div>
        </div>
      
    )
}

export default ContactPage;
