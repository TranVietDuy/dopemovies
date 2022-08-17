import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from 'react-router-dom';

import {Actors, MovieInformation, Movies, Navbar, Profile} from './index'

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <h1>Hello World, Dope Movies</h1>
      
      <main>
        <div/>
        <Routes>
          <Route  path="/" element={<Movies />} />
          <Route  path="/approved" element={<Movies />} />
          <Route  path="/movie/:id" element={<MovieInformation />} />
          <Route  path="/actors/:id" element={<Actors />} />
          <Route  path="/profile/:id" element={<Profile />} />
        </Routes>
      
      </main>
    </div>
  )
};
export default App

