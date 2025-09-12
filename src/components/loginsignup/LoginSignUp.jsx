import { React, useState } from "react";
import "./LoginSignUp.css";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

function LoginSignUp({ onLogin }) {
  // maintain states
  const [signup, setSignup] = useState(false);
  const [showpassword, setShowpassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameerror, setNameerror] = useState(false);
  const [mailerror, setMailerror] = useState(false);
  const [passerror, setPasserror] = useState(false);

  // regular expression
  const namevalidate = /^[a-zA-Z0-9._]{3,20}$/;
  const emailvalidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  const passvalidate =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;

  // Form validation
  const handlesubmit = (e) => {
    e.preventDefault();
    setNameerror(false);
    setMailerror(false);
    setPasserror(false);

    // validate sign-up form
    if (signup) {
      if (
        username.trim() !== "" &&
        namevalidate.test(username) &&
        email.trim() !== "" &&
        emailvalidate.test(email) &&
        password.trim() !== "" &&
        passvalidate.test(password)
      ) {
        onLogin({ username, email, password });
        setUsername("");
        setEmail("");
        setPassword("");
      } else if (
        !namevalidate.test(username) ||
        !emailvalidate.test(email) ||
        !passvalidate.test(password)
      ) {
        if (!namevalidate.test(username)) {
          setNameerror(true);
        }
        if (!emailvalidate.test(email)) {
          setMailerror(true);
        }
        if (!passvalidate.test(password)) {
          setPasserror(true);
        }
      }
    }
    // validate login form
    else {
      if (email.trim() !== "" && password.trim() !== "") {
        onLogin({ email, password });
        setEmail("");
        setPassword("");
      } else if (email === "" || password === "") {
        if (email === "") {
          setMailerror(true);
        }
        if (password === "") {
          setPasserror(true);
        }
      }
    }
  };

  return (
    <div className="loginpage">
      <form onSubmit={handlesubmit}>
        <div>
          {signup ? (
            // sign-up section
            <div className="border rounded-3 p-5 bg-body-tertiary bg-opacity-75">
              <h1 className="text-center mb-5 fw-7">Sign Up</h1>
              <div className="mb-3">
                <div className="border-bottom border-dark fs-5 fw-5">
                  <IoPersonSharp className="me-2" />
                  <input
                    type="text"
                    placeholder="Username"
                    className="log-user-input bg-transparent"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                {nameerror ? (
                  <span className="text-danger fw-5">* Enter valid username</span>
                ) : (
                  <span></span>
                )}
              </div>
              <div className="mb-3">
                <div className="border-bottom border-dark fs-5 fw-5">
                  <MdEmail className="me-2" />
                  <input
                    type="text"
                    placeholder="Email"
                    className="log-email-input bg-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {mailerror ? (
                  <span className="text-danger fw-5">* Enter valid email</span>
                ) : (
                  <span></span>
                )}
              </div>
              <div className="mb-5">
                <div className="border-bottom border-dark fs-5 fw-5">
                  <RiLockPasswordFill className="me-2" />
                  <input
                    type={showpassword ? "text" : "password"}
                    placeholder="Password"
                    className="log-pass-input bg-transparent"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    className="c-pointer"
                    onClick={() => setShowpassword(!showpassword)}
                  >
                    {showpassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                {passerror ? (
                  <span className="text-danger fw-5">* Enter valid password</span>
                ) : (
                  <span></span>
                )}
              </div>
              <button type="submit" className="btn btn-danger form-control">
                Sign Up
              </button>
              <div className="border-bottom border-dark my-3"></div>
              <div className="fw-5 fs-5">
                Already have an account?
                <span
                  onClick={() => setSignup(!signup)}
                  className="ms-2 text-danger fw-5 c-pointer"
                >
                  Login
                </span>
              </div>
            </div>
          ) : (
            // login section
            <div className="border rounded-3 p-5 bg-body-tertiary bg-opacity-75">
              <h1 className="text-center mb-5 fw-7">Login</h1>
              <div className="mb-3">
                <div className="border-bottom border-dark fs-5">
                  <MdEmail className="me-2" />
                  <input
                    type="text"
                    placeholder="Email"
                    className="log-email-input bg-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {mailerror ? (
                  <span className="text-danger fw-5">* Enter email</span>
                ) : (
                  <span></span>
                )}
              </div>
              <div className="mb-5">
                <div className="d-flex align-items-center border-bottom border-dark fs-5">
                  <RiLockPasswordFill className="me-2" />
                  <input
                    type={showpassword ? "text" : "password"}
                    placeholder="Password"
                    className="log-pass-input bg-transparent"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    className="c-pointer"
                    onClick={() => setShowpassword(!showpassword)}
                  >
                    {showpassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                {passerror ? (
                  <span className="text-danger fw-5">* Enter password</span>
                ) : (
                  <span></span>
                )}
              </div>
              <button type="submit" className="btn btn-danger form-control">
                Login
              </button>
              <div className="border-bottom border-dark my-3"></div>
              <div className="fs-5 fw-5">
                Don't have an account?
                <span
                  className="ms-2 fw-5 text-danger c-pointer"
                  onClick={() => setSignup(!signup)}
                >
                  Sign Up
                </span>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
export default LoginSignUp;
