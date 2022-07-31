import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import './App.css';
// import Switch from '@mui/material/Switch';

function NavBar() {
  <div className="nav-bar">
    <ul>
          <li>
            {/* <Link to="/">Home</Link> */}
          </li>
          <li>
            {/* <Link to="/about">About</Link> */}
          </li>
        </ul>
  </div>
}

function ShopFront() {
    return (
        <h1 className="shopName">Amanda's Little Shop of Horrors</h1>
    )
}

function AboutPage() {
    return (
      <div>
        <h1>About me</h1>
        <p>Hi, my name is Amanda and I'm a baker in </p>
      </div>
    )
  }

export {ShopFront, AboutPage, NavBar}