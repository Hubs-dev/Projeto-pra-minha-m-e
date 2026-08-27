const dressPreview = document.getElementById('dressPreview');
const previewLabel = document.getElementById('previewLabel');
const pedidoTexto = document.getElementById('pedidoTexto');
const btnEnviarPedido = document.getElementById('btnEnviarPedido');

const estado = {
  cor: '#e91e63',
  tamanho: 'M',
  estilo: 'Princesa'
};

const cores = {
  '#e91e63': 'Rosa Choque',
  '#9c27b0': 'Roxo',
  '#00bcd4': 'Turquesa',
  '#ff9800': 'Laranja',
  '#4caf50': 'Verde',
  '#f44336': 'Vermelho',
  '#2196f3': 'Azul',
  '#ffeb3b': 'Amarelo',
  '#795548': 'Marrom',
  '#000000': 'Preto',
  '#ffffff': 'Branco',
  '#e0e0e0': 'Prata'
};

function atualizarPreview() {

  if (dressPreview) {
    dressPreview.style.background = estado.cor;

    if (
      estado.cor === '#ffffff' ||
      estado.cor === '#ffeb3b' ||
      estado.cor === '#e0e0e0'
    ) {
      dressPreview.style.boxShadow =
        '0 10px 30px rgba(0,0,0,0.25), inset 0 0 0 2px #ccc';
    } else {
      dressPreview.style.boxShadow =
        '0 10px 30px rgba(0,0,0,0.15)';
    }
  }

  if (previewLabel) {
    previewLabel.textContent =
      `${estado.estilo} • ${cores[estado.cor]} • Tamanho ${estado.tamanho}`;
  }
}


// ESCOLHER COR
document.querySelectorAll('.color-btn').forEach(btn => {

  btn.addEventListener('click', () => {

    document.querySelectorAll('.color-btn')
      .forEach(b => b.classList.remove('active'));

    btn.classList.add('active');

    estado.cor = btn.dataset.color;

    atualizarPreview();
  });

});


// ESCOLHER TAMANHO
document.querySelectorAll('.size-btn').forEach(btn => {

  btn.addEventListener('click', () => {

    document.querySelectorAll('.size-btn')
      .forEach(b => b.classList.remove('active'));

    btn.classList.add('active');

    estado.tamanho = btn.dataset.size;

    atualizarPreview();
  });

});


// ESCOLHER ESTILO
document.querySelectorAll('.style-btn').forEach(btn => {

  btn.addEventListener('click', () => {

    document.querySelectorAll('.style-btn')
      .forEach(b => b.classList.remove('active'));

    btn.classList.add('active');

    estado.estilo = btn.dataset.style;

    atualizarPreview();
  });

});


// ENVIAR PARA O WHATSAPP
if (btnEnviarPedido) {

  btnEnviarPedido.addEventListener('click', () => {

    const observacao = pedidoTexto
      ? pedidoTexto.value.trim()
      : '';

    const mensagem =
`Olá! Vim pelo site da Aquarela Fantasias.

Quero personalizar um vestido:

👗 Estilo: ${estado.estilo}
🎨 Cor: ${cores[estado.cor]}
📏 Tamanho: ${estado.tamanho}

📝 Observações:
${observacao || 'Nenhuma observação.'}

Gostaria de confirmar a disponibilidade e o valor.`;

    const mensagemCodificada = encodeURIComponent(mensagem);

    const numeroWhatsApp = '553197521743';

    window.location.href =
      `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

  });

}


// PREVISUALIZAÇÃO INICIAL
atualizarPreview();

document
  .querySelector('.color-btn')
  ?.classList.add('active');

document
  .querySelector('.size-btn[data-size="M"]')
  ?.classList.add('active');

document
  .querySelector('.style-btn')
  ?.classList.add('active');