const participantsContainer = document.getElementById("container-participants");

const confirmerParticipant = document.getElementById("confirmer-participant");

const form = document.getElementById("formNouveauParticipantModal");


function ajouterParticipant() {
  let participants = JSON.parse(localStorage.getItem("participants"));

  if (participants == null) {
    participants = [];
  }

  form.addEventListener("submit", (event) => {
    const pseudo = form.pseudo.value;
    const nom = form.nom.value;
    id = new Date().getTime();
    event.preventDefault();
    participants.push({ id: id, pseudo: pseudo, nom: nom });
    localStorage.setItem("participants", JSON.stringify(participants));
    afficherParticipants();
    console.log(participants);
  });
}

function afficherParticipants() {
  participantsContainer.innerHTML = ``;

  let participants = JSON.parse(localStorage.getItem("participants"))

  participants.forEach(participant => {
    let carte = `<div class="col-lg-3" id="${participant.id}">
            <div class="card">
              <img src="images/avatar.png" alt="" class="card-image">
              <div class="card-body">
                <h1 class="card-title">${participant.pseudo}</h1>
                <p class="card-description">${participant.nom}</p>
                <p class="card-description">Défis 2/5</p>
                <button class="btn bg-primary text-white" data-bs-target="#modifierParticipantModal"
                  data-bs-toggle="modal">Modifier</button>
                <a href="" class="btn btn-danger">Supprimer</a>
              </div>
            </div>
          </div>`

    participantsContainer.innerHTML += carte
  })

}

ajouterParticipant();
afficherParticipants();
