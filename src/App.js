import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreateProject from './Home/CreateProject';
import MapTodo from './Home/MapTodo';
import Navbar from './Home/Navbar';
import NewTodo from './Home/NewTodo';
import SearchProject from './Home/SearchProject';


import Start from './Home/Start';


const App = () => {

  
  return (
   <Router>
       <Navbar />
    <Routes>
    <Route path='/'  element={<Start />}/>
    <Route path='/todo'  element={<NewTodo />}/>
    <Route path='/todos'  element={<MapTodo />}/>
    <Route path='/search'  element={<SearchProject />}/>
    <Route path='/createproject'  element={<CreateProject />}/>

    </Routes>
   </Router> 
  )
}

export default App;