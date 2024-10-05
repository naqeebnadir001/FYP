import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Insurance CRM Project</h2>
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
        <span className="profile-role">Admin</span>
      </div>
    </nav>
  );
};

export default Navbar;