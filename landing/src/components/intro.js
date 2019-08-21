import React from "react";
import {Jumbotron, Button, ButtonGroup} from 'reactstrap';

export default (props) => {
  return (
      <div>
        <Jumbotron>
          <h1 className="display-1">Get rid of stuff </h1>
          <div className="lead">
            Give things you no longer use <br/>
            to the ones in need by <br/>
            requesting our free pickup <br/>
            service
          </div>
          <hr className="my-2"/>
          <p className="lead">
            <ButtonGroup>
              <Button color="alpha">Learn More</Button>
              <Button color="primary" className='ml-1'>Get Started</Button>
            </ButtonGroup>
          </p>
        </Jumbotron>
      </div>
  );
};
