// Formulario.js
import React from "react";

const Formulario = ({ numero, guardarNum, setNumero, binario, hexadecimal, octal }) => {
  return (
    <form
      className="row d-flex mb-4"
      onSubmit={(evt) => {
        evt.preventDefault();
        guardarNum(numero);
        setNumero(0);
      }}
    >
      <div className="card col-12">
        <h2>Ingresa datos</h2>
        <div className="col-12 p-3">
          <input
            required
            className=""
            placeholder="Ingresa tu numero..."
            type="number"
            value={numero}
            onChange={(evt) => {
              setNumero(parseInt(evt.target.value, 10));
            }}
          />
          <br />
          <br />
          <div className="row">
            <div className="col-4 text-center">
              <label className="form-label">Binario:</label>
              <input name="binario" 
              value={binario(numero)} 
              readOnly />
            </div>
            <div className="col-4 text-center">
              <label className="form-label">Hexadecimal:</label>
              <input name="hexadecimal" 
              value={hexadecimal(numero)} 
              readOnly />
            </div>
            <div className="col-4 text-center">
              <label className="form-label">Octal:</label>
              <input name="octal" 
              value={octal(numero)} 
              readOnly />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-end mb-4">
          <button className="btn btn-primary">Guardar Registro</button>
        </div>
      </div>
    </form>
  );
};

export default Formulario;
