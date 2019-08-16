import React from "react";

class Top extends React.Component{
    render() {
      return(
            <header>         
                <nav>
                    <ul>
                        <li>
                            <a href="#" className="menu__item">
                                Shortcut1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="menu__item">
                                Shortcut2
                            </a>
                        </li>
                        <li>
                            <a href="#" className="menu__item">
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
       );
    }
  }
  
  export default Top;
