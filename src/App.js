import Onboarding from './routes/Onboarding';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import Home from './routes/Home';
import Game from './routes/Game';
import Ranks from './routes/Ranks';
import Store from './routes/Store';
import ForgotPassword from './routes/ForgotPassword';
import { Routes, Route } from 'react-router';
import { auth } from './firebase/authentication';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { getUserData } from './firebase/authentication';

import './App.css';

const App = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user && !loading && location.pathname.includes('app')) {
      navigate('/');
    } 
    else if (user && !location.pathname.includes('app')) {
      navigate('/app');
    }
  }, [user, loading, navigate]);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Onboarding />} />
        <Route exact path="user/login" element={<Login />} />
        <Route exact path="user/signup" element={<SignUp />} />
        <Route exact path="user/reset" element={<ForgotPassword />} />
        <Route exact path="app" element={<Home />} />
        <Route exact path="app/game" element={<Game />} />
        <Route exact path="app/ranks" element={<Ranks />} />
        <Route exact path="app/store" element={<Store />} />
      </Routes>
    </div>
  );
};

export default App;
