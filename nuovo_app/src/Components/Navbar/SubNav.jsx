import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    { path:"/clothingpage", title:"Clothing"},
    { path:"/fishingpage", title:"Fishing"},
    { path:"/ridepage", title:"Ride"},
    { path:"/footwearpage", title:"Footwear"},
    // { title:"Boating"},
    // { title:"Shooting"},
    // { title:"Hunting"}
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
