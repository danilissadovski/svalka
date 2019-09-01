import React from 'react';
import { Card, CardText, Row, Col } from 'reactstrap';
import logo from './../assets/logo.jpg';

const Content = (props) => {
    return (
        <Row>
            <Col sm="6">
                <Card body>
                    <CardText className="What-kind-of-stuff-y">
                        <p>What kind of stuff you accept?</p>
                        <div  className="text-style-2">
                        We accept everything that can be put<br/>
                        in a small truck including furniture, <br/>
                        electronics, clothes and so on.
                        </div>
                    </CardText>
                </Card>
            </Col>
            <Col sm="6">
                <Card body>
                    <img src={logo} height = "auto" width = "100%"/>
                </Card>
            </Col>
        </Row>
    );
};

export default Content;
