import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {RootStore} from './stores';
import {Provider} from 'mobx-react';
import 'antd/dist/antd.css'

const mobXStore = new RootStore(null);

ReactDOM.render(<Provider {...mobXStore}><App/></Provider>, document.getElementById('root'));
