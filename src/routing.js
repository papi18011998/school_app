import { displayForm,findAll,findApprenantById} from "./ui.js";
/**
 * Appelle la fonction correspondante à une URL donnée
 * @param {string} url 
 */
 export function applyRouting(url){
    let params;

    // Si l'URL ressemble à /12/details
    if (params = url.match(/^\/\d+$/)){
        params = url.substring(1)
        findApprenantById(params)
    }else if (params = url.match(/^\/liste$/)) {
        findAll()
    }else{
    displayForm()
    }
}
// export const onClickLink = (e)=>{
//     e.preventDefault()
//     const href = e.target.href
//     window.history.pushState({},'',href)
//     window.dispatchEvent(new PopStateEvent('popstate'));
// }
// window.addEventListener('popstate', (e) => {
//     console.log("Changement d'URL");
//     applyRouting(window.location.pathname);
// });