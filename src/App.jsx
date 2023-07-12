import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  

  return (
    <>
   
   <Provider store={store}>
        <HomePage />
    </Provider>
      {/* <div>
        <h1> H O M E P A G E</h1>
      </div> */}
   

  </>
  )
}

export default App
