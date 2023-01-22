import React,{ useState, useEffect} from 'react'
import { Products } from './Products';
import axios from 'axios';
import ProductTopSection from '../ProductTopSection';
import Sidebar from '../../Sidebar';

const FishingPage = () => {
    const[products, setProducts] = useState([]);

    useEffect(() => {
      axios.get(`https://calm-red-hen-hat.cyclic.app/api/fishing`)
      .then((res) => {
          setProducts(res.data);
      })
      .catch((err) => {
          console.log(`${err} something went wrong!`);
      })
    },[])
    
   console.log(products);
   
  return (
    <>
       <h1>Fishing Page</h1>
       <div style={{display:'flex', direction:'left', width:'100%', margin:'auto'}}>
          <div>
            <Sidebar/>
          </div>
          <div>
          <ProductTopSection/>
          <Products products={products}/>
          </div>
       </div>
       
    </>
  )
}

export default FishingPage;
