import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages';
import MacInstallPage from './pages/mac';
import TropicalPage from './pages/tropical';
import NotFoundPage from './pages/404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/mac" element={<MacInstallPage />} />
      <Route path="/tropical" element={<TropicalPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
