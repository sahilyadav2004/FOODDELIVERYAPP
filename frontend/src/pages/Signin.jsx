import React from "react";

const Signin = () => {
  return (
    <div className="mx-auto my-5 flex flex-col  justify-center border-black rounded-md ">
      <form>
        <div className="m-1 p-1  text-center items-center">
          <label>Username:</label>
          <input 
            type="text"
            name="username"
            placeholder="Enter the username"
            required
          />
        </div>
        <br />
        <div className="m-1 p-1 text-center items-center">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter the password"
            required
          />
        </div>
        <br />
        <div className="m-1 p-1  text-center items-center">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="items-center  m-1 p-1 w-6 ">
          <button className="border-black m-2 bg-slate-400 " type="submit">Signin</button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
