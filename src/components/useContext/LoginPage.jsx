import { useContext } from "react";
import UserContext from "./context/UserContext";

const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <button className="btn btn-primary"
      onClick={() => setUser({id:2, name: "Steve", email: "nlarrosa@gmail.com"})}>Set User</button>
    </>
  );
};

export default LoginPage;
