// PARA O CÓDIGO FUNCIONAR, O ATRIBUTO DRAGGABLE DEVE ESTÁ ATIVO NOS CARDS DA DROPZONE

const cards = document.querySelectorAll(".card");

const dropzones = document.querySelectorAll(".dropzone");

cards.forEach(card => {
    // COMEÇOU A SER ARRASTADO
    card.addEventListener("dragstart", dragstart);
    // ESTÁ SENDO ARRASTADO
    card.addEventListener("drag", drag);
    // PAROU DE SER ARRASTADO
    card.addEventListener("dragend", dragend);
})

function dragstart({ target }){
    dropzones.forEach(dropzone => dropzone.classList.add("highlight"))
    target.classList.add("is-dragging");
}
function drag(){
    // console.log("card drag");
}
function dragend({ target }){
    dropzones.forEach(dropzone => dropzone.classList.remove("highlight"))
    target.classList.remove("is-dragging");
}

dropzones.forEach(dropzone => {
    // ENTROU NA ZONA
    dropzone.addEventListener("dragenter", dragenter);
    // SOBRE A ZONA
    dropzone.addEventListener("dragover", dragover);
    // SAIU DA ZONA
    dropzone.addEventListener("dragleave",dragleave);
    // DROPOU NA ZONA
    dropzone.addEventListener("drop",
    drop);
})

function dragenter(){
    // console.log("drag enter");
}

function dragover({ target }){
    target.classList.add("over");

    // PEGA O CARD QUE ESTÁ SENDO ARRASTADO
    const cardBeingDragged = document.querySelector(".is-dragging");

    // E ADICIONA NA DROPZONE QUE ELE ESTIVER SOBRE

    // OBS: SE USAR TARGET NA HORA DE ADICIONAR NA ZONA, ELE DÁ ERRO NO APPENDCHILD
    this.appendChild(cardBeingDragged);
}

function dragleave({ target }){
    target.classList.remove("over");
}

function drop({ target }){
    target.classList.remove("over");
}



