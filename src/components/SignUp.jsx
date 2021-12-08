import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const SignUp = ({ passUp }) => {

  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const [form, setForm] = useState(false)

  useEffect(() => {

    if ((userPassword && confirmedPassword === '') || (userPassword.length < 3) || userPassword !== confirmedPassword || userFirstName && userLastName &&userName && userEmail === ''){
        setForm(false)
    } else if ((userPassword && confirmedPassword !== '') && (userPassword === confirmedPassword && userFirstName && userLastName && userName && userEmail !== '')) {
        setForm(true)
    }
  }, )  

  useEffect(() => {
    window.localStorage.setItem('firstname', userFirstName)
    window.localStorage.setItem('lastname', userLastName)
    window.localStorage.setItem('username', userName)
    window.localStorage.setItem('useremail', userEmail)
    window.localStorage.setItem('password', userPassword)
    window.localStorage.setItem('confirmedpassword', confirmedPassword)
  }, )

  //Submit info and pass up to app state
  const submit = (e) => {
      e.preventDefault();

      //Name and username validation
      switch(userFirstName){
          case '':
              alert('Please fill in all fields');
              break;
      }
      switch(userLastName){
        case '':
            alert('Please fill in all fields');
            break;
    }
    switch(userName){
        case '':
            alert('Please fill in all fields');
            break;
    }

      //Password validation
      if(userPassword !== confirmedPassword){
          alert(`Passwords don't match`)
          return;
      } else if (userPassword.length < 3){
          alert('Password is too short')
          return
      }

      passUp({userFirstName, userLastName, userName, userEmail, userPassword, confirmedPassword})
  }

 

    return (
        <div className="sign-up">
            <div className="welcome-area">
            <i className="fab fa-connectdevelop"></i>
                <h1>Welcome to Floww</h1>
                <p>Where we build meaningful connections</p>
            </div>
            <div className="sign-up-area">
                <form action="" onSubmit={submit}>
                    <div>
                    <input type="text" value={userFirstName} onChange={(e) => {
                        setUserFirstName(e.target.value)
                        }} placeholder="First Name"/>
                    </div>
                    <div>
                        <input type="text" value={userLastName} onChange={(e) => {
                            setUserLastName(e.target.value)
                            }} placeholder="Last name"/>
                    </div>

                    <div>
                            <input type="text" value={userName} onChange={(e) => {
                                setUserName(e.target.value)
                                }} placeholder="UserName"/>
                    </div>

                    <div>
                        <input type="email" value={userEmail} onChange={(e) => {
                            setUserEmail(e.target.value)
                            }} placeholder="Email"/>
                    </div>

                    <div>
                        <input type="password" value={userPassword} onChange={(e) => {
                            setUserPassword(e.target.value)
                            }} placeholder="Password"/>
                    </div>
                    {/* I want to to add a feature that allows the user to show thier passowrd in the future*/}
                    <div>
                            <input type="password" value={confirmedPassword} onChange={(e) => {
                                setConfirmedPassword(e.target.value);
                            }} placeholder="Confrim Password"/>

                    </div>
                    
                    <div className="btn">
                   {form ? <Link to="/home">
                   <button className="submit-btn">Sign Up</button>
                   </Link> : <button className="submit-btn">Sign Up</button>}
                   </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
