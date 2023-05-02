import React, { useState } from 'react';

function Carrito() {
  const [abierto, setAbierto] = useState(false);

  const toggleCarrito = () => {
    setAbierto(!abierto);
  };

  return (
    <div>
      <button onClick={toggleCarrito}>
        {abierto ? 'Cerrar Carrito' : 'Abrir Carrito'}
      </button>
      {abierto && (
        <div>
            <ul>
                <li>Hola</li>
            </ul>
        </div>
      )}
    </div>
  );
}

export default Carrito;
