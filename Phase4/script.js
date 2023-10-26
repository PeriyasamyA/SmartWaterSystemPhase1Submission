document.addEventListener("DOMContentLoaded", function() {
    // Simulated data, replace with your dataset
    const data = {
        daily: {
            date: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
            consumption: [10, 15, 12, 18, 14, 16, 20]
        },
        weekly: 110
    };

    // Update daily and weekly consumption
    document.getElementById("daily-consumption").innerText = `Total: ${data.daily.consumption[data.daily.consumption.length - 1]} gallons`;
    document.getElementById("weekly-consumption").innerText = `Total: ${data.weekly} gallons`;

    // Create a line chart
    const ctx = document.getElementById("consumption-chart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: data.daily.date,
            datasets: [{
                label: "Daily Consumption",
                data: data.daily.consumption,
                fill: false,
                borderColor: "blue"
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
