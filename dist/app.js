/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing.js */ \"./src/routing.js\");\n\n// CONFIGURATION API\n// const API_URL =\"https://pmkxkvfhngudlbyvpasf.supabase.co/rest/v1/apprenants\"\n// const API_KEY=\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE4OTQ2NiwiZXhwIjoxOTU1NzY1NDY2fQ.i4DceoJibTd6fEnsdgx8FnbC-qyRI1st6cylAwWVfa0\"\n// RECCEUIL DES DONNEES UTILISATEURS\ndocument.addEventListener(\"DOMContentLoaded\",()=>{\n  (0,_routing_js__WEBPACK_IMPORTED_MODULE_0__.applyRouting)(window.location.pathname) \n})\n\n\n\n\n//# sourceURL=webpack://school_app/./src/app.js?");

/***/ }),

/***/ "./src/routing.js":
/*!************************!*\
  !*** ./src/routing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"applyRouting\": () => (/* binding */ applyRouting)\n/* harmony export */ });\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n\n/**\n * Appelle la fonction correspondante à une URL donnée\n * @param {string} url \n */\n function applyRouting(url){\n    let params;\n\n    // Si l'URL ressemble à /12\n    if (params = url.match(/^\\/\\d+$/)){\n        params = url.substring(1)\n        ;(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.findApprenantById)(params)\n    }else if (params = url.match(/^\\/liste$/)) {\n        (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.findAll)()\n    }else{\n    (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.displayForm)()\n    }\n}\n// export const onClickLink = (e)=>{\n//     e.preventDefault()\n//     const href = e.target.href\n//     window.history.pushState({},'',href)\n//     window.dispatchEvent(new PopStateEvent('popstate'));\n// }\n// window.addEventListener('popstate', (e) => {\n//     console.log(\"Changement d'URL\");\n//     applyRouting(window.location.pathname);\n// });\n\n//# sourceURL=webpack://school_app/./src/routing.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayForm\": () => (/* binding */ displayForm),\n/* harmony export */   \"findAll\": () => (/* binding */ findAll),\n/* harmony export */   \"findApprenantById\": () => (/* binding */ findApprenantById)\n/* harmony export */ });\nconst API_URL =\"https://pmkxkvfhngudlbyvpasf.supabase.co/rest/v1/apprenants\"\nconst API_KEY=\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE4OTQ2NiwiZXhwIjoxOTU1NzY1NDY2fQ.i4DceoJibTd6fEnsdgx8FnbC-qyRI1st6cylAwWVfa0\"\nconst APPRENANTS =[]\nconst LIMIT_SAISI =130\nlet liste =  \"\"\nlet saveCollectionContainer=\"\"\nlet saveBtn=\"\"\nlet imgPreview =\"\"\nlet containerImgPreview =\"\"\nlet bioInput =\"\"\nlet progressionTextBio =\"\"\nlet ajouterBtn = \"\"\n/**\n * Cette fonction permet d'afficher le formulaire d'ajout d'apprenant\n */\nfunction displayForm(){\n    document.querySelector(\"main\").insertAdjacentHTML(\"beforeend\",`\n    <section class=\"col-sm-12 col-md-6 col-lg-6 ps-5 pe-5  pt-3 \"  id=\"sectionForm\">\n    <form>\n     <div class=\"row\">\n           <!--==================================CHAMP PRENOM==================================-->\n           <div class=\"col-sm-12 col-md-6 col-lg-6  mb-5\">\n             <input type=\"text\" id=\"prenom\" class=\"form-control\" placeholder=\"Prenom*\" >\n             <div class=\"erreurPrenom text-danger\">Merci de saisir une information correcte</div>\n           </div>\n           <!--==================================CHAMP NOM==================================-->\n           <div class=\"col-sm-12 col-md-6 col-lg-6 mb-5\">\n             <input type=\"text\" id=\"nom\" class=\"form-control\" placeholder=\"Nom*\" >\n             <div class=\"erreurNom text-danger\">Merci de saisir une information correcte</div>\n           </div>\n     </div>\n     <div class=\"row\">\n       <!--==================================CHAMP POUR LA PHOTO==================================-->\n         <div class=\"col-sm-12 col-md-6 col-lg-6 mb-5\">\n             <label for=\"photo\" class=\"form-label\">Photo</label>\n             <input class=\"form-control\" id=\"photo\" type=\"file\" accept=\"image/*\">\n             <div class=\"containerImgPreview p-3 mt-5\">\n               <img id=\"imgPreview\" class=\"\">\n             </div>\n         </div>\n       <!--==================================CHAMP POUR LE NIVEAU==================================-->\n         <div class=\"col-sm-12 col-md-6 col-lg-6 mb-5\">       \n             <label for=\"photo\" class=\"form-label\">Niveau</label>\n             <select class=\"form-select\" aria-label=\"Default select example\" id=\"niveau\">\n               <option value=\"Débutant\">Débutant</option>\n               <option value=\"Intermédiaire\">Intermédiaire</option>\n               <option value=\"Expert\">Expert</option>\n             </select>\n         </div>\n     </div>\n     <div class=\"row\">\n       <!--==================================CHAMP MAQUETTE==================================-->\n         <div class=\"col-sm-12 col-md-6 col-lg-6 mb-5\">\n           <input type=\"number\" id=\"maquettage\" class=\"form-control\" placeholder=\"Competence en maquettage/10\" >\n           <div class=\"erreurMaquette text-danger\">Merci de saisir un nombre en 0 et 10</div>\n         </div>\n       <!--==================================CHAMP INTERFACE==================================-->\n         <div class=\"col-sm-12 col-md-6 col-lg-6 mb-5\">\n           <input type=\"number\" id=\"interface\" class=\"form-control\" placeholder=\"Competence en creation interface dynamique/10\" >\n           <div class=\"erreurInterface text-danger\">Merci de saisir un nombre en 0 et 10</div>\n         </div>\n     </div>\n     <div class=\"row\">\n       <!--==================================CHAMP BASE DE DONNEES==================================-->\n         <div class=\"col-sm-12 col-md-6 col-lg-6  mb-5\">\n           <input type=\"number\" id=\"bdd\" class=\"form-control\" placeholder=\"Competence en creation de base de données/10\" >\n           <div class=\"erreurBdd text-danger\">Merci de saisir un nombre en 0 et 10</div>\n         </div>\n       <!--==================================CHAMP BACKEND==================================-->\n         <div class=\"col-sm-12 col-md-6 col-lg-6  mb-5\">\n           <input type=\"number\" id=\"backend\" class=\"form-control\" placeholder=\"Competence en backend/10\" >\n           <div class=\"erreurBackend text-danger\">Merci de saisir un nombre en 0 et 10</div>\n         </div>\n     </div>\n     <div class=\"row\">\n       <!--==================================CHAMP BIOGRAPHIE==================================-->\n         <div class=\"form-group mb-2\">\n           <label for=\"bio\">Bio de l'apprenant</label>\n           <textarea class=\"form-control\" id=\"bio\" rows=\"3\"></textarea>\n           <div class=\"text-end\"><span class=\"text-progress\">0</span>/130</div>\n         </div>\n         <!--==================================BOUTTON VALIDER==================================-->\n         <div class=\"text-end\">\n           <input type=\"submit\" class=\"btn btn-success mb-3\" id=\"ajouter\" value=\"Enregistrer\">\n           <a href=\"/liste\" class=\"btn btn-info mb-3\">Liste des apprenant</a>\n         </div>\n     </div>\n    </form>\n  </section>\n  <section class=\"col-sm-12 col-md-6 col-lg-6 ps-5 pe-5\" id=\"liste-apprenant\">\n   <div class=\"text-end mt-5 d-none\" id=\"saveBloc\"><button class=\"btn btn-danger me-5\" id=\"save\">Sauvegarder</button></div>\n  </section>`)\n  document.querySelector(\"form\").addEventListener(\"submit\", onSubmitForm);\n  document.querySelector(\"#photo\").addEventListener(\"change\",onChangeImage)\n\n\n\n  progressionTextBio = document.querySelector(\".text-progress\")\n  saveCollectionContainer =document.querySelector(\"#saveBloc\") \n  ajouterBtn = document.querySelector(\"#ajouter\")   \n  saveBtn=document.querySelector(\"#save\") \n  saveBtn.addEventListener('click',addApprenantInDB)\n  imgPreview = document.querySelector(\"#imgPreview\")\n  containerImgPreview = document.querySelector(\".containerImgPreview\")\n  liste = document.querySelector(\"#liste-apprenant\")\n  bioInput = document.querySelector(\"#bio\")\n  bioInput.addEventListener(\"input\",()=>{\n    controlLength(progressionTextBio,bioInput,ajouterBtn)\n  })\n  \n}\n/**\n * Cette fonction permet de faire un prview de l'image uploadé\n * @param {Event} e \n */\nfunction onChangeImage(e){\n   let src = URL.createObjectURL(e.target.files[0])\n    containerImgPreview.style.display=\"block\"\n    imgPreview.style.display=\"block\"\n    imgPreview.src=src\n}\n/**\n * Permet de controler le nombre de lettre saisi dans la bio\n * @param {HTMLElement} container \n * @param {Input} inputField \n * @param {button} btn \n */\nfunction controlLength(container,inputField,btn){\n    let totalLettreSaisi = inputField.value.length\n    let reste = LIMIT_SAISI - totalLettreSaisi\n    container.textContent =totalLettreSaisi\n    if (totalLettreSaisi <= LIMIT_SAISI) {\n        container.parentNode.style.color =\"black\" \n        inputField.classList.remove(\"invalid\")\n        btn.disabled = false\n    }\n    else if (reste>=0 && reste<=15) {\n        container.parentNode.style.color =\"green\"\n    }\n    else if(reste<0){\n        container.parentNode.style.color =\"#ce0033\"\n        inputField.classList.add(\"invalid\")\n        btn.disabled = true \n\n    }\n}\n/**\n * Cette fonction permet d'ajouter un apprenant das le tableau\n * @param {Event} e \n * @returns \n */\nfunction onSubmitForm(e){\n  e.preventDefault()\n  const prenomInput = document.querySelector(\"#prenom\")\n  const nomInput = document.querySelector(\"#nom\")\n  const niveauInput = document.querySelector(\"#niveau\")\n  const erreurPrenom = document.querySelector(\".erreurPrenom\")\n  const erreurNom = document.querySelector(\".erreurNom\")\n  const erreurMaquettage = document.querySelector(\".erreurMaquette\")\n  const erreurInterface = document.querySelector(\".erreurInterface\")\n  const erreurBackend = document.querySelector(\".erreurBackend\")\n  const erreurBdd = document.querySelector(\".erreurBdd\")\n  const maquettageInput = document.querySelector(\"#maquettage\")\n  const interfaceInput = document.querySelector(\"#interface\")\n  const bddInput = document.querySelector(\"#bdd\")\n  const backendInput = document.querySelector(\"#backend\")\n\n    let prenomSaisi = prenomInput.value\n    let nomSaisi = nomInput.value\n    let niveauChoisi = niveauInput.value\n    let bioSaisi = bioInput.value\n    let valeurMaquette = maquettageInput.value\n    let valeurInterface = interfaceInput.value\n    let valeurBackend =  backendInput.value\n    let valeurBdd = bddInput.value\n    if (prenomSaisi.trim().length == 0) {\n        prenomInput.classList.add(\"invalid\")\n        erreurPrenom.style.display = \"block\"\n        return\n    }\n     if (nomSaisi.trim().length ==0) {\n        nomInput.classList.add(\"invalid\")\n        erreurNom.style.display = \"block\"\n        return\n        \n    }\n    if (bioSaisi.trim().length <8) {\n        bioInput.classList.add(\"invalid\")\n        return\n    }\n    if (isNaN(valeurMaquette) || valeurMaquette < 0 || valeurMaquette >10 || valeurMaquette==\"\") {\n        maquettageInput.classList.add(\"invalid\")\n        erreurMaquettage.style.display =\"block\" \n        return\n    }\n    if (isNaN(valeurInterface) || valeurInterface < 0 || valeurInterface >10 || valeurInterface==\"\") {\n        interfaceInput.classList.add(\"invalid\")\n        erreurInterface.style.display =\"block\" \n        return\n    }\n    if (isNaN(valeurBdd) || valeurBdd < 0 || valeurBdd >10 || valeurBdd==\"\") {\n        bddInput.classList.add(\"invalid\")\n        erreurBdd.style.display =\"block\" \n    }\n    if (isNaN(valeurBackend) || valeurBackend < 0 || valeurBackend >10 || valeurBackend==\"\") {\n        backendInput.classList.add(\"invalid\")\n        erreurBackend.style.display =\"block\"\n        return \n    }\n\n\n    // CREATION DE L'OBJET APPRENANT\n\n    let newApprenant ={\n        index: Date.now(),\n        prenom : prenomSaisi,\n        nom : nomSaisi,\n        niveau : niveauChoisi,\n        bio : bioSaisi,\n        photo : imgPreview.src,\n        maquettage : valeurMaquette,\n        interface : valeurInterface,\n        bdd: valeurBdd,\n        backend: valeurBackend\n    }\n    APPRENANTS.push(newApprenant)\n    UpdatableCardApprenant(newApprenant)\n    saveCollectionContainer.classList.remove(\"d-none\")\n    // RESET INPUTS\n     resetInputs(prenomInput,nomInput,bioInput,bddInput,backendInput,interfaceInput,maquettageInput,imgPreview,containerImgPreview)\n\n}\n/**\n * Cette fonction permet d'afficher un apprenant sur une carte editable\n * @param {ApprenantType} apprenant \n */\nfunction UpdatableCardApprenant(apprenant) {\nlet idUpdate = \"update-\"+apprenant.index\nlet idDelete = \"delete-\"+apprenant.index\nlet card = \"card-\"+apprenant.index\nlet idPrenom = \"prenom\"+apprenant.index\nlet idNom = \"nom\"+apprenant.index\nlet idNiveau = \"niveau\"+apprenant.index\nlet idBio = \"bio\"+apprenant.index\nlet idMaquette = \"maquette\"+apprenant.index\nlet idInterface = \"interface\"+apprenant.index\nlet idBdd = \"bdd\"+apprenant.index\nlet idBackend = \"backend\"+apprenant.index\nlet modifierApprenant = \"modifier\"+apprenant.index\nlet idModifierApprenantForm = \"form\"+apprenant.index\nliste.insertAdjacentHTML('afterbegin',`\n<div class=\"card mb-2\" id=\"${card}\">\n<div class=\"row no-gutters\">\n    <div class=\"col-md-5\">\n        <div class=\"text-end bg-light\">\n          <i class=\"pe-3 bi bi-pen modifierIcon\" id=\"${idUpdate}\" title=\"Modifier\"></i>\n          <i class=\"pe-3 bi bi-trash deleteIcon\" id=\"${idDelete}\" title=\"Supprimer\"></i>\n        </div>\n        <img src=\"${apprenant.photo}\"  class=\"avatar\" alt=\"Avatar\">\n    </div>\n    <div class=\"col-md-7\">\n        <div class=\"card-body\">\n          <form id=\"${idModifierApprenantForm}\">\n            <div class=\"card-title h5 row no-gutters\">\n                <!-- ====================================CHAMP PRENOM==================================== -->\n                <div class=\"col-sm-12 col-md-6 col-lg-6 mb-2\" >\n                  <input type=\"text\" id=\"${idPrenom}\" class=\"form-control\" style=\"border: none;\" value=\"${apprenant.prenom}\" disabled>\n                </div>\n                <!-- ====================================CHAMP NOM==================================== -->\n                <div class=\"col-sm-12 col-md-6 col-lg-6 mb-2\">\n                  <input type=\"text\" id=\"${idNom}\" class=\"form-control\" style=\"border: none;\" value=\"${apprenant.nom}\" disabled>\n                </div>\n                <!-- ====================================CHAMP NIVEAU==================================== -->\n                <div class=\"col-12 mb-2\">\n                  <select class=\"form-select\" aria-label=\"Default select example\" style=\"border: none;\" id=\"${idNiveau}\" disabled>\n                    <option value=\"Débutant\">Débutant</option>\n                    <option value=\"Intermédiaire\">Intermédiaire</option>\n                    <option value=\"Expert\">Expert</option>\n                  </select>\n                </div>\n                <!-- ====================================CHAMP BIO==================================== -->\n                <div class=\"form-group mb-2\">\n                  <textarea class=\"form-control\" id=\"${idBio}\" rows=\"1\" style=\"border: none;\" disabled>${apprenant.bio}</textarea>\n                </div>\n                <!-- ====================================CHAMP MAQUETTE==================================== -->\n                <div class=\"col-sm-12 col-md-6 col-lg-6 mb-2\">\n                  <label for=\"${idMaquette}\">Maquette:</label>\n                  <input type=\"number\" id=\"${idMaquette}\" class=\"form-control\" style=\"border: none;\" value=\"${apprenant.maquettage}\" disabled>\n                </div>\n                <!-- ====================================CHAMP INTERFACE==================================== -->\n                <div class=\"col-sm-12 col-md-6 col-lg-6 mb-2\">\n                  <label for=\"${idInterface}\">Interface:</label>\n                  <input type=\"number\" id=\"${idInterface}\" class=\"form-control\" style=\"border: none;\" value=\"${apprenant.interface}\" disabled>\n                </div>\n                <!-- ====================================CHAMP BDD==================================== -->\n                <div class=\"col-sm-12 col-md-6 col-lg-6 mb-2\">\n                  <label for=\"${idBdd}\">Base de données:</label>\n                  <input type=\"number\" id=\"${idBdd}\" class=\"form-control\" style=\"border: none;\" value=\"${apprenant.bdd}\" disabled>\n                </div>\n                <!-- ====================================CHAMP BACKEND==================================== -->\n                <div class=\"col-sm-12 col-md-6 col-lg-6 mb-2\">\n                  <label for=\"${idBdd}\">Backend:</label>\n                  <input type=\"number\" id=\"${idBackend}\" class=\"form-control \"  style=\"border: none;\" value=\"${apprenant.backend}\" disabled>\n                </div>\n                <!-- ====================================BOUTTON MODIFIER==================================== -->\n                <div class=\"text-end\" id=\"${modifierApprenant}\">\n                  <button id=\"modifier\" class=\"btn\"><i class=\"pe-3 bi bi-pen-fill modifierIcon\"  title=\"Modifier\"></i></button>\n                </div>\n            </div>\n\n          </form>\n        </div>\n    </div>\n</div>\n</div>\n`) \nlet editInputNiveau = document.getElementById(idNiveau) \nconst updateBtn = document.getElementById(idUpdate)\nconst deletBtn = document.getElementById(idDelete)\nconst divCard = document.getElementById(card)\nconst soumissionBtn = document.getElementById(modifierApprenant)\neditInputNiveau.value = apprenant.niveau\nsoumissionBtn.style.display=\"none\"\nupdateBtn.addEventListener(\"click\",()=>{\n    saveCollectionContainer.classList.add(\"d-none\")\n    APPRENANTS.forEach((apprenantItem,i)=>{\n        if (idUpdate.substring(7) == apprenantItem.index) {\n            soumissionBtn.style.display=\"block\"\n            let editInputPrenom = document.getElementById(idPrenom) \n            let editInputNom = document.getElementById(idNom) \n            let editInputBio = document.getElementById(idBio) \n            let editInputMaquette = document.getElementById(idMaquette) \n            let editInputBdd = document.getElementById(idBdd) \n            let editInputInterface = document.getElementById(idInterface) \n            let editInputBackend = document.getElementById(idBackend) \n            let modifierApprenantForm = document.getElementById(idModifierApprenantForm)\n            editInputPrenom.removeAttribute('disabled')\n            editInputNom.removeAttribute('disabled')\n            editInputNiveau.removeAttribute('disabled')\n            editInputBio.removeAttribute('disabled')\n            editInputMaquette.removeAttribute('disabled')\n            editInputInterface.removeAttribute('disabled')\n            editInputBdd.removeAttribute('disabled')\n            editInputBackend.removeAttribute('disabled')\n            editInputPrenom.focus()\n            modifierApprenantForm.addEventListener('submit',(e)=>{\n            e.preventDefault()\n            if (editInputPrenom.value.trim().length == 0) {\n              editInputPrenom.classList.add(\"invalid\")\n              return\n            }\n            if (editInputNom.value.trim().length == 0) {\n              editInputNom.classList.add(\"invalid\")\n              return\n            }\n  \n            if (editInputBio.value.trim().length <8) {\n                editInputBio.classList.add(\"invalid\")\n                return\n            }\n            if (isNaN(editInputMaquette.value) || editInputMaquette.value < 0 ||  editInputMaquette.value >10 || editInputMaquette.value==\"\") {\n                editInputMaquette.classList.add(\"invalid\")\n                return\n            }\n            if (isNaN(editInputInterface.value) || editInputInterface.value < 0 || editInputInterface.value >10 || editInputInterface.value==\"\") {\n              editInputInterface.classList.add(\"invalid\")\n                return\n            }\n            if (isNaN(editInputBdd.value) || editInputBdd.value < 0 || editInputBdd.value >10 || editInputBdd.value==\"\") {\n              editInputBdd.classList.add(\"invalid\")\n            }\n            if (isNaN(editInputBackend.value) || editInputBackend.value < 0 || editInputBackend.value >10 || editInputBackend.value==\"\") {\n              editInputBackend.classList.add(\"invalid\")\n                return \n            }\n            // CREATION DE L'OBJET APPRENANT MODIFIE\n            let updateApprenant = {\n              index: Date.now(),\n              prenom : editInputPrenom.value,\n              nom : editInputNom.value,\n              niveau : editInputNiveau.value,\n              bio : editInputBio.value,\n              photo : imgPreview.src,\n              maquettage : editInputMaquette.value,\n              interface : editInputInterface.value,\n              bdd: editInputBdd.value,\n              backend: editInputBackend.value\n            }\n            // AFFECTATION  DU NOUVEL APPRENANT\n          apprenantItem = updateApprenant\n          APPRENANTS.splice(i,1)\n          APPRENANTS.push(apprenantItem)\n          console.log(APPRENANTS);\n          //  DESACTIVATION CHAMP\n          editInputPrenom.setAttribute('disabled',true)\n          editInputNom.setAttribute('disabled',true)\n          editInputNiveau.setAttribute('disabled',true)\n          editInputBio.setAttribute('disabled',true)\n          editInputMaquette.setAttribute('disabled',true)\n          editInputInterface.setAttribute('disabled',true)\n          editInputBdd.setAttribute('disabled',true)\n          editInputBackend.setAttribute('disabled',true)\n          soumissionBtn.style.display=\"none\"\n          console.log(\"test\");\n          })\n        }\n        \n    })\n    saveCollectionContainer.classList.remove(\"d-none\")\n})\ndeletBtn.addEventListener('click',()=>{\n  APPRENANTS.forEach((apprenantItem,i)=>{\n    if (idDelete.substring(7) == apprenantItem.index){\n      let confirmDelete = window.confirm(\"Etes vous sure de supprimer l'apprenant?\")\n      if (confirmDelete == true) {\n        APPRENANTS.splice(i,1)\n        liste.removeChild(divCard)\n      } else {\n        alert(\"Ok\")\n      }\n    }\n  })\n})\n}\n/**\n * fonction de reset des inputs\n * @param {Input} prenomParam \n * @param {Input} nomParam \n * @param {Input} bioParam \n * @param {Input} bddParam \n * @param {Input} backendParam \n * @param {Input} interfaceParam \n * @param {Input} maquettageParam \n * @param {Input} imgParam \n * @param {Input} imgContainerParam \n */\nfunction resetInputs(prenomParam,nomParam,bioParam,bddParam,backendParam,interfaceParam,maquettageParam,imgParam,imgContainerParam) {\n    prenomParam.value=\"\"\n    nomParam.value =\"\"\n    bioParam.value =\"\"\n    imgParam.src =\"\"\n    bddParam.value =\"\"\n    backendParam.value =\"\"\n    interfaceParam.value =\"\"\n    maquettageParam.value =\"\"\n    imgParam.style.display ='none'\n    imgContainerParam.style.display=\"none\"\n    // Activation du boutton de sauvegarde en base de donnees\n    saveCollectionContainer.classList.remove(\"d-none\")\n}\n/**\n * AJOUT DES DONNES EN BASE\n */\nfunction addApprenantInDB(){\n      APPRENANTS.forEach(apprenant=>{\n        delete apprenant.index\n        fetch(API_URL,{\n            method:\"POST\",\n            headers:{\n                apiKey:API_KEY,\n                \"Content-Type\": \"application/json\",\n                Prefer: \"return=representation\"\n            },\n            body:JSON.stringify(apprenant)\n        })\n        .then((response)=>{\n          window.location.href = \"liste\"\n        })\n    })\n}\n/**\n * Permet d'avoir tous les apprenants\n */\nfunction findAll(){\n  fetch(API_URL,{\n    headers:{\n      apikey:API_KEY,\n      \"Content-type\":\"application/json\"\n    }\n  })\n  .then(response=>response.json())\n  .then((apprenants)=>{\n    apprenants.forEach((apprenant)=>{\n      listApprenantUI(apprenant)\n    })\n  })\n}\n/**\n * Represente un apprenant das le DOM\n * @param {ApprenantType} apprenant \n */\nfunction listApprenantUI(apprenant){\n  let mainContain = document.querySelector(\"main\")\n  mainContain.classList.add(\"d-flex\")\n  mainContain.insertAdjacentHTML('beforeend',`\n  <div class=\"card m-3 col-lg-3 col-md-4 col-sm-12\">\n   <div class=\"row no-gutters\">\n      <div class=\"col-sm-5 ps-0\">\n         <img class=\"card-img\" src=\"../asset/man.jpg\" alt=\"Avatar Apprenant\">\n      </div>\n      <div class=\"col-sm-7\">\n         <div class=\"card-body\">\n            <h5 class=\"card-title\">${apprenant.prenom} ${apprenant.nom}</h5>\n            <p class=\"card-text\">${apprenant.bio}</p>\n            <a href=\"/${apprenant.id}\" id=\"${apprenant.id}\" class=\"btn btn-primary\">Détails</a>\n         </div>\n      </div>\n   </div>\n</div>`)\n\n}\n/**\n * Affiche un apprenanr specifique\n * @param {Integer} id \n */\nfunction findApprenantById(id) {\n  fetch(`${API_URL}?id=eq.${id}`,{\n    headers:{\n      apikey:API_KEY,\n      \"Content-type\":\"application/json\"\n    }\n  })\n  .then(response=>response.json())\n  .then(apprenant=>{\n    detailsOfApprenant(apprenant[0])\n  })\n}\n/**\n * Donne le detais sur un apprenant\n * @param {ApprenantType} apprenant \n */\nfunction detailsOfApprenant(apprenant) {\n  let mainContain = document.querySelector(\"main\")\n  mainContain.classList.add(\"d-flex\")\n  console.log(mainContain);\n  let poucentageMaquette = convertToPercentage(apprenant.maquettage,10)\n  let poucentageInterface = convertToPercentage(apprenant.interface,10)\n  let poucentageBdd = convertToPercentage(apprenant.bdd,10)\n  let poucentageBackend = convertToPercentage(apprenant.backend,10)\n  mainContain.insertAdjacentHTML(\"beforeend\",`\n  <section class=\"col-sm-12 col-md-6 col-lg-6 ps-5 pe-5 pt-3\">\n   <img class=\"card-img\" src=\"../asset/man.jpg\" alt=\"Avatar Apprenant\" height=\"300\" >\n  </section>\n  <section class=\"col-sm-12 col-md-6 col-lg-6 ps-5 pe-5\" id=\"liste-apprenant\">\n  <div class=\"h3\">${apprenant.prenom} ${apprenant.nom}</div>\n  <div class=\"text-muted\">${apprenant.niveau}</div>\n  <div>${apprenant.bio}</div>\n  <label for=\"file\" class=\"mt-3\">Compétence en maquettage: ${poucentageMaquette}%</label>\n  <progress id=\"file\" value=\"${poucentageMaquette}\" max=\"100\" class=\"w-100\"></progress>\n\n  <label for=\"file\" class=\"mt-3\">Compétence en conception d'interface: ${poucentageInterface}%</label>\n  <progress id=\"file\" value=\"${poucentageInterface}\" max=\"100\" class=\"w-100\"></progress>\n\n  <label for=\"file\" class=\"mt-3\">Compétence en mise en place de la partie backend: ${poucentageBackend}%</label>\n  <progress id=\"file\" value=\"${poucentageBackend}\" max=\"100\" class=\"w-100\"></progress>\n\n  <label for=\"file\" class=\"mt-3\">Compétence en Conception de base de données: ${poucentageBdd}%</label>\n  <progress id=\"file\" value=\"${poucentageBdd}\" max=\"100\" class=\"w-100\"></progress>\n\n  <div class=\"d-flex justify-content-between\">\n    <i class=\"pe-3 bi bi-pen modifierIcon\" data-bs-toggle=\"modal\" data-bs-target=\"#mymodal\" title=\"Modifier\"></i>\n    <i class=\"pe-3 bi bi-trash deleteIcon\" id=\"deleteIcon\" title=\"Supprimer\"></i>\n  </div>\n  <!--==================================MODAL==================================-->\n  <div class=\"modal fade\" id=\"mymodal\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header bg-danger\">\n              <h5 class=\"modal-title\">Modifier l'apprenant</h5>\n              <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\"></button>\n          </div>\n          <div class=\"modal-body\">\n              <form>\n                  <div class=\"row\">\n                        <!--==================================CHAMP PRENOM==================================-->\n                        <div class=\"col-sm-12 col-md-6 col-lg-6  mb-5\">\n                          <input type=\"text\" id=\"prenom\" class=\"form-control\" placeholder=\"Prenom*\" value=\"${apprenant.prenom}\">\n                        </div>\n                        <!--==================================CHAMP NOM==================================-->\n                        <div class=\"col-sm-12 col-md-6 col-lg-6 mb-5\">\n                          <input type=\"text\" id=\"nom\" class=\"form-control\" placeholder=\"Nom*\" value=\"${apprenant.nom}\">\n                        </div>\n                  </div>\n                  <div class=\"row\">\n                    <!--==================================CHAMP POUR LE NIVEAU==================================-->\n                      <div class=\"col-sm-12 col-md-12 col-lg-12 mb-5\">       \n                          <label for=\"photo\" class=\"form-label\">Niveau</label>\n                          <select class=\"form-select\" aria-label=\"Default select example\" id=\"niveau\">\n                            <option value=\"Débutant\">Débutant</option>\n                            <option value=\"Intermédiaire\">Intermédiaire</option>\n                            <option value=\"Expert\">Expert</option>\n                          </select>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                    <!--==================================CHAMP MAQUETTE==================================-->\n                      <div class=\"col-sm-12 col-md-6 col-lg-6 mb-5\">\n                        <label for=\"maquettage\" class=\"form-label\">Maquettage</label>\n                        <input type=\"number\" id=\"maquettage\" class=\"form-control\" placeholder=\"Competence en maquettage/10\" value=\"${apprenant.maquettage}\">\n                      </div>\n                    <!--==================================CHAMP INTERFACE==================================-->\n                      <div class=\"col-sm-12 col-md-6 col-lg-6 mb-5\">\n                        <label for=\"interface\" class=\"form-label\">Interface</label>\n                        <input type=\"number\" id=\"interface\" class=\"form-control\" placeholder=\"Competence en creation interface dynamique/10\" value=\"${apprenant.interface}\">\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                    <!--==================================CHAMP BASE DE DONNEES==================================-->\n                      <div class=\"col-sm-12 col-md-6 col-lg-6  mb-5\">\n                        <label for=\"bdd\" class=\"form-label\">Base de données</label>\n                        <input type=\"number\" id=\"bdd\" class=\"form-control\" placeholder=\"Competence en creation de base de données/10\" value=\"${apprenant.bdd}\" >\n                      </div>\n                    <!--==================================CHAMP BACKEND==================================-->\n                      <div class=\"col-sm-12 col-md-6 col-lg-6  mb-5\">\n                      <label for=\"backend\" class=\"form-label\">Backend</label>\n                        <input type=\"number\" id=\"backend\" class=\"form-control\" placeholder=\"Competence en backend/10\" value=\"${apprenant.backend}\">\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                    <!--==================================CHAMP BIOGRAPHIE==================================-->\n                      <div class=\"form-group mb-2\">\n                        <label for=\"bio\">Bio de l'apprenant</label>\n                        <textarea class=\"form-control\" id=\"updateBio\" rows=\"3\">${apprenant.bio}</textarea>\n                        <div class=\"text-end\"><span class=\"text-progress\">0</span>/130</div>\n                      </div>\n                      <!--==================================BOUTTON VALIDER==================================-->\n                      <div class=\"text-end\">\n                        <input type=\"submit\" class=\"btn btn-success\" id=\"updateBtn\" value=\"Enregistrer\">\n                        <button class=\"btn btn-danger\" data-bs-dismiss=\"modal\">Abandonner la modification</button>\n                      </div>\n                  </div>\n                 </form>\n          </div>\n      </div>\n  </div>\n</div>\n  </section>\n  `)\n  document.querySelector(\"form\").addEventListener(\"submit\",()=>{\n    updateInDB(apprenant.id)\n  })\n  document.querySelector(\"#deleteIcon\").addEventListener('click',()=>{\n    deleteInDB(apprenant.id)\n  })\n  let prenom = document.querySelector(\"#prenom\")\n  let nom = document.querySelector(\"#nom\")\n  let updateBio = document.querySelector(\"#updateBio\")\n  let updateProgressionTextBio = document.querySelector(\".text-progress\")\n  let updateBtn = document.querySelector(\"#updateBtn\")\n  let niveau = document.querySelector(\"#niveau\")\n  let maquettage= document.querySelector(\"#maquettage\")\n  let backend= document.querySelector(\"#backend\")\n  let bdd= document.querySelector(\"#bdd\")\n  niveau.value = apprenant.niveau\n  updateBio.addEventListener(\"input\", ()=>{\n    controlLength(updateProgressionTextBio,updateBio,updateBtn)\n  })\n}\n/**\n * Cette fonction permet de modifier un apprenant\n * @param {Integer} id \n */\nfunction updateInDB(id) {\n  event.preventDefault()\n  let valeurInterface = document.querySelector(\"#interface\")\n  let apprenantModifie ={\n    prenom : prenom.value,\n    nom : nom.value,\n    niveau : niveau.value,\n    bio : updateBio.value,\n    maquettage : maquettage.value,\n    interface : valeurInterface.value,\n    backend : backend.value,\n    bdd : bdd.value\n  }\n  fetch(`${API_URL}?id=eq.${id}`,{\n    method:\"PATCH\",\n    headers:{\n      apikey:API_KEY,\n      \"Content-Type\": \"application/json\",\n      Prefer: \"return=representation\"\n    },\n    body:JSON.stringify(apprenantModifie)\n  })\n  .then((response)=>{document.location.href=`${id}`})\n}\n/**\n * Cette fonction permet de supprimer un apprenant\n * @param {Integer} id \n */\nfunction deleteInDB(id) {\n  let confirmDelete = window.confirm(\"Voulez-vous vraiment supprimer cet apprenant?\")\n  if (confirmDelete==true) {\n    fetch(`${API_URL}?id=eq.${id}`,{\n      method:\"DELETE\",\n      headers:{\n        apikey:API_KEY,\n        Prefer: \"return=representation\"\n      },\n    })\n    .then(response=>{document.location.href=\"liste\"})\n  }else{\n    alert(\"Merci d'avoir changé d'avis !!!\")\n  }\n}\n/**\n * Cette fontion permet de convertir une valeur absolues en relative\n * @param {Integer} valeur \n * @param {Integer} total \n * @returns \n */\nfunction convertToPercentage(valeur,total){\n  return (valeur*100)/total\n}\n\n//# sourceURL=webpack://school_app/./src/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;