import React from 'react';
import style from './Socail_Links.module.css';

function Social_Links() {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Connect With Me</h2>

      <div className={style.links}>
        <ayourusername
          href="https://github.com/Dawit575"
          target="_blank"
          rel="noreferrer"
          className={style.link}
        >
          GitHub
        </ayourusername>

        <a
          href="https://www.linkedin.com/in/bire-tadesse-107b013b3/"
          target="_blank"
          rel="noreferrer"
          className={style.link}
        >
          LinkedIn
        </a>

        <a
          href="https://facebook.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className={style.link}
        >
          Facebook
        </a>

        <a href="https://t.me/yourusername" target="_blank" rel="noreferrer" className={style.link}>
          Telegram
        </a>
      </div>
    </div>
  );
}

export default Social_Links;
