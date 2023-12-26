const modalFunc = () => {
  const modal = document.querySelector('.card-modal__overlay');
const cardBtn = document.querySelector('#card-button');


 const openModal = () => {
  modal.classList.add('open')
 }

 const closeModal = () => {
  modal.classList.remove('open')
 }

cardBtn.addEventListener( 'click', () => {
 openModal();
})

 modal.addEventListener('click', (event) => {
 
  if(event.target.classList.contains('card-modal__overlay') || 
      event.target.closest('.card-modal__header--close')){
    closeModal();
  }
  
 });
};
modalFunc();
