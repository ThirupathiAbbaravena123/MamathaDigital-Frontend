import React,{useState} from 'react'
import "../assets/LoginPage.css"
import Logoimage from '../assets/Login1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; 


const LoginPage = () => {
    const [formData, setformData] = useState({
      username:'',
      password:'',

    });

    const [showPassword, setPassword] = useState('');
    const [error,setError]=useState(null);

    const handleChange = (event) => {
      const {name,value}=event.target;
        setformData(
          (prevData)=>({
            ...prevData,
            [name]:value,
          })
        );
        console.log(event.target.value)
      };

    const ToggleVisibility = (fieldName) => {
        setPassword((prev) => (prev === fieldName ? '' : fieldName));
      };

      const submitForm= async(e)=>{
        e.preventDefault();
        const apiUrl= 'https://jsonplaceholder.typicode.com/users';

        const payload ={
          username:formData.username,
          password:formData.password,
        };

        try{
          const response = await axios.post(apiUrl,payload,{
            headers:{
              'Content-Type':'application/json',
            },
          });
          setError(null);
          console.log("API Response :",response.data);
        }catch(error){
          console.error('Error:',error)
          setError("Invalid username or password. Please try again.");
        }
      };

  return (
    <div className='continter row '>
      <div className='col-6 mamathalogo' >
        <img src={Logoimage} className="mamathalogo" alt="..." />
      </div>
      {/* <div className='col-1  '></div> */}
      <div className='col-5 '>
        <form className="form-floating  mt-5" onSubmit={submitForm}>
            <h2 className='loginh2'>Login</h2>
            <p className='subtitle'>Start your Journey now with us</p>
            <div className='ps-5 ms-5 me-5 pe-5'>
                <input type="email" className="form-control" 
                    id="password" 
                    name='username'
                    placeholder="Enter Your Phone number"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <div className='password-field'>
                  <input type={showPassword === 'confirmPassword' ? 'text' : 'password'} className="form-control mt-3" 
                    id="password" 
                    name='password'
                    placeholder="Enter Your Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                  <span className="toggle-password"  onClick={() => ToggleVisibility('confirmPassword')}>
                  <FontAwesomeIcon icon={showPassword === 'confirmPassword' ? faEyeSlash : faEye} />
                  </span>
                </div>
               
            </div>
            {error && <p className="text-danger text-center mt-3">{error}</p>}
            <div>
              <p className='mt-4 '><a href='#' style={{textDecoration:"none",marginRight:"12rem"}}>Forgot Password?</a> </p>
            </div>
                <button type="submit" className='btn btn-danger submitbutton'>Submit</button>
                <p style={{"fontSize":"13px","marginTop":"15px",}}>Don't have an account ? <a href='/signup'  className='text-decoration-none'>Rigester now</a></p>
        </form>
        <div style={{"fontSize":"12px"}}>
            Or  Login with 
        </div>
        <div className='row mt-2 d-flex ps-5 pe-5 ms-5 me-5'>
            <a href='#' className='btn btn-outline-primary col-sm-4 mt-5 ps-1 pe-1 ms-4 me-5'> 
              <i className="bi bi-google fa-google" ></i> Google</a>
            <a href='#' className='btn btn-outline-primary col-sm-4 mt-5 ps-1 pe-1 ms-4 '> 
              <i className="bi bi-facebook"></i> Facebook</a>
        </div>

      </div>
    </div>
  )    
}

export default LoginPage
