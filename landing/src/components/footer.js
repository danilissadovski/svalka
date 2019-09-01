import React from 'react';
import { Media } from 'reactstrap';

const Footer = () => {
    return (
        <Media className="row">
            <h5 className="col-sm-4">
                SVALKA
                <h6>Important claim here</h6>
            </h5>
            <div className="col-sm-4 ">Some reminder for the users who scrolled
                through the landing page and forgot why they are here in the first place.</div>
            <div className="col-sm-4 ">
                Shortcut1
                Shortcut2
                Shortcut3
            </div>
        </Media>
    );
};

export default Footer;
