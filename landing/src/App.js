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
          <div className="py-3 px-lg-5 row">
            <div className="col-4">
              <Intro/>
            </div>
              <div className="px-lg-5 col-8">
                <img src="https://www.meme-arsenal.com/memes/c2182b2b1776386f324f801e5ca82ad6.jpg"
                height={500}/>
              </div>
          </div>
          <Content/>
            <div className="clearfix bg-light row px-lg-5">
                <div className="col-6 px-lg-5 content-2-3">
                    <img src="https://www.meme-arsenal.com/memes/c2182b2b1776386f324f801e5ca82ad6.jpg"/>
                </div>
                <div className="col-6 float-right ">
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
