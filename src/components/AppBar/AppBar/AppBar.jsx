import MainNav from '../MainNav/MainNav';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { NavBar } from './AppBar.styled';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoadingUser = useSelector(authSelectors.getIsLoadingUser);
  return (
    <NavBar>
      <MainNav />
      {isLoggedIn && !isLoadingUser ? <UserMenu /> : <AuthNav />}
    </NavBar>
  );
};

export default AppBar;
