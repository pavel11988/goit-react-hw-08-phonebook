// import { NavLink } from 'react-router-dom';
import { AuthNavLink } from './AuthNav.styled';

function AuthNav() {
  return (
    <div>
      <AuthNavLink to="/register">Registration</AuthNavLink>
      <AuthNavLink to="/login">Log In</AuthNavLink>
    </div>
  );
}

export default AuthNav;
