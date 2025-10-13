var vg_1 = "map.vg.json";
var vg_2 = "chart.vg.json";
var vg_3 = "plot.vg.json";
var vg_4 = "bar.vg.json";
var vg_5 = "sm.vg.json";
vegaEmbed("#map_container", vg_1).then(function(result) {
  // Access the Vega view instance as result.view if needed
}).catch(console.error);
vegaEmbed("#chart_container", vg_2).then(function(result) {
  // Access the Vega view instance as result.view if needed
}).catch(console.error);
vegaEmbed("#plot_container", vg_3).then(function(result) {
  // Access the Vega view instance as result.view if needed
}).catch(console.error);
vegaEmbed("#bar_container", vg_4).then(function(result) {
  // Access the Vega view instance as result.view if needed
}).catch(console.error);
vegaEmbed("#sm_container", vg_5).then(function(result) {
  // Access the Vega view instance as result.view if needed
}).catch(console.error);