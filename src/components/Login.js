import React, {  useState } from "react";
function Login() {
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
    //   const usertoken='';
       function handleSubmit(event){
        event.preventDefault();
         console.log(username);
         console.log(password);
         fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: `${username}`,
            password: `${password}`,
            // expiresInMins: 60, // optional
          }),
        })
          .then((res) => { return res.json()})
          .then(((data)=>{
           const  usertoken= data.token;
           console.log(`receivedTocken:${usertoken}`);
           localStorage.setItem("token", usertoken);
        //    console.log(data.token);
          }))
          .catch((console.error()));
      }

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
       <div className="login-card">
        <h2>Login</h2>
        <div className="login-field">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="login-input"
          />
        </div>
        <div className="login-field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="login-input"
          />
        </div>
        <button className="login-button" type=" submit ">Login</button>
      </div>
      </form>
    </div>
  );
}
export default Login;
