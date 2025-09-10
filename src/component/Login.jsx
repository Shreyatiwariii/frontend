import React from "react";

export default function login() {
  return (
    <div>
      <form action="" method="POST">
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter Your Email" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter Your Password" />
        <br />
        <input type="button" value="Submit" />
      </form>
    </div>
  );
}
