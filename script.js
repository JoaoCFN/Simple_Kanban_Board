// PARA O CÓDIGO FUNCIONAR, O ATRIBUTO DRAGGABLE DEVE ESTÁ ATIVO NOS CARDS DA DROPZONE
const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");
const inputJob = document.querySelector("#job");
const addButton = document.querySelector("#add");
const initialDropzone = document.querySelector(".initial");
const board = document.querySelectorAll(".board");

// ADD JOB
addButton.addEventListener("click", () => {
    // CRIAÇÃO DOS CARD
    const divCard = document.createElement("div");
    divCard.setAttribute("class", "card");
    divCard.setAttribute("draggable", "true");

    const divStatus = document.createElement("div");
    divStatus.setAttribute("class", "status");

    const divContent = document.createElement("div");
    divContent.setAttribute("class", "content");
    divContent.innerHTML = inputJob.value;

    divCard.appendChild(divStatus);
    divCard.appendChild(divContent);

    // ADICIONANDO O CARD NA DROPZONE
    initialDropzone.appendChild(divCard);

    // CAPTURA O CARD CRIADO
    const cards = document.querySelectorAll(".card");

    // TODA VEZ QUE UM CARD FOR CRIADO ELE DARÁ O POSSIBILIDADE DE DRAG AND DROP
    // ADICIONA OS EVENTOS DE DRAG AND DROP PARA CADA CARD CRIADO
    cards.forEach(card => {
        // COMEÇOU A SER ARRASTADO
        card.addEventListener("dragstart", dragstart);
        // ESTÁ SENDO ARRASTADO
        card.addEventListener("drag", drag);
        // PAROU DE SER ARRASTADO
        card.addEventListener("dragend", dragend);
    })

    function dragstart(){
        dropzones.forEach(dropzone => dropzone.classList.add("highlight"))
        this.classList.add("is-dragging");
    }
    function drag(){
        // console.log("card drag");
    }
    function dragend(){
        dropzones.forEach(dropzone => dropzone.classList.remove("highlight"))
        this.classList.remove("is-dragging");
        /* 
            RETIRANDO CLASSE OVER QUANDO PARAR SE SER ARRASTADO 
            NECESSÁRIO PARA CORRIGIR BUG NO FIREFOX
        */
        dropzones.forEach(dropzone => {
            dropzone.classList.remove("over");
        })
    }

    // LIMPA INPUT
    inputJob.value = "";
});

// DROPZONES
dropzones.forEach(dropzone => {
    // ENTROU NA ZONA
    dropzone.addEventListener("dragenter", dragenter);
    // SOBRE A ZONA
    dropzone.addEventListener("dragover", dragover);
    // SAIU DA ZONA
    dropzone.addEventListener("dragleave",dragleave);
    // DROPOU NA ZONA
    dropzone.addEventListener("drop", drop);
})

function dragenter(){
    // console.log("drag enter");
}

function dragover(){
    this.classList.add("over");
    // PEGA O CARD QUE ESTÁ SENDO ARRASTADO
    const cardBeingDragged = document.querySelector(".is-dragging");

    // E ADICIONA NA DROPZONE QUE ELE ESTIVER SOBRE
    // OBS: SE USAR TARGET NA HORA DE ADICIONAR NA ZONA, ELE DÁ ERRO NO APPENDCHILD
    this.appendChild(cardBeingDragged);
}

function dragleave(){
    this.classList.remove("over");
}

function drop(){
    this.classList.remove("over");
}



