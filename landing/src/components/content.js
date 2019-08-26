import React from 'react';
import { Media } from 'reactstrap';

const Content = () => {
    return (
        <Media className="content bg-light">
            <div className="container bg-light px-lg-5 py-3">
                <div>
                    <p>What kind of stuff you accept?</p>
                    We accept everything that can be put <br/>
                    in a small truck including furniture, <br/>
                    electronics, clothes and so on
                </div>
                <div>
                    <p>What do you do with my stuff?</p>
                    We refurbish old things and sell it to <br/>
                    the people who cannot afford or don’t <br/>
                    want to buy brand new stuff
                </div>
            </div>
        </Media>
    );
};

export default Content;
