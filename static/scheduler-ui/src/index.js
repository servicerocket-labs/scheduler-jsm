import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import '@atlaskit/css-reset';
import MainLayout from "./layout/mainLayout";

ReactDOM.render(
    <React.StrictMode>
      <MainLayout>
        <App />
      </MainLayout>
    </React.StrictMode>,
    document.getElementById('root')
);
