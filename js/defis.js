function affichageDefis() {
    document.getElementById("defis-container").innerHTML = ""
    challenges.forEach(challenge => {
        affichageContainerDefis(challenge)
    })
    addEvents()
}


function affichageContainerDefis(challenge) {
    document.getElementById("defis-container").innerHTML += `
    <div class="col-sm-3" id="defi-carte">
                        <div class="card text-center">
                            ${defiPhoto(challenge.photo, challenge.challengeName)}
                            <div class="card_defi-body">
                                ${defiInfo(challenge.challengeName, challenge.participants, challenge.description)}
                                ${defiButton(challenge.id)}
                            </div>
                        </div>
                    </div>`

}


function defiPhoto(photo, challengeName) {
    return `<img src=${photo} class="defi-img" alt="${challengeName}">`
}

function defiInfo(challengeName, participants, description) {
    return `<div class="defi-titel">
                <h2 class="defi-name">${challengeName}</h2>
            </div>
            <div class="defi-participants">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${participants.length} Participants</li>
                </ul>
            </div>
            <div class="card-description">
                <p class="card-description" style="font-size: small;">${description}</p>
            </div>`
}

function defiButton(id) {
    return `<div class="card-buttons" style="display: flex; justify-content: space-around; gap: 5px;">
                <button type="button" class="action btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#ajouterParticipantModal"  id="ajouterParticipant" data-user-id="${id}">
                    <i class="fa-sharp fa-solid fa-plus"></i></button>
                <button type="button" class="action btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#modifierDefiModal" id="modifierDefi" data-user-id="${id}">
                    <i class="fa-solid fa-retweet"></i></button>
                <button id="delet" type="button" class="action btn btn-outline-danger" data-user-id="${id}">
                    <i class="fa-solid fa-xmark"></i></button>
            </div>`
}
affichageDefis()



// Ajouter un Defi

function ajouterDefi() {
    const form = document.forms["formDAjout"];

    let compteurId = 0;
    form.addEventListener("submit", (e) => {
        compteurId++
        e.preventDefault()
        const participantsId = form.participants.value.split("")
        const defi = {
            id: compteurId,
            challengeName: `${form.Nom.value}`,
            description: `${form.descreption.value}`,
            participants: participantsId,
            photo: "assists/defi-sportif.webp"
        }
        form.reset()
        challenges.push(defi)
        affichageDefis()

    })
}
ajouterDefi()


// Modifier un defi 

function modifierDefi(id) {
    let DefiModifier = challenges.find(defi => defi.id == id)
    const form = document.forms["formModification"]

    form.Nom.value = DefiModifier.challengeName
    form.description.value = DefiModifier.description
    form.participants.value = DefiModifier.participants

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const participantsId1 = form.participants.value.split("")

        DefiModifier.challengeName = form.Nom.value
        DefiModifier.description = form.description.value
        DefiModifier.participants = participantsId1
        affichageDefis()
    })

}

// Supprimer un Defi

function SupprimerDefi (id) {
    let defiSupprimerIndex = challenges.findIndex(defi => defi.id == id)
    challenges.splice(defiSupprimerIndex, 1)
    affichageDefis()
}


// Les evenements

function addEvents() {
    let btnCarte = document.querySelectorAll(".action")

    btnCarte.forEach(oneBtnCarte => {
        oneBtnCarte.addEventListener("click", event => {
            if (event.currentTarget.id == "modifierDefi") modifierDefi(event.currentTarget.dataset.userId)
            if (event.currentTarget.id == "delet") SupprimerDefi(event.currentTarget.dataset.userId)
        })
    })
}

