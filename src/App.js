import logo from './logo.svg';
import './App.css';
import React , {useState} from "react";

function App() {
const data = {
  FirstName: "",
  LastName: "",
  Email: ""
}
  const [values, setValues] = useState(data);
  const [valid, setValid] = useState(false);

  const firstinput = (event) => {
    setValues({...values, FirstName: event.target.value})
  }
  const lastinput = (event) => {
    setValues({...values, LastName: event.target.value})
  }
  const emailinput = (event) => {
    setValues({...values, Email: event.target.value})
  }
const [submitted, setSubmitted] = useState(false);

const submitinput =(event) => {
  event.preventDefault();
  if(values.FirstName && values.LastName && values.Email){
    setValid(true);
  }
  setSubmitted(true)
}
  return (
    <div className="form-container">
    <form className="register-form" onSubmit={submitinput}>
    {submitted && valid ? <div className="success-message">Success! Thank you for registering.</div> : null}
    <input
    disabled={submitted}
    value={values.FirstName}
    type="text"
    className="form-field"
    placeholder="Write your first name"
    onChange={firstinput}
    name="FirstName" />
    {submitted &&  !values.FirstName ? <span>Please enter your first name</span> : null}
    <input
    disabled={submitted}
    value={values.LastName}
    type="text"
    className="form-field"
    placeholder="Write your last name"
    onChange={lastinput}
    name="LastName" />
    {submitted && !values.LastName ? <span>Please enter your last name</span> : null}
    <input
    disabled={submitted}
    value={values.Email}
    className="form-field"
    placeholder="Write your email id"
    onChange={emailinput}
    type= "email"
    name="Email" />
    {submitted && !values.Email ? <span>Please enter your email id</span> : null}
    <button type="submit">Register</button>
    </form>
    </div>

  );
}

export default App;
