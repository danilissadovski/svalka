import React from 'react';
import { Card, CardText, CardBody, CardTitle, Button, Input, Col, Row } from 'reactstrap';
import logo from './../images/logo.jpeg';

const Content2 = (props) => {
    return (
        <Row>
            <Col sm="4">
                <Card body>
                    <img src={logo} height = "auto" width = "100%"/>
                </Card>
            </Col>
            <Col sm="8" className="py-5">
                <Card>
                    <CardBody>
                        <CardTitle className="Start-your-free-memb">Start your free membership</CardTitle>
                            <CardText className="We-hate-spam-and-wil">We hate spam and
                            will never bother
                            you with any kind of advertisement</CardText>
                        <Row>
                            <Col sm={6}>
                                <Input type="email" name="email" id="exampleEmail"
                                       placeholder="Enter your email" />
                            </Col>
                            <Col>
                                <Button color="primary" sm={6} className="ml-1">Get Started</Button>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Content2;
