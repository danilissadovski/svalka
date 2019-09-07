// import React from 'react';
// import {
//     Media,
//     Container,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     Col,
//     Row
// } from 'reactstrap';
// import logo from "../images/logo.jpeg";
//
//
// const Footer = () => {
//     return (
//         <Container fluid className="bg-2">
//             <Media>
//                 <Row>
//                         <img src={logo} height = "60px" width = "60px" className="logo-fix"/>
//                         <NavbarBrand className="text-fix px-lg-2 col-auto">
//                             <h1 className="SVALKA-Important-cla">SVALKA</h1>
//                             <p className="text-style-1">Important claim here</p>
//                         </NavbarBrand>
//                         <NavItem className="col-sm-auto Some-reminder-for-th col-auto">
//                             Some reminder for the users who scrolled <br/>
//                             through the landing page and forgot why <br/>
//                             they are here in the first place.
//                         </NavItem>
//                         <NavItem className="colauto Shortcut1-Shortcut2-3 ">
//                             Shortcut1 <br/>
//                             Shortcut2 <br/>
//                             Shortcut3
//                         </NavItem>
//                 </Row>
//             </Media>
//         </Container>
//     );
// };
//
// export default Footer;

import React from 'react';
import {
    Media,
    Container,
    Nav
} from 'reactstrap';

const Content = () => {
    return (
        <Container fluid className="bg-2">
            <Media>
                <Media body className="col-sm-4">
                    <div className="text-fix px-lg-2">
                        <h1 className="SVALKA-Important-cla">SVALKA</h1>
                        <p className="text-style-1">Important claim here</p>
                    </div>
                </Media>
                <Media body className="col-sm-4">
                    <div className="Some-reminder-for-th">
                        Some reminder for the users who scrolled <br/>
                        through the landing page and forgot why <br/>
                        they are here in the first place.
                    </div>
                </Media>
                <Nav>
                <Media body className="col-sm-4">
                    <div className="Shortcut1-Shortcut2-3">
                        Shortcut1 <br/>
                        Shortcut2 <br/>
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

export default Content;
