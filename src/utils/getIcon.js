import weatherIcons from "../assets/icons.json";

function getIcon (code, dt, sunrise, sunset) {
    let icon = weatherIcons[code].icon;
    
    if (dt > sunrise && dt < sunset+2000) {
        icon = 'day-' + icon;
    } else {
        icon = 'night-' + icon;
    }
    
    return `./weather-icons/wi-${icon}.svg`;
}

export default getIcon;
