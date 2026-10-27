// variables

const modal = document.getElementById("exampleModal");

// functions

function structureModal() {
  modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content bg-dark">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-primary">this is title</h1>
                    <button type="button" class="btn-close" data-bs-toggle="modal"></button>
                </div>
                <div class="modal-body">
                    <p class="text-info">Woo-hoo, you're reading this text in a modal!</p>
                </div>
                <div class="modal-footer">
                    
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">close</button>
                    <button type="button" class="btn btn-success">yes</button>
                </div>
            </div>
        </div>`;
}

// execution
structureModal();
