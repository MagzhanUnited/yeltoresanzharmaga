const data = {
            week1: [100, 150, 120, 90, 200],
            week2: [120, 130, 140, 110, 180],
            week3: [130, 160, 110, 130, 210],
            week4: [110, 140, 170, 120, 190],
            week5: [150, 170, 130, 140, 220],
        };

        const weeks = ['July', 'August', 'September', 'October', 'November'];

        // Create a function to draw the line chart
        function createChart(data, labels) {
            const ctx = document.getElementById('website-monitoring-chart').getContext('2d');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Website Visits',
                            data: data,
                            borderColor: 'blue',
                            borderWidth: 2,
                            fill: false,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            grid: {
                                display: false,
                            },
                        },
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        }

        createChart(data.week1, weeks); // You can change the week here
