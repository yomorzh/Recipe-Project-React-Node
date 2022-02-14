import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import RandomRecipe from './pages/RandomRecipe/RandomRecipe';
import Recipes from './pages/Recipes/Recipes';
import Login from './pages/LoginRegisterPages/Login';
import Register from './pages/LoginRegisterPages/Register';
import { UserContext } from './Context/UserContext';
import Test from './pages/TestPage/Test';
import AddRecipe from './pages/Recipes/AddRecipe';

export default function App(){
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Recipes/>}/>
            <Route path="random-recipe" element={<RandomRecipe/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='testpage' element={<Test/>}/>
            <Route path="add-recipe" element={<AddRecipe/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}