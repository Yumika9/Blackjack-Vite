import { pedirCarta, valorCarta, crearCartaHtml } from "./";

/**
 * 
 * @param {Number} puntosMinimos  puntos minimos del jugador.
 * @param {Array<String>} deck 
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos. 
 * @param {HTMLElement} divCartasPc elemento HTML para mostrar las cartas.
 */

export const turnoComputadora = ( puntosMinimos, deck, puntosHTML, divCartasPc) => {

    if( !puntosMinimos ) throw new Error('Son necesarios los puntosMinimos');
    if( !puntosHTML) throw new buildErrorMessage('Son necesarios los elementos para mostrar los puntos');
    let puntosPc = 0;

    do {
        const carta = pedirCarta( deck );

        puntosPc = puntosPc + valorCarta( carta );
        puntosHTML.innerText = puntosPc;
        const imgCarta = crearCartaHtml( carta );
        divCartasPc.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosPc < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosPc === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosPc > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}