import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Button
} from "reactstrap";
import logo from './../images/logo3.jpg';

class Top extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar dark expand="md" className="px-2">
                <Container fluid>
                    <img src={logo} height = "60px" width = "60px" className="logo-fix"/>
                    <NavbarBrand className="text-fix">
                        <NavbarBrand className="footer-header">SVALKA</NavbarBrand>
                        <p className="text-style-for-footer">Important claim here</p>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="px-lg-3">
                                <NavLink href="#">Shortcut1</NavLink>
                            </NavItem>
                            <NavItem className="px-lg-3">
                                <NavLink href="#">Shortcut2</NavLink>
                            </NavItem>
                            <NavItem className="px-lg-3">
                                <NavLink href="#">Shortcut3</NavLink>
                            </NavItem>
                            <div className="px-lg-3">
                                <Button color="primary" className="">Get Started</Button>{" "}
                            </div>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Top;
