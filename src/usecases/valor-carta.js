
/**
 * Es una función que regresa el valor de la carta.
 * @param {String} carta Ejemplo: 2H
 * @returns {Number} retorna el valor numerico de la carta
 */



export const valorCarta = ( carta ) => {
    
    if( !carta ) throw new Error('Es necesaria una carta como string');

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}