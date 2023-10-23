import Header from './Componants/Header';
import Home from './Componants/Home';
import Cart from './Componants/Cart';
import CardDetails from './Componants/CardDetaile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
//import { useSelector } from 'react-redux';
import { useState } from 'react';


function App() {


 // const getdata = useSelector((state)=>state.cartreducer.carts);
 //console.log(getdata);

  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/cardetails/:id' element={<CardDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
