const days = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

function getDay (num) {
    let index = num < 7 ? num : num - 7;
    return days[index];
}

function getMonth (num) {
    return months[num];
}

function getDate (miliseconds) {
    return new Date(miliseconds * 1000); 
}

function getTime (miliseconds) {
    const date = new Date(miliseconds * 1000);
    return date.toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
}

export {
    getDay,
    getDate,
    getTime,
    getMonth
};
