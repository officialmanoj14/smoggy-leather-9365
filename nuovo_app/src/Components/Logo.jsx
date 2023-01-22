import React from 'react'
import './logo.css';
import { useNavigate } from 'react-router-dom';
const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className={'logo'}>
      <h1 onClick={() => navigate('/')}>NUOVO</h1>    
    </div>
  )
}

export default Logo;
