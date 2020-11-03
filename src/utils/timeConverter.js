const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
const today = new Date().getDay() - 1;

function getDay (num) {
    let index = num + today;
    index = index < 7 ? index : index - 7;
    return days[index];
}

function getMonth (num) {
    return months[num-1];
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
