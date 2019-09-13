import React, {Component} from 'react';

import Helmet from 'react-helmet';
import Content from "./components/content";
import Content2 from "./components/content2";
import Intro from "./components/intro";
import Top from "./components/top";
import Footer from "./components/footer";

class App extends Component {

  render() {
    return (
        <div>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <style>{'body { background-color: #f08b77; }'}</style>
            </Helmet>
            <Top/>
            <div className="indentation">
                <Intro/>
            </div>
            <Content/>
            <Content2/>
            <Footer/>
        </div>
    );
  }
}

export default App;
