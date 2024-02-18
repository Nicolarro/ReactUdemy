import { useContext } from "react"; 
import UserContext from "./context/UserContext";

const HomePage = () => {

  const {user} = useContext(UserContext);

  console.log(user);

  return (
    <>
        <h1>HomePage</h1>
        <br />
        <h3>Hola, {JSON.stringify(user,null, 3)}!</h3>
    </>
  )
}

export default HomePage