import React, {Component} from 'react';

import Content from "./components/content";
import Content2 from "./components/content2";
import Helmet from 'react-helmet';
import Intro from "./components/intro";
import End from "./components/end";
import Footer from "./components/footer";
import Logo from "./components/logo";
import Top from "./components/top";

class App extends Component {

  render() {
    return (
        <div>
          <Helmet>
            <style>{'body { background-color: #f08b77; }'}</style>
          </Helmet>
          <Top/>
          <Logo/>
          <div className="row py-3 px-lg-5 border bg-light">
            <div className="col-4">
              <Intro/>
            </div>
            <div className="col-4">
              <Intro/>
            </div>
            <div className="col-4">
              <Intro/>
            </div>
          </div>
          <Content/>
          <Content2/>
          <Footer/>
          <End/>
        </div>
    );
  }
}

export default App;
