export default function revealElements(animado,barraprogreso){
    const d = document;
    let animar = d.querySelectorAll(animado);
    let barraProgreso = d.querySelectorAll(barraprogreso);

    d.addEventListener('scroll', () =>{
        let scrollTop = d.documentElement.scrollTop;
        for(var i = 0; i < animar.length; i++){
        let alturaAnimado = animar[i].offsetTop;
        if(alturaAnimado - 550 < scrollTop){
            animar[i].style.opacity = 1;
        }else{
            animar[i].style.opacity = 0;
        }
    }
    for(var i = 0; i < barraProgreso.length; i++){
        let alturaBarra = barraProgreso[i].offsetTop;
        if(alturaBarra + 850 < scrollTop){
            // barraProgreso[i].style.border = 'inherit';
            d.querySelector('.barra-progreso_html5').style.width = '85%';
            d.querySelector('.barra-progreso_html5').style.backgroundColor = 'orange';
            d.querySelector('.barra-progreso_css').style.width = '90%';
            d.querySelector('.barra-progreso_css').style.backgroundColor = 'steelblue';
            d.querySelector('.barra-progreso_sass').style.width = '70%';
            d.querySelector('.barra-progreso_sass').style.backgroundColor = 'violet';
            d.querySelector('.barra-progreso_js').style.width = '80%';
            d.querySelector('.barra-progreso_js').style.backgroundColor = 'yellow';
            d.querySelector('.barra-progreso_reactjs').style.width = '50%';
            d.querySelector('.barra-progreso_reactjs').style.backgroundColor = 'skyblue';
            d.querySelector('.barra-progreso_nodejs').style.width = '40%';
            d.querySelector('.barra-progreso_nodejs').style.backgroundColor = 'green';
        }else{
           barraProgreso[i].style.width = '0';
        }
    }
    })
}