import { useState } from "react";
import { useCustom } from "./components/helpers";

const HooksApp = () => {

const { count, handleAdd, handleMinus } = useCustom();
const [contador, setContador] = useState(0);

const handleContador = () => {
    setContador(contador + 1)
}
  return (
    <>
      <h1>HooksApp</h1>
      <hr />
      <h2>Cantidad Hook Custom: {count}</h2>
      <h2>Counter Hook Normal: {contador}</h2>
      <br />
      <button className="btn btn-primary" onClick={() => handleAdd(10)}>
        Agregar Custom
      </button>
      <button className="btn btn-primary" onClick={handleMinus}>
        Restar Custom
      </button>
      <button className="btn btn-primary" onClick={handleContador}>Agregar normal</button>
    </>
  );
};

export default HooksApp;
