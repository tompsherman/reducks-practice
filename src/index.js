//remember to install your dependencies! npm i; npm start; redux; react-redux; redux-thunk; axios; styled-components;

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers.jsx'

import './index.css'

import App from './App'

const store = createStore(reducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

ReactDOM.render(
  <React.StrictMode>
    <Provider store= {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

//----------------//

// "//remember to install your dependencies! npm i; npm start; redux; react-redux; redux-thunk; axios; styled-components;\n\nimport React from 'react'\nimport ReactDOM from 'react-dom'\nimport {createStore, applyMiddleware, compose} from 'redux'\nimport {Provider} from 'react-redux'\nimport thunk from 'redux-thunk'\nimport reducer from './reducers'\n\nimport './index.css'\nimport App from './App'\n\nconst store = createStore(reducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));\n\nReactDOM.render(\n\t<React.StrictMode>\n\t\t<Provider store= {store}>\n\t\t\t<App />\n\t\t</Provider>\n\t</React.StrictMode>,\n\tdocument.getElementById('root')\n)"

