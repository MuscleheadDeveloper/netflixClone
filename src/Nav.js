import React, { useEffect, useState } from 'react';
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 100){
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return ()=>{
            window.removeEventListener('scroll');
        }
    }, []);

    return (
      <div className={`nav ${show && 'nav-black'}`}>
        <img
          className="nav-logo"
          alt="Netflix thing"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        />

        <img className="nav-avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Netflix logo tin"
        />
      </div>
    );
}

export default Nav
