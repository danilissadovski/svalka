import React, {Component} from 'react';

import Helmet from 'react-helmet';
import Content from "./components/content";
// import Content2 from "./components/content2";
import Intro from "./components/intro";
// import End from "./components/end";
// import Footer from "./components/footer";
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
          <div className="py-5">
              <div className="py-5">
                  <div className="py-5">
                      <div className="py-5">
            <div className="col-sm-4">
                <Intro/>
            </div>
                      </div>
                  </div>
              </div>
          </div>

          <Content/>


        {/*    <div className="clearfix bg-light row px-lg-5">*/}
        {/*        <div className="col-6 float-right ">*/}
        {/*            <Content2/>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*  <Footer/>*/}
        {/*  <End/>*/}
                </div>
            </div>
        </div>
    );
  }
}

export default App;
