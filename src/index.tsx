import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { autorun } from 'mobx';
import { RootStore } from './stores';
import { loadState, saveState } from './utils/localStore';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const history = createBrowserHistory();

const initState = loadState();
const mobXStore = new RootStore(initState);


autorun(() => {
    console.dir(mobXStore);
    saveState(mobXStore.serialize());
}, { delay: 1000 });

ReactDOM.render(<Provider {...mobXStore}>
    <App history={history}/>
    </Provider>, document.getElementById('root'));
