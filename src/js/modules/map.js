import ymaps from 'ymaps';
export default function () {
  ymaps
    .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
    .then(maps => {
      const map = new maps.Map('map', {
        center: [60.033185, 30.428607],
        zoom: 16,
      },
      {
        // Будет производиться поиск по топонимам и организациям.
        searchControlProvider: 'yandex#search'
        });
      map.controls.add(searchControl);

      const placemark = new maps.Placemark([60.033185, 30.428607], {
        hintContent: 'This is Hint',
        balloonContent: `
          <h2>This is ballon</h2>
          <p>Some text goes here.</p>
        `
      });

      map.geoObjects.add(placemark);

      var suggestView = new maps.SuggestView('#suggest');

      
    })
    .catch(error => console.log('Failed to load Yandex Maps', error));
};

