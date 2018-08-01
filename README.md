# Задание 1 — найди ошибки
-------------------------------------------------------------------------------------------------------------

Код содержит ошибки разной степени критичности. Некоторые из них — стилистические, а другие — даже не позволят вам запустить приложение. Вам нужно найти все ошибки и исправить их.

-------------------------------------------------------------------------------------------------------------

1) В проект добавлен eslint с конфигом airbnb. Исправлены синтаксические ошибки.

2) В index.html скрипты перенесены из body в head (В соответствии с Шаг 1 https://tech.yandex.ru/maps/doc/jsapi/2.1/quick-start/index-docpage/). В index.css задаем размеры для #map - width: 100%; height: 100%; На экране появляется карта без объектов. При этом во вкладке Network (chrome) уже виден успешный запрос к api (http://localhost:9000/api/stations) и данные о станциях получены.

3) В index.js вызывается единственная функция - initMap() из map.js. Идем в доку по ObjectManager (https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ObjectManager-docpage/). В примерах 2 и 3 - 'Добавление массива точечных объектов' видно, что объекты добавляются 2мя строчками: myObjectManager.add(myObjects); map.geoObjects.add(objectManager); 
Добавляем myMap.geoObjects.add(objectManager) после //details и переносим туда же loadList().then((data) => {objectManager.add(data)}). 
На карте появляются объекты, но в неправильном месте.

4) В mappers.js меняем местами obj.long и obj.lat. Теперь все объекты расоложены на карте Мск.
В map.js удаляем objectManager.clusters.options.set('preset', 'islands#greenClusterIcons') за ненадобностью.
Также в ObjectManager-е сделал PieChart-ы чуть красивее.
Удаляем весь popup.js, т.к функция getPopupContent() в popup.js нигде не импортируются в отличие от getDetailsContentLayout() в details.js.

5) При нажатии на значек станции, карта зависает с ошибкой: "Cannot read property 'setPosition' of null". Чтобы понять на какой строке все падает, расставляем console.log()-и в //details map.js и details.js. Проблема со стрелочными функциями build: () => {...} и clear: () => {...} в details.js. Переписываем их build: function build() {...} и clear: function clear() {...}. Теперь попап с информацией о станции появляется, но без графика нагрузки.