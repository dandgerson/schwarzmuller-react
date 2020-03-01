import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'src/containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title='Persons Manager' />, document.getElementById('root'));
registerServiceWorker();
