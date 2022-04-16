import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

function PrivateRoute({ element }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const privateElement = isLoggedIn ? element : <Navigate to="/login" />;
  return privateElement;
}

export default PrivateRoute;
