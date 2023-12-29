const modalFunc = () => {
  const modal = document.querySelector('.card-modal__overlay');
  const cardBtn = document.querySelector('#card-button');


  const openModal = () => {
    modal.classList.add('open')
  }

  const closeModal = () => {
    modal.classList.remove('open')
  }

  cardBtn.addEventListener('click', () => {
    openModal();
  })

  modal.addEventListener('click', (event) => {

    if (event.target.classList.contains('card-modal__overlay') ||
      event.target.closest('.card-modal__header--close')) {
      closeModal();
    }

  });
};
const restsFunc = () => {
  const container = document.querySelector('#rests-container');

  const restArray = [
    {
      id: 0,
      title: 'Пицца плюс6',
      time: 50,
      raiting: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'pizza.jpg',
    }
  ]

  const loading = () => {
    container.innerHTML = '<p style = "width: 100%; text-align: center; color: red;">Загрузка</p>'
  }
  const renderRests = (array) => {
    container.innerHTML = '';

   array.forEach((card) = () => {
    container.insertAdjacentHTML('beforeend', `
    <div class="products__card">
              <a href="./restor.html" class="products__card-image">
                <img src="./images/Restourant/${card.image}" alt="${card.image}">
              </a>
              <div class="products__card-description">
                <div class="products__card-description-row">
                  <h4 class="products__card-description--item">${card.title} </h4>
                  <div class="products__card-description-bage">
                  ${card.time}
                  </div>
                </div>

                <div class="products__card-description-row">
                  <div class="products__card-description--info">
                    <div class="products__card-description--raiting">
                      <img src="./images/icons/Stars.svg" alt="Star">${card.raiting}
                    </div>
                    <div class="products__card-description--price">
                    ${card.price}
                    </div>
                    <div class="products__card-description--group">
                    ${card.type}
                    </div>
                  </div>
                </div>
              </div>
            </div>
    `)
   })
  }

  if(container){
    loading();

  setTimeout(() => {
    renderRests(restArray);
  }, 2000)
}
  }

modalFunc();
restsFunc();
