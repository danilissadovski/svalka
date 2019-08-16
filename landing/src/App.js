import React from "react";

import Button from "./components/button";
import Content from "./components/content";
import Content2 from "./components/content2";
import End from "./components/end";
import Footer from "./components/footer";
import Getrid from "./components/getrid";
import Logo from "./components/logo";
import Top from "./components/top";

class App extends React.Component{
  render() {
    return(
        <div>
          <Top/>
          <Logo/>
          <Getrid/>
          <Button/>
          <Content/>
          <Content2/>
          <Footer/> 
          <End/>
        </div>        
    );
  }
}

export default App;
