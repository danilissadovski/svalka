import React from "react";

class Form extends React.Component{
    render() {
        return(
            <form>
                <div>
                    <h2>Start your free membership.</h2>
                    <div>We hate spam and will never bother you</div>
                    <div>with any kind of advertisement</div>
                </div>
                <input type="text" name="email" 
                placeholder="Enter your email"/>
                <button>Get Started</button>
            </form>
        );
     }
}

export default Form;