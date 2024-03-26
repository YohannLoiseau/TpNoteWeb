import LazyLoad from "../../../services/LazyLoad.js";
import Provider from "../../../services/Provider.js";

export default class PersonnagesAll {

    async render () {
        let personnages = await Provider.fetchElem();

        let view =  /*html*/`
            <h2>Voici tous les personnages :</h2>
            <div class="personnages-list">
                ${ personnages.map(personnage => 
                    /*html*/`
                    <div class="personnage-card lazy-load">
                        <div class="card-body">
                            <h3 class="card-title text-primary">${personnage.name}</h3>
                            <p class="personnage-title">${personnage.title}</p>
                            <img data-src="${personnage.icon}" alt="${personnage.name}" class="personnage-icon">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="#/personnage/${personnage.id}" class="btn btn-sm xbtn-outline-secondary">Voir plus ...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    `)
                    .join('\n ')
                }
            </div>
        `;
        return view;
    }

    async after_render() {
        LazyLoad.initLazyLoad('lazy-load');
    }

}
