import Utils from './../../../services/Utils.js';
import Provider from "./../../../services/Provider.js";

export default class PersonnageContent {
    async render () {
        let request = Utils.parseRequestURL();
        let personnages = await Provider.fetchElem(); // Récupérer tous les personnages
        let personnageId = request.id; // L'identifiant du personnage est passé dans la requête

        // Trouver le personnage avec l'identifiant demandé
        let personnage = personnages.find(p => p.id === personnageId);

        // Afficher les détails du personnage
        let view = /*html*/`
            <div class="personnage-details">
                <h1>Détails du personnage : ${personnage.name}</h1>
                <div class="personnage-card">
                    <div class="card-body">
                        <h5 class="card-title text-primary">${personnage.name}</h5>
                        <p class="personnage-title">${personnage.title}</p>
                        <img src="${personnage.icon}" alt="${personnage.name} Icon" class="personnage-icon">
                        <p class="personnage-description">${personnage.description}</p>
                        <p class="personnage-tags">Tags : ${personnage.tags.join(', ')}</p>
                        <p class="personnage-hp">HP : ${personnage.stats.hp}</p>
                        <p class="personnage-mp">MP : ${personnage.stats.mp}</p>
                        <p class="personnage-movespeed">Movespeed : ${personnage.stats.movespeed}</p>
                        <p class="personnage-armor">Armor : ${personnage.stats.armor}</p>
                        <p class="personnage-spellblock">Spellblock : ${personnage.stats.spellblock}</p>
                        <p class="personnage-attackrange">Attack Range : ${personnage.stats.attackrange}</p>
                        <p class="personnage-hpregen">HP Regen : ${personnage.stats.hpregen}</p>
                        <p class="personnage-mpregen">MP Regen : ${personnage.stats.mpregen}</p>
                        <p class="personnage-crit">Crit : ${personnage.stats.crit}</p>
                        <p class="personnage-attackdamage">Attack Damage : ${personnage.stats.attackdamage}</p>
                        <p class="personnage-attackspeed">Attack Speed : ${personnage.stats.attackspeed}</p>
                    </div>
                </div>
                <p><a href="#">Revenir à l'accueil</a></p>
                <p><a href="#/personnages">Retour à la liste des personnages</a></p>
            </div>
        `;
        return view;
    }
}
