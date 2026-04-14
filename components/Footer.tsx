const productLinks = ['Work Instructions', 'Connected Workflows', 'Analytics', 'Integrations', 'Mobile App']
const solutionLinks = ['Manufacturing', 'Energy & Utilities', 'Food & Beverage', 'Chemicals', 'Mining']
const resourceLinks = ['Blog', 'Case Studies', 'Webinars', 'Documentation', 'Community']
const companyLinks = ['About Us', 'Careers', 'Press', 'Partners', 'Contact']

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="nav-logo" style={{ marginBottom: '16px' }}>
            <div className="nav-logo-icon">V</div>
            <span style={{ fontWeight: 800, fontSize: '20px', color: '#fff', letterSpacing: '-0.5px' }}>
              Vesi<span style={{ color: 'var(--orange)' }}>ca</span>
            </span>
          </div>
          <p>
            The Connected Worker® Platform by Vesica for industrial frontline operations.
            Empowering workers. Improving performance.
          </p>
        </div>

        <div className="footer-col">
          <h5>Product</h5>
          <ul>{productLinks.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
        </div>
        <div className="footer-col">
          <h5>Solutions</h5>
          <ul>{solutionLinks.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
        </div>
        <div className="footer-col">
          <h5>Resources</h5>
          <ul>{resourceLinks.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <ul>{companyLinks.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Vesica, Inc. All rights reserved. Connected Worker® is a registered trademark.</span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Settings</a>
        </div>
      </div>
    </footer>
  )
}
