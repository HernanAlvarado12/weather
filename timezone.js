/**
 * @author Hernan Alvarado<hernanvid123@gmail.com>
 * @since 2022
 * @version 1.0
 * @license MIT
 * @module timezone
 */

const weekDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']




/**
 * Transforma cualquier zona horaria a nuestra hora local, ya que 
 * normalmente las zonas horarias cambian dependiendo del pais.
 * 
 * @typedef {Object} getDateParams
 * @property {Number} dateUnix tiempo en milisegundos que han ocurrido desde 1 de enero de 1970
 * @property {Number} timezone la cantidad de segundos despues del inicio de año de la zona horaria
 * @param {getDateParams} params
 * @returns {getDateParams}
 */
const getDate = ({ dateUnix, timezone }) => {
    const date = new Date((dateUnix + timezone) * 1000)
    const dayName = weekDayNames[date.getUTCDay() -1]
    const monthName = monthNames[date.getUTCMonth()]
    return `${dayName} ${date.getUTCDate()}, ${monthName}`
}

/**
 * 
 * @param {getDateParams} params
 */
const getTime = ({ dateUnix, timezone }) => {
    const date = new Date((dateUnix + timezone) * 1000)
    const hours = date.getUTCHours()
    return `${hours % 12 || 12} ${hours >= 12? 'PM' : 'AM'}`
}


/**
 * 
 * @param {Number} mps 
 * @returns {Number}
 */
const mpsTokmh = (mps) => {
    return (mps * 3600) / 1000
}


export { getDate, getTime, mpsTokmh }