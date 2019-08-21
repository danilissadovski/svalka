import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const Example = () => {
    return (
        <div className="clearfix" style={{ padding: '.9rem' }}>
            <div className="btn float-left px-lg-5">
                <h1>SVALKA</h1>
                <p>Important claim here</p>
            </div>
            <ButtonGroup className="btn btn-secondary float-right py-2">
                <Button>Shortcut 1</Button>
                <Button>Shortcut 2</Button>
                <Button>Shortcut 3</Button>
                <Button color="primary" className='ml-1'>Get Started</Button>
            </ButtonGroup>
        </div>
    );
};

export default Example;

