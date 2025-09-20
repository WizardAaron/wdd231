const currentTemp = document.querySelector('#current-temp');
const maxTemp = document.querySelector('#max-temp');
const minTemp = document.querySelector('#min-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currentHumidity = document.querySelector('#humidity');
const currentSunrise = document.querySelector('#sunrise');
const currentSunset = document.querySelector('#sunset');

const day1Date = document.querySelector('#day1-date');
const day1Max = document.querySelector('#day1-max-temp');
const day1Min = document.querySelector('#day1-min-temp');
const day2Name = document.querySelector('#day2-name');
const day2Max = document.querySelector('#day2-max-temp');
const day2Min = document.querySelector('#day2-min-temp');
const day3Name = document.querySelector('#day3-name');
const day3Max = document.querySelector('#day3-max-temp');
const day3Min = document.querySelector('#day3-min-temp');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=32.715738&lon=-117.1610838&appid=778e5ae5ff48ad8441f0512455f51b72&units=imperial';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=32.715738&lon=-117.1610838&units=imperial&appid=778e5ae5ff48ad8441f0512455f51b72';


async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

async function fetchForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const forecastData = await response.json();
      console.log(forecastData); // testing
      displayForecast(forecastData);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function groupByDay(forecastList) {
  const dailyTemps = {};

  forecastList.forEach(item => {
    const date = new Date(item.dt_txt).toLocaleDateString('en-US');
    if (!dailyTemps[date]) dailyTemps[date] = [];
    dailyTemps[date].push(item.main.temp);
  });

  const result = Object.entries(dailyTemps).slice(0, 3).map(([date, temps]) => {
    return {
      date,
      max: Math.max(...temps),
      min: Math.min(...temps)
    };
  });

  return result;
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  maxTemp.innerHTML = `${data.main.temp_max}&deg;F`;
  minTemp.innerHTML = `${data.main.temp_min}&deg;F`;
  currentHumidity.innerHTML = `${data.main.humidity}%`;
  currentSunrise.innerHTML = `${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`;
  currentSunset.innerHTML = `${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}

function displayForecast(data) {
  const forecast = groupByDay(data.list);

  day1Date.textContent = new Date().toLocaleDateString('en-US');
  day1Max.innerHTML = `${forecast[0].max}&deg;F`;
  day1Min.innerHTML = `${forecast[0].min}&deg;F`;

  day2Name.textContent = new Date(Date.now() + 86400000).toLocaleDateString('en-US', { weekday: 'long' });
  day2Max.innerHTML = `${forecast[1].max}&deg;F`;
  day2Min.innerHTML = `${forecast[1].min}&deg;F`;

  day3Name.textContent = new Date(Date.now() + 2 * 86400000).toLocaleDateString('en-US', { weekday: 'long' });
  day3Max.innerHTML = `${forecast[2].max}&deg;F`;
  day3Min.innerHTML = `${forecast[2].min}&deg;F`;
}



apiFetch();
fetchForecast();