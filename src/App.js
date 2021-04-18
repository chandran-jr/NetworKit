import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, selectUser} from './features/counter/userSlice';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { auth } from './firebase';

function App() {
 
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
        if(userAuth) {
            dispatch(login({
              
            }));
        } else {
            dispatch(logout());
        }
    });
  },[])

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
