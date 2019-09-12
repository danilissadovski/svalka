import React from 'react';
import {
    Media,
    Container,
    Nav,
    Row, NavItem, NavLink
} from 'reactstrap';
import logo from './../images/logo.jpeg';
import { ReactComponent as TwitterIcon } from './../icons/twitter.svg';
import { ReactComponent as FacebookIcon } from './../icons/fb.svg';
import { ReactComponent as InstagramIcon } from './../icons/ln.svg';

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
                        Some reminder for the users who scrolled through the landing page and forgot why they are here
                        in the first place</div>
                </Media>
                <Nav>
                    <Media body className="col-lg-2">
                        <div className="shortcuts-for-footer">
                            <NavItem>
                                <NavLink href="#">Shortcut1</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Shortcut2</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Shortcut3</NavLink>
                            </NavItem>
                        </div>
                    </Media>
                </Nav>
            </Row>
            <hr className="my-2"/>
            <div className="Terms-Privacy-Licens-styles">
                Terms    Privacy    License
                <div className="float-right row">
                    <div className="px-lg-3">
                        <TwitterIcon/>
                    </div>
                    <div className="px-lg-3">
                        <FacebookIcon/>
                    </div>
                    <div className="px-lg-3">
                        <InstagramIcon/>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Footer;
