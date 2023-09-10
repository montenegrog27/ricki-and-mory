// export function validate(user) {
//   let errors = {};

//   if (!user.email) {
//     errors.email = "Enter tour email";
//   }
//   if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
//     errors.email = "Invalid email";
//   }
//   if (user.password.length < 6 || user.password.length > 10) {
//     errors.password = "Password must be 6 to 10 characters";
//   }
//   if (!user.password) {
//     errors.password = "Enter a password";
//   }

//   return errors;
// }
export function validate(form) {
  let errors = {};

  if (!form.email) {
    errors.email = "Ingresa tu email";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email)) {
    errors.email = "Email inválido";
  } else if (form.email.length > 35) {
    errors.email = "Email demasiado largo";
  } else {
    errors.email = "";
  }

  if (!form.password) {
    errors.password = "Password vacía";
  } else if (form.password.length < 6 || form.password.length > 10) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
  } else if (!/\d/.test(form.password)) {
    errors.password = "La contraseña debe tener al menos un número";
  } else {
    errors.password = "";
  }

  return errors;
}
