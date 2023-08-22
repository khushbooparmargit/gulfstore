import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Slider from './Components/Slider';
import Itemlist from './Components/ItemList'
import Login from './Components/Login'
import { Route, Routes } from 'react-router-dom';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path='/' element={<Slider />} />
      <Route path='/login' element={<Login />} />
      <Route path='/userlist' element={<Itemlist />} />
      <Route path='/register' element={<Register />} />
    </Routes>
   
   
    <Footer />

       
    </div>
  );
}

export default App;
