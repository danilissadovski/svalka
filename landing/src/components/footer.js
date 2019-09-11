import React from 'react';
import {
    Media,
    Container,
    Nav,
    Row
} from 'reactstrap';
import logo from './../images/logo.jpeg';

const Footer = () => {
    return (
        <Container fluid className="bg-2">
            <Row>
                <Media body className="col-lg-5 row">
                    <img src={logo} height = "48px" width = "48px" className="logo-fix"/>
                    <div className="text-fix-2 px-lg-2">
                        <h1 className="footer-header">SVALKA</h1>
                        <p className="text-style-for-footer">Important claim here</p>
                    </div>
                </Media>
                <Media body className="col-lg-5">
                    <div className="text-for-footer">
                        Some reminder for the users who scrolled <br/>
                        through the landing page and forgot why <br/>
                        they are here in the first place
                    </div>
                </Media>
                <Nav>
                    <Media body className="col-lg-2">
                        <div className="shortcuts-for-footer">
                            Shortcut1
                            Shortcut2
                            Shortcut3
                        </div>
                    </Media>
                </Nav>
            </Row>
            <hr className="my-2"/>
            <div className="Terms-Privacy-Licens">
                Terms    Privacy    License
            </div>
        </Container>
    );
};

export default Footer;
