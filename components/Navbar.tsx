export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <div className="nav-logo-icon">V</div>
        <span className="nav-logo-text">Vesi<span>ca</span></span>
      </div>
      <ul className="nav-links">
        <li><a href="#">Product</a></li>
        <li><a href="#">Solutions</a></li>
        <li><a href="#">Industries</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">Company</a></li>
      </ul>
      <div className="nav-cta">
        <a href="#" className="btn-ghost">Log In</a>
        <a href="#" className="btn-primary">Request Demo</a>
      </div>
    </nav>
  )
}
