/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("// CONFIGURATION API\nconst API_KEY=\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE4OTQ2NiwiZXhwIjoxOTU1NzY1NDY2fQ.i4DceoJibTd6fEnsdgx8FnbC-qyRI1st6cylAwWVfa0\"\n// RECCEUIL DES DONNEES UTILISATEURS\nconst APPRENANTS =[]\nconst prenomInput = document.querySelector(\"#prenom\")\nconst nomInput = document.querySelector(\"#nom\")\nconst niveauInput = document.querySelector(\"#niveau\")\nconst bioInput = document.querySelector(\"#bio\")\nconst formAdd = document.querySelector(\"form\")\nconst ajouterBtn = document.querySelector(\"#ajouter\")\nconst erreurPrenom = document.querySelector(\".erreurPrenom\")\nconst erreurNom = document.querySelector(\".erreurNom\")\nconst liste = document.querySelector(\"#liste-apprenant\")\nconst photo = document.querySelector(\"#photo\")\nconst imgPreview = document.querySelector(\"#imgPreview\")\nconst containerImgPreview =document.querySelector(\".containerImgPreview\")\nconst saveCollectionBtn =document.querySelector(\"#save\")\n// CONTROLE SAISI DE LA BIO\nconst progressionTextBio = document.querySelector(\".text-progress\")\nconst LIMIT_SAISI = 130\n// VERIFICATION DU NOMBRE DE LETTRES SAISIES DANS LA BIO\nbioInput.addEventListener(\"input\",()=>{\n    let totalLettreSaisi = bioInput.value.length\n    let reste = LIMIT_SAISI - totalLettreSaisi\n    progressionTextBio.textContent =totalLettreSaisi\n    if (totalLettreSaisi <= LIMIT_SAISI) {\n        progressionTextBio.parentNode.style.color =\"black\" \n        bioInput.classList.remove(\"invalid\")\n        ajouterBtn.disabled = false\n    }\n    else if (reste>=0 && reste<=15) {\n        progressionTextBio.parentNode.style.color =\"green\"\n    }\n    else if(reste<0){\n        progressionTextBio.parentNode.style.color =\"#ce0033\"\n        bioInput.classList.add(\"invalid\")\n        ajouterBtn.disabled = true \n\n    }\n\n})\n  photo.addEventListener(\"change\",(e)=>{\n    let src = URL.createObjectURL(e.target.files[0])\n    containerImgPreview.style.display=\"block\"\n    imgPreview.style.display=\"block\"\n    imgPreview.src=src\n  })\n\n//VERIFICATON DES INFORMATIONS SAISIES\nformAdd.addEventListener('submit',(e)=>{\n    e.preventDefault()\n    let prenomSaisi = prenomInput.value\n    let nomSaisi = nomInput.value\n    let niveauChoisi = niveauInput.value\n    let bioSaisi = bioInput.value\n    if (prenomSaisi.trim().length == 0) {\n        prenomInput.classList.add(\"invalid\")\n        erreurPrenom.style.display = \"block\"\n    }\n     if (nomSaisi.trim().length ==0) {\n        nomInput.classList.add(\"invalid\")\n        erreurNom.style.display = \"block\"\n        \n    }\n    if (bioSaisi.trim().length <8) {\n        bioInput.classList.add(\"invalid\")\n        return\n    }\n\n    // CREATION DE L'OBJET APPRENANT\n\n    let newApprenant ={\n        prenom : prenomSaisi,\n        nom : nomSaisi,\n        niveau : niveauChoisi,\n        bio : bioSaisi,\n        photo : imgPreview.src\n    }\n    APPRENANTS.push(newApprenant)\n    console.log(APPRENANTS.length);\n    createCard(newApprenant)\n    // VIDAGE DES input\n    prenomInput.value=\"\"\n    nomInput.value =\"\"\n    bioInput.value =\"\"\n    imgPreview.src =\"\"\n    imgPreview.style.display ='none'\n    containerImgPreview.style.display=\"none\"\n    saveCollectionBtn.classList.remove(\"d-none\")\n\n})\n// FONCTION DE CREATION DE CARTE DES APPRENANTS\nfunction createCard(apprenant) {\nliste.insertAdjacentHTML('afterbegin',`\n<div class=\"card col-11 ps-5\">\n<div class=\"row\">\n  <div class=\"col-4 mt-4\" style=\"width:100px;height:100px;\">\n    <img src=\"${apprenant.photo}\" class=\"avatar rounded-circle\" alt=\"Avatar\">\n  </div>\n  <div class=\"col-8\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">${apprenant.prenom} ${apprenant.nom}</h5>\n      <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n      <p class=\"card-text\"><small class=\"text-muted\">${apprenant.niveau}</small></p>\n    </div>\n  </div>\n</div>\n</div>\n    `) \n}\n// window.addEventListener(\"DOMContentLoaded\",()=>{\n//     APPRENANTS.forEach((apprenant)=>createCard(apprenant))\n// })\n\n\n\n//# sourceURL=webpack://school_app/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;