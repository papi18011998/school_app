// CONFIGURATION API
const API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE4OTQ2NiwiZXhwIjoxOTU1NzY1NDY2fQ.i4DceoJibTd6fEnsdgx8FnbC-qyRI1st6cylAwWVfa0"
// RECCEUIL DES DONNEES UTILISATEURS
const APPRENANTS =[]
const prenomInput = document.querySelector("#prenom")
const nomInput = document.querySelector("#nom")
const niveauInput = document.querySelector("#niveau")
const bioInput = document.querySelector("#bio")
const formAdd = document.querySelector("form")
const ajouterBtn = document.querySelector("#ajouter")
const erreurPrenom = document.querySelector(".erreurPrenom")
const erreurNom = document.querySelector(".erreurNom")
const liste = document.querySelector("#liste-apprenant")
const photo = document.querySelector("#photo")
const imgPreview = document.querySelector("#imgPreview")
const containerImgPreview =document.querySelector(".containerImgPreview")
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
    if (prenomSaisi.trim().length == 0) {
        prenomInput.classList.add("invalid")
        erreurPrenom.style.display = "block"
    }
     if (nomSaisi.trim().length ==0) {
        nomInput.classList.add("invalid")
        erreurNom.style.display = "block"
        
    }
    if (bioSaisi.trim().length <8) {
        bioInput.classList.add("invalid")
        return
    }

    // CREATION DE L'OBJET APPRENANT

    let newApprenant ={
        prenom : prenomSaisi,
        nom : nomSaisi,
        niveau : niveauChoisi,
        bio : bioSaisi,
        photo : imgPreview.src
    }
    APPRENANTS.push(newApprenant)
    console.log(APPRENANTS.length);
    createCard(newApprenant)
    // VIDAGE DES input
    prenomInput.value=""
    nomInput.value =""
    bioInput.value =""
    imgPreview.src =""
    imgPreview.style.display ='none'
    containerImgPreview.style.display="none"
    saveCollectionBtn.classList.remove("d-none")

})
// FONCTION DE CREATION DE CARTE DES APPRENANTS
function createCard(apprenant) {
liste.insertAdjacentHTML('afterbegin',`
<div class="card col-11 ps-5">
<div class="row">
  <div class="col-4 mt-4" style="width:100px;height:100px;">
    <img src="${apprenant.photo}" class="avatar rounded-circle" alt="Avatar">
  </div>
  <div class="col-8">
    <div class="card-body">
      <h5 class="card-title">${apprenant.prenom} ${apprenant.nom}</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">${apprenant.niveau}</small></p>
    </div>
  </div>
</div>
</div>
    `) 
}
// window.addEventListener("DOMContentLoaded",()=>{
//     APPRENANTS.forEach((apprenant)=>createCard(apprenant))
// })

