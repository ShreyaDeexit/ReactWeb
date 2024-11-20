import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  background-color: #007bff;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavLinkGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700; /* Gold hover effect */
    text-decoration: underline;
  }
`;

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <Logo>Pet Finder</Logo>
      <NavLinkGroup>
        <NavLink to="/">Pet List</NavLink>
        <NavLink to="/about">About Me</NavLink>
      </NavLinkGroup>
    </NavBarContainer>
  );
};

export default NavBar;
