const categorias = {
    'Tecnologia': ['COMPUTADOR', 'PROGRAMACAO', 'JAVASCRIPT', 'PYTHON', 'PHP'],
    'Hardware': ['TECLADO', 'MONITOR', 'MOUSE', 'PLACA', 'PROCESSADOR'],
    'Linguagens': ['JAVA', 'RUBY', 'HTML', 'CSS', 'SWIFT']
};

let categoriaSelecionada = document.getElementById ? (document.getElementById('categoria') ? document.getElementById('categoria').value : 'Tecnologia') : 'Tecnologia';
let palavra = '';
let exibida = [];
let vidas = 6;
let usadas = [];

function escolherPalavra() {
    const lista = categorias[categoriaSelecionada] || [];
    if (lista.length === 0) return '';
    return lista[Math.floor(Math.random() * lista.length)];
}

function atualizar() {
    document.getElementById('palavra').innerText = exibida.join(' ');
    document.getElementById('vidas').innerText = 'Vidas: ' + vidas;
    document.getElementById('usadas').innerText = 'Usadas: ' + usadas.join(', ');
    const elCat = document.getElementById('categoriaAtual');
    if (elCat) elCat.innerText = 'Categoria: ' + categoriaSelecionada;
}

function reiniciar() {
    const sel = document.getElementById('categoria');
    categoriaSelecionada = sel ? sel.value : categoriaSelecionada;
    palavra = escolherPalavra();
    exibida = Array(palavra.length).fill('_');
    vidas = 6;
    usadas = [];
    atualizar();
}

function tentar() {
    const input = document.getElementById('letra');
    if (!input) return;
    const l = input.value.toUpperCase();
    if (!l || usadas.includes(l)) { input.value = ''; return; }
    usadas.push(l);
    let achou = false;
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === l) { exibida[i] = l; achou = true; }
    }
    if (!achou) vidas--;
    atualizar();
    if (exibida.join('') === palavra) alert('Você venceu!');
    if (vidas <= 0) alert('Game Over! Palavra: ' + palavra);
    input.value = '';
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', reiniciar);
} else {
    reiniciar();
}