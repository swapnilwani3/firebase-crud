import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Manager from './components/Manager';
import { selectUser } from './features/userSlice';
import Login from './Login';

function App() {
  const userStatus = useSelector(selectUser);

  return (
    <div className="App">
    {!userStatus ? <Login /> : <Manager/>}
    </div>
  );
}

export default App;
