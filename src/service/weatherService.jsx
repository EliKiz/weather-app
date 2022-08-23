
class WeatherService { 
    _apiBase = 'https://api.openweathermap.org/data/2.5/weather?q='
    _BulkFileName = "weather_16_011020_0200.json.gz"
    _apiKey = 'cda9512bfea66fa281c436745191bac0'
    _baseCity = 'Berlin'
    _baselanguage = 'en'
    


    getResourse = async (url) => { 
        let res = await fetch(url)

        if(!res.ok) { 
            throw new Error (`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    }
    
    getWeather = async (city = this._baseCity) => { 
        const res = await this.getResourse(`${this._apiBase}${city}&lang=${this._baselanguage}&appid=${this._apiKey}&units=metric`)
        return this._transformData(res)
    }

    _transformData = (res) => { 
        
        return { 
            weather : res.weather[0],
            main: res.main,
            wind : res.wind,
            name: res.name,
            clouds : res.clouds,
        }

    }

}

export default WeatherService