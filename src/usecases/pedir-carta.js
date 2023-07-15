
/**
 * Esta función regresa una nueva carta.
 * @param {Array<String>} deck Ejemplo: [2C, 2A, 2H]
 * @returns {String} regresa  la  carta del deck.
 */

export const pedirCarta = ( deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}