import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { auth, db } from '../../Firebase/firebase';
import { useForm } from 'react-hook-form'
import './Register.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Register({ users }) {
  const navigate = useNavigate('');/// dung useNavigate de dieu huong' link
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState([]);
  const [gender, setGender] = useState('');

  const MAX_DATE = 31;
  const MAX_MONTH = 12;
  const MIN_YEAR = 1980;
  const MAX_YEAR = 2022;

  const auth = getAuth()

  const handleRegister = (_,event) => {
    event.preventDefault();
    // createUserWithEmailAndPassword(auth,email,password).then
    createUserWithEmailAndPassword(auth, email, password).then((auth) => { // tao data cua firebase
      if (auth.user) {
        auth.user.updateProfile({
          displayName: firstName + " " + lastName,
          photoURL: "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"

        }).then(() => {
          db.collection('users').doc(auth.user.uid).set({
            uid: auth.user.uid,
            displayName: auth.user.displayName,
            email: auth.user.email,
            photoURL: "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg",
            birthday,
            gender,
            bio: ""
          }).then(() => {
            navigate("/login") // dang ki thanh cong thi chuyen den /login
          })
        })
      }
    })

  }

  return (
    <div className='register'>
      <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg'
        className='register_logo' alt='facebook_logo'
      />
      <div className='register_container'>
        <h3>Sign up</h3>
        <p>It's quick and easy</p>
        <div className='hr3' />
        <form onSubmit={handleSubmit(handleRegister)} autoComplete='off'>
          <div className='row'>
            <div className='container'>
              <input
                onChange={(e) => { setFirstName(e.target.value) }}
                className='register_name'
                type='name'
                placeholder='First Name'
                {
                ...register('firstName', {
                  required: true,
                  pattern: /^[A-Za-z]+$/i
                })
                }
              />
              {errors?.firstName?.type === "required" && <div className='error'></div>}
            </div>
            <div className='container'>
              <input
                onChange={(e) => { setLastName(e.target.value) }}
                className='register_name'
                type='name'
                placeholder='Last Name'
                {
                ...register('lastName', {
                  required: true,
                  pattern: /^[A-Za-z]+$/i

                })
                }
              />
              {errors?.lastName?.type === "required" && <div className='error'></div>}
            </div>
          </div>
          <center>
            <input
              onChange={(e) => { setEmail(e.target.value) }}
              type='email'
              placeholder='Email'
              {
              ...register('email', {
                required: true,

              })
              }
            />
            {errors?.email?.type === "required" && <div className='error'></div>}
          </center>
          <center>
            <input
              onChange={(e) => { setPassword(e.target.value) }}
              type='password'
              placeholder='Password'
              {
              ...register('password', {
                required: true,

              })
              }
            />
            {errors?.password?.type === "required" && <div className='error'></div>}
          </center>
          <h5 className='register_date'>Date of birth</h5>
          <div className='row'>
            <select className='register_day' onChange={(e) => setBirthday([...birthday, e.target.value])}>
              <option value='Day'>Day</option>
              {/* <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
              <option value='13'>13</option>
              <option value='14'>14</option>
              <option value='15'>15</option>
              <option value='16'>16</option>
              <option value='17'>17</option>
              <option value='18'>18</option>
              <option value='19'>19</option>
              <option value='20'>20</option>
              <option value='21'>21</option>
              <option value='22'>22</option>
              <option value='23'>23</option>
              <option value='24'>24</option>
              <option value='25'>25</option>
              <option value='26'>26</option>
              <option value='27'>27</option>
              <option value='28'>28</option>
              <option value='29'>29</option>
              <option value='30'>30</option>
              <option value='31'>31</option> */}
              {[...Array(MAX_DATE)].map((_, index) => <option key={index + 1} value={index + 1}>{index + 1}</option>)}
            </select>

            <select className='register_month' onChange={(e) => setBirthday([...birthday, e.target.value])}>
              <option value='Day'>Month</option>
              {/* <option value='1'>January</option>
              <option value='2'>February</option>
              <option value='3'>March</option>
              <option value='4'>April</option>
              <option value='5'>May</option>
              <option value='6'>June</option>
              <option value='7'>July</option>
              <option value='8'>August</option>
              <option value='9'>September</option>
              <option value='10'>October</option>
              <option value='11'>November</option>
              <option value='12'>December</option> */}
              {[...Array(MAX_MONTH)].map((_, index) => <option key={index + 1} value={index + 1}>{index + 1}</option>)}
            </select>

            <select className='register_year' onChange={(e) => setBirthday([...birthday, e.target.value])}>
              <option value='Day'>Year</option>
              {/* <option value='2000'>2010</option>
              <option value='1999'>2009</option>
              <option value='1998'>2008</option>
              <option value='1997'>2007</option>
              <option value='1996'>2006</option>
              <option value='1995'>2005</option>
              <option value='1994'>2004</option>
              <option value='1993'>2003</option>
              <option value='1992'>2002</option>
              <option value='1991'>2001</option>
              <option value='2000'>2000</option>
              <option value='1999'>1999</option>
              <option value='1998'>1998</option>
              <option value='1997'>1997</option>
              <option value='1996'>1996</option>
              <option value='1995'>1995</option>
              <option value='1994'>1994</option>
              <option value='1993'>1993</option>
              <option value='1992'>1992</option>
              <option value='1991'>1991</option>
              <option value='1990'>1990</option> */}
              <option value={MIN_YEAR}>{MIN_YEAR}</option>
              {[...Array(MAX_YEAR - MIN_YEAR)].map((_, index) => <option key={index + 1} value={MIN_YEAR + index + 1}>{MIN_YEAR + index + 1}</option>)}
            </select>
          </div>
          <h5 className='register_gender'>Gender</h5>
          <div className='register_radiocontainer'>
            <div className='wrapper'>
              <label>Female</label>
              <input onChange={(e) => { setGender(e.target.value) }}
                type='radio'
                name='gender'
                value='Female'
                // required
                {
                ...register('gender', {
                  required: true,

                })
                }
              />
            </div>
            <div className='wrapper'>
              <label>Male</label>
              <input onChange={(e) => { setGender(e.target.value) }}
                type='radio'
                name='gender'
                value='Male'
                // required
                {
                ...register('gender', {
                  required: true,

                })
                }
              />
            </div>
            <div className='wrapper'>
              <label>Other</label>
              <input onChange={(e) => { setGender(e.target.value) }}
                type='radio'
                name='gender'
                value='Other'
                // required
                {
                ...register('gender', {
                  required: true,

                })
                }
              />
            </div>
          </div>
          <p className='register_policy'>
            Users of our service may have uploaded your contact information to Facebook. Learn more.
            By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookie Policy.
            You can receive our notifications via SMS and unsubscribe at any time.
          </p>
          <input type='submit' value='Sign Up' className='btn_register' />
          {/* <center>
            <button  type='submit' className='btn_register'>Sign Up</button>
          </center> */}
          <div style={{ justifyContent: "space-between" }}>
            <Link to='/login'>
              <p className='register_login'>Already have an account?</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register