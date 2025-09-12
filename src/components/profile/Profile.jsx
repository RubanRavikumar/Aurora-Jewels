import React, { useEffect, useState } from "react";
import "./Profile.css";

function Profile({ onLogout }) {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUserEmail = localStorage.getItem("currentUserEmail");

    if (currentUserEmail && users.length > 0) {
      const foundUser = users.find((u) => u.email === currentUserEmail);
      if (foundUser) {
        setUser({ name: foundUser.username, email: foundUser.email });
      }
    }
  }, []);

  const logOut = () => {
    // Remove only the "current user" marker, keep all registered users
    localStorage.removeItem("currentUserEmail");
    onLogout();
  };

  return (
    <div className="container Profile mb-3">
      <h2 className="mb-4">My Profile</h2>
      <div className="card shadow p-5">
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex mb-3 w-100">
            <h4 className=" w-10">User name</h4>
            <h4 className="text-muted">: {user.name || "Guest User"}</h4>
          </div>
          <div className="d-flex mb-3 w-100">
            <h4 className="w-10">Email</h4>
            <h4 className="text-muted">: {user.email || "No email provided"}</h4>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button onClick={logOut} className="btn btn-danger w-25">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
