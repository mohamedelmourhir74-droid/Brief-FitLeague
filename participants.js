const participants = document.getElementById("container-participants");
const ajouterParticipant = document.getElementById("confirmer-participant");
const form = document.getElementById("formNouveauParticipantModal")

form.addEventListener("submit", (e) => {

    e.preventDefault()

    const username = document.getElementById("username").value
    const name = document.getElementById("name").value
    const prénom = document.getElementById("prénom").value
    
    ajouterCarteParticipant(username,name,prénom)

});

function ajouterCarteParticipant(username,name,prénom){
    participants.innerHTML += `
    <div class="col-lg-3">
            <div class="card">
              <img src="images/avatar.png" alt="" class="card-image">
              <div class="card-body">
                <h1 class="card-title">${username}</h1>
                <p class="card-description">${name} ${prénom}</p>
                <p class="card-description">Défis 2/5</p>
                <a href="" class="btn btn-primary">modifier</a>
                <a href="" class="btn btn-danger">Supprimer</a>
              </div>
            </div>
          </div>`;
}
