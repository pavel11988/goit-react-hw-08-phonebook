import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

function PublicRoute({ element }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const publicElement = isLoggedIn ? <Navigate to="/contacts" /> : element;
  return publicElement;
}

export default PublicRoute;
