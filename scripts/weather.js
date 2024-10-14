class Forcast{
    constructor(){
        this.key = 'DikpxFyCk3v8ndvVQGPhhFTW30vG7swN';
        this.weatherURI = `http://dataservice.accuweather.com/currentconditions/v1/`;
        this.cityURI = `http://dataservice.accuweather.com/locations/v1/cities/search`;
    }
    async cityWeather(city){  
    const cityInfo = await this.getCity(city);
    const weatherInfo = await this.getWeather(cityInfo.Key);
    return { cityInfo, weatherInfo };
    }
    async getCity (city){
        const query = `?apikey=${this.key}&q=${city}`;
        const cityResponse = await fetch(this.cityURI + query);
        const data = await cityResponse.json();
        return data[0];
    }
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`
        const weatherResponse = await fetch(this.weatherURI + query);
        const data = await weatherResponse.json();
        return data[0];
    }
}