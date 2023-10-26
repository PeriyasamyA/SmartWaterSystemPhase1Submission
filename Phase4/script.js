document.addEventListener("DOMContentLoaded", function() {
    // Sample data (replace with your dataset)
    const dailyData = {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [{
            label: "Daily Consumption",
            data: [100, 150, 120, 180, 140, 160, 200],
            fill: false,
            borderColor: "blue"
        }]
    };

    const monthlyData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
            label: "Monthly Consumption",
            data: [3000, 3200, 3100, 3300, 3200, 3100, 3350],
            fill: false,
            borderColor: "green"
        }]
    };

    createLineChart("daily-chart", dailyData);
    createLineChart("monthly-chart", monthlyData);

    function createLineChart(canvasId, data) {
        const ctx = document.getElementById(canvasId).getContext("2d");
        new Chart(ctx, {
            type: "line",
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
});
