import WeatherService from "../../service/weatherService";
import Spinner  from "../spinner/Spinner";
import React, { Component } from "react";
import Skeleton from "../skeleton/Skeleton";
import Error from "../error/Error";
import ButtonSearch from "../buttonSearch/ButtonSearch";
import InputSearch from "../inputSearch/InputSearch";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import './main.scss'

class MainWeather extends Component { 
   
    state = { 
        data : {},
        loading: true,
        error: false,
        select: 'London',
        id: 1,
        focused: false,
        lists : [
            {id: 1, text: 'Prague'},
            {id: 2, text: 'Munich'},
            {id: 3, text: 'Kyiv'}
        ]
    }

    weatherService = new WeatherService();

    componentDidMount() { 
        console.log('mount')
        this.updateWeather()
       
    }   
    
    setFocused = () => {
        this.setState(({focused}) =>  ({
            focused: !focused
        }))
        
    }

    onWeatherLoaded = (weather) => { 
        this.setState({ 
            data: weather,
            loading: false
        })
    }
    onValueChange = (e) => { 
       this.setState({
        [e.target.name] : e.target.value
       })
    }

    onWeatherError = () => {
        this.setState({error : true})
    }

    updateWeather = (select) => { 
        console.log('update')
        this.setState({select: ''})
        this.weatherService 
            .getWeather(select)
            .then(this.onWeatherLoaded)
            .catch(this.onWeatherError)

        
    }
    handleSubmit(e) { 
        e.preventDefault();
    }

    render() { 
        const {data, loading, select, error, id, focused, lists} = this.state
        const spinner = loading ? <Spinner /> : null
        const messageError = error ? <Error text = 'You may have entered a non-existent city, try another'/> : null
        const skeleton =  loading || error || !focused ?  null  : <Skeleton /> ;
        const content = (loading || error || focused  ) ? null : <Viev data = {data}/>
        
        const textBtn = error ? 'Please enter correct city' : 'Search'
        
        return ( 
            <section className="main__section">
                    <div className={'main__section-wrapper'}>
                    {spinner}
                    {skeleton}
                    {content}
                    {messageError}
                    </div>
                <form 
                    onSubmit={this.handleSubmit}
                    className="main__section-wrapper-form"
                    action="">
                    <InputSearch 
                        id = {id}
                        list = 'datalist'
                        placeholder="Enter or select city name"
                        onChange={this.onValueChange}
                        name = 'select'
                        value = {select}
                        type="text" 
                        autoComplete= 'off'
                        onFocus={this.setFocused} 
                        onBlur={this.setFocused} 
                        listdata = {lists}/>
                        
                    <ButtonSearch
                        onClick = {() => {this.updateWeather(select)}}>
                            {textBtn}
                            </ButtonSearch>
                </form>
             
            </section>
        )
    }
    
} 

const Viev = ({data}) => { 

    const { main, weather, wind, name} = data
    const dateNow = new Date()
    let day = dateNow.getDate();
    let dayWeek = dateNow.toLocaleString('en', {weekday: 'long'});
    let month = dateNow.getMonth() + 1;
    let year = dateNow.getFullYear();

        return ( 
            <>
                
                <div className="main__section-animation">
                    <div className="main__section-wrapper-left">
                        <h2 className="main__section-wrapper-left-title" >{weather.main}</h2>
                        <div className="main__section-wrapper-left-descr" >{weather.description}</div>
                        <img className="main__section-wrapper-left-img"src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="" />

                    </div>
                    <div className="main__section-wrapper-right">
                        <div className="main__section-wrapper-city">
                            <h1 className="main__section-wrapper-name">{name}</h1>
                            <div>{day}-{month}-{year}</div>
                            <div>{dayWeek}</div>
                        </div>

                        <div className="main__section-wrapper-temp" >
                            <div className="">
                                {Math.round(main.temp)} °C
                            </div>
                        </div>

                        <div className="main__section-wrapper-wind">
                            <div>
                                Humidity: {main.humidity} %
                            </div>
                            <div>Wind speed: {wind.speed} m/s</div> 
                        </div>

                    </div>
                </div>
            </>
        )
}


export default MainWeather