// src/components/Producto.jsx
import Cardsss from './card'
const Producto = ({titulos,price}) => {//Destructuring
  const titulo = titulos;
  const pruebas = 'esto es una prueba mas'
  const color = {color:'black'}
  return (
    <>
      <Cardsss tipo={pruebas} style={color}/>
      <h1 className="titulo"> {titulo}</h1>
      <p>{price}</p>
      <p>Operaciones matemática Suma: {2 + 2}</p>
      <p>Operaciones matemática Resta: {2 - 2}</p>
      <p>Operaciones matemática Multiplicación: {2 * 2}</p>
      <p>Operaciones matemática División: {2 / 2}</p>
    </>
  );
};
export default Producto;
