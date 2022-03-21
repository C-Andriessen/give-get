import { useState, useEffect } from "react";
import axios from "axios";

function Register() {
  return (
    <>
      <h1>Register here!</h1>

      <form action="http://localhost:5000/api/user/register" method="post">
        <input type="text" name="name" id="inputName" placeholder="Je naam" />
        <input type="text" name="email" id="inputEmail" placeholder="Je email" />

        <input type="password" name="password" id="inputPassword" placeholder="Je wachtwoord" />
        <input type="password" name="passwordRepeat" id="inputPasswordRepeat" placeholder="Herhaal je wachtwoord" />

        <input type="submit" value="Register!" />
      </form>
    </>
  );
}

export default Register;
