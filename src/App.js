import Onboarding from './routes/Onboarding';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import Home from './routes/Home';
import Game from './routes/Game';
import Ranks from './routes/Ranks';
import Store from './routes/Store';
import { Routes, Route } from 'react-router';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Onboarding />} />
        <Route exact path="user/login" element={<Login />} />
        <Route exact path="user/signup" element={<SignUp />} />
        <Route exact path="app" element={<Home />} />
        <Route exact path="app/game" element={<Game />} />
        <Route exact path="app/ranks" element={<Ranks />} />
        <Route exact path="app/store" element={<Store />} />
      </Routes>
    </div>
  );
};

export default App;
