const palavras = ['COMPUTADOR', 'TECLADO', 'MONITOR'];
const palavra = palavras[Math.floor(Math.random() * palavras.length)];
let exibida = Array(palavra.length).fill('_');
let vidas = 6;
let usadas = [];
function atualizar() {
    document.getElementById('palavra').innerText = exibida.join(' ');
    document.getElementById('vidas').innerText = 'Vidas: ' + vidas;
    document.getElementById('usadas').innerText = 'Usadas: ' + usadas.join(', ');
}
function tentar() {
    const l = document.getElementById('letra').value.toUpperCase();
    if (!l || usadas.includes(l)) return;
    usadas.push(l);
    let achou = false;
    for (let i = 0; i < palavra.length; i++) { if (palavra[i] === l) { exibida[i] = l; achou = true; } }
    if (!achou) vidas--;
    atualizar();
    if (exibida.join('') === palavra) alert('Você venceu!');
    if (vidas <= 0) alert('Game Over! Palavra: ' + palavra);
    document.getElementById('letra').value = '';
}
atualizar();