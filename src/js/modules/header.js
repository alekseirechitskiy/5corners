export default function () {

  const body = document.querySelector('.body');
  const menuButton = document.querySelector('.header__toggle');
  const menuList = document.querySelector('.menu__list');

  // Открытие меню
  const toggleMenu = () => {
    menuButton.classList.toggle('header__toggle--close');
    menuList.classList.toggle('menu__list--active');
    body.classList.toggle('overflow-hidden');
  };

  menuButton.addEventListener('click', evt => {
      evt.stopPropagation();
      toggleMenu();
    }
  );
}
