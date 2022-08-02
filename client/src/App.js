import "./App.css";
import NavBar from './components/NavBar';
import Title from "./components/Header";
// import Switch from '@mui/material/Switch';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Products from "./components/Products";



function App() {
  return (
    <div className="App">
      <Title/>
      <NavBar/>
      <Products/>

    </div>
  );
}

export default App;
