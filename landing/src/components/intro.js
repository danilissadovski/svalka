import React from 'react';
import { Card, CardText, CardBody, CardTitle, Button, ButtonGroup } from 'reactstrap';

const Intro = (props) => {
  return (
      <div className="card">
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
      </div>
  );
};

export default Intro;
