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
            <h2>Les 3 premiers personnages :</h2>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                ${html}
            </div>
        `;
    }
}