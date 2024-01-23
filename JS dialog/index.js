const popupBtn = document.getElementById('popup-btn');
const modalBtn = document.getElementById('modal-btn');
const closeBtn = document.getElementById('close-btn');
const dialog = document.querySelector('dialog');

console.log(popupBtn);
console.log(modalBtn);
console.log(closeBtn);
console.log(dialog);


popupBtn.addEventListener('click', () => {
    dialog.show();
});

modalBtn.addEventListener('click', () => {
    dialog.showModal();
});

closeBtn.addEventListener('click', () => {
    dialog.close();
});