import React from "react";

class Content2 extends React.Component{
  render() {
    return(
        <div className="content-2">
            <div className="container-2">
                <div>
                    <h1 className="text">
                        Start your free membership.
                    </h1>
                    <p>
                        We hate spam and will never bother <br/>
                        you with any kind of advertisement
                    </p>
                    <form>
                        <label>
                            <input type="text" name="name" />
                        </label>
                        <button className="choto-4">
                        <a>
                            Get Started
                        </a>
                        </button>
                    </form>
                </div>
            </div>
        </div>
 
    );
  }
}

export default Content2;
