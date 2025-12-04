// const modalOpenBtn = document.querySelector('.open-modal')
// const modal = document.querySelector('.modal')

// modalOpenBtn.addEventListener('click', ()=>{
//     modal.classList.add('open')
// })


// const modalCloseBtn = document.querySelector('.close-modal')

// modalCloseBtn.addEventListener('click', ()=>{
//     modal.classList.remove('open')
// })


const openModalButtons = document.querySelector('[data-modal-action="modal"]')
const closeOpenButtons = document.querySelector('data-modal-action="close-modal"')

const ModalWindows = document.querySelector('data-modal-action="modal"')

openModalButtons.forEach((btn)=> {
    btn.addEventListener('click', (event) =>
    console.log(event.target)
    );
})