import React from "react";
import "./login.css"; // Add your styles here or use inline styles

const LoginScreen = () => {
  return (
    <div className="login-container">
      {/* Left side: Login Form */}
      <div className="login-form">
        <div className="logo">
          <img src="your-logo-path.png" alt="TPL Insurance" />
        </div>
        <h2>Login</h2>
        <p>Enter Your Login Credentials Here:</p>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="khalidhussain@gmail.com"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="***************"
            />
            <span className="password-toggle">
              <i className="icon-eye"></i>
            </span>
          </div>
          <div className="options">
            <div className="remember-me">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me ?</label>
            </div>
            <div className="forgot-password">
              <a href="/">Forgot Password ?</a>
            </div>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </div>

      {/* Right side: Business Dashboard Promotion */}
      <div className="promo-panel">
        <h3>Easy-to-Use BPR for Managing Your Business.</h3>
        <p>
          Streamline Your Business Management with Our User-Friendly Dashboard.
          Simplify complex tasks, track key metrics, and make informed decisions
          effortlessly.
        </p>
        <div className="promo-image">
          <img src="asse.png" alt="Dashboard Preview" />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
