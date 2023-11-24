let senhaAtual = 0;
let ultimasSenhas = [];
let senhaComum = 0;
let senhaPref = 0;
let guiche = 0; 
let lastSenha = '';


function atualizarSenha(){
    if(idSenha == 'C'){
        senhaAtual = 'C' + senhaComum;
    } else if (idSenha == 'P'){
        senhaAtual = 'P' + senhaPref;
    }
    for (let i = ultimasSenhas.length - 1, j = 1; i >= 0 && j <= 4; i--, j++) {
        const spanId = `ultimaSenha${j}`;
        const spanElement = document.getElementById(spanId);
        
        if (spanElement) {
            spanElement.textContent = ` ${ultimasSenhas[i]}`;
        }
    }
    guicheAtual = 'G' + guiche;
    document.getElementById("novaSenha").textContent = senhaAtual;
    document.getElementById("boxAtendimento").textContent = guicheAtual;
    document.getElementById("ultimaSenha1").textContent = lastSenha;
    lastSenha = senhaAtual + guicheAtual;
    ultimasSenhas.push(lastSenha);
}

function clickComumG1(){
    guiche = 1;
    senhaComum++;
    idSenha = 'C';
    atualizarSenha();
}

function clickComumG2(){
    guiche = 2;
    senhaComum++;
    idSenha = 'C';
    atualizarSenha();
}

function clickComumG3(){
    guiche = 3;
    senhaComum++;
    idSenha = 'C';
    atualizarSenha();
}

function clickPrefG1(){
    guiche = 1;
    senhaPref++;
    idSenha = 'P';
    atualizarSenha();
}

function clickPrefG2(){
    guiche = 2;
    senhaPref++;
    idSenha = 'P';
    atualizarSenha();
}

function clickPrefG3(){
    guiche = 3;
    senhaPref++;
    idSenha = 'P';
    atualizarSenha();
}



