import React from "react";
import Top from "./components/top";
import Title from "./components/title";

class App extends React.Component{
  render() {
    return(
       <div>
         <div className="col-sx-6">
          <Title/>
         </div>
         <div className="col-sx-6">
          <Top/>
         </div>
        
       </div>        
    );
  }
}

export default App;
