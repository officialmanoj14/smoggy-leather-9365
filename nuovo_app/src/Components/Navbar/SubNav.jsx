import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    { path:"/clothing", title:"Clothing"},
    { path:"/fishing", title:"Fishing"},
    { path:"/ride", title:"Ride"},
    { path:"/footwear", title:"Footwear"},
];

const SubNav = () => {
  const styles = ({ isActive }) => ({
    color: isActive ? '#ED64A6' : '#20543d',
  })
  
  const styles2 = {
    height:'2.3rem',
    display:'flex',
    alignItems:'center',
    margin:'auto',
    justifyContent:'space-around',
    width:'70%',
    fontSize:'1.15rem',
    fontFamily:'sans-serif',
    fontWeight:'bold'
  }
  return (
    <div style={{borderBottom:'1.3px solid gray'}}>
        <div style={styles2}>
        {links.map((page, index) => {
            return <NavLink to={page.path} key={index+1} style={styles}>{page.title}</NavLink>
        })}
        </div>
    </div>
  )
}

export default SubNav;
