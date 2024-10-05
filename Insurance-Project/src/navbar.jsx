
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
        <h2>TPL Insurance</h2>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbar-icons">
        <span className="icon">⚙️</span>
        <span className="icon">⛶</span>
        <span className="icon">📬</span>
        <span className="icon">🔔</span>
      </div>
      <div className="navbar-profile">
        <span className="profile-name">Mr. Khalid Hussain</span>
        <span className="profile-role">Admin</span>
      </div>
    </nav>
  );
};

export default Navbar;
