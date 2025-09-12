import "./App.css";
import { React, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginSignUp from "./components/loginsignup/LoginSignUp";
import Navbar from "./components/navbar/Navbar";
import Necklaces from "./components/necklaces/Necklaces";
import Bangles from "./components/bangles/Bangles";
import Earrings from "./components/earrings/Earrings";
import Rings from "./components/rings/Rings";
import Bracelet from "./components/bracelet/Bracelet";
import Cart from "./components/cart/Cart";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // validate Authentication
  const handleLogin = (userdata) => {
    const { username, email, password } = userdata;
    //sign-up validation
    if (username !== undefined) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = users.some((user) => user.email === email);
      if (userExists) {
        alert("This email is already registered. Please log in.");
        return;
      }
      users.push({ username, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUserEmail", email);
      setIsAuthenticated(true);
    }
    // login validation
    else {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );
      if (users.length === 0 ) {
        alert("You don't have an account. Please Sign up.");
        return;
      }
      if (foundUser) {
        localStorage.setItem("currentUserEmail", foundUser.email);
        setIsAuthenticated(true);
      } else {
        alert("Incorrect mail or password");
      }
    }
  };
  // validate Authentication
  const handleLogOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {isAuthenticated ? (
        <div>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Necklaces />} />
              <Route path="/bangles" element={<Bangles />} />
              <Route path="/earrings" element={<Earrings />} />
              <Route path="/rings" element={<Rings />} />
              <Route path="/braceletes" element={<Bracelet />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/profile"
                element={<Profile onLogout={handleLogOut} />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      ) : (
        <LoginSignUp onLogin={handleLogin} />
      )}
    </Router>
  );
}

export default App;
