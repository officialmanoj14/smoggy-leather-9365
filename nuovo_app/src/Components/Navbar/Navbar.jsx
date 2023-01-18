import React from 'react';
import styles from "./navbar.module.css";
import NavSearch from "../NavSearch";
import LoginDrawer from "../LoginDrawer";
import { GoSearch } from "react-icons/go";
import { IoMdCart } from "react-icons/io";
// import NavBanner from '../NavBanner';
import { AiOutlineRight } from 'react-icons/ai';
import { CloseButton, Text } from '@chakra-ui/react';


const Navbar = () => {
  return (
    <>
      {/* <NavBanner/> */}
      <div className={styles.navBanner}>
        <div>
        <Text fontWeight="medium">Winter Clothing | Shop Now </Text>
        <AiOutlineRight size={'1.4rem'} color={'#CBD5E0'}/>
        </div>
        
        <CloseButton/>
      </div>
      <div className={styles.nav}>
         <div className={styles.logo}>
          <h1>NUOVO</h1>
         </div>
         <div className={styles.search}>
          <GoSearch size={'1.5rem'}/>
          <NavSearch/>
         </div>
         <div className={styles.lac}>
          <LoginDrawer/>
          <IoMdCart size={'2.5rem'} />
         </div>
      </div>
    </>
  )
}

export default Navbar;
