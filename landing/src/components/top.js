import React from 'react';
import { Button, Media } from 'reactstrap';
import logo from "../images/logo.jpeg";

const Top = () => {
    return (
        <Media>
            <img src={logo} height = "60px" width = "60px" className="logo-fix"/>
                <div className="container-fluid" style={{ padding: '.9rem' }}>
                    <div className="float-left col-sm-4 py-3">
                        <h1 className="SVALKA-Important-cla text-fix">SVALKA</h1>
                        <p className="text-style-1">Important claim here</p>
                    </div>
                    <div className="float-right py-2 row Shortcut1-Shortcut2">
                        <Button color="link" className="col-sm px-lg-5">Shortcut1</Button>
                        <Button color="link" className="col-sm px-lg-5">Shortcut2</Button>
                        <Button color="link" className="col-sm px-lg-5">Shortcut3</Button>
                        <Button caret color="primary" className='ml-1 col-sm px-lg-5'>Get Started</Button>
                    </div>
                </div>
        </Media>
    );
};

export default Top;
