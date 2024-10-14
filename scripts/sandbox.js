const inputForm = document.querySelector('form');
const details = document.querySelector('.details');
const card = document.querySelector('.card');
const time = document.querySelector('.time');
const timeIcon = document.querySelector('.icon img');
const forcast = new Forcast();

const updateUI = data =>{
        const {cityInfo, weatherInfo} = data;//destructuring 
    
        //updating the UI with the info from the API
    details.innerHTML = 
    `<div class="text-muted text-upperxace text-center details">
                <h5 class="my-3">${cityInfo.EnglishName}</h5>
                <div class="my-3">${weatherInfo.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weatherInfo.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                </div>
    `; console.log(weatherInfo);
    card.classList.contains('d-none')? card.classList.remove('d-none'): '';
    
    let timeSrc = null;
    weatherInfo.IsDayTime? timeSrc = '/img/day.svg' : timeSrc = '/img/night.svg';
    time.setAttribute ('src', timeSrc);
    timeIcon.setAttribute('src', `/img/icons/${weatherInfo.WeatherIcon}.svg`);

}
//get the city name from the user so as to obtain weather info about the city
const handleSubmit = e => {
    e.preventDefault();
    //get city name from user
    const cityName = inputForm.city.value.trim();
    inputForm.reset();   
    //use city name to obtain weather info
    forcast.cityWeather(cityName)
        .then(data => updateUI(data))
        .catch(err => console.log(err));  

    localStorage.setItem('city', cityName);
    let stored = localStorage.getItem('city');
    console.log(stored);
};
if(localStorage.getItem('city')){
    forcast.cityWeather(localStorage.getItem('city'))
        .then( data => updateUI(data)) 
        .catch(err => console.log(err));
}
inputForm.addEventListener('submit', handleSubmit);