document.addEventListener('DOMContentLoaded', () => {
    const autorisations = JSON.parse(localStorage.getItem('autorisations')) || [];
    const paiements = JSON.parse(localStorage.getItem('paiements')) || [];

    const totalRecettes = paiements.reduce((sum, p) => sum + parseFloat(p.montant || 0), 0);

    document.querySelector('.card.text-bg-success h2').innerText = totalRecettes.toLocaleString() + ' DH';
    document.querySelector('.card.text-bg-primary h2').innerText = autorisations.length + paiements.length;
    document.querySelector('.card.text-bg-info h2').innerText = autorisations.length;
});