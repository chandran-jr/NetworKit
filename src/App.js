import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, selectUser} from './features/counter/userSlice';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { auth } from './firebase';
import Widgets from './widgets';

function App() {
 
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
        if(userAuth) {
            dispatch(login({
              email: userAuth.email,
              uid: userAuth.uid,
              displayName: userAuth.displayName,
              photoUrl: userAuth.photoURL,
            }));
        } else {
            dispatch(logout());
        }
    });
  },[dispatch])

  return (
    <div className="app">


    { !user ? (<Login/>): (
      <div className="app__signedIn">
        <Header/>
      <div className="app__body">
        <Sidebar/>
        <Feed />
        <Widgets/>
    </div>
    </div>
    ) }

      
    </div>
  );
}

export default App;
