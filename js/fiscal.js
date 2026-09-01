document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const tableBody = document.querySelector('.table tbody');

    chargerPaiements();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const nouveauPaiement = Object.fromEntries(data.entries());

        let paiements = JSON.parse(localStorage.getItem('paiements')) || [];
        paiements.push({...nouveauPaiement, date: new Date().toISOString().split('T')[0], statut: 'Payé'});
        localStorage.setItem('paiements', JSON.stringify(paiements));

        form.reset();
        chargerPaiements();
        alert('Paiement enregistré!');
    });

    function chargerPaiements() {
        let paiements = JSON.parse(localStorage.getItem('paiements')) || [];
        tableBody.innerHTML = '';
        paiements.forEach(p => {
            tableBody.innerHTML += `
                <tr>
                    <td>${p.numero_dossier}</td>
                    <td>${p.type_taxe}</td>
                    <td>${p.montant}</td>
                    <td>${p.date}</td>
                    <td><span class="badge bg-success">${p.statut}</span></td>
                </tr>
            `;
        });
    }
});