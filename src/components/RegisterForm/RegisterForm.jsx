import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import "./RegisterForm.module.css";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <label>Username</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Password</label>
      <input type="password" name="password" />
      <button type="submit">Register</button>
    </form>
  );
};
