const participantsContainer = document.getElementById("container-participants");

const confirmerParticipant = document.getElementById("confirmer-participant");

const form = document.getElementById("formNouveauParticipantModal")





function afficherLesParticipants(){
    participantsContainer.innerHTML = ``

    participants.forEach(participant => {
        
        let carteParticipant = `<div class="col-lg-3" id="id-card-participant">
                <div class="card">
                <img src="images/avatar.png" alt="" class="card-image">
                <div class="card-body">
                    <h1 class="card-title">${participant.pseudo}</h1>
                    <p class="card-description">${participant.participantName}</p>
                    <p class="card-description">Défis palceholder</p>
                    <button class="btn bg-primary text-white" data-bs-target="#modifierParticipantModal"
                    data-bs-toggle="modal">Modifier</button>
                    <a href="" class="btn btn-danger">Supprimer</a>
                </div>
                </div>
            </div>
            `

    participantsContainer.innerHTML += carteParticipant
});
}

function ajouterParticipant(){
    
form.addEventListener("submit", (event) => {
    event.preventDefault()
    const pseudo = form.pseudo.value
    const nom = form.nom.value

     participants.push({
        id: id,
        participantName: nom,
        pseudo: pseudo,
        performance: []
    })
    localStorage.setItem("participants",JSON.stringify(participants))
    id++
    participants = JSON.parse(localStorage.getItem("participants"))
    afficherLesParticipants()
    
})
}

afficherLesParticipants()
ajouterParticipant()



