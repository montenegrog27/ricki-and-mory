import { useState } from "react";
import style from "./Form.module.css";
import { validate } from "../../utils/validation";

function Form({ login }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    event.preventDefault();
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
    validate({ ...form, [property]: value }, setErrors, errors);
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("que onda");
    login(form);
  }

  return (
    <form className={style.form} type="submit">
      <div>
        <label htmlFor="email" className={style.labelEmail}>
          {" "}
          Email:{" "}
        </label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={errors.email ? style.errors : style.succes}
        />
        <span className={style.spanEmail}>{errors.email}</span>
      </div>
      <div>
        <label htmlFor="password" className={style.labelPassword}>
          {" "}
          Password:{" "}
        </label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className={style.inputPass}
        />
        <span className={style.spanPassword}>{errors.password}</span>
      </div>
      <button className={style.login} onClick={submitHandler}>
        LOGIN
      </button>
    </form>
  );
}

export default Form;
