import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MainNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &.active {
    color: #4000ff;
    background-color: whitesmoke;
    padding: 10px;
    border-radius: 10px;
    font-size: 17px;
  }
`;
