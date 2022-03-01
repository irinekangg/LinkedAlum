import React from 'react';
import Mainpage from './components/MainPage';
import Feed from './pages/Feed';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/feed' element={<Feed />} />
        {/* <Route path='/'><Mainpage/> </Route> */}
        {/* <Route path='/feed' component={Feed}/> */}
      </Routes>
    </Router>
  );
}
