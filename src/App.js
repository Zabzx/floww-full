import SignUp from "./components/SignUp";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from "./Main";
import Profile from "./components/Profile";
import axios from "axios";

function App() {

  //Sign up States
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

  //User Profile Picture
  const [userPfp, setUserpfp] = useState([])
  const [hasPfp, setHasPfp] = useState(false)

  const changePfp = (img) => {
    setHasPfp(true)
    setUserpfp(img)
    console.log(userPfp)
  }

  const [likedPosts, setLikedPosts] = useState([{}])
  const [liked, setLiked] = useState(false)

  const addToLikes = (item) => {
    setLikedPosts([item, ...likedPosts]);
    setLiked(true)
  }

  return (
    <>
    <Router>
      <Route path="/" exact>
    <SignUp passUp={getFormData}/>
    </Route>
    <Route path="/home">
     <Main userPfp={userPfp} hasPfp={hasPfp} passupItem={addToLikes}/>
    </Route>
    <Route path="/profile">
      <Profile name={userFirstName + userLastName} username={userName} email={userEmail} passUpImage={changePfp} posts={likedPosts} liked={liked}/>
    </Route>
    </Router>
    </>
  );
}

export default App;