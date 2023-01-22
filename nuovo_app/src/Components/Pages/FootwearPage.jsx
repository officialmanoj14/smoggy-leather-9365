import React,{useState, useEffect} from 'react'
import { Products } from "./Products";
import axios from 'axios';

const FootwearPage = () => {
    const[products, setProducts] = useState([]);

    useEffect(() => {
      axios.get(`http://localhost:3001/footwear`)
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
       <h1>Footwear Page</h1>
       <Products products={products}/>
    </div>
  )
}

export default FootwearPage;
