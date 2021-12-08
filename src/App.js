import SignUp from "./components/SignUp";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from "./Main";
import Profile from "./components/Profile";
import axios from "axios";

function App() {

  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const getFormData = (data) => {
    setUserFirstName(data.userFirstName)
    console.log(userFirstName)
    setUserLastName(data.userLastName)
    setUserName(data.userName)
    setUserEmail(data.userEmail)
    setUserPassword(data.userPassword)
  }

  const [userPfp, setUserpfp] = useState([])
  const [hasPfp, setHasPfp] = useState(false)

  const changePfp = (img) => {
    setHasPfp(true)
    setUserpfp(img)
    console.log(userPfp)
  }

  return (
    <>
    <Router>
      <Route path="/" exact>
    <SignUp passUp={getFormData}/>
    </Route>
    <Route path="/home">
     <Main userPfp={userPfp} hasPfp={hasPfp}/>
    </Route>
    <Route path="/profile">
      <Profile name={userFirstName + userLastName} username={userName} email={userEmail} passUpImage={changePfp}/>
    </Route>
    </Router>
    </>
  );
}

export default App;