import React from 'react';
import {
    Media,
    Row,
    Container,
    Input,
    Button
} from 'reactstrap';
import logo from './../images/logo.jpeg';

const Content2 = () => {
    return (
        <Container fluid className="bg">
            <Media>
                <Row>
                    <Media className="col-lg-5 image-fix">
                        <img src={logo} height = "200em" width = "200em"/>
                    </Media>
                    <Media body className="col-lg-7 padding-for-the-third-block">
                        <Media heading className="heading-for-the-third-block">Start your free membership</Media>
                        <div className="text-for-the-third-block">We hate spam and will never bother
                            you with any kind of advertisement</div>
                        <div style={{display: "flex"}}>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email"
                                       className="col-6"/>
                                <Button color="primary"className="ml-1">Get Started</Button>
                        </div>
                    </Media>
                </Row>
            </Media>
        </Container>
    );
};

export default Content2;
