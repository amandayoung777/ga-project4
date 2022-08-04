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
import ContactPage from "./Contact";
import SignUp from "./SignUp";
import Shopping from "./Shopping";

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
                  <Link to="/products">Shopping</Link>
                </button>
                <button>
                  <Link to="/contact">Contact Manda</Link>
                </button>
                <button>
                  <Link to="/signup">Create Account</Link>
                </button>
                <button>
                  <Link to="/login">Login</Link>
                </button>
              </ul>
            
  
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/products" element={<Shopping />} />
              {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    );
  }

  export default NavBar