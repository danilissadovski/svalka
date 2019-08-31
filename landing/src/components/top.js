import React from 'react';
import { Button } from 'reactstrap';

const Top = () => {
    return (
        <div className="container-fluid" style={{ padding: '.9rem' }}>
            <div className="float-left col-sm-4">
                <h1 className="SVALKA-Important-cla">SVALKA</h1>
                <p className="text-style-1">Important claim here</p>
            </div>
            <div className="float-right py-2 row Shortcut1-Shortcut2">
                <Button caret color="white" className="col-sm px-lg-5">Shortcut 1</Button>
                <Button caret color="white" className="col-sm px-lg-5">Shortcut 2</Button>
                <Button caret color="white" className="col-sm px-lg-5">Shortcut 3</Button>
                <Button color="primary" className='ml-1 col-sm px-lg-5'>Get Started</Button>
            </div>
        </div>
    );
};

export default Top;
