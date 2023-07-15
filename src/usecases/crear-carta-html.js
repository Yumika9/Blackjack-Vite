/**
 * 
 * @param {string} carta 
 * @returns {HTMLImageElement} retorna una imagen HTML de la carta.
 */


export const crearCartaHtml = ( carta  ) => {

    const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        return carta;


}