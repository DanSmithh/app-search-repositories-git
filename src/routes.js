import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home/index';
import Repositories from './pages/Repositories/index';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/repositories" element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  )
}