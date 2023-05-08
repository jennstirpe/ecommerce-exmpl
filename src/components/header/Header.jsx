import { StyledHeader } from "./styled/Header.styled";
import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <StyledHeader>
        <div className="updates-bar">
            <ul className="updates">
            <li className="update first">Free U.S. Shipping Over $65 and International Over $125</li>
            <li className="update second">Order Processing Time is currently 3-6 Business Days</li>
            </ul>
        </div>

        <div className="company-logo">
            <Link className="nav-link" to="/">
              <h1>Best Buds</h1>
            </Link>
        </div>
        <Nav />
    </StyledHeader>
  )
}
