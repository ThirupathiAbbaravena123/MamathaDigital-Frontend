



import React, { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Mobile number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert('Profile information saved successfully!');
    setIsEditing(false);
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '50px', }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Profile Information</h2>
      {/* <hr /> */}

      <div
        style={{
          padding: '20px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
          borderRadius: '10px',
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* First Name and Last Name */}
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>
                First Name <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                disabled={!isEditing}
                style={{
                  width: '70%',
                  padding: '10px',
                  border: errors.firstName ? '1px solid red' : '1px solid #ccc',
                  borderRadius: '5px',
                  backgroundColor: isEditing ? '#fff' : '#f5f5f5',
                }}
              />
              {errors.firstName && (
                <p style={{ color: 'red', marginTop: '5px' }}>{errors.firstName}</p>
              )}
            </div>

            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>
                Last Name <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                disabled={!isEditing}
                style={{
                  width: '70%',
                  padding: '10px',
                  border: errors.lastName ? '1px solid red' : '1px solid #ccc',
                  borderRadius: '5px',
                  backgroundColor: isEditing ? '#fff' : '#f5f5f5',
                }}
              />
              {errors.lastName && (
                <p style={{ color: 'red', marginTop: '5px' }}>{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Mobile Number */}
          <div style={{ marginTop: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Mobile Number <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              disabled={!isEditing}
              style={{
                width: '34%',
                padding: '10px',
                border: errors.mobileNumber ? '1px solid red' : '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: isEditing ? '#fff' : '#f5f5f5',
              }}
            />
            {errors.mobileNumber && (
              <p style={{ color: 'red', marginTop: '5px' }}>{errors.mobileNumber}</p>
            )}
          </div>

          {/* Email */}
          <div style={{ marginTop: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Email Address <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={!isEditing}
              style={{
                width: '34%',
                padding: '10px',
                border: errors.email ? '1px solid red' : '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: isEditing ? '#fff' : '#f5f5f5',
              }}
            />
            {errors.email && (
              <p style={{ color: 'red', marginTop: '5px' }}>{errors.email}</p>
            )}
          </div>

          {/* Buttons */}
          <div
            style={{
              display: 'flex',
              justifyContent: isEditing ? 'space-between' : 'flex-end',
              alignItems: 'center',
              marginTop: '30px',
            }}
          >
            {isEditing && (
              <button
                type="button"
                onClick={toggleEdit}
                style={{
                  backgroundColor: '#ccc',
                  border: 'none',
                  padding: '10px 15px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
            )}
            {!isEditing && (
              <button
                type="button"
                onClick={toggleEdit}
                style={{
                  background: 'none',
                  color: '#007BFF',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop:'-500px'
                }}
              >
                Edit details
              </button>
            )}
            {isEditing && (
              <button
                type="submit"
                style={{
                  backgroundColor: '#9F0707',
                  color: '#fff',
                  border: 'none',
                  padding: '10px 15px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Save
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
