import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import ContactPage from './Contact';
import Products from "./Products";

function Home() {
    return (
      <div className="home-products">
      <Products />
  </div>
 
  );
  }

  export default Home