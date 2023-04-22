/**
 * @author Hernan Alvarado<hernanvid123@gmail.com>
 * @since 2022
 * @version 1.0
 * @license MIT
 */
import { fetchData, unionRequest } from './api.js';
import { getDate, getTime, mpsTokmh } from './timezone.js'
const DEFAULT_LOCATION = '#/weather'




const currentLocation = () => {
    navigator.geolocation.getCurrentPosition(successPosition, () => {}, { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 })
}

const  searchedLocation = () => {
    
}


const routes = new Map([
    ['/current-location', currentLocation],
    ['/weather', searchedLocation]
])

/**
 * @param {GeolocationPosition} position
 */
const successPosition = (position) => {
    const { coords: { latitude, longitude } } = position
}
