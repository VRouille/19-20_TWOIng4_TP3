
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(document.getElementById("city-input").value);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })

    apiWeather
    .getThreeDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // Boucle for pour les 3 prochains jours
      for (var id = 1; id <= 4; id++) {
        
        // Informations principales
        const main = data.L[id].weather[0].main;
        const description = data.L[id].weather[0].description;
        const temp = data.L[id].main.temp;
        const icon = apiWeather.getHTMLElementFromIcon(data.L[id].weather[0].icon);

        // Modifie 
        document.getElementById(`day${id+1}-forecast-main`).innerHTML = main;
        document.getElementById(`day${id+1}-forecast-more-info`).innerHTML = description;
        document.getElementById(`day${id+1}-icon-weather-container`).innerHTML = icon;
        document.getElementById(`day${id+1}-forecast-temp`).innerHTML = `${temp}°C`;
      }

    })

    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}


