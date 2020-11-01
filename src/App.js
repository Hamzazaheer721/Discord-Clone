import React from 'react';
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './features/userSlice';
import {login, logout} from './features/userSlice';
import Login from './components/Login'
import { auth } from './firebase/firebase';


function App() {
  const dispatch = useDispatch();
  //give me user from appslice
  const user = useSelector(selectUser);
  console.log("first user is ", user);

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("user is", authUser);
      if(authUser){
        console.log("dispatching");
        dispatch(  
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
        console.log("dispatched");
      } else{
        //The user is loggout
        dispatch(logout())
      }
    });
  },[dispatch]);

  return (
    
    <div className="app">
      {user ? 
          (
            <> 
              <Sidebar />  
              <Chat />
            </>
          ) : (
            <Login />
          )
      }
    </div>
  );
}

export default App;
