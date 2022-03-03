function tocaSom(idBotao) {
    const elemento = document.querySelector(idBotao);
    
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido')
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach(tipoTecla => {
    const instrumento = tipoTecla.classList[1];

    tipoTecla.onclick = () => {
        const idSom = `#som_${instrumento}`;
        tocaSom(idSom);
    }    

    tipoTecla.onkeydown = (evento) => {

        console.log(evento);

        if (evento.code === 'Enter' || evento.code === 'Space' || 
            evento.code === 'NumpadEnter') {
            tipoTecla.classList.add('ativa');
        }
        
    }

    tipoTecla.onkeyup = () => {
        tipoTecla.classList.remove('ativa');
    }
});

