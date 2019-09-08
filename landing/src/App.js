import React, {Component} from 'react';

import Helmet from 'react-helmet';
import Content from "./components/content";
import Content2 from "./components/content2";
import Intro from "./components/intro";
import Top from "./components/top";

class App extends Component {

  render() {
    return (
        <div>
            <Helmet>
                <style>{'body { background-color: #f08b77; }'}</style>
            </Helmet>
            <Top/>
            <div className="indentation">
                <Intro/>
            </div>
            <Content/>
            <Content2/>
        </div>
    );
  }
}

export default App;
