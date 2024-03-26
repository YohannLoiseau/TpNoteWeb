import Utils from './../../../services/Utils.js';
import Provider from "./../../../services/Provider.js";

export default class TagContent {
    async render () {
        let request = Utils.parseRequestURL();
        let personnages = await Provider.fetchElem(); // Récupérer tous les personnages
        let tag = request.id; // Le tag est passé en tant qu'identifiant dans la requête

        // Filtrer les personnages qui ont le tag demandé
        let personnagesWithTag = personnages.filter(personnage => personnage.tags.includes(tag));

        // Afficher les informations des personnages avec ce tag
        let view = /*html*/`
            <h1>Personnages avec le tag : ${tag}</h1>
            <div class="personnages-list">
                ${ personnagesWithTag.map(personnage => 
                    /*html*/`
                    <div class="personnage-card">
                        <div class="card-body">
                            <h5 class="card-title text-primary">${personnage.name}</h5>
                            <p class="personnage-title">${personnage.title}</p>
                            <p class="personnage-tags">Tags : ${personnage.tags.join(', ')}</p>
                            <p class="personnage-description">${personnage.description}</p>
                        </div>
                    </div>
                    `)
                    .join('\n ')
                }
            </div>
            <p><a href="#">Revenir à l'accueil</a></p>
            <p><a href="#/tags">Retour à la liste des tags</a></p>
        `;
        return view;
    }
}
