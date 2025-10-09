// Script simplificado e comentado
const btn = document.getElementById('temaBtn');

// Aplica o tema: se isDark for true, adiciona a classe 'dark' ao body
function aplicarTema(isDark) {
  if (isDark) {
    document.body.classList.add('dark');
    btn.textContent = '🌙 Escuro'; // texto curto e claro
  } else {
    document.body.classList.remove('dark');
    btn.textContent = '🌤️ Claro';
  }
}

// Lê preferência salva no localStorage (se existir)
const temaSalvo = localStorage.getItem('theme');
// Se não houver salvo, usa a preferência do sistema (prefers-color-scheme)
const inicioEscuro = temaSalvo === 'dark' || (temaSalvo === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
aplicarTema(inicioEscuro);

// Ao clicar, alterna tema e salva a escolha
btn.addEventListener('click', () => {
  const agoraEscuro = document.body.classList.toggle('dark');
  aplicarTema(agoraEscuro);
  localStorage.setItem('theme', agoraEscuro ? 'dark' : 'light');
});
