(function(){
  var chart = circularHeatChart()
    .innerRadius(20)
    .radialLabels(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"])
    .segmentLabels(["Midnight", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am",
    "11am", "Midday", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"]);

var energyData = [ 0.176042, 0.096146, 0.076414, 0.192478, 0.134997, 0.152271 ];

d3.select('#chart')
    .selectAll('svg')
    .data([energyData])
    .enter()
    .append('svg')
    .call(chart);
}());
