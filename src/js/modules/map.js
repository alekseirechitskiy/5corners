import ymaps from 'ymaps';

export default function () {
  ymaps
    .load('https://api-maps.yandex.ru/2.1/?apikey=a58658f9-413d-4e99-b352-c5cf2d2b4fce&lang=ru_RU')
    .then(maps => {
      const map = new maps.Map('map', {
        center: [60.033185, 30.428607],
        zoom: 16,
        controls: []
      });

      const placemark = new maps.Placemark([60.033185, 30.428607], 
        {
        hintContent: 'г. Санкт-Петербург, пр. Просвещения, д. 99, кв. 152',
        balloonContent: `
          <h2>Адрес согласно макету</h2>
          <p>г. Санкт-Петербург, пр. Просвещения, д. 99, кв. 152</p>
        `
        });
      
      map.geoObjects.add(placemark);

      const suggestView = new maps.SuggestView('userAddress');

      //Добавление статичного пейна для кастомной панели управления
      var staticPane = new maps.pane.StaticPane(map, { zIndex: 910, overflow: 'visible' });
      map.panes.append("customPane", staticPane);
      //Добавление менеджера контролов на кастомный пейн
      var manager = new maps.control.Manager(map, [], {
        pane: staticPane
      });
      //высота карты для смещения панели маршрутизации
      var mapHight = map.container.getSize()[1]
      //Добавление контролов на новую панель
      manager.add('searchControl', {
        maxWidth: 505,
        placeholderContent: 'Адрес',
        position: { top: mapHight }
      })
      //Получение ссылки на новый контрол для программной работы после
      var searchPanel = manager.get('searchControl');

      // отображение легенды поля
      console.log('page is loaded');
      setTimeout(() => {
        const elementWithFocusClass = document.querySelector('.ymaps-2-1-79-searchbox-input');
        const neededElement = document.querySelector('.ymaps-2-1-79-searchbox-input__input');
        const legend = document.querySelector('.form__input-legend--address');

        neededElement.addEventListener('focus', () => {
          if (elementWithFocusClass.classList.contains('ymaps-2-1-79-_focused')) {
            legend.style.opacity = '1';
          }
        });
        neededElement.addEventListener('blur', () => {
          legend.style.opacity = '0';
        })
      }, 1500);
    })
    .catch(error => console.error('Failed to load Yandex Maps', error));
};

