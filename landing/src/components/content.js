import React from 'react';
import { Card, CardText, Row, Col } from 'reactstrap';

const Example = (props) => {
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
                    <CardText className="What-kind-of-stuff-y">
                        <p>What do you do with my stuff?</p>
                        <div  className="text-style-2">
                        We refurbish old things and sell it to <br/>
                        the people who cannot afford or don’t <br/>
                        want to buy brand new stuff
                        </div>
                    </CardText>
                </Card>
            </Col>
        </Row>
    );
};

export default Example;

