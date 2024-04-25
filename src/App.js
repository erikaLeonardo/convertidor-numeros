// App.js
import React, { useState } from "react";
import Formulario from "./components/Formulario";

function App() {
  const [numero, setNumero] = useState(0);
  const [listaguadado, setListaGuardado] = useState([]);
  const [contadorID, setcontadorID] = useState(0);

  const binario = (numero) => {
    return numero.toString(2);
  };

  const hexadecimal = (numero) => {
    return numero.toString(16);
  };

  const octal = (numero) => {
    return numero.toString(8);
  };

  const guardarNum = (task) => {
    let numeroG = {
      id: contadorID,
      numero: task,
      status: true,
    };

    setcontadorID(contadorID + 1);

    setListaGuardado([...listaguadado, numeroG]);
  };

  return (
    <div className="container-fluid mt-5 d-flex flex-column align-items-center">
      <Formulario
        numero={numero}
        guardarNum={guardarNum}
        setNumero={setNumero}
        binario={binario}
        hexadecimal={hexadecimal}
        octal={octal}
      />
      <div className="card col-12 mt-4">
        <h2>Historial</h2>
        <div>
          {listaguadado.map(({ numero, id }) => (
            <div className="row" key={id}>
              <div className="col-3">
                <p>Número: {numero}</p>
              </div>
              <div className="col-3">
                <p>Binario: {binario(numero)}</p>
              </div>
              <div className="col-3">
                <p>Hexadecimal: {hexadecimal(numero)}</p>
              </div>
              <div className="col-3">
                <p>Octal: {octal(numero)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
