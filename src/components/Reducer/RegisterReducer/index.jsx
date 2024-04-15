const RegisterReducer = (registerForm, action) => {
  switch (action.type) {
    case "ADD_USER":
      return action.payload;
  }
};
export default RegisterReducer;
