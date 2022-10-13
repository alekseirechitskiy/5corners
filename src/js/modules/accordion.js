export default function () {
  document.querySelectorAll('.accordion__item').forEach( item => {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      console.dir(this.children[0]);
      this.classList.toggle('accordion__item--active');
      this.children[0].classList.toggle('accordion__item-title--active');
    })
  })
}