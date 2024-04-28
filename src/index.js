import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
// npm install react-router-dom@6
// <App /> 을 <BrowserRoiter></BrowserRouter>로 감싸준다

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <React.StrictMode>
// 리덕스를 사용하려면 Provider로 감싼다 (props필요없이 store에 저장해서 사용)
    <Provider store={store}>
      {/*라우터를 사용하려면 BrowserRouter로 감싼다*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
//  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
