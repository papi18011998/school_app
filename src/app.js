// CONFIGURATION API
const API_URL ="https://pmkxkvfhngudlbyvpasf.supabase.co/rest/v1/apprenants"
const API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE4OTQ2NiwiZXhwIjoxOTU1NzY1NDY2fQ.i4DceoJibTd6fEnsdgx8FnbC-qyRI1st6cylAwWVfa0"
// RECCEUIL DES DONNEES UTILISATEURS
const APPRENANTS =[]
const prenomInput = document.querySelector("#prenom")
const nomInput = document.querySelector("#nom")
const niveauInput = document.querySelector("#niveau")
const bioInput = document.querySelector("#bio")
const formAdd = document.querySelector("form")
const ajouterBtn = document.querySelector("#ajouter")
const modifierBtn = document.querySelector("#modifier")
const erreurPrenom = document.querySelector(".erreurPrenom")
const erreurNom = document.querySelector(".erreurNom")
const erreurMaquettage = document.querySelector(".erreurMaquette")
const erreurInterface = document.querySelector(".erreurInterface")
const erreurBackend = document.querySelector(".erreurBackend")
const erreurBdd = document.querySelector(".erreurBdd")
const liste = document.querySelector("#liste-apprenant")
const photo = document.querySelector("#photo")
const imgPreview = document.querySelector("#imgPreview")
const containerImgPreview = document.querySelector(".containerImgPreview")
const maquettageInput = document.querySelector("#maquettage")
const interfaceInput = document.querySelector("#interface")
const bddInput = document.querySelector("#bdd")
const backendInput = document.querySelector("#backend")
const saveCollectionBtn =document.querySelector("#save")    
// CONTROLE SAISI DE LA BIO
const progressionTextBio = document.querySelector(".text-progress")
const LIMIT_SAISI = 130
// VERIFICATION DU NOMBRE DE LETTRES SAISIES DANS LA BIO
bioInput.addEventListener("input",()=>{
    let totalLettreSaisi = bioInput.value.length
    let reste = LIMIT_SAISI - totalLettreSaisi
    progressionTextBio.textContent =totalLettreSaisi
    if (totalLettreSaisi <= LIMIT_SAISI) {
        progressionTextBio.parentNode.style.color ="black" 
        bioInput.classList.remove("invalid")
        ajouterBtn.disabled = false
    }
    else if (reste>=0 && reste<=15) {
        progressionTextBio.parentNode.style.color ="green"
    }
    else if(reste<0){
        progressionTextBio.parentNode.style.color ="#ce0033"
        bioInput.classList.add("invalid")
        ajouterBtn.disabled = true 

    }

})
  photo.addEventListener("change",(e)=>{
    let src = URL.createObjectURL(e.target.files[0])
    containerImgPreview.style.display="block"
    imgPreview.style.display="block"
    imgPreview.src=src
  })

//VERIFICATON DES INFORMATIONS SAISIES
formAdd.addEventListener('submit',(e)=>{
    e.preventDefault()
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
        erreurMaquettage.style.display ="block" 
        return
    }
    if (isNaN(valeurInterface) || valeurInterface < 0 || valeurInterface >10 || valeurInterface=="") {
        erreurInterface.style.display ="block" 
        return
    }
    if (isNaN(valeurBdd) || valeurBdd < 0 || valeurBdd >10 || valeurBdd=="") {
        erreurBdd.style.display ="block" 
    }
    if (isNaN(valeurBackend) || valeurBackend < 0 || valeurBackend >10 || valeurBackend=="") {
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
    createCard(newApprenant)
    // RESET INPUTS
    // resetInputs()

})
// FONCTION DE CREATION DE CARTE DES APPRENANTS
function createCard(apprenant) {
let idUpdate = "update-"+apprenant.index
let idDelete = "delete-"+apprenant.index
console.log(idUpdate,idDelete);
liste.insertAdjacentHTML('afterbegin',`
<div class="card col-11 ps-5 shadow">
  <div class="row">
    <div class="text-end">
      <i class="pe-3 bi bi-pen modifierIcon" id="${idUpdate}" title="Modifier"></i>
      <i class="pe-3 bi bi-trash deleteIcon" id="${idDelete}" title="Supprimer"></i>
    </div>
        <div class="col-4 mt-4" style="width:100px;height:100px;">
          <img src="asset/star.svg" class="avatar rounded-circle" alt="Avatar">
        </div>
        <div class="col-8">
            <div class="card-body">
              <h5 class="card-title ">${apprenant.prenom} ${apprenant.nom}</h5>
              <p class="card-text">${apprenant.bio}</p>
              <p class="card-text"><small class="text-muted">${apprenant.niveau}</small></p>
            </div>
        </div>

  </div>
  </div>
`) 
const updateBtn = document.getElementById(idUpdate)
const deletBtn = document.getElementById(idDelete)
updateBtn.addEventListener("click",()=>{
    APPRENANTS.forEach((apprenantItem)=>{
        if (idUpdate.substring(7) == apprenant.index) {
            prenomInput.value =apprenant.prenom
            nomInput.value = apprenant.nom
            niveauInput.value =apprenant.niveau
            bioInput.value =apprenant.bio
            maquettageInput.value = apprenant.maquettage
            interfaceInput.value = apprenant.interface
            backendInput.value = apprenant.backend
            bddInput.value = apprenant.bdd
            ajouterBtn.classList.add("d-none")
            modifierBtn.classList.remove("d-none")           
        }
    })
})
}
// AJOUT DES DONNES EN BASE
saveCollectionBtn.addEventListener("click",()=>{
    APPRENANTS.forEach(apprenant=>{
        fetch(API_URL,{
            method:"POST",
            headers:{
                apiKey:API_KEY,
                "Content-Type": "application/json"
            },
            body:JSON.stringify(apprenant)
        })
    })
})
function resetInputs() {
    prenomInput.value=""
    nomInput.value =""
    bioInput.value =""
    imgPreview.src =""
    bddInput.value =""
    backendInput.value =""
    interfaceInput.value =""
    maquettageInput.value =""
    imgPreview.style.display ='none'
    containerImgPreview.style.display="none"
    // Activation du boutton de sauvegarde en base de donnees
    saveCollectionBtn.classList.remove("d-none")
}

