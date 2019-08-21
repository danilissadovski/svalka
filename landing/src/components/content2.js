import React from 'react';
import {Button, Media, Input} from 'reactstrap';

const Example = () => {
    return (
        <Media>
            <Media left href="#">
                <Media data-src="./img/1.jpeg/1400×441" alt="Generic placeholder image" />
            </Media>
            <Media body>
                <Media heading>
                    Start your free membership.
                </Media>
                We hate spam and will never bother you with any kind of advertisement
            </Media>
            <div>
            <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" />
            <Button color="primary" className='ml-1'>Get Started</Button>
            </div>
        </Media>
    );
};

export default Example;
