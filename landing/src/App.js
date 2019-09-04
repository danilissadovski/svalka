import React, {Component} from 'react';

import Helmet from 'react-helmet';
import Content from "./components/content";
import Content2 from "./components/content2";
import Intro from "./components/intro";
// import End from "./components/end";
//import Footer from "./components/footer";
import Top from "./components/top";

class App extends Component {

  render() {
    return (
        <div className="px-lg-5">
            <div className="px-lg-5">
                <div className="px-lg-5">
                    <Helmet>
                        <style>{'body { background-color: #f08b77; }'}</style>
                    </Helmet>
                    <div>
                        <Top/>
                    </div>
                    <div className="for-intro">
                        <Intro/>
                    </div>
                    <div>
                        <Content/>
                            <div className="py-5">
                                <div className="py-5">
                                    <div className="float-right py-5">
                                        <Content2/>
                                    </div>
                                </div>
                            </div>
                    </div>
                    {/*<div className="py-5">*/}
                    {/*    <Footer/>*/}
                    {/*</div>*/}
                    {/*  <End/>*/}
                </div>
            </div>
        </div>
    );
  }
}

export default App;
