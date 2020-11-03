import weatherIcons from "../assets/icons.json";

function getIcon (code) {
    let icon = weatherIcons[code].icon;
    if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
        icon = 'day-' + icon;
    };
    return `./weather-icons/wi-${icon}.svg`;
}

export default getIcon;
