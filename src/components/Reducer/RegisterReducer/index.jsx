const RegisterReducer = (registerForm, action) => {
  switch (action.type) {
    case "ADD_USER":
      return action.payload;
    case "GENARATE_CODE":
      return Math.floor(Math.random() * 900000 + 100000);
  }
};
export default RegisterReducer;
