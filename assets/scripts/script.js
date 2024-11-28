// função para adicionar classe, assim que o listener for ativado
function handleMouseEnter() {
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}--hovered`;
}

// função para remover classe, assim que o listener for ativado
function handleMouseLeave() {
    this.classList.remove('s-card--hovered');
    document.body.id = '';
}

// função para adicionar listener aos cards

function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('s-card');

    for (let i = 0; i < cardElements.length; i++) {
        const card = cardElements[i];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

// adiciona listener aos cards
document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

function selectCarouselItem(selectedButtonElement) {
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.s-cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selectedItem) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
  
    carousel.style.transform = newTransform;

    const activeButtonElement = document.querySelector('.s-controller__button--active');
    activeButtonElement.classList.remove('s-controller__button--active');
    selectedButtonElement.classList.add('s-controller__button--active');
  }