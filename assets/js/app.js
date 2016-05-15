requirejs.config({
    // paths
    paths: {
        "jquery": "lib/jquery-1.8.3.min",
        "jquery.bootstrap": "lib/bootstrap.min",
        "mathjs" : "./../../bower_components/mathjs/dist/math",
        //"chartjs" : "./../../bower_components/Chart.js/dist/Chart",
        "derivativesjs" : "./derivatives",
        "plotly" : "./../../bower_components/plotlyjs/plotly"
    },
    // shim
    shim: {
        "jquery.bootstrap": {
            // jQuery
            deps: ["jquery"]
        }
    }
});

// require(["module/name", ...], function(params){ ... });
require(["jquery","mathjs","plotly", "derivativesjs", "jquery.bootstrap"], function ($,math,chart,der) {

//     //set up the graph
//     var trace1 = {
//   x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
//   y: [8, 7, 6, 5, 4, 3, 2, 1, 0],
//   type: 'scatter'
// };
// var trace2 = {
//   x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
//   y: [0, 1, 2, 3, 4, 5, 6, 7, 8],
//   type: 'scatter'
// };
// var data = [trace1, trace2];
// var layout = {
//   xaxis: {
//     type: 'log',
//     autorange: true
//   },
//   yaxis: {
//     type: 'log',
//     autorange: true
//   }
// };
// chart.plot('myDiv', data, layout);

    $("#start").click(function(){
      addLine();
    });

    function addLine(){
      var equ_text=$("#funct").val();
      var funct=new der.Equation(equ_text,[-10,10],[-10,10]);

      var line={
        x: funct.getTanPoints(),
        y: [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10],
        type: 'scatter'
      };
    }

    //var funct=new der.Equation(equation,[-10,10],[-10,10]);

    //var line={
    //    x: funct.getPoints(),
    //    y: [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10],
    //    type: 'scatter'
    //};


    //debugger;
});
