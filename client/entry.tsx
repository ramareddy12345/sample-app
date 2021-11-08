import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app/App';

ReactDom.render(<BrowserRouter>
                <App/>
                </BrowserRouter>, document.getElementById('container'));
