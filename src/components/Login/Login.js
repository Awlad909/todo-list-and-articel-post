import React, { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import TodoList from "../TodoList/TodoList";

const LoginTwo = () => {
  const adminUser = {
    email: "admin@gmail.com",
    password: "admin1234",
  };

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const login = (details) => {
    if(details.email == adminUser.email && details.password == adminUser.password){
        setUser({
            email:details.email,
            password:details.password
        });
    }else{
        console.log('Details do not Match! ')
    }
  };
  return (
    <div>
      {user.email != "" ? (
        <TodoList/>
      ) : (
        <LoginForm login={login} error={error} />
      )}
    </div>
  );
};

export default LoginTwo;
