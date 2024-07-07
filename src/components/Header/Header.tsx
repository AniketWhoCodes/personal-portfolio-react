import { Nav, Logo, NavMenu, NavLink, NavBtn, Bars } from "./HeaderElement";
import logo from "../../assets/logo.png";

export default function Header({ toggle }: { toggle: any }) {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
}
