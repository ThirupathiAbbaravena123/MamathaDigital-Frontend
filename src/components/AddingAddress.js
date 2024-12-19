import React, { useState } from 'react';
import '../assets/PopUp.css';
import axios from 'axios';

const AddingAddress= ({ onClose,onProcced }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    street: "",
    pinCode: "",
    state: "",
    city: "",
    addressType: "Work",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{

      const response=await axios.post('https://your-api-url.com/address', formData);

      if(response.status===200){
          alert("Address Submitted Successfully!");
          onProcced(formData);
          onClose();
      }else{
        alert("Failed to Submit address.")
      }
    }catch(error){
      console.error("Error While Submitting address:",error)
      alert("There was an erroe while Submitting the address.")
    }
    console.log("Submitted Address Data: ", formData);
  };

  return (
    <div className="overlay">
      <div className="popup">
        <div className='headding'>
        <span className="close" onClick={onClose} >
          ×
        </span>
        <h2 >Add Address</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="firstName" style={{marginRight:"7.5rem"}}>First Name <span class="required">*</span></label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName" style={{marginRight:"7.5rem"}}>Last Name <span class="required">*</span></label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group" style={{marginRight:"20px"}}>
              <label htmlFor="email">Email ID <span class="required">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email ID"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile" style={{marginRight:"5rem"}}>Mobile Number <span class="required">*</span></label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Enter mobile number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group" style={{marginRight:"15px"}}>
              <label htmlFor="street">Street Address <span class="required">*</span></label>
              <input
                type="text"
                id="street"
                name="street"
                placeholder="Enter address"
                value={formData.street}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pinCode" style={{marginRight:"7.5rem"}}>Pin Code <span class="required">*</span></label>
              <input
                type="number"
                id="pinCode"
                name="pinCode"
                placeholder="Enter pin code"
                value={formData.pinCode}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state" style={{marginRight:"7.5rem"}}>State <span class="required">*</span></label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="Enter state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City/Town/Village <span class="required">*</span></label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter city/town/village"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group address-type">
            <label>Type of Address <span class="required">*</span></label>
            <div>
              <label>
                <input
                  type="radio"
                  name="addressType"
                  value="Work"
                  checked={formData.addressType === "Work"}
                  onChange={handleChange}
                />
                Work
              </label>
              <label>
                <input
                  type="radio"
                  name="addressType"
                  value="Home"
                  checked={formData.addressType === "Home"}
                  onChange={handleChange}
                />
                Home
              </label>
              <label>
                <input
                  type="radio"
                  name="addressType"
                  value="Office"
                  checked={formData.addressType === "Office"}
                  onChange={handleChange}
                />
                Office
              </label>
            </div>
          </div>

          <button type="submit" className="proceed-btn">
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};


export default AddingAddress;
