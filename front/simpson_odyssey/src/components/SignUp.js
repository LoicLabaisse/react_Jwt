import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
  });
  const [error, setError] = useState({
    success: "",
    error: "",
  });
  const [formisSubmit, setFormisSubmit] = useState(false);

  const updateEmailField = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/signup", form)
      .then((response) => response.data)
      .then(
        (res) => setError({ ...error, success: res.flash, error: "" }),
        (err) => setError({ ...error, success: "", error: "Oups !" })
      );
    setFormisSubmit(true);
  };

  console.log(error);
  return (
    <div>
      {formisSubmit &&
        (error.success ? (
          <SnackbarContent
            style={{ backgroundColor: "green", width: "50%" }}
            message={error.success}
          />
        ) : (
          <SnackbarContent
            style={{ backgroundColor: "red", width: "50%" }}
            message={error.error}
          />
        ))}
      <form
        onSubmit={handleSubmit}
        style={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "350px",
        }}>
        <TextField
          type='email'
          name='email'
          label='email'
          onChange={updateEmailField}
          style={{ width: "50%" }}
        />
        <TextField
          type='password'
          name='password'
          label='password'
          onChange={updateEmailField}
          style={{ width: "50%" }}
        />
        <TextField
          type='name'
          name='name'
          label='name'
          onChange={updateEmailField}
          style={{ width: "50%" }}
        />
        <TextField
          type='lastname'
          name='lastname'
          label='lastname'
          onChange={updateEmailField}
          style={{ width: "50%" }}
        />
        <Button
          type='submit'
          style={{
            backgroundColor: "blue",
            display: "block",
            flexWrap: "wrap",
            width: "50%",
            color: "white",
          }}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
