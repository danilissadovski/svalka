import React from "react";

class Content extends React.Component{
  render() {
    return(
        <div className="content">
            <div className="container">
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
        </div> 
    );
  }
}

export default Content;