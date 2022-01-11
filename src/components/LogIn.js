const logoutUser = async () => {
  await logout();
  setCurrentUser(null);
};
