import React from 'react'
import MyAppBar from './MyAppBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Register from './Register'
import Login from './Login'
import Products from './Products'
import ProductDetails from './ProductDetails'
import Orders from './Orders'
import Carts from './carts'
import Profile from './Profile'


const MyRoute = () => {
  return (
    <>  
     <MyAppBar/>
   <Routes>
   <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/productDetails' element={<ProductDetails/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/carts' element={<Carts/>}/>
            <Route path='/profile' element={<Profile/>}/>
                    
   </Routes>
   </>

  )
}

export default MyRoute