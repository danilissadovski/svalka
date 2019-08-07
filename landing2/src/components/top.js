import React from "react";

class Top extends React.Component{
    render() {
      return(
         <body>
            <header>         
                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                Shortcut1
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Shortcut2
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Shortcut3
                            </a>
                        </li>
                        <li>
                            <button>
                                Get Started
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
         </body>            

       );
    }
  }
  
  export default Top;