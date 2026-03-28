const body = document.body;
const btn = document.getElementById('theme-toggle');
const icon = btn.querySelector('.theme-icon');
const label = btn.querySelector('.theme-label');

const currentTheme = localStorage.getItem('netflix-theme') || 'dark';
body.setAttribute('data-theme', currentTheme);
const wantsLight = currentTheme === 'dark';
btn.setAttribute('aria-pressed', wantsLight ? 'false' : 'true');
btn.setAttribute('aria-label', wantsLight ? 'Ativar modo claro' : 'Ativar modo escuro');
icon.textContent = wantsLight ? '🌙' : '☀️';
label.textContent = wantsLight ? 'Modo claro' : 'Modo escuro';

btn.addEventListener('click', () => {
    const nextTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', nextTheme);

    const isLight = nextTheme === 'light';
    btn.setAttribute('aria-pressed', isLight ? 'true' : 'false');
    btn.setAttribute('aria-label', isLight ? 'Ativar modo escuro' : 'Ativar modo claro');
    icon.textContent = isLight ? '☀️' : '🌙';
    label.textContent = isLight ? 'Modo claro' : 'Modo escuro';

    localStorage.setItem('netflix-theme', nextTheme);
});

// Armazenar perfil selecionado antes de navegar
document.querySelectorAll('.profile').forEach(profileLink => {
    profileLink.addEventListener('click', (e) => {
        const figure = profileLink.querySelector('figure');
        const img = figure.querySelector('img');
        const figcaption = figure.querySelector('figcaption');

        const perfilNome = figcaption?.textContent || 'Sem nome';
        const perfilImagem = img?.src || '';

        localStorage.setItem('perfilAtivoNome', perfilNome);
        localStorage.setItem('perfilAtivoImagem', perfilImagem);

        console.log('Perfil salvo:', perfilNome, perfilImagem);
    });
});