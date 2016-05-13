requirejs.config({
    // pathsオプションの設定。"module/name": "path"を指定します。拡張子（.js）は指定しません。
    paths: {
        "jquery": "lib/jquery-1.8.3.min",
        "jquery.bootstrap": "lib/bootstrap.min",
        "mathjs" : "./../../bower_components/mathjs/dist/math",
        "chartjs" : "./../../bower_components/Chart.js/dist/Chart",
        "derivativesjs" : "./derivatives"
    },
    // shimオプションの設定。モジュール間の依存関係を定義します。
    shim: {
        "jquery.bootstrap": {
            // jQueryに依存するのでpathsで設定した"module/name"を指定します。
            deps: ["jquery"]
        }
    }
});

// require(["module/name", ...], function(params){ ... });
require(["jquery","mathjs","chartjs", "derivativesjs", "jquery.bootstrap"], function ($,math,chart,der) {

    //set up the graph
    var ctx=document.getElementById('appgraph'); //get the canvas context

    //start up an exsample graph
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
  });

    debugger;
});
