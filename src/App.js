import React,{ useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import LoadingScreen from './screens/LoadingScreen/LoadingScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import PageNotFound from './screens/PageNotFound/PageNotFound';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))
      }else{
          dispatch(logout())
      }
    })
  },[])

  return (
    <Router>
      <Switch>
          <Route path="/register" render={() => (
            user? (
              <Redirect to="/home"/>
            ) : (
              <RegisterScreen/>
            )
          )}/>
          <Route path="/login" render={() => (
            user? (
              <Redirect to="/home"/>
            ) : (
              <LoginScreen/>
            )
          )}/>
          <Route path="/home" render={() => (
            user? (
              <HomeScreen/>
            ) : (
              <Redirect to="/login"/>
            )
          )}/>
          <Route path="/" exact render={() => (
            user? (
              <Redirect to="/home"/>
            ) : (
              <LoadingScreen />
            )
          )}/>
          <Route path='*' component={PageNotFound} />
      </Switch> 
    </Router>
  );
}

export default App;
