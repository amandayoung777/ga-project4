import { useEffect, useState } from "react";
import axios from "axios";


function Products({onAdd, cartItems}) {
  const [allProducts, setAllProducts] = useState([]);

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
  },[]);
   const handleSubmit = (e, prod) => {
    e.preventDefault();
    console.log(prod);
    // onAdd();
   }
 
  return (
    <main className="block col-2">      
    <div className="Products">
      <div className="prods">
        {allProducts.map((prod) => {
          return (
            <div className="prod-id">
              <img className="prod-img" src={prod.img} alt={prod.name}></img>
              <p>{prod.name}</p>
              <p>${prod.price}</p>
              {/* <Product key={prod.id} prod={prod}></Product> */}
              <form>
                <label for="qty"></label>
{/* 
                <select name="qty" id="qty">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                </select> */}
                <button onClick={() => handleSubmit(prod.name)}>Add To Cart</button></form>
            

            </div>
          );
        })}
      </div>

    </div>
    </main>
  );
}

export default Products;
