function everyNth (arr, nth) {
    return arr.filter((e, i) => i % nth === nth - 1);
}

function getHours (arr, active) {
    const timeNow = new Date().getHours();
    const todayHours = 24 - timeNow;
    const frame = active === 0 ? arr.slice(0, todayHours) : arr.slice(todayHours, todayHours + 24);
    let hours;
    if (frame.length <= 8) {
        hours = frame;
    } else {
        let step = Math.ceil(frame.length / 8);
        hours = [frame[0], ...everyNth(frame, step)];
    }
    return hours;
}

export default getHours;