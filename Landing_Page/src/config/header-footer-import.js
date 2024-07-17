async function loadContent(url, elementId) {
    const response = await fetch(url);
    const content = await response.text();
    document.getElementById(elementId).innerHTML = content;
    return content;
}

Promise.all([
    loadContent('/src/header/header.html', 'header-container'),
    loadContent('/src/footer/footer.html', 'footer-container')
]).then(() => {
    

    const currentPath = window.location.pathname;

    const navLinks = {
        '/index.html': 'nav-home',
        '/src/jogos/jogos.html': 'nav-jogos',
        '/src/sobre/sobre.html': 'nav-sobre',
        '/src/contato/contato.html': 'nav-contato'
    };

    let isLinkFound = false;

    for (const path in navLinks) {
        if (currentPath.endsWith(path)) {
            const navLink = document.getElementById(navLinks[path]);
            if (navLink) {
                navLink.classList.add('active');
                isLinkFound = true;
            }
            break;
        }
    }

    if (!isLinkFound) {
        console.warn('No matching navigation link found for the current URL.');
    }
}).catch(error => {
    console.error('Error loading content:', error);
});


