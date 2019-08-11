import React from "react";
import Top from "./components/top";
import Logo from "./components/logo";
import Getrid from "./components/getrid";
import Button from "./components/button";
import Content from "./components/content";
import Content2 from "./components/content2";
import Footer from "./components/footer";
import End from "./components/end";

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
