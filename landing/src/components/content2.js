import React from 'react';
import {Button, Media, Input} from 'reactstrap';

const Example = () => {
    return (
        <Media className="content-2-3">
            <Media left href="#">
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
