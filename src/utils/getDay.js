const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const today = new Date().getDay() - 1;

function getDay(num) {
    let index = num + today;
    index = index < 7 ? index : index - 7;
    return days[index];
}

export default getDay;
