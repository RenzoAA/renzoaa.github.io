export default function navBar(hamburguer,menu,nav,content,menuLink){
    const d = document;
    const w = window;
    d.addEventListener('click', e =>{
        if(e.target.matches(hamburguer)||e.target.matches(`${hamburguer} *`)){
            d.querySelector(menu).classList.toggle('menu-active')
            d.querySelector(nav).classList.toggle('nav-active')
        }
        if(e.target.matches(menuLink)){
            d.querySelector(menu).classList.remove('menu-active')
            d.querySelector(nav).classList.remove('nav-active')
        }
    })
}