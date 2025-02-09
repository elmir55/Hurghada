import React from 'react'
import { MyRoutes } from './router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

export function App() {
  return ( 
    <Provider store={store}> 
      <BrowserRouter>  
      <MyRoutes />
      </BrowserRouter> 
      </Provider> 
  )
}
