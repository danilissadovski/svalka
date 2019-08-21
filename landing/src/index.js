import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/custom.scss'
//TODO remove that file after full migration to the bootstrap
import './App.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
