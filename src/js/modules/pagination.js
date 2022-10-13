export default function () {
  const pageNumbers = document.querySelectorAll('.pagination__link--number');
  const nextPageButton = document.querySelector('.pagination__next');
  const previousPageButton = document.querySelector('.pagination__prev');

  pageNumbers.forEach(item => {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      pageNumbers.forEach(i => {
        i.classList.remove('pagination__link--active');
      })
      this.classList.add('pagination__link--active')
    })
  });

  let nextElement = '';
  nextPageButton.addEventListener('click', () => {
    for (let i = 0; i < pageNumbers.length; i++){
      if (pageNumbers[i].classList.contains('pagination__link--active')) {
        nextElement = pageNumbers[i + 1];
        if (nextElement !== undefined) {
          pageNumbers[i].classList.remove('pagination__link--active')
        } 
      }
    }
    if (nextElement !== undefined) {
      nextElement.classList.add('pagination__link--active')
    }
  })

  let previousNumber = '';
  previousPageButton.addEventListener('click', () => {
    for (let i = 0; i < pageNumbers.length; i++) {
      if (pageNumbers[i].classList.contains('pagination__link--active')) {
        previousNumber = pageNumbers[i - 1];
        if (previousNumber !== undefined) {
          pageNumbers[i].classList.remove('pagination__link--active')
        }
      }
    }
    if (previousNumber !== undefined) {
      previousNumber.classList.add('pagination__link--active')
    }
  })
}