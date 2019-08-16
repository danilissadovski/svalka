import React from "react";

class Footer extends React.Component{
  render() {
    return(
        <div className="content-3">
            <div className="container-3">
                <div>
                    <h1> SVALKA</h1>
                    <p>Important claim here</p>                
                    <button>
                    <a>
                        App Store
                    </a>
                    </button>
                    <button>
                    <a>
                        Google play
                    </a>
                    </button>
                </div>  
            </div>
            <div className="Some-reminder-for-th">
                Some reminder for the users who <br/>
                scrolled through the landing page and <br/>
                forgot why they are here in the first <br/>
                place.
            </div>
            <div className="Shortcut1-Shortcut23">
                Shortcut1 <br/>
                Shortcut2 <br/>
                Shortcut3
            </div>
        </div>  
    );
  }
}

export default Footer;
