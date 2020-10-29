const metrics = [
    {
        from: "celsius",
        to: "fahrenheit",
        function: (value) => ((value * (9/5)) + 32)
    },
    {
        from: "celsius",
        to: "kelvin",
        function: (value) => (value + 273.15)
    },
    {
        from: "fahrenheit",
        to: "celsius",
        function: (value) => ((value - 32) * (5/9))
    },
    {
        from: "fahrenheit",
        to: "kelvin",
        function: (value) => (((value - 32) * (5/9)) + 273.15)
    },
    {
        from: "kelvin",
        to: "celsius",
        function: (value) => (value - 273.15)
    },
    {
        from: "kelvin",
        to: "fahrenheit",
        function: (value) => ((value - 273.15) * (9/5)) + 32
    }
];

function temperatureConverter (value, oldMetric, newMetric) {
    return metrics.filter(metric => metric.from === oldMetric & metric.to === newMetric)[0]?.function(value) | "No such metrics";
}

export default temperatureConverter;