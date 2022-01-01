import { applyRouting } from "./routing.js"
// CONFIGURATION API
// const API_URL ="https://pmkxkvfhngudlbyvpasf.supabase.co/rest/v1/apprenants"
// const API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE4OTQ2NiwiZXhwIjoxOTU1NzY1NDY2fQ.i4DceoJibTd6fEnsdgx8FnbC-qyRI1st6cylAwWVfa0"
// RECCEUIL DES DONNEES UTILISATEURS
document.addEventListener("DOMContentLoaded",()=>{
  applyRouting(window.location.pathname) 
})


