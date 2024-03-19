import Provider from "../../services/Provider.js";

export default class TagsAll {

    async render () {
        let personnages = await Provider.fetchElem(50); // Supposons que vous récupériez les personnages ici
        let tags = []; // Initialise un tableau vide pour stocker tous les tags

        // Parcours tous les personnages pour extraire les tags
        personnages.forEach(personnage => {
            tags.push(...personnage.tags); // Ajoute tous les tags du personnage au tableau
        });

        // Supprime les doublons des tags en les convertissant en un ensemble (Set) puis en les reconvertissant en tableau
        tags = [...new Set(tags)];

        let view =  /*html*/`
            <h2>Voici tous les tags :</h2>
            <div class="tags-list">
                ${ tags.map(tag => 
                    /*html*/`
                    <div class="tag-item">
                        <p>${tag}</p>
                    </div>
                    `
                    ).join('\n ')
                }
            </div>
        `;
        return view;
    }

}
