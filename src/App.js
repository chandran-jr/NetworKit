import React from 'react';
import './App.css';
import Header from './Header';
import {useSelector} from 'react-redux';
import {selectUser} from './features/counter/userSlice';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';

function App() {
 
  const user = useSelector(selectUser);

  return (
    <div className="app">

    <Header/>

    {!user ? (<Login/>): (
      <div className="app__body">
        <Sidebar/>
        <Feed />
    </div>
    ) }

      
    </div>
  );
}

export default App;
