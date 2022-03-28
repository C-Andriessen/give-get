function Login() {
  return (
    <>
      <h1>Login here!</h1>

      <form action="http://localhost:5000/api/user/login" method="post">
        <input type="text" name="email" id="inputEmail" placeholder="Je email" />
        <input type="password" name="password" id="inputPassword" placeholder="Je wachtwoord" />

        <input type="submit" value="Register!" />
      </form>
    </>
  );
}

export default Login;
