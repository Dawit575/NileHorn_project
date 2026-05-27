import React from 'react';
import style from './CallTo_Action.module.css';
import { Link } from 'react-router-dom';
function CallTo_Action() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>Let’s Build Something Amazing Together</h1>

        <p className={style.desc}>
          I am available for freelance work, internships, and full-time opportunities. Let’s turn
          your idea into a real product with modern web technologies.
        </p>

        <div className={style.buttons}>
          <Link to ="/contact" className={style.primaryBtn}>
            Contact Me
          </Link>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className={style.secondaryBtn}
          >
            View GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default CallTo_Action;
