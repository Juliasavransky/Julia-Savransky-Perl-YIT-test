import React from 'react';
import ReactDOM from 'react-dom';
import  App from './App';//delete at the and
// import  {App} from './App';//on at the and

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
