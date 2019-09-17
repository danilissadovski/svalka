import React from 'react';
import { Media, Container, Row } from 'reactstrap';

const Content = () => {
  return (
    <Container fluid className="bg">
      <Row>
        <Media body className="col-lg-6">
          <Media heading className="heading-for-the-second-block col">
            What kind of stuff you accept?
          </Media>
          <div className="text-for-the-second-block">
            We accept everything that can be put in a small truck including
            furniture, electronics, clothes and so on
          </div>
        </Media>
        <Media body className="col-lg-6">
          <Media heading className="heading-for-the-second-block col">
            What do you do with my stuff?
          </Media>
          <div className="text-for-the-second-block">
            We refurbish old things and sell it to the people who cannot afford
            or don’t want to buy brand new stuff{' '}
          </div>
        </Media>
      </Row>
    </Container>
  );
};

export default Content;
