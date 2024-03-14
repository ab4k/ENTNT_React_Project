import React from "react";
import "./footer.css";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="site-footer">
        <div>
          <p>&copy; {currentYear} fyERP. All Rights Reserved.</p>
          <ul className="footer-links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
