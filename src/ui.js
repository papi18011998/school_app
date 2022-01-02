const API_URL ="https://pmkxkvfhngudlbyvpasf.supabase.co/rest/v1/apprenants"
const API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE4OTQ2NiwiZXhwIjoxOTU1NzY1NDY2fQ.i4DceoJibTd6fEnsdgx8FnbC-qyRI1st6cylAwWVfa0"
const APPRENANTS =[]
const LIMIT_SAISI =130
let liste =  ""
let saveCollectionContainer=""
let saveBtn=""
let imgPreview =""
let containerImgPreview =""
let bioInput =""
let progressionTextBio =""
let ajouterBtn = ""
/**
 * Cette fonction permet d'afficher le formulaire d'ajout d'apprenant
 */
export function displayForm(){
    document.querySelector("main").insertAdjacentHTML("beforeend",`
    <section class="col-sm-12 col-md-6 col-lg-6 ps-5 pe-5  pt-3 "  id="sectionForm">
    <form>
     <div class="row">
           <!--==================================CHAMP PRENOM==================================-->
           <div class="col-sm-12 col-md-6 col-lg-6  mb-5">
             <input type="text" id="prenom" class="form-control" placeholder="Prenom*" >
             <div class="erreurPrenom text-danger">Merci de saisir une information correcte</div>
           </div>
           <!--==================================CHAMP NOM==================================-->
           <div class="col-sm-12 col-md-6 col-lg-6 mb-5">
             <input type="text" id="nom" class="form-control" placeholder="Nom*" >
             <div class="erreurNom text-danger">Merci de saisir une information correcte</div>
           </div>
     </div>
     <div class="row">
       <!--==================================CHAMP POUR LA PHOTO==================================-->
         <div class="col-sm-12 col-md-6 col-lg-6 mb-5">
             <label for="photo" class="form-label">Photo</label>
             <input class="form-control" id="photo" type="file" accept="image/*">
             <div class="containerImgPreview p-3 mt-5">
               <img id="imgPreview" class="">
             </div>
         </div>
       <!--==================================CHAMP POUR LE NIVEAU==================================-->
         <div class="col-sm-12 col-md-6 col-lg-6 mb-5">       
             <label for="photo" class="form-label">Niveau</label>
             <select class="form-select" aria-label="Default select example" id="niveau">
               <option value="Débutant">Débutant</option>
               <option value="Intermédiaire">Intermédiaire</option>
               <option value="Expert">Expert</option>
             </select>
         </div>
     </div>
     <div class="row">
       <!--==================================CHAMP MAQUETTE==================================-->
         <div class="col-sm-12 col-md-6 col-lg-6 mb-5">
           <input type="number" id="maquettage" class="form-control" placeholder="Competence en maquettage/10" >
           <div class="erreurMaquette text-danger">Merci de saisir un nombre en 0 et 10</div>
         </div>
       <!--==================================CHAMP INTERFACE==================================-->
         <div class="col-sm-12 col-md-6 col-lg-6 mb-5">
           <input type="number" id="interface" class="form-control" placeholder="Competence en creation interface dynamique/10" >
           <div class="erreurInterface text-danger">Merci de saisir un nombre en 0 et 10</div>
         </div>
     </div>
     <div class="row">
       <!--==================================CHAMP BASE DE DONNEES==================================-->
         <div class="col-sm-12 col-md-6 col-lg-6  mb-5">
           <input type="number" id="bdd" class="form-control" placeholder="Competence en creation de base de données/10" >
           <div class="erreurBdd text-danger">Merci de saisir un nombre en 0 et 10</div>
         </div>
       <!--==================================CHAMP BACKEND==================================-->
         <div class="col-sm-12 col-md-6 col-lg-6  mb-5">
           <input type="number" id="backend" class="form-control" placeholder="Competence en backend/10" >
           <div class="erreurBackend text-danger">Merci de saisir un nombre en 0 et 10</div>
         </div>
     </div>
     <div class="row">
       <!--==================================CHAMP BIOGRAPHIE==================================-->
         <div class="form-group mb-2">
           <label for="bio">Bio de l'apprenant</label>
           <textarea class="form-control" id="bio" rows="3"></textarea>
           <div class="text-end"><span class="text-progress">0</span>/130</div>
         </div>
         <!--==================================BOUTTON VALIDER==================================-->
         <div class="text-end">
           <input type="submit" class="btn btn-success mb-3" id="ajouter" value="Enregistrer">
           <!-- <button id="modifier" class="btn btn-success d-none">Modifier</button> -->
         </div>
     </div>
    </form>
  </section>
  <section class="col-sm-12 col-md-6 col-lg-6 ps-5 pe-5" id="liste-apprenant">
   <div class="text-end mt-5 d-none" id="saveBloc"><button class="btn btn-danger me-5" id="save">Sauvegarder</button></div>
  </section>`)
  document.querySelector("form").addEventListener("submit", onSubmitForm);
  document.querySelector("#photo").addEventListener("change",onChangeImage)



  progressionTextBio = document.querySelector(".text-progress")
  saveCollectionContainer =document.querySelector("#saveBloc") 
  ajouterBtn = document.querySelector("#ajouter")   
  saveBtn=document.querySelector("#save") 
  saveBtn.addEventListener('click',addApprenantInDB)
  imgPreview = document.querySelector("#imgPreview")
  containerImgPreview = document.querySelector(".containerImgPreview")
  liste = document.querySelector("#liste-apprenant")
  bioInput = document.querySelector("#bio")
  bioInput.addEventListener("input",()=>{
    controlLength(progressionTextBio,bioInput,ajouterBtn)
  })
  
}
/**
 * Cette fonction permet de faire un prview de l'image uploadé
 * @param {Event} e 
 */
function onChangeImage(e){
   let src = URL.createObjectURL(e.target.files[0])
    containerImgPreview.style.display="block"
    imgPreview.style.display="block"
    imgPreview.src=src
}
/**
 * Permet de controler le nombre de lettre saisi dans la bio
 * @param {HTMLElement} container 
 * @param {Input} inputField 
 * @param {button} btn 
 */
function controlLength(container,inputField,btn){
    let totalLettreSaisi = inputField.value.length
    let reste = LIMIT_SAISI - totalLettreSaisi
    container.textContent =totalLettreSaisi
    if (totalLettreSaisi <= LIMIT_SAISI) {
        container.parentNode.style.color ="black" 
        inputField.classList.remove("invalid")
        btn.disabled = false
    }
    else if (reste>=0 && reste<=15) {
        container.parentNode.style.color ="green"
    }
    else if(reste<0){
        container.parentNode.style.color ="#ce0033"
        inputField.classList.add("invalid")
        btn.disabled = true 

    }
}
/**
 * Cette fonction permet d'ajouter un apprenant das le tableau
 * @param {Event} e 
 * @returns 
 */
function onSubmitForm(e){
  e.preventDefault()
  const prenomInput = document.querySelector("#prenom")
  const nomInput = document.querySelector("#nom")
  const niveauInput = document.querySelector("#niveau")
  const erreurPrenom = document.querySelector(".erreurPrenom")
  const erreurNom = document.querySelector(".erreurNom")
  const erreurMaquettage = document.querySelector(".erreurMaquette")
  const erreurInterface = document.querySelector(".erreurInterface")
  const erreurBackend = document.querySelector(".erreurBackend")
  const erreurBdd = document.querySelector(".erreurBdd")
  const maquettageInput = document.querySelector("#maquettage")
  const interfaceInput = document.querySelector("#interface")
  const bddInput = document.querySelector("#bdd")
  const backendInput = document.querySelector("#backend")

    let prenomSaisi = prenomInput.value
    let nomSaisi = nomInput.value
    let niveauChoisi = niveauInput.value
    let bioSaisi = bioInput.value
    let valeurMaquette = maquettageInput.value
    let valeurInterface = interfaceInput.value
    let valeurBackend =  backendInput.value
    let valeurBdd = bddInput.value
    if (prenomSaisi.trim().length == 0) {
        prenomInput.classList.add("invalid")
        erreurPrenom.style.display = "block"
        return
    }
     if (nomSaisi.trim().length ==0) {
        nomInput.classList.add("invalid")
        erreurNom.style.display = "block"
        return
        
    }
    if (bioSaisi.trim().length <8) {
        bioInput.classList.add("invalid")
        return
    }
    if (isNaN(valeurMaquette) || valeurMaquette < 0 || valeurMaquette >10 || valeurMaquette=="") {
        valeurMaquette.classList.add("invalid")
        erreurMaquettage.style.display ="block" 
        return
    }
    if (isNaN(valeurInterface) || valeurInterface < 0 || valeurInterface >10 || valeurInterface=="") {
        valeurInterface.classList.add("invalid")
        erreurInterface.style.display ="block" 
        return
    }
    if (isNaN(valeurBdd) || valeurBdd < 0 || valeurBdd >10 || valeurBdd=="") {
        valeurBdd.classList.add("invalid")
        erreurBdd.style.display ="block" 
    }
    if (isNaN(valeurBackend) || valeurBackend < 0 || valeurBackend >10 || valeurBackend=="") {
        valeurBackend.classList.add("invalid")
        erreurBackend.style.display ="block"
        return 
    }


    // CREATION DE L'OBJET APPRENANT

    let newApprenant ={
        index: Date.now(),
        prenom : prenomSaisi,
        nom : nomSaisi,
        niveau : niveauChoisi,
        bio : bioSaisi,
        photo : imgPreview.src,
        maquettage : valeurMaquette,
        interface : valeurInterface,
        bdd: valeurBdd,
        backend: valeurBackend
    }
    APPRENANTS.push(newApprenant)
    UpdatableCardApprenant(newApprenant)
    saveCollectionContainer.classList.remove("d-none")
    // RESET INPUTS
     resetInputs(prenomInput,nomInput,bioInput,bddInput,backendInput,interfaceInput,maquettageInput,imgPreview,containerImgPreview)

}
/**
 * Cette fonction permet d'afficher un apprenant sur une carte editable
 * @param {ApprenantType} apprenant 
 */
function UpdatableCardApprenant(apprenant) {
let idUpdate = "update-"+apprenant.index
let idDelete = "delete-"+apprenant.index
let card = "card-"+apprenant.index
let idPrenom = "prenom"+apprenant.index
let idNom = "nom"+apprenant.index
let idNiveau = "niveau"+apprenant.index
let idBio = "bio"+apprenant.index
let idMaquette = "maquette"+apprenant.index
let idInterface = "interface"+apprenant.index
let idBdd = "bdd"+apprenant.index
let idBackend = "backend"+apprenant.index
let modifierApprenant = "modifier"+apprenant.index
let idModifierApprenantForm = "form"+apprenant.index
liste.insertAdjacentHTML('afterbegin',`
<div class="card mb-2" id="${card}">
<div class="row no-gutters">
    <div class="col-md-5">
        <div class="text-end bg-light">
          <i class="pe-3 bi bi-pen modifierIcon" id="${idUpdate}" title="Modifier"></i>
          <i class="pe-3 bi bi-trash deleteIcon" id="${idDelete}" title="Supprimer"></i>
        </div>
        <img src="${apprenant.photo}"  class="avatar" alt="Avatar">
    </div>
    <div class="col-md-7">
        <div class="card-body">
          <form id="${idModifierApprenantForm}">
            <div class="card-title h5 row no-gutters">
                <!-- ====================================CHAMP PRENOM==================================== -->
                <div class="col-sm-12 col-md-6 col-lg-6 mb-2" >
                  <input type="text" id="${idPrenom}" class="form-control" style="border: none;" value="${apprenant.prenom}" disabled>
                </div>
                <!-- ====================================CHAMP NOM==================================== -->
                <div class="col-sm-12 col-md-6 col-lg-6 mb-2">
                  <input type="text" id="${idNom}" class="form-control" style="border: none;" value="${apprenant.nom}" disabled>
                </div>
                <!-- ====================================CHAMP NIVEAU==================================== -->
                <div class="col-12 mb-2">
                  <select class="form-select" aria-label="Default select example" style="border: none;" id="${idNiveau}" disabled>
                    <option value="Débutant">Débutant</option>
                    <option value="Intermédiaire">Intermédiaire</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>
                <!-- ====================================CHAMP BIO==================================== -->
                <div class="form-group mb-2">
                  <textarea class="form-control" id="${idBio}" rows="1" style="border: none;" disabled>${apprenant.bio}</textarea>
                </div>
                <!-- ====================================CHAMP MAQUETTE==================================== -->
                <div class="col-sm-12 col-md-6 col-lg-6 mb-2">
                  <label for="${idMaquette}">Maquette:</label>
                  <input type="number" id="${idMaquette}" class="form-control" style="border: none;" value="${apprenant.maquettage}" disabled>
                </div>
                <!-- ====================================CHAMP INTERFACE==================================== -->
                <div class="col-sm-12 col-md-6 col-lg-6 mb-2">
                  <label for="${idInterface}">Interface:</label>
                  <input type="number" id="${idInterface}" class="form-control" style="border: none;" value="${apprenant.interface}" disabled>
                </div>
                <!-- ====================================CHAMP BDD==================================== -->
                <div class="col-sm-12 col-md-6 col-lg-6 mb-2">
                  <label for="${idBdd}">Base de données:</label>
                  <input type="number" id="${idBdd}" class="form-control" style="border: none;" value="${apprenant.bdd}" disabled>
                </div>
                <!-- ====================================CHAMP BACKEND==================================== -->
                <div class="col-sm-12 col-md-6 col-lg-6 mb-2">
                  <label for="${idBdd}">Backend:</label>
                  <input type="number" id="${idBackend}" class="form-control "  style="border: none;" value="${apprenant.backend}" disabled>
                </div>
                <!-- ====================================BOUTTON MODIFIER==================================== -->
                <div class="text-end" id="${modifierApprenant}">
                  <button id="modifier" class="btn"><i class="pe-3 bi bi-pen-fill modifierIcon"  title="Modifier"></i></button>
                </div>
            </div>

          </form>
        </div>
    </div>
</div>
</div>
`) 
let editInputNiveau = document.getElementById(idNiveau) 
const updateBtn = document.getElementById(idUpdate)
const deletBtn = document.getElementById(idDelete)
const divCard = document.getElementById(card)
const soumissionBtn = document.getElementById(modifierApprenant)
editInputNiveau.value = apprenant.niveau
soumissionBtn.style.display="none"
updateBtn.addEventListener("click",()=>{
    saveCollectionContainer.classList.add("d-none")
    APPRENANTS.forEach((apprenantItem)=>{
        if (idUpdate.substring(7) == apprenantItem.index) {
            soumissionBtn.style.display="block"
            let editInputPrenom = document.getElementById(idPrenom) 
            let editInputNom = document.getElementById(idNom) 
            let editInputBio = document.getElementById(idBio) 
            let editInputMaquette = document.getElementById(idMaquette) 
            let editInputBdd = document.getElementById(idBdd) 
            let editInputInterface = document.getElementById(idInterface) 
            let editInputBackend = document.getElementById(idBackend) 
            let modifierApprenantForm = document.getElementById(idModifierApprenantForm)
            editInputPrenom.removeAttribute('disabled')
            editInputNom.removeAttribute('disabled')
            editInputNiveau.removeAttribute('disabled')
            editInputBio.removeAttribute('disabled')
            editInputMaquette.removeAttribute('disabled')
            editInputInterface.removeAttribute('disabled')
            editInputBdd.removeAttribute('disabled')
            editInputBackend.removeAttribute('disabled')
            editInputPrenom.focus()
            modifierApprenantForm.addEventListener('submit',(e)=>{
            e.preventDefault()
            if (editInputPrenom.value.trim().length == 0) {
              editInputPrenom.classList.add("invalid")
              return
            }
            if (editInputNom.value.trim().length == 0) {
              editInputNom.classList.add("invalid")
              return
            }
  
            if (editInputBio.value.trim().length <8) {
                editInputBio.classList.add("invalid")
                return
            }
            if (isNaN(editInputMaquette.value) || editInputMaquette.value < 0 ||  editInputMaquette.value >10 || editInputMaquette.value=="") {
                editInputMaquette.classList.add("invalid")
                return
            }
            if (isNaN(editInputInterface.value) || editInputInterface.value < 0 || editInputInterface.value >10 || editInputInterface.value=="") {
              editInputInterface.classList.add("invalid")
                return
            }
            if (isNaN(editInputBdd.value) || editInputBdd.value < 0 || editInputBdd.value >10 || editInputBdd.value=="") {
              editInputBdd.classList.add("invalid")
            }
            if (isNaN(editInputBackend.value) || editInputBackend.value < 0 || editInputBackend.value >10 || editInputBackend.value=="") {
              editInputBackend.classList.add("invalid")
                return 
            }
            // CREATION DE L'OBJET APPRENANT MODIFIE
            let updateApprenant = {
              index: Date.now(),
              prenom : editInputPrenom.value,
              nom : editInputNom.value,
              niveau : editInputNiveau.value,
              bio : editInputBio.value,
              photo : imgPreview.src,
              maquettage : editInputMaquette.value,
              interface : editInputInterface.value,
              bdd: editInputBdd.value,
              backend: editInputBackend.value
            }
            // AFFECTATION  DU NOUVEL APPRENANT
          apprenantItem = updateApprenant
          //  DESACTIVATION CHAMP
          editInputPrenom.setAttribute('disabled',true)
          editInputNom.setAttribute('disabled',true)
          editInputNiveau.setAttribute('disabled',true)
          editInputBio.setAttribute('disabled',true)
          editInputMaquette.setAttribute('disabled',true)
          editInputInterface.setAttribute('disabled',true)
          editInputBdd.setAttribute('disabled',true)
          editInputBackend.setAttribute('disabled',true)
          soumissionBtn.style.display="none"
          })
        }
        
    })
    saveCollectionContainer.classList.remove("d-none")
})
deletBtn.addEventListener('click',()=>{
  APPRENANTS.forEach((apprenantItem,i)=>{
    if (idDelete.substring(7) == apprenantItem.index){
      let confirmDelete = window.confirm("Etes vous sure de supprimer l'apprenant?")
      if (confirmDelete == true) {
        APPRENANTS.splice(i,1)
        liste.removeChild(divCard)
      } else {
        alert("Ok")
      }
    }
  })
})
}
/**
 * fonction de reset des inputs
 * @param {Input} prenomParam 
 * @param {Input} nomParam 
 * @param {Input} bioParam 
 * @param {Input} bddParam 
 * @param {Input} backendParam 
 * @param {Input} interfaceParam 
 * @param {Input} maquettageParam 
 * @param {Input} imgParam 
 * @param {Input} imgContainerParam 
 */
function resetInputs(prenomParam,nomParam,bioParam,bddParam,backendParam,interfaceParam,maquettageParam,imgParam,imgContainerParam) {
    prenomParam.value=""
    nomParam.value =""
    bioParam.value =""
    imgParam.src =""
    bddParam.value =""
    backendParam.value =""
    interfaceParam.value =""
    maquettageParam.value =""
    imgParam.style.display ='none'
    imgContainerParam.style.display="none"
    // Activation du boutton de sauvegarde en base de donnees
    saveCollectionContainer.classList.remove("d-none")
}
/**
 * AJOUT DES DONNES EN BASE
 */
function addApprenantInDB(){
      APPRENANTS.forEach(apprenant=>{
        delete apprenant.index
        fetch(API_URL,{
            method:"POST",
            headers:{
                apiKey:API_KEY,
                "Content-Type": "application/json",
                Prefer: "return=representation"
            },
            body:JSON.stringify(apprenant)
        })
        .then((response)=>{
          window.location.href = "liste"
        })
    })
}
/**
 * Permet d'avoir tous les apprenants
 */
export function findAll(){
  fetch(API_URL,{
    headers:{
      apikey:API_KEY,
      "Content-type":"application/json"
    }
  })
  .then(response=>response.json())
  .then((apprenants)=>{
    apprenants.forEach((apprenant)=>{
      listApprenantUI(apprenant)
    })
  })
}
/**
 * Represente un apprenant das le DOM
 * @param {ApprenantType} apprenant 
 */
function listApprenantUI(apprenant){
  let mainContain = document.querySelector("main")
  mainContain.classList.add("d-flex")
  mainContain.insertAdjacentHTML('beforeend',`
  <div class="card m-3 col-lg-3 col-md-4 col-sm-12">
   <div class="row no-gutters">
      <div class="col-sm-5 ps-0">
         <img class="card-img" src="../asset/man.jpg" alt="Avatar Apprenant">
      </div>
      <div class="col-sm-7">
         <div class="card-body">
            <h5 class="card-title">${apprenant.prenom} ${apprenant.nom}</h5>
            <p class="card-text">${apprenant.bio}</p>
            <a href="/${apprenant.id}" id="${apprenant.id}" class="btn btn-primary">Détails</a>
         </div>
      </div>
   </div>
</div>`)

}
/**
 * Affiche un apprenanr specifique
 * @param {Integer} id 
 */
export function findApprenantById(id) {
  fetch(`${API_URL}?id=eq.${id}`,{
    headers:{
      apikey:API_KEY,
      "Content-type":"application/json"
    }
  })
  .then(response=>response.json())
  .then(apprenant=>{
    detailsOfApprenant(apprenant[0])
  })
}
/**
 * Donne le detais sur un apprenant
 * @param {ApprenantType} apprenant 
 */
function detailsOfApprenant(apprenant) {
  let mainContain = document.querySelector("main")
  mainContain.classList.add("d-flex")
  console.log(mainContain);
  let poucentageMaquette = convertToPercentage(apprenant.maquettage,10)
  let poucentageInterface = convertToPercentage(apprenant.interface,10)
  let poucentageBdd = convertToPercentage(apprenant.bdd,10)
  let poucentageBackend = convertToPercentage(apprenant.backend,10)
  mainContain.insertAdjacentHTML("beforeend",`
  <section class="col-sm-12 col-md-6 col-lg-6 ps-5 pe-5 pt-3">
   <img class="card-img" src="../asset/man.jpg" alt="Avatar Apprenant" height="300" >
  </section>
  <section class="col-sm-12 col-md-6 col-lg-6 ps-5 pe-5" id="liste-apprenant">
  <div class="h3">${apprenant.prenom} ${apprenant.nom}</div>
  <div>${apprenant.bio}</div>
  <label for="file" class="mt-3">Compétence en maquettage: ${poucentageMaquette}%</label>
  <progress id="file" value="${poucentageMaquette}" max="100" class="w-100"></progress>

  <label for="file" class="mt-3">Compétence en conception d'interface: ${poucentageInterface}%</label>
  <progress id="file" value="${poucentageInterface}" max="100" class="w-100"></progress>

  <label for="file" class="mt-3">Compétence en mise en place de la partie backend: ${poucentageBackend}%</label>
  <progress id="file" value="${poucentageBackend}" max="100" class="w-100"></progress>

  <label for="file" class="mt-3">Compétence en Conception de base de données: ${poucentageBdd}%</label>
  <progress id="file" value="${poucentageBdd}" max="100" class="w-100"></progress>

  <div class="d-flex justify-content-between">
    <i class="pe-3 bi bi-pen modifierIcon" data-bs-toggle="modal" data-bs-target="#mymodal" title="Modifier"></i>
    <i class="pe-3 bi bi-trash deleteIcon" id="deleteIcon" title="Supprimer"></i>
  </div>
  <!--==================================MODAL==================================-->
  <div class="modal fade" id="mymodal">
  <div class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header bg-danger">
              <h5 class="modal-title">Modifier l'apprenant</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
              <form>
                  <div class="row">
                        <!--==================================CHAMP PRENOM==================================-->
                        <div class="col-sm-12 col-md-6 col-lg-6  mb-5">
                          <input type="text" id="prenom" class="form-control" placeholder="Prenom*" value="${apprenant.prenom}">
                        </div>
                        <!--==================================CHAMP NOM==================================-->
                        <div class="col-sm-12 col-md-6 col-lg-6 mb-5">
                          <input type="text" id="nom" class="form-control" placeholder="Nom*" value="${apprenant.nom}">
                        </div>
                  </div>
                  <div class="row">
                    <!--==================================CHAMP POUR LE NIVEAU==================================-->
                      <div class="col-sm-12 col-md-12 col-lg-12 mb-5">       
                          <label for="photo" class="form-label">Niveau</label>
                          <select class="form-select" aria-label="Default select example" id="niveau">
                            <option value="Débutant">Débutant</option>
                            <option value="Intermédiaire">Intermédiaire</option>
                            <option value="Expert">Expert</option>
                          </select>
                      </div>
                  </div>
                  <div class="row">
                    <!--==================================CHAMP MAQUETTE==================================-->
                      <div class="col-sm-12 col-md-6 col-lg-6 mb-5">
                        <label for="maquettage" class="form-label">Maquettage</label>
                        <input type="number" id="maquettage" class="form-control" placeholder="Competence en maquettage/10" value="${apprenant.maquettage}">
                      </div>
                    <!--==================================CHAMP INTERFACE==================================-->
                      <div class="col-sm-12 col-md-6 col-lg-6 mb-5">
                        <label for="interface" class="form-label">Interface</label>
                        <input type="number" id="interface" class="form-control" placeholder="Competence en creation interface dynamique/10" value="${apprenant.interface}">
                      </div>
                  </div>
                  <div class="row">
                    <!--==================================CHAMP BASE DE DONNEES==================================-->
                      <div class="col-sm-12 col-md-6 col-lg-6  mb-5">
                        <label for="bdd" class="form-label">Base de données</label>
                        <input type="number" id="bdd" class="form-control" placeholder="Competence en creation de base de données/10" value="${apprenant.bdd}" >
                      </div>
                    <!--==================================CHAMP BACKEND==================================-->
                      <div class="col-sm-12 col-md-6 col-lg-6  mb-5">
                      <label for="backend" class="form-label">Backend</label>
                        <input type="number" id="backend" class="form-control" placeholder="Competence en backend/10" value="${apprenant.backend}">
                      </div>
                  </div>
                  <div class="row">
                    <!--==================================CHAMP BIOGRAPHIE==================================-->
                      <div class="form-group mb-2">
                        <label for="bio">Bio de l'apprenant</label>
                        <textarea class="form-control" id="updateBio" rows="3">${apprenant.bio}</textarea>
                        <div class="text-end"><span class="text-progress">0</span>/130</div>
                      </div>
                      <!--==================================BOUTTON VALIDER==================================-->
                      <div class="text-end">
                        <input type="submit" class="btn btn-success" id="updateBtn" value="Enregistrer">
                        <button class="btn btn-danger" data-bs-dismiss="modal">Abandonner la modification</button>
                      </div>
                  </div>
                 </form>
          </div>
      </div>
  </div>
</div>
  </section>
  `)
  document.querySelector("form").addEventListener("submit",()=>{
    updateInDB(apprenant.id)
  })
  document.querySelector("#deleteIcon").addEventListener('click',()=>{
    deleteInDB(apprenant.id)
  })
  let prenom = document.querySelector("#prenom")
  let nom = document.querySelector("#nom")
  let updateBio = document.querySelector("#updateBio")
  let updateProgressionTextBio = document.querySelector(".text-progress")
  let updateBtn = document.querySelector("#updateBtn")
  let niveau = document.querySelector("#niveau")
  let maquettage= document.querySelector("#maquettage")
  let backend= document.querySelector("#backend")
  let bdd= document.querySelector("#bdd")
  niveau.value = apprenant.niveau
  updateBio.addEventListener("input", ()=>{
    controlLength(updateProgressionTextBio,updateBio,updateBtn)
  })
}
/**
 * Cette fonction permet de modifier un apprenant
 * @param {Integer} id 
 */
function updateInDB(id) {
  event.preventDefault()
  let valeurInterface = document.querySelector("#interface")
  let apprenantModifie ={
    prenom : prenom.value,
    nom : nom.value,
    niveau : niveau.value,
    bio : updateBio.value,
    maquettage : maquettage.value,
    interface : valeurInterface.value,
    backend : backend.value,
    bdd : bdd.value
  }
  fetch(`${API_URL}?id=eq.${id}`,{
    method:"PATCH",
    headers:{
      apikey:API_KEY,
      "Content-Type": "application/json",
      Prefer: "return=representation"
    },
    body:JSON.stringify(apprenantModifie)
  })
  .then((response)=>{document.location.href=`${id}`})
}
/**
 * Cette fonction permet de supprimer un apprenant
 * @param {Integer} id 
 */
function deleteInDB(id) {
  let confirmDelete = window.confirm("Voulez-vous vraiment supprimer cet apprenant?")
  if (confirmDelete==true) {
    fetch(`${API_URL}?id=eq.${id}`,{
      method:"DELETE",
      headers:{
        apikey:API_KEY,
        Prefer: "return=representation"
      },
    })
    .then(response=>{document.location.href="liste"})
  }else{
    alert("Merci d'avoir changé d'avis !!!")
  }
}
/**
 * Cette fontion permet de convertir une valeur absolues en relative
 * @param {Integer} valeur 
 * @param {Integer} total 
 * @returns 
 */
function convertToPercentage(valeur,total){
  return (valeur*100)/total
}