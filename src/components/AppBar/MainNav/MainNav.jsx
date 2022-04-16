import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import { MainNavLink } from './MainNav.styled';

const AppNav = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <MainNavLink to="/">Home</MainNavLink>

      {isLoggedIn && <MainNavLink to="/contacts">Contacts</MainNavLink>}
    </nav>
  );
};

export default AppNav;
