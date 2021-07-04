window.addEventListener("load", function() {
    load_data();
});

function load_data() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.response);

            var dates = Object.keys(data["A"]) 

            var A = {
                x: dates,
                y: Object.values(data["A"]),
                name: "A",
                line: {color: "#8965E0", width: 4}
            };

            var B = {
                x: dates,
                y: Object.values(data["B"]),
                name: "B",
                line: {color: "#2DCE89", width: 4}
            };

            var plot_data = [A, B];

            var plot_layout = {
                paper_bgcolor:'rgba(0,0,0,0)',
                plot_bgcolor:'rgba(0,0,0,0)',
                yaxis: {automargin: true, gridcolor: "#32325d"},
                xaxis: {automargin: true, showgrid: false},
                showlegend: true,
                font: {color: '#ced4da'},
                margin: {t:0, l:0, r:0, b:0},
                hovermode: "closest",
            };

            var plot_config = {responsive: true, displayModeBar: false};

            Plotly.newPlot(document.getElementById("chart"), plot_data, plot_layout, plot_config);
        }
    };

    xhttp.open("GET", "data");
    xhttp.send();
}