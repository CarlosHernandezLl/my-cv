import { useEffect, useState } from 'react';
import './Contador.css';
/*
const Contador = () => {
    const [contador, setContador] = useState(0);

   /* useEffect(()=>{
        console.log('Se renderizó el componente');
    }, [contador]);

    useEffect(() => {
        setTimeout(() => {
            setContador((count) => count + 1);
        }, 1000);
      },[]);

    return (
        <div className='prueba'>
            <h2>Contador</h2>
            <h3>{contador}</h3>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => setContador(contador - 1)}>Decrementar</button>
        </div>
    );
}
*/

const Hora = () => {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        const interval =setInterval(()=>{
            setHora(new Date().toLocaleTimeString());
        }, 1000);
    },[]);

    //Para limpiar el bufer de memoria
    //return ()=> clearInterval(interval);

    return(
        <div className='reloj'>
            <h3>{hora}</h3>
        </div>
    );

}

export default Hora;

