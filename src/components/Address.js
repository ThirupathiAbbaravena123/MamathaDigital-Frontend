

import React, { useState } from 'react';

// Import your icons
import homeIcon from '../assets/icons/home.png';
import workIcon from '../assets/icons/workspace copy.png';

const Address = () => {
  const [addresses, setAddresses] = useState([
    { id: 1, label: 'Home', address: 'brahma A, 1122, Srinivasa Nagar, Ameerpet, Hyderabad', icon: homeIcon },
    { id: 2, label: 'Work Place', address: 'brahma A, 1122, Srinivasa Nagar, Ameerpet, Hyderabad', icon: workIcon },
  ]);

  const handleEdit = (id) => {
    const updatedAddresses = addresses.map((address) => {
      if (address.id === id) {
        const newLabel = prompt('Edit Label:', address.label) || address.label;
        const newAddress = prompt('Edit Address:', address.address) || address.address;
        return { ...address, label: newLabel, address: newAddress };
      }
      return address;
    });
    setAddresses(updatedAddresses);
  };

  const handleDelete = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  const handleAdd = () => {
    const newLabel = prompt('Enter Label (e.g., Home, Work):', '') || 'New Address';
    const newAddress = prompt('Enter Address:', '') || 'New Address Details';
    setAddresses([...addresses, { id: Date.now(), label: newLabel, address: newAddress, icon: homeIcon }]);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* <h2 style={{ marginBottom: '20px' }}>My Addresses</h2> */}
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        {addresses.map((item) => (
          <div
            key={item.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '10px',
              marginBottom: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src={item.icon}
                alt={item.label}
                style={{
                  width: '20px',
                  height: '20px',
                  marginBottom:'27px',
                }}
              />
              <div>
                <h4 style={{ margin: '0 0 5px 0', }}>{item.label}</h4>
                <p style={{ margin: 0, color: '#555' }}>{item.address}</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <button
                onClick={() => handleEdit(item.id)}
                style={{
                  background: 'white',
                  color: 'black',
                  border: '1px solid',
                  borderRadius: '4px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                style={{
                  background: '#9F0707',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={handleAdd}
          style={{
            marginTop: '20px',
            marginLeft:'-550px',
            // background: 'blue',
            color: 'blue',
            border: 'none',
            // borderRadius: '4px',
            padding: '10px 20px',
            cursor: 'pointer',
          }}
        >
          + Add New Address
        </button>
      </div>
      <button
        style={{
          marginTop: '30px',
          background: '#9F0707',
          color: 'WHITE',
          border: 'none',
          borderRadius: '4px',
          padding: '10px 20px',
          cursor: 'pointer',
        }}
      >
        Save
      </button>
    </div>
  );
};

export default Address;
