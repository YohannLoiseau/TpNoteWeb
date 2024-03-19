import Home from './views/pages/Home.js';
import Error404 from './views/pages/Error404.js';
// import TagsAll from './views/pages/tags/TagsAll.js';

import Utils from './services/Utils.js';
// console.log('yo');
const routes = {
    '/'                 : Home
    // , '/personnages'    : PersonnagesAll
    // , '/tags'           : TagsAll
    // , '/personnage/:id' : PersonnagesContent
    // , '/tag/:id'        : TagContent
};

console.log(routes);

const router = async () => {
    const content = null || document.querySelector('#content');
    let request = Utils.parseRequestURL()
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    
    let page = routes[parsedURL] ? new routes[parsedURL] : Error404

    
    content.innerHTML = await page.render();
}

// Listen on hash change:
window.addEventListener('hashchange', router);
// Listen on page load:
window.addEventListener('load', router);