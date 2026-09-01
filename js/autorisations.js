document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formAutorisation');
    const tableBody = document.getElementById('tableAutorisations');

    // Charger les données au démarrage
    chargerAutorisations();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const nouvelleAutorisation = Object.fromEntries(data.entries());

        let autorisations = JSON.parse(localStorage.getItem('autorisations')) || [];
        autorisations.push(nouvelleAutorisation);
        localStorage.setItem('autorisations', JSON.stringify(autorisations));

        form.reset();
        chargerAutorisations();
        alert('Autorisation enregistrée avec succès!');
    });

    function chargerAutorisations() {
        let autorisations = JSON.parse(localStorage.getItem('autorisations')) || [];
        tableBody.innerHTML = '';
        autorisations.forEach((a, index) => {
            let badgeColor = a.statut === 'Approuvé'? 'success' : a.statut === 'Rejeté'? 'danger' : 'warning';
            tableBody.innerHTML += `
                <tr>
                    <td>${a.numero_dossier}</td>
                    <td>${a.nom_contribuable}</td>
                    <td>${a.type_autorisation}</td>
                    <td>${a.date_depot}</td>
                    <td>${a.montant}</td>
                    <td><span class="badge bg-${badgeColor}">${a.statut}</span></td>
                    <td>
                        <button class="btn btn-sm btn-danger" onclick="supprimerAutorisation(${index})">Supprimer</button>
                    </td>
                </tr>
            `;
        });
    }
});

function supprimerAutorisation(index) {
    let autorisations = JSON.parse(localStorage.getItem('autorisations')) || [];
    autorisations.splice(index, 1);
    localStorage.setItem('autorisations', JSON.stringify(autorisations));
    location.reload();
}