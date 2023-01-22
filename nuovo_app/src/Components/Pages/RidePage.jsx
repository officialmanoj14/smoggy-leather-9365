import React,{useState, useEffect} from 'react'
import { Products } from "./Products";
import axios from 'axios';

const RidePage = () => {
    const[products, setProducts] = useState([]);

    useEffect(() => {
      axios.get(`https://calm-red-hen-hat.cyclic.app/api/ride`)
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
      <h1>Ride page</h1>
      <Products products={products}/>
    </div>
  )
}

export default RidePage;
