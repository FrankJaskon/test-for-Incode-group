import React from 'react';
import TickerList from './component/ticker-list';
import {Provider} from 'react-redux';
import {store} from './redux/store';

import './App.css';

const App = () => <React.StrictMode>
    <Provider store={store}>
      	<div className="App"><TickerList /></div>
    </Provider>
    </React.StrictMode>

export default App;
