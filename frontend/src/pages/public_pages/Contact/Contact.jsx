import React from 'react';
import Contact_Form from '../../../components/Contact/Contact_Form/Contact_Form';
import Contact_info from '../../../components/Contact/Contact_Information/Contact_Info';
import Social_Links from '../../../components/Contact/Social_Links/Social_Links';
import style from './Contact.module.css';

function Contact() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Contact Me</h1>

      <div className={style.content}>

        <div className={style.formSection}>
          <Contact_Form />
        </div>

        <div className={style.infoSection}>
          <Contact_info />
        </div>
      </div>

      <div className={style.socialSection}>
        <Social_Links />
      </div>
    </div>
  );
}

export default Contact;
