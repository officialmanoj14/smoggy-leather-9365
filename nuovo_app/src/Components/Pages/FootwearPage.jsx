import React,{useState, useEffect} from 'react'
import { Products } from '../Products';
import axios from 'axios';

const FootwearPage = () => {
    const[products, setProducts] = useState([]);

    useEffect(() => {
      axios.get(`https://calm-red-hen-hat.cyclic.app/api/footwear`)
      .then((res) => {
          setProducts(res.data);
      })
      .catch((err) => {
          console.log(`${err} something went wrong!`);
      })
    },[])
    
    console.log(products);
  return (
    <div>
       <h1 style={{fontSize:'30px', fontWeight:'bold', marginTop:'1px'}}>Footwear Page</h1>
       <Products products={products}/>
    </div>
  )
}

export default FootwearPage;
