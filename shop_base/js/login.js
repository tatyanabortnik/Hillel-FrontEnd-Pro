import { renderHeader } from "./header.js";
import {findDatabaseUser,loginUser,showError,registerUser} from './exports.js';

// export const loader = document.querySelector(`#loader`);
const loginForm = document.querySelector(`#loginForm`);
const registrationForm = document.querySelector(`#registrationForm`);
// const email = document.querySelector(`input[type="email"]`);
// const password = document.querySelector(`input[type="password"]`);
// const error = document.querySelectorAll(`.error`);

//renderLoginHtml//
const renderLoginHtml = () => {
   renderHeader();

   loginForm.addEventListener(`submit`, async (e) => {
      e.preventDefault();

      const formData = Object.fromEntries(new FormData(e.target).entries());
      console.log(formData);

      const databaseUser = await findDatabaseUser(formData.email);
      console.log(databaseUser);

      if (databaseUser) {
         databaseUser.password == formData.password
            ? loginUser(databaseUser)
            : showError(e, `Invalid password`);
      } else showError(e, `Invalid email`);
   });

   registrationForm.addEventListener(`submit`, async (e) => {
      e.preventDefault();

      const formData = Object.fromEntries(new FormData(e.target).entries());
      console.log(formData);

      let databaseUser = await findDatabaseUser(formData.email);

      let newUser = {
         name: formData.name,
         email: formData.email,
         password: formData.password,
      };

      formData.password !== formData.passwordVerify &&
         showError(e, `Passwords don't match`);

      databaseUser
         ? showError(e, `User with email ${formData.email} already exist!`)
         : registerUser(newUser);
   });
};
//renderLoginHtml//

renderLoginHtml();