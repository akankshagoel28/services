
import './App.css';
import React from 'react';
import CustomisedDialog from './Dialog.js'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import CustomerDashboard from './customerDashboard.js'

function App() {
  return (<div><BrowserRouter>
    <Routes>
      <Route path="/customer_dash" element={<CustomerDashboard />} ></Route>
      <Route path="/service_details" element={<CustomisedDialog>
      </CustomisedDialog>} ></Route>
    </Routes>

  </BrowserRouter>

  </div>
  );
}

export default App;
