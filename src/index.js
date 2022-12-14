import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId='ac0c01a7-e35a-41f2-964b-2bc7a3b4ea49' language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>
    , document.getElementById('root'));
