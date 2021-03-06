import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/App';
import reportWebVitals from './reportWebVitals';
//cd ../client; npm run build; rm -r D:/fun-farm/server/src/build;mv D:/fun-farm/client/build D:/fun-farm/server/src; cd ../server; npm start  
//cd ../client; npm run build; rm -r E:/Code/Project/FunFarm/server/src/build;mv E:/Code/Project/FunFarm/client/build E:/Code/Project/FunFarm/server/src; cd ../server; npm start
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
