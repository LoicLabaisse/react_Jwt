import React, { useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
  });

  const updateEmailField = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <h1>{JSON.stringify(form, 1, 1)}</h1>
      <form onSubmit={handleSubmit}>
        <input type='email' name='email' onChange={updateEmailField} />
        <input type='password' name='password' onChange={updateEmailField} />
        <input type='name' name='name' onChange={updateEmailField} />
        <input type='lastname' name='lastname' onChange={updateEmailField} />
        <input type='submit' value='Soumettre' />
      </form>
    </div>
  );
};

export default SignUp;
