import React from 'react'
import { useState } from 'react'
import { useNavigate , Link} from 'react-router-dom'
import { auth, db } from '../../Firebase/firebase';
import './Register.css'

function Register() {
  const navigate = useNavigate('');/// dung useNavigate de dieu huong' link
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday,setBirthday] = useState([]);
  const [gender, setGender] = useState('');

  const handleRegister = (e) =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then((auth)=>{ // tao data cua firebase
      if(auth.user){
        auth.user.updateProfile({
          displayName: firstName + " " + lastName,
          photoURL: "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"

        }).then((s)=>{
          db.collection('users').doc(auth.user.uid).set({
            uid: auth.user.uid,
            displayName: auth.user.displayName,
            email: auth.user.email,
            photoURL: "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg",
            birthday,
            gender,
            bio: ""
          }).then((r)=>{
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
        <div className='hr3'/>
        <form>
          <div className='row'>
            <input
              onChange={(e) => { setFirstName(e.target.value) }}
              className='register_name'
              type='name'
              placeholder='First Name'
              required
            />
            <input
              onChange={(e) => { setLastName(e.target.value) }}
              className='register_name'
              type='name'
              placeholder='Last Name'
              required
            />
          </div>
          <center>
            <input
              onChange={(e) => { setEmail(e.target.value) }}
              type='email'
              placeholder='Email'
              required
            />
          </center>
          <center>
            <input
              onChange={(e) => { setPassword(e.target.value) }}
              type='password'
              placeholder='Password'
              required
            />
          </center>
          <h5 className='register_date'>Date of birth</h5>
          <div className='row'>
            <select className='register_day' onChange={(e)=>setBirthday([...birthday,e.target.value])}>
              <option value='Day'>Day</option>
              <option value='1'>1</option>
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
              <option value='31'>31</option>
            </select>

            <select className='register_month' onChange={(e)=>setBirthday([...birthday,e.target.value])}>
            <option value='Day'>Month</option>
              <option value='1'>January</option>
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
              <option value='12'>December</option>
            </select>

            <select className='register_year' onChange={(e)=>setBirthday([...birthday,e.target.value])}>
            <option value='Day'>Year</option>
              <option value='2000'>2010</option>
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
              <option value='1990'>1990</option>
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
                required
              />
            </div>
            <div className='wrapper'>
              <label>Male</label>
              <input onChange={(e) => { setGender(e.target.value) }}
                type='radio'
                name='gender'
                value='Male'
                required
              />
            </div>
            <div className='wrapper'>
              <label>Other</label>
              <input onChange={(e) => { setGender(e.target.value) }}
                type='radio'
                name='gender'
                value='Other'
                required
              />
            </div>
          </div>
          <p className='register_policy'>
          Users of our service may have uploaded your contact information to Facebook. Learn more.
          By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookie Policy. 
          You can receive our notifications via SMS and unsubscribe at any time.
          </p>
          <center>
            <button onClick={handleRegister} type='submit' className='btn_register'>Sign Up</button>
          </center>
          <center>
            <Link to='/login'>
              <p className='register_login'>Already have an account?</p>
            </Link>
          </center>
        </form>
      </div>
    </div>
  )
}

export default Register