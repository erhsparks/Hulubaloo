const checkForLogin = () => {
  if (window.currentUser) {
    return {
      session: {
        currentUser: window.currentUser
      }
    };
  } else return {};
};

export default checkForLogin;
