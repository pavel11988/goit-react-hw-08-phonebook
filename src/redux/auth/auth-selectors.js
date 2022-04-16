const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getIsLoadingUser = state => state.auth.isLoadingUser;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsLoadingUser,
};

export default authSelectors;
