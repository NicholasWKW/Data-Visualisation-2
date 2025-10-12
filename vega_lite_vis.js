var vg_1 = "map.vg.json";
var vg_2 = "chart.vg.json";
vegaEmbed("#map_container", vg_1).then(function(result) {
  // Access the Vega view instance as result.view if needed
}).catch(console.error);
vegaEmbed("#chart_container", vg_2).then(function(result) {
  // Access the Vega view instance as result.view if needed
}).catch(console.error);