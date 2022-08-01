
import { useEffect, useState} from 'react';
import axios from 'axios';
import ".././db/db";

function Products() {
    const [allProducts,setAllProducts] = useState([])
    const [selectedProducts,setSelectedProducts] = useState()
    
        //This is will render all products on the page
    const eachProduct=(product)=>{
        setSelectedProducts([...selectedProducts,product])

    }
    
        useEffect(()=> {
        axios.get('api/products')
        .then((response) => {
            setAllProducts(response.data);
            console.log(response.data)
          }
          )},[]
    
    )
        
          
    
    return (
        <div className="Products">
            <p>All my lovely products</p>
            <div className="Prods">
                {allProducts.map((prod)=>{
                    return <Product>

                    </Product>
                })}
            </div>

      </div>
    )};
  



  export default Products