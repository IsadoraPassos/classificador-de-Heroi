let herois = [
    ["Gaia", 800],
    ["Atlas", 1500],
    ["Cronos", 20000],
    ["Nix", 10000]
];

/**
 * Classifica o heroi com base na sua experiencia 
 */
function classificarHeroi(heroi){
    let nivel = "";   
    if(heroi[1] <= 1000)
        nivel = 'Ferro';
    else if(heroi[1] > 1000 && heroi[1] <= 2000)
        nivel = 'Bronze';
     else if(heroi[1] > 2000 && heroi[1] <= 5000)
        nivel = 'Prata';
    else if(heroi[1] > 5000 && heroi[1] <= 7000)
        nivel = 'Ouro';
    else if(heroi[1] > 7000 && heroi[1] <= 8000)
        nivel = 'Platina';
    else if(heroi[1] > 8000 && heroi[1] <= 9000)
        nivel = 'Ascendente';
    else if(heroi[1] > 9000 && heroi[1] <= 10000)
        nivel = 'Imortal';
    else if(heroi[1] > 10000)
        nivel = 'Radiante';
    return nivel;
}

/**
 * Exibi o nome e a classificação do heroi
 */
function exibirMensagem(heroi, nivel){
    console.log('O Herói de nome ' + heroi[0] + ' está no nível de ' + nivel);
}

//Exibi a mensagem para todos os herois
herois.forEach(heroi => {
    let nivel = classificarHeroi(heroi);
    
    exibirMensagem(heroi, nivel);
});

//Adiciona mais um heroi e exibi a mensagem para ele 
let i = herois.push(["Hipnos", 8750]);

let nivel = classificarHeroi(herois[i-1]);
    
exibirMensagem(herois[i-1], nivel);