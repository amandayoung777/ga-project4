import { useEffect, useState } from "react";
import axios from "axios";
// import "../../../baking-shop/db/db";

function Shopping(props) {
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
      <p>Let's Go Shopping</p>

      <div className="prods">
        {allProducts.map((prod) => {
          return (
            <div title="showprods" className="prod-id">
              <img className="prod-img" src={prod.img} alt={prod.name}></img>
              <p >{prod.name}</p>
              <p>${prod.price}</p>
              <form>
                <label for="qty">Quantity:</label>

                <select name="qty" id="qty">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                </select></form>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shopping;

