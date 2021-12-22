// CONFIGURATION API
const API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE4OTQ2NiwiZXhwIjoxOTU1NzY1NDY2fQ.i4DceoJibTd6fEnsdgx8FnbC-qyRI1st6cylAwWVfa0"
// RECCEUIL DES DONNEES UTILISATEURS
const APPRENANTS =[]
testApp = {
    prenom:"Ramatoulaye",
    nom:"DIOP",
    niveau:"Intermediare",
    bio:"Bonsoir c'est Ramatoulaye DIOP allias KEITA.J'ai 18 ans "
}
APPRENANTS.push(testApp)
const prenomInput = document.querySelector("#prenom")
const nomInput = document.querySelector("#nom")
const niveauInput = document.querySelector("#niveau")
const bioInput = document.querySelector("#bio")
const formAdd = document.querySelector("form")
const ajouterBtn = document.querySelector("#ajouter")
const erreurPrenom = document.querySelector(".erreurPrenom")
const erreurNom = document.querySelector(".erreurNom")
const liste = document.querySelector("#liste-apprenant")
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
        bio : bioSaisi 
    }
    APPRENANTS.push(newApprenant)
    console.log(APPRENANTS.length);
    createCard(newApprenant)
})
// FONCTION DE CREATION DE CARTE DES APPRENANTS
function createCard(apprenant) {
liste.insertAdjacentHTML('beforeend',`
    <div class="card mb-3 col-8" >
  <div class="row no-gutters">
    <div class="col-md-4">
    <img src="../asset/star.svg" class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${apprenant.prenom} ${apprenant.nom}</h5>
        <p class="card-text">${apprenant.bio} </p>
        <p class="card-text"><small class="text-muted">${apprenant.niveau} </small></p>
      </div>
    </div>
  </div>
</div>
    `) 
}
window.addEventListener("DOMContentLoaded",()=>{
    APPRENANTS.forEach((apprenant)=>createCard(apprenant))
})

