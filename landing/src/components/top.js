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
import logo from './../images/logo.jpeg';

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
            <div>
                <Navbar dark expand="md">
                    <Container fluid>
                        <img src={logo} height = "60px" width = "60px" className="logo-fix"/>
                        <NavbarBrand className="text-fix px-lg-2">
                            <h1 className="SVALKA-Important-cla">SVALKA</h1>
                            <p className="text-style-1">Important claim here</p>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="#">Shortcut1</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Shortcut2</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Shortcut3</NavLink>
                                </NavItem>
                                <Button color="primary" className="ml-1">Get Started</Button>{" "}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Top;
