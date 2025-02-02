const modal = document.querySelector('.modal-overlay');
const modalExit = document.querySelector('.exit');
const modalButton = document.querySelector('.hero-button');

const modalStatuses = {
    open: 'flex',
    close: 'none'
}

modalExit.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display = modalStutes.close;
});

modalButton.addEventListener('click', (event) => {
    event.preventDefault();
    if(modal.style.display === modalStutes.open) {
        modal.style.display = modalStutes.close;
    } else {
        modal.style.display = modalStutes.open;
    }
});

modal.addEventListener('click', (event) => {
    event.preventDefault();
    if(modal.classList.contains('modal-overlay')) {
        modal.style.display = modalStutes.close;
    }
});