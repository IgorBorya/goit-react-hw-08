import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import "./LoginForm.module.css";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label>Email</label>
      <input type="email" name="email" />
      <label>Password</label>
      <input type="password" name="password" />
      <button type="submit">Log In</button>
    </form>
  );
};
