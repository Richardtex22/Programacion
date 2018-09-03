import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Componentes/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
