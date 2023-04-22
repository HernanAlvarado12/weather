/**
 * @author Hernan Alvarado<hernanvid123@gmail.com>
 * @since 2022
 * @version 1.0
 * @license MIT
 * @module api
 */
const API_KEY = '3c9423532cef8316182799bcdc222ba1'
const URL_ROOTER = 'https://api.openweathermap.org/data/2.5/'


/**
 * @typedef {Object} consumerAPI
 * @property {String} urlRequest
 * @property {RequestInit} init
 * @property {Function} consumer
 * @param {consumerAPI} params
 */
const fetchData = ({ urlRequest, init = {}, consumer }) => {
    fetch(urlRequest, init)
        .then(response => response.json())
        .then(consumer)
}


/**
 * https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
 * forecast?latitud%longitud&units=metric
 * air_pollution?latitud&longitud
 * reverse?latitud&longitud&limit=5
 * 
 * @param {*} params 
 * @returns 
 */
const unionRequest = (params) => {
    return `${URL_ROOTER}/${params}&appid=${API_KEY}`
}

export { fetchData, unionRequest }