import React from 'react';
import {Card, CardText, CardBody, CardTitle, Button, ButtonGroup, Row, Col} from 'reactstrap';
import logo from './../assets/logo.jpg';

const Intro = (props) => {
  return (
      <Row>
        <Col sm="6">
        <Card>
          <CardBody>
            <CardTitle>
              <h1 className="display-1 Get-rid-of-stuff">Get rid of stuff </h1>
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
                <Button color="alpha">Learn More</Button>
                <Button color="primary" className="ml-1">Get Started</Button>
              </ButtonGroup>
            </p>
          </CardBody>
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

export default Intro;
