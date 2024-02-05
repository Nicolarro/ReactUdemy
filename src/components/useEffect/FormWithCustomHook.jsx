import Message from './Message';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
    const {formState, handleValue, onResetForm} = useForm({
      userName: "",
      email: "",
      password:  "",
    });
  
    const { userName, email, password } = formState;


    const submitForm = (event) => {
        event.preventDefault();
      alert(
        `El form se ha submitido con el userName: ${userName}`
      );
    };


    return (
      <>
        <div>Form With Custom Hook</div>
        <hr />
        <input
          type="text"
          className="form-control"
          name="email"
          placeholder="email"
          value={email}
          onChange={handleValue}
        />
        <input
          type="text"
          className="form-control"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleValue}
        />
        <button className="btn btn-primary" onClick={submitForm}>
          {" "}
          Submit
        </button>
        <button className="btn btn-primary" onClick={onResetForm}>
          {" "}
          Reset
        </button>
        {userName == "nicolarro" && <Message/>}
        
      </>
    );
  };