import React from 'react';
import  "./navbar.css";
import NavSearch from "../NavSearch";
import LoginDrawer from "../LoginDrawer";
import { GoSearch } from "react-icons/go";
import { IoMdCart } from "react-icons/io";
// import NavBanner from '../NavBanner';
import { AiOutlineRight } from 'react-icons/ai';
import { CloseButton, Text } from '@chakra-ui/react';
import SubNav from './SubNav';
import Logo from '../Logo';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* <NavBanner/> */}
      <div className={'navBanner'}>
        <div>
        <Text fontWeight="medium">Winter Clothing | Shop Now </Text>
        <AiOutlineRight size={'1.4rem'} color={'#CBD5E0'}/>
        </div>
        
        <CloseButton/>
      </div>
      <div className={'nav'}>
         <Logo/>
         <div className={'search'}>
          <GoSearch size={'1.5rem'}/>
          <NavSearch/>
         </div>
         <div className={'lac'}>
          <LoginDrawer/>
          <IoMdCart size={'2.5rem'} onClick={() => navigate('/cart')}/>
         </div>
      </div>
      <SubNav/>
    </>
  )
}

export default Navbar;
