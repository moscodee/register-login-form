import Header from "../Header";
import registerImg from "../../assets/red-yellow-register-now-banner-label_686319-583.avif";
import CSS from "../CSS/Form.module.css";
import { useForm } from "react-hook-form";
import { useReducer, useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import RegisterReducer from "../Reducer/RegisterReducer/index.jsx";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [steps, setSteps] = useState(1);
  const [registerForm, dispatch] = useReducer(RegisterReducer, {});
  const [isGenarateCode, setIsGenarateCode] = useState(false);
  const [codeInputValue, setCodeInputValue] = useState(0);
  //   const [genarateCode, setGenarateCode] = useState(0);
  const usersDB = JSON.parse(localStorage.getItem("users")) || [];
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const user = {
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      phoneNumber: data.phoneNumber,
      email: data.email,
      password: data.password,
    };
    dispatch({ type: "ADD_USER", payload: user });
    setSteps(steps + 1);
  };
  const handleInputValue = (e) => {
    setCodeInputValue(parseInt(e.target.value));
  };
  const handleGenarateCode = (e) => {
    e.preventDefault();
    setIsGenarateCode(!isGenarateCode);
    // setGenarateCode(Math.floor(Math.random() * 900000 + 100000));
    dispatch({ type: "GENARATE_CODE" });
  };
  const handleSubmitCode = (e) => {
    e.preventDefault();
    if (genarateCode === codeInputValue) {
      usersDB.push(registerForm);
      handleSetToStorage("users", usersDB);
      setSteps(steps + 1);
      usersDB.map((item) => {
        navigate(`/panel/${item.username}`);
      });
    } else alert("Wrong Code");
  };
  console.log(registerForm);
  const handleSetToStorage = (item, arr) => {
    localStorage.setItem(item, JSON.stringify(arr));
  };
  return (
    <>
      <Header />
      <div className={CSS.main}>
        <img src={registerImg} />
        {steps === 1 && (
          <form className={CSS.form} onSubmit={handleSubmit(onSubmit)}>
            <h1>{steps === 3 ? "Done!" : `${steps} of 2`}</h1>
            <h1>Register</h1>
            <input
              type="text"
              placeholder="First name"
              {...register("firstName", { required: "First Name is required" })}
              aria-invalid={errors.firstName ? "true" : "true"}
            />

            <ErrorMessage
              errors={errors}
              name="firstName"
              render={({ message }) => (
                <span className={CSS.warning}>{message}</span>
              )}
            />
            <input
              type="text"
              placeholder="Last name"
              {...register("lastName", { required: "Last Name is required" })}
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            <ErrorMessage
              errors={errors}
              name="lastName"
              render={({ message }) => (
                <span className={CSS.warning}>{message}</span>
              )}
            />
            <input
              type="text"
              placeholder="useranme"
              {...register("username", { required: "username is required" })}
              aria-invalid={errors.username ? "true" : "true"}
            />

            <ErrorMessage
              errors={errors}
              name="username"
              render={({ message }) => (
                <span className={CSS.warning}>{message}</span>
              )}
            />
            <input
              type="number"
              placeholder="Phone Number"
              {...register("phoneNumber", {
                required: "Phone Number is required",
                pattern: {
                  value: /^(\+98|0)?9\d{9}$/i,
                  message: "Wrong Phone Numebr",
                },
              })}
              aria-invalid={errors.phoneNumber ? "true" : "false"}
            />
            <ErrorMessage
              errors={errors}
              name="phoneNumber"
              render={({ message }) => (
                <span className={CSS.warning}>{message}</span>
              )}
            />
            <input
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Wrong Email",
                },
              })}
              aria-invalid={errors.email ? "true" : "false"}
            />

            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <span className={CSS.warning}>{message}</span>
              )}
            />
            <input
              type="tel"
              placeholder="Password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 8,
                  message:
                    "At least 8 characters are required for the password.",
                },
              })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => (
                <span className={CSS.warning}>{message}</span>
              )}
            />
            <button type="submit" className={CSS.submit}>
              Submit
            </button>
          </form>
        )}
        {steps === 2 && (
          <form className={CSS.form}>
            <h1>{steps === 3 ? "Done!" : `${steps} of 2`}</h1>
            <h1>Register</h1>
            <input type="tel" placeholder="Code" onChange={handleInputValue} />
            {isGenarateCode === false && (
              <button className={CSS.submit} onClick={handleGenarateCode}>
                Genarate Code
              </button>
            )}
            {isGenarateCode === true && (
              <button className={CSS.submit} onClick={handleSubmitCode}>
                Submit
              </button>
            )}
          </form>
        )}
      </div>
      <p className={CSS.footer_tag}>Create by MosCode</p>
      <p className={CSS.footer_tag}>1403/01/19</p>
    </>
  );
};
export default Register;
