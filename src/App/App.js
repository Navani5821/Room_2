import "./App.css";

// import react-router-dom
import { Route, Routes } from "react-router-dom";

// imports pages
import Home from "../Pages/Home";
import Room from "../Pages/Room";
import SingleRoom from "../Pages/SingleRoom";
import Error from "../Pages/Error";

// import components
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <button onClick={() => {throw new Error("This is your first error!");}}>Break the world</button>;
      <Routes>
        {/* Define the route for the Home page */}
        <Route path="/" element={<Home />} />

        {/* Define the route for the Room page */}
        <Route path="/rooms" element={<Room />} />

        {/* Define the route for individual rooms */}
        <Route path="/rooms/:slug" element={<SingleRoom />} />

        {/* Catch-all route for non-existent pages */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
