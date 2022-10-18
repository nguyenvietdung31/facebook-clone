import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { auth } from '../../Firebase/firebase';
import {useForm} from 'react-hook-form'


function Login() {
  const navigate = useNavigate(''); //dung useNavigate de dieu huong' link
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const {register,handleSubmit, formState:{errors}} = useForm();

  const handleLogin = (event) =>{
    // event.preventDefault();

    auth.signInWithEmailAndPassword(email,password).then((auth)=>{ 
      navigate("/") // nếu đúng email và pass thì sẽ điều hướng đến localhost:/
    }).catch((error)=>{ // bắt lỗi của firebase
      if(error.message==="The password is invalid or the user doesn't have a password"){
        alert("Please check your credentials again");
      }
      else if(error.message==="There is no user record corresponding to this identifier. The user may have been deleted."){
        alert("Please check your credentials again")
      }
      else{
        alert(error.message);
      }
    })
  }

  return (
    <div className='login'>
      <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg'
      className='login_logo'
      alt='facebook_logo'
      />
      <div className='login_container'>
        <h3>Login to facebook</h3>
        <form onSubmit={handleSubmit(handleLogin)} autoComplete='off'>
          <center>
            <input type='email' placeholder='email address' onChange={(e)=>setEmail(e.target.value)}
            {...register("email", {
              required: true,
            })}/>
            {errors?.email?.type === "required" && <div className='error_login'></div>}
            
          </center>
          <center>
            <input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}
            {...register("password", {
              required: true,
            })}/>
            {errors?.password?.type === "required" && <div className='error_login'></div>}
            
          </center>
          <center>
            <input type='submit' value='Login' className='btn_login'/>
          </center>
          <center>
            <div className='sideInfo'>
              <h5>Forgotten Password?</h5>
              &emsp; {/* tab character */}
              <Link to='/register'>
                <h5 className='toSignUp'>Sign up to Facebook</h5>
              </Link>
            </div>
          </center>
        </form>
      </div>
    </div>
  )
}

export default Login