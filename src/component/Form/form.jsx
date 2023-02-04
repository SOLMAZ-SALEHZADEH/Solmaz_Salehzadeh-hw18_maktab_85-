import React, { useState } from "react";
import Input from "./Input/Input";
import "./form.css";
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formPayload);
  };
  const [formPayload, setFormPayload] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    agreement: false,
  });
  return (
    <div className="FormContainer">
      <p className="title">question3</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Create Account</h2>
        <p>
          already have an account?<a href="#">sign in</a>
        </p>
        <div className="fullName">
          <Input
            placeholder="First name"
            width="w-93"
            onChange={(e) =>
              setFormPayload((prevState) => {
                return {
                  ...prevState,
                  firstName: e.target.value,
                };
              })
            }
          />
          <Input
            placeholder="Last name"
            width="w-93"
            onChange={(e) =>
              setFormPayload((prevState) => {
                return {
                  ...prevState,
                  lastName: e.target.value,
                };
              })
            }
          />
        </div>
        <Input
          placeholder="E-mail"
          width="w-97"
          onChange={(e) =>
            setFormPayload((prevState) => {
              return {
                ...prevState,
                Email: e.target.value,
              };
            })
          }
        />
        <button type="submit">
          <span>Sign up </span>
          <span>{`->`}</span>
        </button>
        <div className="agreementCheckbox">
          <input
            type="checkbox"
            onChange={(e) =>
              setFormPayload((prevState) => {
                return {
                  ...prevState,
                  agreement: !formPayload.agreement,
                };
              })
            }
          />
          <label>
            I have read and agree to the <span>Terms of Services</span>
          </label>
        </div>
      </form>
    </div>
  );
}

export default Form;
