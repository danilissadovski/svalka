import React from 'react';
import {Card, CardText, Row, Col, CardTitle, ButtonGroup, Button, CardBody} from 'reactstrap';
import logo from './../images/logo.jpeg';

const Content = (props) => {
    return (
        <Row>
            <Col sm="4">
                <Card body>
                    <CardBody>
                        <CardTitle>
                            <h1 className="Get-rid-of-stuff">Get rid of stuff </h1>
                        </CardTitle>
                        <CardText>
                            <div  className="lead Give-things-you-no-l ">
                                Give things you no longer use <br/>
                                to the ones in need by <br/>
                                requesting our free pickup <br/>
                                service
                            </div>
                        </CardText>
                        <hr className="my-2"/>
                        <p className="lead">
                            <ButtonGroup>
                                <Button outline color="primary">Learn More</Button>
                                <Button color="primary" className="ml-1">Get Started</Button>
                            </ButtonGroup>
                        </p>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="8">
                <Card body>
                    <img src={logo} height = "auto" width = "auto"/>
                </Card>
            </Col>
        </Row>
    );
};

export default Content;
