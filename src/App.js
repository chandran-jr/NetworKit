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


    { !user ? (<Login/>): (
      <div className="app__signedIn">
        <Header/>
      <div className="app__body">
        <Sidebar/>
        <Feed />
    </div>
    </div>
    ) }

      
    </div>
  );
}

export default App;
