import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import Home from './components/Home';
import Products from './components/Products';

const Routes = (
    <BrowserRouter>
      <div>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      </div>
    </BrowserRouter>
  );
  export default Routes;
  
