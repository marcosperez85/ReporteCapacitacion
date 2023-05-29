function crearGraficoDeTorta(arrayResultados) {
    // Set the data
    // var data = [50, 50];
    let data = arrayResultados;

    // Set the dimensions and radius of the pie chart
    let width = 300;
    let height = 300;
    let radius = Math.min(width, height) / 2;

    // Set the color scale
    let color = d3.scaleOrdinal()
        .range(["#98abc5", "#8a89a6"]);

    // Create the SVG element
    const svg = d3.select("#pieChartContainer")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // Create the arc
    let arc = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    // Create the pie layout
    let pie = d3.pie()
        .sort(null)
        .value(function(d) { return d; });

    // Add the slices to the pie
    let g = svg.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc");

    // Append the path for each slice
    g.append("path")
        .attr("d", arc)
        .style("fill", function(d) { return color(d.data); });

    // Add the text for each slice
    g.append("text")
        .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
        .attr("dy", ".35em")
        .text(function(d) { return d.data; });
}