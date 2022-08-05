import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useParams,
  } from "react-router-dom";
import {useState} from "react";

import Home from './Home';
import Products from './Products';
import AboutPage from './AboutPage';
import ContactPage from "./Contact";
import SignUp from "./SignUp";
import Shopping from "./Shopping";
import Login from "./Login";

function NavBar({onAdd, cartItems}) {
  const [loggedIn, setLoggedIn] = useState(false)
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
                 {loggedIn === true ? <p>You are logged in</p> :
                <div>
                <button>
                  <Link to="/signup">Create Account</Link>
                </button> 
                <button>
                  <Link to="/login">Login</Link>
                </button></div>
                }
              </ul>
            
  
            <Routes>
              <Route path="/" element={<Home onAdd={onAdd} cartItems={cartItems}/>} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<Products onAdd={onAdd} cartItems={cartItems}/>} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/products" element={<Shopping />} />
              <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    );
  }

  export default NavBar