import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { useState } from 'react';
import Loader from './components/Header/Loader';

function App() {
  const [showLoading,setShowLoading] = useState(false)

  return (
      <BrowserRouter>
      {
        showLoading ? <Loader/> : null 
      }
        <Routes>
          <Route  path='/' element= {<Home/>}/>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
