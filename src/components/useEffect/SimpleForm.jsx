import { useEffect, useState } from "react";
import Message from "./Message";
/* import PropTypes from 'prop-types' */

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    userName: "nicolarro",
    email: "nicolarro20@gmail.com",
  });

  useEffect(() => {
    return () => {
      console.log("Name changed");
    };
  }, [formState.userName]);
  useEffect(() => {
    return () => {
      console.log("Email changed");
    };
  }, [formState.email]);

  const { userName, email } = formState;

  const handleValue = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const submitForm = () => {
    alert(
      `El form se ha submitido con el userName: ${userName} y la dirección de correo: ${email}`
    );
  };

  return (
    <>
      <div>Formulario Simple</div>
      <hr />
      <input
        type="text"
        className="form-control"
        name="userName"
        placeholder="userName"
        value={userName}
        onChange={handleValue}
      />
      <br />
      <input
        type="text"
        className="form-control"
        name="email"
        placeholder="email"
        value={email}
        onChange={handleValue}
      />
      <br />
      <button className="btn btn-primary" onClick={submitForm}>
        {" "}
        Submit
      </button>
      {userName == "nicolarro" && <Message/>}
      
    </>
  );
};

/* SimpleForm.propTypes = {
} */

export default SimpleForm;
