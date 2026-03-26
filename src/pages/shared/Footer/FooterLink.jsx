import React from 'react';
import { Link } from 'react-router';


const FooterLink = () => {
      const links=<>
  <Link to={'/services'}>Services</Link>
  <Link to={'/coverage'}>Coverage</Link>
  <Link to={'/about-us'}>About Us</Link>
  <Link to={'/pricing'}>Pricing</Link>
  <Link to={'/blog'}>Blog</Link>
  <Link to={'/contact'}>Contact</Link>
  </>
    return (
        <div>
             <ul className="menu menu-horizontal px-1 gap-3">
         {links}
        </ul>
        </div>
    );
};

export default FooterLink;