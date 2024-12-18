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
      <div className='login-container '>
      <div className="left-section">
          <img src={Logoimage} alt="Mamatha Logo" className="mamathalogo" />
        </div>
        <div className="right-section">
          <div className="form-box">
            <form className="form-floating" onSubmit={submitForm}>
              <h2 className='loginh2'>Login</h2>
              <p className='subtitle'>Start your Journey now with us</p>
              <div className=''>
                  <input type="email" className="form-control" 
                      id="password" 
                      name='username'
                      placeholder="Enter Your Email "
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
          </form>
          <p style={{"fontSize":"13px","marginTop":"15px",}}>Don't have an account ? <a href='/signup'  className='text-decoration-none'>Rigester now</a></p>
            <p className="or-login">Or Sign Up with</p>
            <div className="social-buttons">
              <a
                href="#"
                className="social-btn btn btn-outline-primary google"
                style={{ textDecoration: "none" }}
              >
                <i className="bi bi-google fa-google"></i> Google
              </a>
              <a
                href="#"
                className="social-btn btn btn-outline-primary facebook"
                style={{ textDecoration: "none" }}
              >
                <i className="bi bi-facebook"></i> Facebook
              </a>
            </div>
          </div>
      </div>
  </div>



  )    
}

export default LoginPage
