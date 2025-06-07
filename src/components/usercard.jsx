// write the component code here
import React from 'react'

const usercard = () => {
  const profilePhoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s'; 
  const name = 'kadali mourya';
  const email = 'kadali.mourya.s89@kalvium.community';
  const phoneNumber = '+91 1234567890';
  const address = '1234 Galaxy St, Milky Way, Earth';

  return (
    <div className="usercard">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phoneNumber}</p>
      <p>Address: {address}</p>
    </div>
  )
}

export default usercard