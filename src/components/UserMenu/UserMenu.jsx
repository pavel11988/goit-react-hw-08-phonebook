import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { authOperations } from 'redux/auth';
import defaultAvatar from './default-avatar.jpg';

import {
  UserContainer,
  UserAvatar,
  UserName,
  LogOutButton,
} from './UserMenu.styled';

function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <UserContainer>
      <UserAvatar src={avatar} alt="user-avatar" width="100px" />
      <UserName>Hello, {name}!</UserName>
      <LogOutButton
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        LogOut
      </LogOutButton>
    </UserContainer>
  );
}

export default UserMenu;
