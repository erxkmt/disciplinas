document.getElementById('agenda-lista').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        alert('Detalhes do evento: ' + e.target.innerText);
    }
});
