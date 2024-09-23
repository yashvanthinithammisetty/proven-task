import React from 'react';
import { MantineProvider } from '@mantine/core';
import LoginPage from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import Task from './components/Task';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path='/LabwareCreate' element={<Create></Create>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Sidebar></Sidebar> */}
    </MantineProvider>
  );
}

export default App;




