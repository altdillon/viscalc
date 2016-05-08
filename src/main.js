//configure require
console.log("loading needed libs into reqire...");

require.config({
  paths: {
    mathjs: '../bower_components/mathjs/dist/math',
    chartjs: '../bower_components/Chartjs/src/chart',
    derivativesjs: './src/derivatives.js'
  }
});

//start the app logic and inut every thing

require(['mathjs','chartjs'],function(math,chart){

});
