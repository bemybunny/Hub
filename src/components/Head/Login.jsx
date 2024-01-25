import React,{useState} from 'react'
import './Login.css'
import google from '../assets/google.png'
import Facebook from '../assets/Facebook.png'
const Login = () => {
  const [state,setState] = useState('signin');
  return (
    <div className="login">
      <div className="loginbtn">
        
        <span onClick={()=>setState('signin')} className={state === 'signin' ? 'statesign' : ''}>Sign in</span>
        <span onClick={()=>setState('joinin')} className={state === 'joinin' ? 'statesign' : ''}>Join in</span>
      </div>
      <div className="loginbody">
        <div className="logincenter">
          <img className="image" src={google} alt=""/>
          <span >Continue with Google</span>
        </div>
        <div className="logincenter">
          <img  className="image" src={Facebook} alt=""/>
          <span>Continue with Facebook</span>
        </div>
     </div>
     <span className="login-center">or Connect with</span>
     <input className="input-box" placeholder = "Email"/>
     <input  className="input-box" placeholder = "Password"/>
     <div className="login_Checkbox">
     {state === 'signin' ? (
      <div>
        <input type="checkbox" id="checkbox" />
        <span>Remember me</span>
      </div>
    ) : (
      <span>By continuing, you agree to our Terms of Services and Privacy Policy</span>
    )}
    </div>
    <div><hr/></div>
    <span className="login-center">Continue</span>
    </div>
  )
}

export default Login
