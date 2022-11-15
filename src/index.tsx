import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import "react-datepicker/dist/react-datepicker.css";

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

const rootElement: HTMLElement | null = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <BrowserRouter>
              <App />
            </BrowserRouter>
        </React.StrictMode>
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
