import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Shortcut from "./components/shortcut"
import Getrid from "./components/getrid"
import Text from "./components/text"
import Text2 from "./components/text2"

class App extends React.Component{
  render() {
    return(
       <div>
         <div>
          <Info />
          <Getrid />
          <Text />
         </div>
         <div >
          <Shortcut /> 
          <Text2 />
          <Form />
          </div>
         
        </div>        
    );
  }
}

export default App;
