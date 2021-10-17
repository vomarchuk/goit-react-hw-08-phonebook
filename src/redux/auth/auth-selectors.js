const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getIsFechingCurrent = state => state.auth.isFechingCurrent;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsFechingCurrent,
};

export default authSelectors;
