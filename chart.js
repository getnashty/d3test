var chart = circularHeatChart()
  .segmentHeight(10)
  .innerRadius(20);

var data = [];
for(var i=0; i<240; i++) data[i] = i;

d3.select('#chart')
    .selectAll('svg')
    .data([data])
    .enter()
    .append('svg')
    .call(chart);
