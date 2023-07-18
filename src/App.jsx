import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import { Provider } from 'react-redux';
import store from './redux/store';
import AuthorDetail from './pages/AuthorDetail';



function App() {


  return (
    <>

      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/detail-page' element={<AuthorDetail/>} />
          </Routes>
        </BrowserRouter>

      </Provider>
      {/* <div>
        <h1> H O M E P A G E</h1>
      </div> */}


    </>
  )
}

export default App
