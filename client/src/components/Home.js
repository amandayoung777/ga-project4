import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import ContactPage from './Contact';

function Home() {
    return (
      <div className="contact">

    <p className="shopName">Welcome to Manda Makes! Please feel free to                 <button className="contact-button">
  Contact Me</button></p>

  <Routes>
  <Route path="/contact" element={<ContactPage />} />
  </Routes>

  </div>
  );
  }

  export default Home