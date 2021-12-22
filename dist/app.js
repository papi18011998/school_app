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

eval("// CONFIGURATION API\nconst API_KEY=\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE4OTQ2NiwiZXhwIjoxOTU1NzY1NDY2fQ.i4DceoJibTd6fEnsdgx8FnbC-qyRI1st6cylAwWVfa0\"\n// RECCEUIL DES DONNEES UTILISATEURS\nconst APPRENANTS =[]\ntestApp = {\n    prenom:\"Ramatoulaye\",\n    nom:\"DIOP\",\n    niveau:\"Intermediare\",\n    bio:\"Bonsoir c'est Ramatoulaye DIOP allias KEITA.J'ai 18 ans \"\n}\nAPPRENANTS.push(testApp)\nconst prenomInput = document.querySelector(\"#prenom\")\nconst nomInput = document.querySelector(\"#nom\")\nconst niveauInput = document.querySelector(\"#niveau\")\nconst bioInput = document.querySelector(\"#bio\")\nconst formAdd = document.querySelector(\"form\")\nconst ajouterBtn = document.querySelector(\"#ajouter\")\nconst erreurPrenom = document.querySelector(\".erreurPrenom\")\nconst erreurNom = document.querySelector(\".erreurNom\")\nconst liste = document.querySelector(\"#liste-apprenant\")\n// CONTROLE SAISI DE LA BIO\nconst progressionTextBio = document.querySelector(\".text-progress\")\nconst LIMIT_SAISI = 130\n// VERIFICATION DU NOMBRE DE LETTRES SAISIES DANS LA BIO\nbioInput.addEventListener(\"input\",()=>{\n    let totalLettreSaisi = bioInput.value.length\n    let reste = LIMIT_SAISI - totalLettreSaisi\n    progressionTextBio.textContent =totalLettreSaisi\n    if (totalLettreSaisi <= LIMIT_SAISI) {\n        progressionTextBio.parentNode.style.color =\"black\" \n        bioInput.classList.remove(\"invalid\")\n        ajouterBtn.disabled = false\n    }\n    else if (reste>=0 && reste<=15) {\n        progressionTextBio.parentNode.style.color =\"green\"\n    }\n    else if(reste<0){\n        progressionTextBio.parentNode.style.color =\"#ce0033\"\n        bioInput.classList.add(\"invalid\")\n        ajouterBtn.disabled = true \n\n    }\n\n})\n\n//VERIFICATON DES INFORMATIONS SAISIES\nformAdd.addEventListener('submit',(e)=>{\n    e.preventDefault()\n    let prenomSaisi = prenomInput.value\n    let nomSaisi = nomInput.value\n    let niveauChoisi = niveauInput.value\n    let bioSaisi = bioInput.value\n    if (prenomSaisi.trim().length == 0) {\n        prenomInput.classList.add(\"invalid\")\n        erreurPrenom.style.display = \"block\"\n    }\n     if (nomSaisi.trim().length ==0) {\n        nomInput.classList.add(\"invalid\")\n        erreurNom.style.display = \"block\"\n        \n    }\n    if (bioSaisi.trim().length <8) {\n        bioInput.classList.add(\"invalid\")\n        return\n    }\n    // CREATION DE L'OBJET APPRENANT\n\n    let newApprenant ={\n        prenom : prenomSaisi,\n        nom : nomSaisi,\n        niveau : niveauChoisi,\n        bio : bioSaisi \n    }\n    APPRENANTS.push(newApprenant)\n    console.log(APPRENANTS.length);\n    createCard(newApprenant)\n})\n// FONCTION DE CREATION DE CARTE DES APPRENANTS\nfunction createCard(apprenant) {\nliste.insertAdjacentHTML('beforeend',`\n    <div class=\"card mb-3 col-8\" >\n  <div class=\"row no-gutters\">\n    <div class=\"col-md-4\">\n    <img src=\"../asset/star.svg\" class=\"card-img\" alt=\"...\">\n    </div>\n    <div class=\"col-md-8\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">${apprenant.prenom} ${apprenant.nom}</h5>\n        <p class=\"card-text\">${apprenant.bio} </p>\n        <p class=\"card-text\"><small class=\"text-muted\">${apprenant.niveau} </small></p>\n      </div>\n    </div>\n  </div>\n</div>\n    `) \n}\nwindow.addEventListener(\"DOMContentLoaded\",()=>{\n    APPRENANTS.forEach((apprenant)=>createCard(apprenant))\n})\n\n\n\n//# sourceURL=webpack://school_app/./src/app.js?");

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