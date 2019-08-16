import React from "react";

class Button extends React.Component{
  render() {
    return(
        <div class="choto">
            <button className="choto-2">
                <a href="#">
                    Get Started
                </a>
            </button>
            <button className="choto-3">
                <a href="#">
                    Learn More
                </a>
            </button>
        </div>
        );
    }
}

export default Button;
