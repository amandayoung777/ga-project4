import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useParams,
  } from "react-router-dom";

import Home from './Home';
import Products from './Products';
import AboutPage from './AboutPage';

function NavBar() {
    return (
        <div className="Nav">
        <header>
          <BrowserRouter>
          
            
              <ul className="nav-bar">
                <button>
                  <Link to="/">Home</Link>
                </button>
                <button>
                  <Link to="/about">About</Link>
                </button>
                <button>
                  <Link to="/products">Products</Link>
                </button>
              </ul>
            
  
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    );
  }

  export default NavBar