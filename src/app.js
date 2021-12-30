import { applyRouting } from "./routing.js"
import * as ui from "./ui.js"
// CONFIGURATION API
// const API_URL ="https://pmkxkvfhngudlbyvpasf.supabase.co/rest/v1/apprenants"
// const API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE4OTQ2NiwiZXhwIjoxOTU1NzY1NDY2fQ.i4DceoJibTd6fEnsdgx8FnbC-qyRI1st6cylAwWVfa0"
// RECCEUIL DES DONNEES UTILISATEURS
document.addEventListener("DOMContentLoaded",()=>{
  applyRouting(window.location.pathname) 
  // const APPRENANTS =[]
  // const prenomInput = document.querySelector("#prenom")
  // const nomInput = document.querySelector("#nom")
  // const niveauInput = document.querySelector("#niveau")
  // const bioInput = document.querySelector("#bio")
  // const formAdd = document.querySelector("form")
  // const ajouterBtn = document.querySelector("#ajouter")
  // const modifierBtn = document.querySelector("#modifier")
  // const erreurPrenom = document.querySelector(".erreurPrenom")
  // const erreurNom = document.querySelector(".erreurNom")
  // const erreurMaquettage = document.querySelector(".erreurMaquette")
  // const erreurInterface = document.querySelector(".erreurInterface")
  // const erreurBackend = document.querySelector(".erreurBackend")
  // const erreurBdd = document.querySelector(".erreurBdd")
  // const liste = document.querySelector("#liste-apprenant")
  // const photo = document.querySelector("#photo")
  // const imgPreview = document.querySelector("#imgPreview")
  // const containerImgPreview = document.querySelector(".containerImgPreview")
  // const maquettageInput = document.querySelector("#maquettage")
  // const interfaceInput = document.querySelector("#interface")
  // const bddInput = document.querySelector("#bdd")
  // const backendInput = document.querySelector("#backend")
  // const saveCollectionContainer =document.querySelector("#saveBloc")    
  // const saveBtn=document.querySelector("#save")    
  // console.log(formAdd);

})
// CONTROLE SAISI DE LA BIO
// const progressionTextBio = document.querySelector(".text-progress")
// const LIMIT_SAISI = 130
// applyRouting(window.location.pathname)
// // VERIFICATION DU NOMBRE DE LETTRES SAISIES DANS LA BIO
// bioInput.addEventListener("input",()=>{
//     let totalLettreSaisi = bioInput.value.length
//     let reste = LIMIT_SAISI - totalLettreSaisi
//     progressionTextBio.textContent =totalLettreSaisi
//     if (totalLettreSaisi <= LIMIT_SAISI) {
//         progressionTextBio.parentNode.style.color ="black" 
//         bioInput.classList.remove("invalid")
//         ajouterBtn.disabled = false
//     }
//     else if (reste>=0 && reste<=15) {
//         progressionTextBio.parentNode.style.color ="green"
//     }
//     else if(reste<0){
//         progressionTextBio.parentNode.style.color ="#ce0033"
//         bioInput.classList.add("invalid")
//         ajouterBtn.disabled = true 

//     }

// })
//   photo.addEventListener("change",(e)=>{
//     let src = URL.createObjectURL(e.target.files[0])
//     containerImgPreview.style.display="block"
//     imgPreview.style.display="block"
//     imgPreview.src=src
//   })

// //VERIFICATON DES INFORMATIONS SAISIES
// formAdd.addEventListener('submit',(e)=>{
    // e.preventDefault()
    // let prenomSaisi = prenomInput.value
    // let nomSaisi = nomInput.value
    // let niveauChoisi = niveauInput.value
    // let bioSaisi = bioInput.value
    // let valeurMaquette = maquettageInput.value
    // let valeurInterface = interfaceInput.value
    // let valeurBackend =  backendInput.value
    // let valeurBdd = bddInput.value
    // if (prenomSaisi.trim().length == 0) {
    //     prenomInput.classList.add("invalid")
    //     erreurPrenom.style.display = "block"
    //     return
    // }
    //  if (nomSaisi.trim().length ==0) {
    //     nomInput.classList.add("invalid")
    //     erreurNom.style.display = "block"
    //     return
        
    // }
    // if (bioSaisi.trim().length <8) {
    //     bioInput.classList.add("invalid")
    //     return
    // }
    // if (isNaN(valeurMaquette) || valeurMaquette < 0 || valeurMaquette >10 || valeurMaquette=="") {
    //     valeurMaquette.classList.add("invalid")
    //     erreurMaquettage.style.display ="block" 
    //     return
    // }
    // if (isNaN(valeurInterface) || valeurInterface < 0 || valeurInterface >10 || valeurInterface=="") {
    //     valeurInterface.classList.add("invalid")
    //     erreurInterface.style.display ="block" 
    //     return
    // }
    // if (isNaN(valeurBdd) || valeurBdd < 0 || valeurBdd >10 || valeurBdd=="") {
    //     valeurBdd.classList.add("invalid")
    //     erreurBdd.style.display ="block" 
    // }
    // if (isNaN(valeurBackend) || valeurBackend < 0 || valeurBackend >10 || valeurBackend=="") {
    //     valeurBackend.classList.add("invalid")
    //     erreurBackend.style.display ="block"
    //     return 
    // }


    // // CREATION DE L'OBJET APPRENANT

    // let newApprenant ={
    //     index: Date.now(),
    //     prenom : prenomSaisi,
    //     nom : nomSaisi,
    //     niveau : niveauChoisi,
    //     bio : bioSaisi,
    //     photo : imgPreview.src,
    //     maquettage : valeurMaquette,
    //     interface : valeurInterface,
    //     bdd: valeurBdd,
    //     backend: valeurBackend
    // }
    // APPRENANTS.push(newApprenant)
    // createCard(newApprenant)
    // saveCollectionContainer.classList.remove("d-none")
    // RESET INPUTS
    // resetInputs()

// })
// // FONCTION DE VERFICATION DES DONNEES
// function checkInputs() {
    
// }
// FONCTION DE CREATION DE CARTE DES APPRENANTS
// function createCard(apprenant) {
// let idUpdate = "update-"+apprenant.index
// let idDelete = "delete-"+apprenant.index
// let card = "card-"+apprenant.index
// let idPrenom = "prenom"+apprenant.index
// let idNom = "nom"+apprenant.index
// let idNiveau = "niveau"+apprenant.index
// let idBio = "bio"+apprenant.index
// let idMaquette = "maquette"+apprenant.index
// let idInterface = "interface"+apprenant.index
// let idBdd = "bdd"+apprenant.index
// let idBackend = "backend"+apprenant.index
// let modifierApprenant = "modifier"+apprenant.index
// let idModifierApprenantForm = "form"+apprenant.index
// liste.insertAdjacentHTML('afterbegin',`
// <div class="card mb-2" id="${card}">
// <div class="row no-gutters">
//     <div class="col-md-5">
//         <div class="text-end bg-light">
//           <i class="pe-3 bi bi-pen modifierIcon" id="${idUpdate}" title="Modifier"></i>
//           <i class="pe-3 bi bi-trash deleteIcon" id="${idDelete}" title="Supprimer"></i>
//         </div>
//         <img src="${apprenant.photo}"  class="avatar" alt="Avatar">
//     </div>
//     <div class="col-md-7">
//         <div class="card-body">
//           <form id="${idModifierApprenantForm}">
//             <div class="card-title h5 row no-gutters">
//                 <!-- ====================================CHAMP PRENOM==================================== -->
//                 <div class="col-sm-12 col-md-6 col-lg-6 mb-2" >
//                   <input type="text" id="${idPrenom}" class="form-control" style="border: none;" value="${apprenant.prenom}" disabled>
//                 </div>
//                 <!-- ====================================CHAMP NOM==================================== -->
//                 <div class="col-sm-12 col-md-6 col-lg-6 mb-2">
//                   <input type="text" id="${idNom}" class="form-control" style="border: none;" value="${apprenant.nom}" disabled>
//                 </div>
//                 <!-- ====================================CHAMP NIVEAU==================================== -->
//                 <div class="col-12 mb-2">
//                   <select class="form-select" aria-label="Default select example" style="border: none;" id="${idNiveau}" disabled>
//                     <option value="Débutant">Débutant</option>
//                     <option value="Intermédiaire">Intermédiaire</option>
//                     <option value="Expert">Expert</option>
//                   </select>
//                 </div>
//                 <!-- ====================================CHAMP BIO==================================== -->
//                 <div class="form-group mb-2">
//                   <textarea class="form-control" id="${idBio}" rows="1" style="border: none;" disabled>${apprenant.bio}</textarea>
//                 </div>
//                 <!-- ====================================CHAMP MAQUETTE==================================== -->
//                 <div class="col-sm-12 col-md-6 col-lg-6 mb-2">
//                   <label for="${idMaquette}">Maquette:</label>
//                   <input type="number" id="${idMaquette}" class="form-control" style="border: none;" value="${apprenant.maquettage}" disabled>
//                 </div>
//                 <!-- ====================================CHAMP INTERFACE==================================== -->
//                 <div class="col-sm-12 col-md-6 col-lg-6 mb-2">
//                   <label for="${idInterface}">Interface:</label>
//                   <input type="number" id="${idInterface}" class="form-control" style="border: none;" value="${apprenant.interface}" disabled>
//                 </div>
//                 <!-- ====================================CHAMP BDD==================================== -->
//                 <div class="col-sm-12 col-md-6 col-lg-6 mb-2">
//                   <label for="${idBdd}">Base de données:</label>
//                   <input type="number" id="${idBdd}" class="form-control" style="border: none;" value="${apprenant.bdd}" disabled>
//                 </div>
//                 <!-- ====================================CHAMP BACKEND==================================== -->
//                 <div class="col-sm-12 col-md-6 col-lg-6 mb-2">
//                   <label for="${idBdd}">Backend:</label>
//                   <input type="number" id="${idBackend}" class="form-control "  style="border: none;" value="${apprenant.backend}" disabled>
//                 </div>
//                 <!-- ====================================BOUTTON MODIFIER==================================== -->
//                 <div class="text-end" id="${modifierApprenant}">
//                   <button id="modifier" class="btn"><i class="pe-3 bi bi-pen-fill modifierIcon"  title="Modifier"></i></button>
//                 </div>
//             </div>

//           </form>
//         </div>
//     </div>
// </div>
// </div>
// `) 
// let editInputNiveau = document.getElementById(idNiveau) 
// const updateBtn = document.getElementById(idUpdate)
// const deletBtn = document.getElementById(idDelete)
// const divCard = document.getElementById(card)
// const soumissionBtn = document.getElementById(modifierApprenant)
// editInputNiveau.value = apprenant.niveau
// soumissionBtn.style.display="none"
// updateBtn.addEventListener("click",()=>{
//     saveCollectionContainer.classList.add("d-none")
//     APPRENANTS.forEach((apprenantItem)=>{
//         if (idUpdate.substring(7) == apprenantItem.index) {
//             soumissionBtn.style.display="block"
//             let editInputPrenom = document.getElementById(idPrenom) 
//             let editInputNom = document.getElementById(idNom) 
//             let editInputBio = document.getElementById(idBio) 
//             let editInputMaquette = document.getElementById(idMaquette) 
//             let editInputBdd = document.getElementById(idBdd) 
//             let editInputInterface = document.getElementById(idInterface) 
//             let editInputBackend = document.getElementById(idBackend) 
//             let modifierApprenantForm = document.getElementById(idModifierApprenantForm)
//             editInputPrenom.removeAttribute('disabled')
//             editInputNom.removeAttribute('disabled')
//             editInputNiveau.removeAttribute('disabled')
//             editInputBio.removeAttribute('disabled')
//             editInputMaquette.removeAttribute('disabled')
//             editInputInterface.removeAttribute('disabled')
//             editInputBdd.removeAttribute('disabled')
//             editInputBackend.removeAttribute('disabled')
//             editInputPrenom.focus()
//             modifierApprenantForm.addEventListener('submit',(e)=>{
//             e.preventDefault()
//             if (editInputPrenom.value.trim().length == 0) {
//               editInputPrenom.classList.add("invalid")
//               return
//             }
//             if (editInputNom.value.trim().length == 0) {
//               editInputNom.classList.add("invalid")
//               return
//             }
  
//             if (editInputBio.value.trim().length <8) {
//                 editInputBio.classList.add("invalid")
//                 return
//             }
//             if (isNaN(editInputMaquette.value) || editInputMaquette.value < 0 ||  editInputMaquette.value >10 || editInputMaquette.value=="") {
//                 editInputMaquette.classList.add("invalid")
//                 return
//             }
//             if (isNaN(editInputInterface.value) || editInputInterface.value < 0 || editInputInterface.value >10 || editInputInterface.value=="") {
//               editInputInterface.classList.add("invalid")
//                 return
//             }
//             if (isNaN(editInputBdd.value) || editInputBdd.value < 0 || editInputBdd.value >10 || editInputBdd.value=="") {
//               editInputBdd.classList.add("invalid")
//             }
//             if (isNaN(editInputBackend.value) || editInputBackend.value < 0 || editInputBackend.value >10 || editInputBackend.value=="") {
//               editInputBackend.classList.add("invalid")
//                 return 
//             }
//             // CREATION DE L'OBJET APPRENANT MODIFIE
//             let updateApprenant = {
//               index: Date.now(),
//               prenom : editInputPrenom.value,
//               nom : editInputNom.value,
//               niveau : editInputNiveau.value,
//               bio : editInputBio.value,
//               photo : imgPreview.src,
//               maquettage : editInputMaquette.value,
//               interface : editInputInterface.value,
//               bdd: editInputBdd.value,
//               backend: editInputBackend.value
//             }
//             // AFFECTATION  DU NOUVEL APPRENANT
//           apprenantItem = updateApprenant
//           //  DESACTIVATION CHAMP
//           editInputPrenom.setAttribute('disabled',true)
//           editInputNom.setAttribute('disabled',true)
//           editInputNiveau.setAttribute('disabled',true)
//           editInputBio.setAttribute('disabled',true)
//           editInputMaquette.setAttribute('disabled',true)
//           editInputInterface.setAttribute('disabled',true)
//           editInputBdd.setAttribute('disabled',true)
//           editInputBackend.setAttribute('disabled',true)
//           soumissionBtn.style.display="none"
//           })
//         }
        
//     })
//     saveCollectionContainer.classList.remove("d-none")
// })
// deletBtn.addEventListener('click',()=>{
//   APPRENANTS.forEach((apprenantItem,i)=>{
//     if (idDelete.substring(7) == apprenantItem.index){
//       let confirmDelete = window.confirm("Etes vous sure de supprimer l'apprenant?")
//       if (confirmDelete == true) {
//         APPRENANTS.splice(i,1)
//         liste.removeChild(divCard)
//       } else {
//         alert("Ok")
//       }
//     }
//   })
// })
// }

// // AJOUT DES DONNES EN BASE
// saveBtn.addEventListener("click",()=>{
//     APPRENANTS.forEach(apprenant=>{
//         delete apprenant.index
//         fetch(API_URL,{
//             method:"POST",
//             headers:{
//                 apiKey:API_KEY,
//                 "Content-Type": "application/json"
//             },
//             body:JSON.stringify(apprenant)
//         })
//     })
//     // RESET 
//     APPRENANTS.splice(0,APPRENANTS.length)
//     liste.innerHTML= ""
//     alert("Toutes les données ont été envoyé.\n Merci")
//     saveCollectionContainer.classList.add("d-none")
// })
// function resetInputs() {
//     prenomInput.value=""
//     nomInput.value =""
//     bioInput.value =""
//     imgPreview.src =""
//     bddInput.value =""
//     backendInput.value =""
//     interfaceInput.value =""
//     maquettageInput.value =""
//     imgPreview.style.display ='none'
//     containerImgPreview.style.display="none"
//     // Activation du boutton de sauvegarde en base de donnees
//     saveCollectionContainer.classList.remove("d-none")
// }

