import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import ListOfStudents from './components/ListOfStudents';
import UpdateStudent from './components/UpdateStudent';
import DeleteStudent from './components/DeleteStudent';
import { Header } from './components/Header';
import Footer from './components/Footer';
// import { AnimatePresence } from 'framer-motion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/AddStudent" element={<AddStudent />} />
        <Route path="/ListOfStudents" element={<ListOfStudents />} />
        <Route path="/UpdateStudent" element={<UpdateStudent />} />
        <Route path="/DeleteStudent" element={<DeleteStudent />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
