import React, { useState, useRef } from 'react';
import logo from '../utils/images/logo.png';
import { Validate, signUpValidate }from '../utils/Validate'

const Header = () => {
  const [ isSignInForm, setIsSignInForm ] = useState(true);
  const [ errorMessege, setErrorMessege ] = useState([]);
  const [secErrorMessege, setSecErrorMessege ] = useState([]);
  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const secEmail = useRef(null);
  const secPassword = useRef(null);
  const confirmPassword = useRef(null);

  const toggleSignup = () => {
    setIsSignInForm(!isSignInForm);
  }
  const handleSignButton = () => {
    //validate the form data, we will use a utiity a code inside utils
   //console.log("email :", email.current.value);
   //console.log("password :", password.current.value);
   const messege = Validate(email.current.value, password.current.value)
   //console.log(messege);
   setErrorMessege(messege);
  }
  
  const handleSignUp = () => {
    const secMessege = signUpValidate(
       firstName.current.value,
       lastName.current.value,
       secEmail.current.value,
       secPassword.current.value, 
       confirmPassword.current.value);
    console.log(secMessege);
    setSecErrorMessege(secMessege);
  }
  return (
    <div>
      <div className="absolute bg-gradient-to-b from-black w-full h-[400px]">
        <img className="w-40 h-20" alt="logo" src={logo} />
        <form onSubmit={(e) => e.preventDefault()} className="absolute w-96 h-96">
          <div className="absolute w-[450px] h-[650px] bg-black bg-opacity-75 mt-11 ml-[550px]">
            <div className="ml-14 mt-13 pl-4">
              <div>
                <h1 className="font-sans-serif text-3xl font-bold text-white">{isSignInForm? "Sign In" : "Sign up"}</h1>
              </div>
              { isSignInForm? <div className="mt-8">
                <input 
                  ref={email}
                  type="email" 
                  placeholder="Email or Mobile number"
                  className="w-80 h-14 bg-gray-700 font-xs text-white pl-3 border border-slate-950 rounded-sm"
                />
              </div> : <div className="mt-8 flex">
                <div className=''>
                <input
                  ref={firstName} 
                  type="text" 
                  placeholder="First Name"
                  className="w-36 h-14 bg-gray-700 font-xs text-white pl-3 border border-slate-950 rounded-sm"
                />
                </div>
                <div className='ml-4 pl-4'>
                <input
                  ref={lastName}
                  type="text" 
                  placeholder="Last Name"
                  className="w-36 h-14 bg-gray-700 font-xs text-white pl-3 border border-slate-950 rounded-sm"
                />
                </div>
              </div>}
              {/* {password and email id toggle section} */}
              {isSignInForm? <div className="mt-5">
                <input 
                  ref={password}
                  type="password" 
                  placeholder="Password"
                  className="w-80 h-14 bg-gray-700 font-xs text-white pl-3 border border-slate-950 rounded-sm"
                />
              </div> : <div className="mt-2">
                <div className='mt-2'>
                <input 
                  ref={secEmail}
                  type="email" 
                  placeholder="Enter your Email id"
                  className="w-80 h-14 bg-gray-700 font-xs text-white pl-3 border border-slate-950 rounded-sm"
                />
                </div>
                <div className='mt-2'>
                <input
                  ref={secPassword} 
                  type="password" 
                  placeholder="Enter your password"
                  className="w-80 h-14 bg-gray-700 font-xs text-white pl-3 border border-slate-950 rounded-sm"
                />
                </div>
                <div className='mt-2'>
                <input 
                  ref={confirmPassword}
                  type="password" 
                  placeholder="Confirm password"
                  className="w-80 h-14 bg-gray-700 font-xs text-white pl-3 border border-slate-950 rounded-sm"
                />
                </div>
                
              </div>}
              <div className="mt-5">
                {isSignInForm ?<button className="w-80 h-10 bg-red-700 text-white font-bold rounded-sm hover:bg-red-600"
                  onClick={() => handleSignButton()}
                >
                Sign In
                </button> : <button className="w-80 h-10 bg-red-700 text-white font-bold rounded-sm hover:bg-red-600"
                 onClick={() => handleSignUp()}
                >
                Sign up
                </button>}
                {errorMessege? errorMessege.map((err, index) => <h1 key={index} className='text-xs text-red-600 mt-4 font-semibold'>{err}</h1>) : 
                <h1 className='text-sm text-green-600 mt-4 font-semibold'>Success</h1>}
                {secErrorMessege? secErrorMessege.map((err, index) => <h1 key={index} className='text-xs text-red-600 mt-4 font-semibold'>{err}</h1>) : 
                <h1 className='text-sm text-green-600 mt-4 font-semibold'>Success</h1>}
              </div>
              <div className="mt-5">
                <h5 className="text-white pl-36">Or</h5>
              </div>
              <div className="mt-5">
                <button className="w-80 h-10 bg-slate-800 bg-opacity-75 text-slate-600 font-bold rounded-sm hover:bg-slate-700">
                  Or use a sign-in code
                </button>
              </div>
              <div className="mt-5 ml-24">
                <h3 className="text-white cursor-pointer hover:underline">Forgot password?</h3>
              </div>
              {isSignInForm && <div className="flex mt-5">
                <div>
                  <input type="checkbox" className="w-4 h-4" />
                </div>
                <div className="ml-5">
                  <label className="text-white">Remember me?</label>
                </div>
              </div>}
              <div className="mt-4 cursor-pointer">
                <h1 className="text-white">
                  {isSignInForm? "New to Netflix?" : "Already a user?"}<b className='hover:underline'
                  onClick={() => toggleSignup()}>{isSignInForm? " Sign up now." : " Sign in now."}</b>
                </h1>
              </div>
              <div className="mt-4">
                {isSignInForm? <h6 className="text-gray-400 text-xs">
                  This page is protected by Google reCAPTCHA to
                  <br />
                  ensure you're not a bot.
                  <span className="text-blue-700 hover:underline cursor-pointer"> Learn more.</span>
                </h6> : <h1 className='text-gray-400 text-sm '>Ready to watch? Enter your email to create or<br/> restart your membership.</h1>}
              </div>
            </div>  
          </div>    
        </form>
      </div>
    </div>
  );
}

export default Header;

