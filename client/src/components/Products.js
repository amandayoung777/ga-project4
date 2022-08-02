import { useEffect, useState } from "react";
import axios from "axios";
// import "../../../baking-shop/db/db";

function Products(props) {
  const [allProducts, setAllProducts] = useState([]);
  // const [selectedProducts,setSelectedProducts] = useState()

  //This is will render all products on the page
  // const eachProduct=(product)=>{
  //     setSelectedProducts([...selectedProducts,product])

  // }

  useEffect(() => {
    axios
      .get('api/products')
      .then((response) => {
        console.log(response.data);
        setAllProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[])

  return (
    <div className="Products">
      <p>All my lovely products</p>

      <div className="prods">
        {allProducts.map((prod) => {
          return (
            <div className="prod-id">
                            <img className="prod-img" src={prod.img} alt={prod.name}></img>
              <p>{prod.name}</p>
              <p>${prod.price}</p>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
