
function showPieChart() {


    var a0 = localStorage.getItem("amounts0");
    var a1 = localStorage.getItem("amounts1");
    var a2 = localStorage.getItem("amounts2");
    var a3 = localStorage.getItem("amounts3");
    var a4 = localStorage.getItem("amounts4");
    var a5 = localStorage.getItem("amounts5");
    var a6 = localStorage.getItem("amounts6");
    var randomScalingFactor = function () {
        return Math.round(Math.random() * 100);
    };
    config = {
        type: 'pie',
        data: {
            datasets: [{
                data: [
                    a0,
                    a1,
                    a2,
                    a3,
                    a4,
                    a5,
                    a6,
                ],
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.orange,
                    window.chartColors.yellow,
                    window.chartColors.green,
                    window.chartColors.blue,
                    window.chartColors.grey,
                    window.chartColors.purple,
                ],
                label: 'Dataset 1'
            }],
            labels: [
                "Food",
                "Transportation",
                "Clothes",
                "Health",
                "Education",
                "Housing",
                "Other"

            ]
        },
        options: {
            responsive: true
        }
    };

        var ctx = document.getElementById("chart-area").getContext("2d");
        window.myPie = new Chart(ctx, config);


    var colorNames = Object.keys(window.chartColors);
    document.getElementById('addDataset').addEventListener('click', function () {
        var newDataset = {
            backgroundColor: [],
            data: [],
            label: 'New dataset ' + config.data.datasets.length,
        };
        for (var index = 0; index < config.data.labels.length; ++index) {
            newDataset.data.push(randomScalingFactor());
            var colorName = colorNames[index % colorNames.length];
            ;
            var newColor = window.chartColors[colorName];
            newDataset.backgroundColor.push(newColor);
        }
        config.data.datasets.push(newDataset);
        window.myPie.update();
    });
    document.getElementById('removeDataset').addEventListener('click', function () {
        config.data.datasets.splice(0, 1);
        window.myPie.update();
    });
}
