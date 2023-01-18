import React from 'react'

const NavSearch = () => {
  const searchStyles = {
    width:'100%',
    height: '100%', 
    // border: '1px solid red',
    backgroundColor:'#e5e5e5',
    borderRadius:'0rem 2.5rem 2.5rem 0rem',
    outline: 'none',
    paddingLeft:'.8rem',
    fontSize:'1.03rem'
  }

  return (
    <>
        <input type="text" name="" placeholder="What can we help you find?" style={searchStyles}/>
    </>
  )
}

export default NavSearch;
