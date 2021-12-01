import React, { useState, useEffect } from "react";
//validation
import { validation } from "../validation/validation";
//React toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//css
import styles from "./signup.module.css";
//router
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [error, setError] = useState({});
  const [touch, setTouched] = useState({});

  const notify = (type, text) => {
    if (type === "success") {
      toast.success(text);
    } else {
      toast.error(text);
    }
  };

  useEffect(() => {
    setError(validation(data));
  }, [data]);

  const changeHandler = (event) => {
    if ([event.target.name] === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const focusHandler = (event) => {
    setTouched({ ...touch, [event.target.name]: true });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (!Object.keys(error).length) {
      notify("success", "Welldone! Login Successfully");
    } else {
      notify("error", "wrong data!");
      setTouched({
        ...touch,
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>Sign Up</h2>
        <div className={styles.formField}>
          <label className={styles.labelForm}>Email</label>
          <input
            className={
              error.email && touch.email ? styles.uncompleted : styles.formInput
            }
            type="text"
            name="email"
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {error.email && touch.email && <span> {error.email} </span>}
        </div>
        <div className={styles.formField}>
          <label className={styles.labelForm}>Password</label>
          <input
            className={
              error.password && touch.password
                ? styles.uncompleted
                : styles.formInput
            }
            type="password"
            name="password"
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {error.password && touch.password && <span> {error.password} </span>}
        </div>
        <div className={styles.formButtons}>
          <Link to="/SignUp">Sign Up</Link>
          <button type="submit">Login</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
