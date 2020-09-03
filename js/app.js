import revealElements from './modules/revealelements.js';
import navBar from './modules/navbar.js'
const d = document;
const w = window;

d.addEventListener('DOMContentLoaded', (e) => {
    revealElements('.animado','.barra-progreso_animacion')
    navBar('.hamburguer', '.menu','.nav','.content','.menu a')
})
