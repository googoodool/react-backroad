import { pageLinks, socialLink } from "../data";
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((newLink) => {
          const { id, href, name } = newLink;
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {name}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLink.map((newSocial) => {
          const { id, href, icon } = newSocial;
          return (
            <li key={id}>
              <a href={href} target="_blank" className="footer-icon">
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <CopyRight
        title="copyright"
        subTitle="Backroads travel tours company"
        spans="all rights reserved"
      />
    </footer>
  );
};
export default Footer;
