import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import {
  store
} from './redux/store'
import { App } from './components/App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='/InnaAnatoliivna/SwiftWheels-Rentals'>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

