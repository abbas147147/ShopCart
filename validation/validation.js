const validation = (data) => {
  const error = {};

  if (!data.name.trim()) {
    error.name = "Please enter userName";
  } else {
    delete error.name;
  }
  if (!data.email) {
    error.email = "Email Required";
  } else if (!/\S+@\S+\.+\S/.test(data.email)) {
    error.email = "Email is not Valid";
  } else {
    delete error.email;
  }
  if (!data.password) {
    error.password = "Enter your Password";
  } else if (data.password.length < 6) {
    error.password = "Password must be bigger than 6 Digits";
  } else {
    delete error.email;
  }
  if (!data.confirmPassword) {
    error.confirmPassword = "Enter the Same Password";
  } else if (data.confirmPassword !== data.password) {
    error.confirmPassword = "your password is not match !";
  } else {
    delete error.confirmPassword;
  }
  if (!data.isAccepted) {
    error.isAccepted = "Please Accept our regulations";
  } else {
    delete error.isAccepted;
  }
  return error;
};
export { validation };
