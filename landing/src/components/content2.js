import React from 'react';
import {
    Media,
    Row,
    Col,
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
                    <Media className="col-sm-5 image-fix">
                        <img src={logo} height = "auto" width = "100%"/>
                    </Media>
                    <Media body className="col-sm-7 start-your-free-fix">
                        <Media heading className="Start-your-free-memb">
                            Start your free membership
                        </Media>
                        <div className="We-hate-spam-and-wil">
                            We hate spam and
                            will never bother
                            you with any kind of advertisement
                        </div>
                        <Row className="py-2">
                            <Col sm="auto">
                                <Input type="email" name="email" id="exampleEmail"
                                       placeholder="Enter your email" />
                            </Col>
                            <Col sm="auto">
                                <Button color="primary"className="ml-1">Get Started</Button>
                            </Col>
                        </Row>
                    </Media>
                </Row>
            </Media>
        </Container>
    );
};

export default Content2;
