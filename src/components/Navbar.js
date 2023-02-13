import logo from "../images/logo.svg";
import { pageLinks, socialLink } from "../data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((newLink) => {
            return (
              <li key={newLink.id}>
                <a href={newLink.href} className="nav-link">
                  {" "}
                  {newLink.name}{" "}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLink.map((newSocial) => {
            return (
              <li key={newSocial.id}>
                <a href={newSocial.href} target="_blank" className="nav-icon">
                  <i className={newSocial.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
