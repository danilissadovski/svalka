import React, {Component} from 'react';

import Helmet from 'react-helmet';
import Content from "./components/content";
import Content2 from "./components/content2";
import Intro from "./components/intro";
import End from "./components/end";
import Footer from "./components/footer";
import Top from "./components/top";

class App extends Component {

  render() {
    return (
        <div>
          <Helmet>
            <style>{'body { background-color: #f08b77; }'}</style>
          </Helmet>
          <Top/>
          <div className="py-3 px-lg-5">
            <div className="col-4">
              <Intro/>
            </div>
          </div>
          <Content/>
            <div className="clearfix bg-light">
                <div className="col-auto float-right ">
                    <Content2/>
                </div>
            </div>
          <Footer/>
          <End/>
        </div>
    );
  }
}

export default App;
