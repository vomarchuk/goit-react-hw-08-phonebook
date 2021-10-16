const getIsLoggedId = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;

const authSelectors = {
  getIsLoggedId,
  getUserName,
};

export default authSelectors;
