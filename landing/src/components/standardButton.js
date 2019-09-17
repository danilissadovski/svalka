import React from 'react';
import { Button } from 'reactstrap';

export default props => {
  return (
    <Button color={props.color} className="ml-1 style-for-button">
      {props.text}
    </Button>
  );
};
