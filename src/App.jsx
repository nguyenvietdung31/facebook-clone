import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './Firebase/firebase';
import Login from './Component/LoginAndRegister/Login.jsx';
import Register from './Component/LoginAndRegister/Register.jsx';
import HomeHeader from './Component/HomeHeader/HomeHeader.jsx';
import Sidebar from './Component/HomeBody/Sidebar.jsx';
import Sidebar2 from './Component/HomeBody/Sidebar2.jsx';
import NewsFeed from './Component/HomeBody/NewsFeed.jsx';

function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser)
      } else {
        setUser(false)
      }
    })

  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<Login />}>
          </Route>
          <Route
            path="/register"
            element={<Register />}>
          </Route>
          <Route
            path='/'
            element={<>
              <HomeHeader user={user} />
              <div className='app_page'>
                <Sidebar user={user} />
                <div className='app_post'>
                  <NewsFeed user={user} />
                </div>
                <Sidebar2 user={user} />
              </div>
            </>}
            user={user}
            selected>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
