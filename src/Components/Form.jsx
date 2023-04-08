import React, { useState } from 'react';

function Form() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const [errores, setErrores] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errores = validarForm();
    if (Object.keys(errores).length === 0) {
      // Aquí podrías hacer alguna acción con los datos del formulario, como enviarlos a un servidor

      setMostrarMensaje(true);
      setNombre('');
      setEmail('');
      setMensaje('');
    } else {
      setErrores(errores);
    }
  };

  const validarForm = () => {
    const errores = {};
    if (nombre.trim().length <= 5) {
      errores.nombre = 'El nombre debe tener más de 5 caracteres';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errores.email = 'El email debe contener el siguiente formato valido: "example@gmail.com" ';
    }
    return errores;
  };

  return (
    <div>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          {errores.nombre && <p>{errores.nombre}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errores.email && <p>{errores.email}</p>}
        </div>
        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      {mostrarMensaje && <p>¡Enviado con éxito!</p>}
    </div>
  );
}

export default Form;
