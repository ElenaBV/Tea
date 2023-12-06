async function init() {
    // Создаем карту
    let map = new ymaps.Map("map", {
      center: [38.576274, 68.779719],
      zoom: 3,
    });
  
    const response = await fetch("/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  
    if (response.status === 200) {
      const result = await response.json()
      console.log(result)
  
      result.forEach((item) => {
        let newPlacemark = new ymaps.Placemark([item.latitude, item.longitude], {
          hintContent: item.teaName,
          balloonContent: item.place, 
        });
  
        newPlacemark.events.add("click", function () {
          window.location.href = `http://localhost:3000/tea/${item.id}`;
        });
  
        map.geoObjects.add(newPlacemark);
      });
    }
  }
  
  ymaps.ready(init);