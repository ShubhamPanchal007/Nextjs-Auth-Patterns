import React from "react";
import { signIn } from "next-auth/react";
function Login() {
  return (
    <div>
      <a
        onClick={(e) => {
          e.preventDefault();
          signIn("google");
        }}
      >
       <button>
       SignIn with google
       </button> 
      </a>
    </div>
  );
}

export default Login;
