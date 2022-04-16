import styled from '@emotion/styled';

export const UserContainer = styled.div`
  display: flex;
  min-width: 230px;
  height: 90%;
  align-items: center;
  justify-content: space-between;
`;
export const UserAvatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;
export const UserName = styled.p`
  font-style: italic;
  font-size: 17px;
  color: white;
  margin-left: 15px;
`;
export const LogOutButton = styled.button`
  width: 80px;
  height: 40px;
  padding: 7px;
  border-radius: 7px;
  border-color: transparent;
  margin-left: 20px;
  color: black;
  background-color: orange;
  &:hover {
    background-color: #855700;
    color: white;
  }
`;
