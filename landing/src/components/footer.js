import React from 'react';
import {
    Media,
    Container,
    Nav
} from 'reactstrap';
import logo from './../images/logo.jpeg';

const Footer = () => {
    return (
        <Container fluid className="bg-2">
            <Media>
                <Media body className="col-sm-auto row">
                    <img src={logo} height = "42px" width = "42px" className="logo-fix"/>
                    <div className="text-fix-2 px-lg-2">
                        <h1 className="footer-header">SVALKA</h1>
                        <p className="text-style-for-footer">Important claim here</p>
                    </div>
                </Media>
                <Media body className="col-sm-auto">
                    <div className="text-for-footer">
                        Some reminder for the users who scrolled <br/>
                        through the landing page and forgot why <br/>
                        they are here in the first place.
                    </div>
                </Media>
                <Nav>
                    <Media body className="col-sm-auto">
                        <div className="shortcuts-for-footer">
                            Shortcut1
                            Shortcut2
                            Shortcut3
                        </div>
                    </Media>
                </Nav>
            </Media>
            <hr className="my-2"/>
            <div className="Terms-Privacy-Licens">
                Terms    Privacy    License
            </div>
        </Container>
    );
};

export default Footer;
