import React from 'react';
import {
    Media,
    Container
} from 'reactstrap';

const Content = () => {
    return (
        <Container fluid className="bg">
            <Media>
                <Media body className="col-auto">
                    <Media heading className="heading-for-the-second-block col">What kind of stuff you accept?</Media>
                    <div className="text-for-the-second-block">We accept everything that can be put in a small truck including
                        furniture, electronics, clothes and so on</div>
                </Media>
                <Media body className="col-auto">
                    <Media heading className="heading-for-the-second-block col">
                        What do you do with my stuff?
                    </Media>
                    <div className="text-for-the-second-block">
                        We refurbish old things and sell it to the people who cannot afford or don’t want to buy brand
                        new stuff </div>
                </Media>
            </Media>
        </Container>
    );
};

export default Content;
