import { renderHeader } from "./header.js";
import {
   findDatabaseUser,
   loginUser,
   showError,
   registerUser,
   getLoggedinUser,
} from "./exports.js";

const loginForm = document.querySelector(`#loginForm`);
const registrationForm = document.querySelector(`#registrationForm`);

const renderLoginHtml = () => {
   renderHeader();
   let loggedinUser = getLoggedinUser();

   loginForm.addEventListener(`submit`, async (e) => {
      e.preventDefault();

      if (loggedinUser) {
         alert(`Log out first`);
         return;
      }

      const formData = Object.fromEntries(new FormData(e.target).entries());
      // console.log(formData);

      const databaseUser = await findDatabaseUser(formData.email);
      // console.log(databaseUser);

      if (databaseUser) {
         databaseUser.password == formData.password
            ? loginUser(databaseUser)
            : showError(e, `Invalid password`);
      } else showError(e, `Invalid email`);
   });

   registrationForm.addEventListener(`submit`, async (e) => {
      e.preventDefault();

      if (loggedinUser) {
         alert(`Log out first`);
         return;
      }

      const formData = Object.fromEntries(new FormData(e.target).entries());
      // console.log(formData);

      let databaseUser = await findDatabaseUser(formData.email);

      let newUser = {
         name: formData.name,
         email: formData.email,
         password: formData.password,
      };

      if (databaseUser) {
         showError(e, `User with email ${formData.email} already exist!`);
      } else if (formData.password !== formData.passwordVerify) {
         showError(e, `Passwords don't match`);
      } else {
         registerUser(newUser);
      }
   });
};

renderLoginHtml();
