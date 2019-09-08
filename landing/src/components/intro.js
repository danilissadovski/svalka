import React from 'react';
import {
    Media,
    Container,
    Button,
    ButtonGroup,
    Row,
} from 'reactstrap';
import logo from './../images/logo.jpeg';

const Intro = () => {
    return (
        <Container fluid>
            <Media>
                <Row>
                    <Media body className="col-sm-5">
                        <Media heading>
                            <h3 className="heading-for-the-first-block">Get rid of stuff </h3>
                        </Media>
                        <div  className="lead text-for-the-first-block">Give things you no longer use to the ones in need
                            by requesting our free pickup service</div>
                         <hr className="my-2"/>
                         <p className="lead">
                             <ButtonGroup>
                                <Button outline color="primary">Learn More</Button>
                                <Button color="primary" className="ml-1">Get Started</Button>
                             </ButtonGroup>
                         </p>
                    </Media>
                    <Media className="col-sm-7">
                        <img src={logo} height = "auto" width = "100%"/>
                    </Media>
                </Row>
            </Media>
        </Container>
    );
};

export default Intro;
