import React from 'react';
import {
    Media,
    Row,
    Col,
    Container,
    Input,
    Button
} from 'reactstrap';
import logo from './../images/logo.jpeg';

const Content2 = () => {
    return (
        <Container fluid className="bg">
            <Media>
                <Row>
                    <Media className="col-sm-5 image-fix">
                        <img src={logo} height = "200em" width = "200em"/>
                    </Media>
                    <Media body className="col-sm-7">
                        <Media heading className="heading-for-the-third-block">Start your free membership</Media>
                        <div className="text-for-the-third-block">We hate spam and will never bother
                            you with any kind of advertisement</div>
                        <Row className="py-2">
                            <Col sm="6">
                                <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" />
                            </Col>
                            <Col sm="6">
                                <Button color="primary"className="ml-1">Get Started</Button>
                            </Col>
                        </Row>
                    </Media>
                </Row>
            </Media>
        </Container>
    );
};

export default Content2;
