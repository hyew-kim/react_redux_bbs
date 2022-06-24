import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  height: 70px;
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  min-width: 300px;
  align-items: center;
  justify-content: flex-end;
  > li {
    margin-right: 50px;
    &:last-child {
      margin-right: 0px;
    }
  }
`;

export default function Navbar() {
  return (
    <Container>
      <h1>PLACE FOR LOGO</h1>
      <nav className="navbar">
        <List>
          <li>
            <NavLink className="navbar-button" to="/">
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-button" to="/sign-in">
              Sign In{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-button" to="/sign-up">
              Sign Up{" "}
            </NavLink>
          </li>
        </List>
      </nav>
    </Container>
  );
}
