// Instantiate API
import Provider from "./../../services/Provider.js";

export default class Home {

    async render() {
        let persoAll = await Provider.fetchElem(3)
        let html = persoAll.map(personnages =>
            /*html*/`
            <div class="personnage-card">
                <div class="card-body">
                    <h5 class="card-title text-primary">${personnages.name}</h5>
                    <p>${personnages.title}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <a href="#/pays/${personnages.key}" class="btn btn-sm btn-outline-secondary">Voir plus ...</a>
                        </div>
                        <small class="text-body-secondary">${personnages.key}</small>
                    </div>
                </div>
            </div>
            `
        ).join('\n ');
        
        return /*html*/`
            <div class="jumbotron">
                <h2 class="display-4">Choisissez votre</h2>
                <h1 class="display-1">CHAMPION</h1>
                <p class="lead">Avec plus de 140 champions disponibles, vous en trouverez </p>
                <p class="lead">forcément un qui vous corresponde. Maîtrisez-en un, ou</p>
                <p class="lead">maîtrisez-les tous.</p>
            </div>

            <h2>Les 3 premiers personnages :</h2>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                ${html}
            </div>
        `;
    }
}